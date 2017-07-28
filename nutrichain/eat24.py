import os
import requests

def _common_request_headers():
    eat_key = os.environ.get('EAT_KEY', None)
    assert eat_key is not None
    return {
        'Authorization': 'Bearer {}'.format(eat_key),
        'X-OAuth-Version': '2',
    }


def get_all_restaurants(search_location, search_zipcode):
    res = requests.get(
        "https://eat24hours.com/eapi/restaurants/search/v1?openNow=true&offset=0&limit=800&address={search_location}&zipcode={search_zipcode}&orderBy=default&serviceTypes=delivery&hasCoupons=false&noDeliveryFee=false&includeTestRestaurants=false".format(
            search_location=search_location,
            search_zipcode=search_zipcode,
        ),
        headers=_common_request_headers(),
    )
    return res.json()


def get_all_menus(restaurant_id):
    res = requests.get(
        'https://eat24hours.com/eapi/restaurant/{}/menus'.format(restaurant_id),
        headers=_common_request_headers(),
    )
    return res.json()


def get_menu(restaurant_id, menu_id):
    res = requests.get(
        'https://eat24hours.com/eapi/restaurant/{}/menu/{}'.format(restaurant_id, menu_id),
        headers=_common_request_headers(),
    )
    return res.json()
