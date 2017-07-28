install: requirements.txt
	pip install -r requirements.txt

run:
	FLASK_APP=app.py flask run
