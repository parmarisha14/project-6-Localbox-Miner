📘 Employee Management System (React CRUD) – Documentation
---
1. Project Overview

This is a ReactJS Employee Management System with full CRUD operations:

Create: Add new employee data

Read: View all employee records

Update: Edit employee details

Delete: Remove employees

Data is stored in localStorage so it persists in the browser.
---

2. Features

Add employee with: Name, Email, Department, Salary

Edit employee information

Delete employee

Search by employee name or department

Pagination with continuous numbering and Prev/Next buttons

Responsive and clean UI using custom CSS and Bootstrap

Routing using React Router DOM (/ for home, /viewdata for list)
```

3. Folder Structure
project-6-Localbox-Miner
│
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Home/
│   │   │   └── Page.jsx
│   │   │   └── Page.css
│   │   ├── About/
│   │   │   └── Page.jsx
│   │   │   └── ViewData.css
│   │   └── Header/
│   │       └── Header.jsx
│   │       └── Header.css
│   ├── App.jsx
│   └── index.js
├── package.json
```

---
4. Component Explanation
4.1 Header

Navigation bar with links: Home, View

Search input updates state in App.jsx

4.2 Home/Page.jsx

Form for adding/editing employee

Fields: ename, email, department, salary

On submit:

If editing → updates the employee

If new → adds a new employee

4.3 ViewData/Page.jsx

Shows employee list in a table

Continuous numbering across pages

Edit/Delete buttons for each employee

Pagination with Prev / Next and page numbers
---
5. State Management & Logic

employee → current employee object for form

list → array of all employees

editId → ID of employee being edited

search → search query

Pagination:

currentPage → current page number

itemsPerPage → records per page

indexOfFirst & indexOfLast → slice for current page

LocalStorage: Stores list persistently
---
6. Routing

"/" → Home Page (Add Employee)

"/viewdata" → View Employee List

Routing handled by React Router DOM


---

7. Search & Pagination

Search: Filters employees by ename or department

Pagination:

5 records per page

Continuous numbering: indexOfFirst + index + 1

Prev / Next buttons
---
8. How to Run Locally

Clone the repository:

git clone <repo-link>
cd day16-react-router-dom-crud


Install dependencies:

npm install


Start the project:

npm start


Open browser:

http://localhost:3000


---
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
