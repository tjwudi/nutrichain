from flask import Flask
from flask import request
from flask import jsonify
from flask import render_template

app = Flask(__name__)

from nutrichain import eat24

@app.route('/sanity_check/eat24/get_all_menus')
def sanity_check_eat24_get_all_menus():
    return jsonify(eat24.get_all_menus(
        request.args.get('restaurant_id'),
    ))


@app.route('/sanity_check/eat24/get_menu')
def sanity_check_eat24_get_menu():
    return jsonify(eat24.get_menu(
        request.args.get('restaurant_id'),
        request.args.get('menu_id'),
    ))


@app.route('/')
def home():
    env = {
        'app_display_name': 'Yelp Nutrichain',
    }
    return render_template('home.html', **env)
