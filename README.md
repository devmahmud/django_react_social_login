# Django React Social Login

This web-application demonstrates social authentication (Google, Facebook OAuth as an example) with Django Rest Framework and React.

## Installation

Change the directory to core, setup & activate virtual environment:

```bash
cd core
python3 -m venv venv
source venv/bin/activate
```

Install the backend server dependency:

```bash
pip install -r requirements.txt
```

Make migrations & Migrate the db:

```bash
python manage.py makemigrations
python manage.py migrate
```

Create a superuser:

```bash
python manage.py createsuperuser
```

Run the server & login to http://127.0.0.1:8000/admin :

```bash
python manage.py runserver
```

Change/add the domain from SITES then add social application under SOCIAL_ACCOUNTS. You can obtain CLIENT_ID and SECRET_KEY for Google from [https://console.developers.google.com](https://console.developers.google.com) and for Facebook [https://developers.facebook.com/](https://developers.facebook.com/)

### Now it's time to setup the frontend

Change the terminal directory to frontend:

```bash
cd frontend
```

Change the **appId** & **clientId** in src/App.js

Install the frontend app dependency & run the application:

```bash
yarn install
yarn start
```

Now you should see two login buttons one for Google login & another for Facebook.
