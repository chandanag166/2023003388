# 🚀 Campus Notification Management System

A full-stack notification management system developed as part of a campus hiring assessment.

The project is designed to manage and display campus notifications efficiently while prioritizing important updates such as placement drives, academic results, and campus events.

---
## 📌 Project Overview
This project consists of:

* 🔹 Logging Middleware
* 🔹 Backend Notification Service
* 🔹 Frontend Notification Dashboard
* 🔹 Notification System Design Documentation

The application fetches notifications from the provided service, prioritizes them based on importance, and presents them through a responsive dashboard.

---

## 📂 Repository Structure

```text
2023003388
│
├── logging-middleware
│
├── notification_app_be
│
├── notification_app_fe
│
├── notification_system_design.md
│
└── README.md
```

---

## ⚙️ Features

### 📝 Logging Middleware

* Centralized logging utility
* Structured log generation
* API integration for log storage
* Reusable across backend services

### 🔧 Backend Application

* Fetches notifications from API
* Processes notification data
* Generates Top Priority Notifications
* Handles API communication securely
* Implements notification prioritization logic

### 🎨 Frontend Dashboard

* Responsive user interface
* Filter notifications by type
* View all notifications
* View Top Priority Notifications
* Notification statistics cards
* Pagination support
* Clean and modern UI

---

## 🔔 Supported Notification Types

### 💼 Placement
Company hiring announcements and placement opportunities.

### 📊 Result
Academic results and examination updates.

### 🎉 Event
Campus events, workshops, seminars, and activities.

---

## ⭐ Priority Logic
Notifications are prioritized using the following order:

| Priority | Type      |
| -------- | --------- |
| 1        | Placement |
| 2        | Result    |
| 3        | Event     |

If two notifications have the same priority, the most recent notification is displayed first.

---
## 🖥️ Technology Stack
### Frontend

* React.js
* Axios
* HTML5
* CSS3

### Backend

* Node.js
* Express.js
* Axios
* 
### Tools
* Git
* GitHub
* VS Code

---

## 📸 Screenshots
The repository includes screenshots demonstrating:
* Logging Middleware Execution
* Backend Notification Processing
* API Responses
* Dashboard Interface
* Placement Filter
* Result Filter
* Event Filter
* Priority Notifications
* Mobile View
* Desktop View

---

## 📄 Documentation
Detailed design documentation is available in:
```text
notification_system_design.md
```

The document covers:
* System Design
* Architecture
* Priority Handling Logic
* Time Complexity Analysis
* Future Enhancements
---

## 🚀 How to Run
### Backend
```bash
cd notification_app_be
npm install
node server.js
```
Runs on:
```text
http://localhost:5000
```
### Frontend
```bash
cd notification_app_fe
npm install
npm start
```
Runs on:
```text
http://localhost:3000
```

---

## 🌟 Highlights
✅ Modular Architecture
✅ Responsive User Interface
✅ Notification Prioritization
✅ API Integration
✅ Pagination Support
✅ Logging Middleware
✅ Clean Folder Structure
✅ Production-Oriented Design

---
## 🙌 Acknowledgement
This project was developed as part of a technical assessment and demonstrates backend development, frontend development, API integration, system design, and software engineering best practices.

---
### ⭐ Thank you for reviewing this project.
