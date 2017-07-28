install: requirements.txt
	pip install -r requirements.txt

run:
	FLASK_DEBUG=1 FLASK_APP=app.py flask run
