# Department Name SPA

A single-page application (SPA) featuring user authentication and product management (add, edit, delete). Built with a modern technology stack: React, Redux Toolkit, React Router, Tailwind CSS, Formik, and Yup.

## Features

1. **Login Page (`/login`)**
   - A login form with fields for email and password.
   - Form validation using Yup:
     - Email must be valid.
     - Password must be at least 8 characters long.
   - Successful login:
     - Saves the user's login status in Redux.
     - Redirects to the `/items` page.

2. **Items Page (`/items`)**
   - Displays products as cards:
     - Each card includes an image, title, description, and price.
   - **Add New Product:**
     - A form to upload an image, and input title, description, and price.
   - **Edit Product:**
     - Opens the same form with pre-filled data for editing.
   - **Delete Product:**
     - Removes the selected product from the list.
   - **Dynamic Layout:**
     - Up to 4 cards per row.
     - If fewer than 4 items are in the last row, they stretch to fill the full width.

3. **State Management**
   - Redux Toolkit is used for managing:
     - User authentication (`userSlice`).
     - Product list (`itemsSlice`).

4. **Validation**
   - Formik handles form submission and data binding.
   - Yup ensures input validation.

5. **Responsive Design**
   - Fully responsive layout using Tailwind CSS.

## Technology Stack

- **React.js**: Functional components and React Hooks.
- **Redux Toolkit**: State management.
- **React Router**: Client-side routing.
- **Tailwind CSS**: Modern CSS for styling.
- **Formik + Yup**: Easy form handling and validation.
- **Jest + React Testing Library**: Basic testing framework.

## How to Run the Project

1. **Install dependencies:**
   ```bash
   npm install

2. **Run in development mode:**
  npm start

3. **Open the app in your browser:**
  http://localhost:3000

4. **Run tests:**
  npm test

5. **Build for production:**
  npm run build

# Project Structure

src/
  components/          # UI components
    ItemForm.js        # Form for adding/editing products.
    ItemCard.js        # Product card.

  pages/               # Application pages
    LoginPage.js       # Login page.
    ItemsPage.js       # Products page.

  redux/               # Redux slices
    userSlice.js       # User state.
    itemsSlice.js      # Product list state.
    store.js           # Redux Store configuration.

  App.js               # Main application component with routing.
  index.js             # Application entry point.
  index.css            # Tailwind CSS styles.

# Notes

1. Authentication:
  Unauthenticated users are redirected to the /login page if they try to access /items.

2. Add/Edit Products:
  The form supports uploading an image, entering a title, description, and price.

3. Dynamic Layout:
  Items automatically adapt to the available space.
  Cards stretch to fill the row if fewer than 4 items are present.
4. Testing:
Includes tests for login validation and product list rendering.




##### Ukrainian Language #####

# Department Name SPA

Односторінковий додаток, який включає авторизацію користувачів, роботу зі списком елементів (додавання та редагування). Використовується сучасний стек технологій: React, Redux Toolkit, React Router, Material UI, Formik та Yup.

1. **Сторінка логіну (`/login`)**
   - Форма входу з полями для email і паролю.
   - Валідація форми через Yup:
     - Email має бути валідним.
     - Пароль повинен містити мінімум 8 символів.
   - Успішний логін:
     - Зберігає статус авторизації у Redux.
     - Перенаправляє на сторінку `/items`.

2. **Сторінка товарів (`/items`)**
   - Відображення товарів у вигляді карток:
     - Кожна картка містить фото, назву, опис і ціну.
   - **Додавання товару:**
     - Форма для завантаження фото, введення назви, опису та ціни.
   - **Редагування товару:**
     - Відкриття форми з попередньо заповненими даними для редагування.
   - **Видалення товару:**
     - Видаляє вибраний товар зі списку.
   - **Динамічний макет:**
     - До 4 карток в одному рядку.
     - Якщо у рядку менше 4 товарів, вони розтягуються, щоб займати всю ширину.

3. **Менеджмент стану**
   - Redux Toolkit використовується для управління:
     - Авторизацією користувача (`userSlice`).
     - Списком товарів (`itemsSlice`).

4. **Валідація**
   - Formik забезпечує обробку форм.
   - Yup забезпечує валідацію введених даних.

5. **Адаптивний дизайн**
   - Повністю адаптивний макет завдяки Tailwind CSS.

## Використані технології

- **React.js**: Функціональні компоненти та React Hooks.
- **Redux Toolkit**: Управління станом.
- **React Router**: Маршрутизація на клієнті.
- **Tailwind CSS**: Сучасний CSS для стилізації.
- **Formik + Yup**: Зручна робота з формами та валідація.
- **Jest + React Testing Library**: Базове тестування.

## Запуск проекту

Для запуску проекту виконайте наступні команди:

1. Встановіть залежності:
   npm install

2. Запустіть проект у режимі розробки:
   npm start

3. Відкрийте у браузері за посиланням:
   http://localhost:3000

4. Для запуску тестів:
   npm test

5. Для збірки проекту для продакшену:
   npm run build

## Структура проекту

Проект організовано за такою структурою:

src/
  components/ - містить всі UI-компоненти:
    ItemDialog.js - модальне вікно для додавання/редагування товарів.
    ItemsTable.js - таблиця для відображення списку товарів.
    LoginForm.js - форма для входу користувача.

  pages/ - сторінки проекту:
    LoginPage.js - сторінка логіну.
    ItemsPage.js - сторінка для роботи зі списком товарів.

  redux/ - Redux-слайси для управління станом:
    userSlice.js - стан користувача.
    itemsSlice.js - стан списку товарів.
    store.js - налаштування Redux Store.

  tests/ - тести для основних компонентів:
    LoginForm.test.js
    ItemsPage.test.js

  App.js - головний компонент додатку, маршрутизація.
  index.js - точка входу до програми.

## Примітки

1. Якщо користувач не авторизований, доступ до сторінки `/items` заборонено. В цьому випадку користувач буде автоматично перенаправлений на сторінку логіну `/login`.
2. Модальне вікно для додавання/редагування товарів реалізоване з використанням Formik для зручної роботи з формами та валідації.
3. Тести перевіряють основний функціонал, включаючи валідацію логіну та правильне відображення списку товарів.

Проект реалізовано відповідно до поставленого завдання. У разі питань чи потреби в удосконаленні — звертайтесь! 😊
