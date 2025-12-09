Employee Management System – React CRUD Application
---
1. Project Overview

The Employee Management System is a React-based CRUD application designed to manage employee data efficiently. The system allows users to add, view, edit, and delete employee records. It includes search functionality, pagination, and responsive design for improved user experience. Data is stored in the browser’s localStorage, ensuring persistence across sessions.

---

2. Project Objective

The primary objective of this project is to create a lightweight, responsive, and user-friendly web application for managing employee records, providing features like:

Employee registration

Employee data visualization in a table

Edit and delete functionality

Search and filter employees by name or department

Pagination for easy navigation

Continuous numbering across pages

This project can serve as a foundation for integrating with backend APIs in future versions.
---
3. Technology Stack
Technology	Purpose
ReactJS	Frontend library for building UI components
React Router DOM	Client-side routing
LocalStorage	Data persistence in the browser
CSS / Bootstrap	Styling and responsiveness

---
4. Features

Add Employee: Fill a form to add a new employee with Name, Email, Department, and Salary.

Edit Employee: Modify existing employee records.

Delete Employee: Remove unwanted employee records.

Search: Search employees by Name or Department.

Pagination: View employee data with 5 records per page and continuous numbering.

Responsive Design: Works on desktop, tablet, and mobile devices.

Deployment Ready: Hosted on Vercel with proper SPA routing.

```
5. Folder & Component Structure
day16-react-router-dom-crud/
│
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Home/
│   │   │   └── Page.jsx           // Add/Edit employee form
│   │   │   └── Page.css
│   │   ├── About/
│   │   │   └── Page.jsx           // Employee table, pagination
│   │   │   └── ViewData.css
│   │   └── Header/
│   │       └── Header.jsx         // Navigation & Search
│   │       └── Header.css
│   ├── App.jsx                     // Main application, state management
│   └── index.js                    // ReactDOM render
├── package.json
├── vercel.json                     // SPA routing for deployment
└── README.md
```
---
6. Components Description
6.1 Header

Contains navigation links: Home, View Data

Includes a search bar that filters employees by Name or Department

6.2 Home/Page.jsx

Form component for adding or editing employee data

Inputs: Name, Email, Department, Salary

On submission:

Edit Mode: Updates selected employee

Add Mode: Adds new employee to the list

6.3 ViewData/Page.jsx

Displays employee data in a table

Continuous numbering using (indexOfFirst + index + 1)

Edit/Delete buttons for each record

Pagination controls with Prev / Next and page numbers
---
7. State Management
   
State	Purpose

employee	Holds current form data for add/edit

list	Stores all employee records

editId	Tracks employee being edited

search	Holds current search query

currentPage	Tracks the current page for pagination

itemsPerPage	Number of records per page

indexOfFirst / indexOfLast	Determines slice of data for current page

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
