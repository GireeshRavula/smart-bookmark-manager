\# 🔖 Smart Bookmark Manager



A full-stack Smart Bookmark Manager built using Django REST Framework, React (Vite), and MySQL.

This application provides a clean UI and RESTful API to manage bookmarks with full CRUD functionality.



--------------------------------------------------



🚀 Features



\- Add, edit, delete bookmarks

\- RESTful API using DRF ViewSets

\- MySQL database integration

\- React Router multi-page navigation

\- Form validation (frontend + backend)

\- Duplicate URL prevention

\- Modern responsive UI with animations

\- Clean modular architecture



--------------------------------------------------



🧱 Tech Stack



Backend

\- Django

\- Django REST Framework

\- MySQL

\- django-cors-headers



Frontend

\- React (Vite)

\- Axios

\- React Router

\- Custom CSS (no UI libraries)



--------------------------------------------------



📂 Project Structure



smart-bookmark/



backend/

&nbsp; backend/      -> Django project settings

&nbsp; bookmarks/    -> Models, serializers, views, urls

&nbsp; manage.py



frontend/

&nbsp; src/

&nbsp;   components/ -> BookmarkForm, BookmarkItem, BookmarkList

&nbsp;   pages/      -> ListPage, FormPage

&nbsp;   services/   -> Axios API layer

&nbsp;   styles/     -> CSS

&nbsp; package.json



README.md



--------------------------------------------------



⚙️ Backend Setup



cd backend

python -m venv venv

venv\\Scripts\\activate

pip install django djangorestframework mysqlclient django-cors-headers



🗄️ MySQL Setup



Create database:



CREATE DATABASE bookmark\_db;



Update backend/settings.py:



DATABASES = {

&nbsp;   'default': {

&nbsp;       'ENGINE': 'django.db.backends.mysql',

&nbsp;       'NAME': 'bookmark\_db',

&nbsp;       'USER': 'root',

&nbsp;       'PASSWORD': 'your\_password',

&nbsp;       'HOST': 'localhost',

&nbsp;       'PORT': '3306',

&nbsp;   }

}



Run migrations:



python manage.py makemigrations

python manage.py migrate

python manage.py runserver



API base URL:



http://127.0.0.1:8000/api/bookmarks/



--------------------------------------------------



🎨 Frontend Setup



cd frontend

npm install

npm run dev



Frontend runs at:



http://localhost:5173



--------------------------------------------------



🔌 API Endpoints



GET      /api/bookmarks/        -> List bookmarks

POST     /api/bookmarks/        -> Create bookmark

PUT      /api/bookmarks/:id/    -> Update bookmark

DELETE   /api/bookmarks/:id/    -> Delete bookmark



--------------------------------------------------



✅ Validation



Backend

\- URL must be unique

\- Title cannot be empty



Frontend

\- Required field validation

\- URL format check



--------------------------------------------------



🖥️ UI Highlights



\- Gradient background

\- Card-based layout

\- Animated buttons

\- Hover effects

\- Responsive spacing

\- Clean form UX



--------------------------------------------------



\## 📸 Screenshots



\### Bookmark List Page

!\[List Page](screenshots/list-page.png)



\### Add Bookmark Page

!\[Add Page](screenshots/form-page.png)



\### Edit Bookmark Page

!\[Edit Page](screenshots/edit-page.png)



--------------------------------------------------



🔄 Application Flow



1\. User lands on Bookmark List Page

2\. Click Add Bookmark -> navigates to Form Page

3\. Submit form -> API call -> redirects to List Page

4\. Edit/Delete handled inline in list

5\. UI updates without page reload



--------------------------------------------------



🧪 Future Enhancements



\- Search bookmarks

\- Tagging system

\- Pagination

\- Authentication (JWT)

\- Bookmark categories

\- Dark mode



--------------------------------------------------



👨‍💻 Author



Gireesh Ravula

Full Stack Developer (Django + React)



