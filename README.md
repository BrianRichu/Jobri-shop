# Jobri Collection — E-Commerce Website

## Overview

Jobri Collection is a fashion eCommerce web application built for a real business. The project is currently implemented using plain HTML, CSS, and JavaScript to establish a strong foundation in core frontend concepts. The long-term plan is to migrate the application to **React** and integrate **APIs** for products, cart persistence, authentication, and payments.

The primary objective is full ownership of the platform—no outsourcing, no black-box logic, and complete control over performance and feature development.

## Live Preview

This application is deployed and hosted on vercel.

Live URL: https://jobri-shop.vercel.app/

## Core Features (Current)

- Dynamic product rendering from JavaScript data
- Add-to-cart functionality
- Update item quantities
- Remove items from cart
- Delivery option selection
- Real-time order total calculation
- Responsive layout for desktop and mobile
- Modular JavaScript structure

## Tech Stack

### Current Stack

- **HTML5** – Semantic structure
- **CSS3** – Styling and responsiveness
- **JavaScript (ES6)** – Application logic, state management, DOM manipulation

### Planned Stack (Next Phase)

- **React** – Component-based UI architecture
- **REST APIs** – Products, cart, orders, users
- **Backend (Node.js / Firebase)** – Data persistence and authentication
- **Payment API** – Secure checkout processing

## Project Structure

jobri-collection/  
├── data/  
│ ├── products.js – Product catalog  
│ ├── cart.js – Cart state and logic  
│ └── deliveryOptions.js – Shipping options
├── scripts/  
│ ├── checkout/  
│ │  ├── orderSummary.js  
│ │  └── paymentSummary.js  
| |__checkout.js
│ |__ index.js
| |__ productsPage.js  
├── styles/  
│  |__jobri.css
|  |__checkout.css  
|  |__products.css
├── images/  
├── jobri.html  
├── checkout.html
|__ products.html  
└── README.md

## Application Flow

Products are stored as JavaScript objects and rendered dynamically on page load. Cart state is centralized and managed through dedicated functions that handle item addition, quantity updates, and removal. Each state change triggers a UI re-render.

During checkout, totals are recalculated based on product prices, quantities, and the selected delivery option. All calculations update instantly in the interface.

This structure is intentional to make the future migration to React straightforward by mapping existing logic to components and API-driven state.

## Getting Started

Clone the repository:

git clone https://github.com/BrianRichu/jobri-shop.git

Open `index.html` with live server in your browser to run the project. No build tools, dependencies, or backend services are required at this stage.

## Purpose of This Project

- Build a strong foundation in core JavaScript before frameworks
- Understand eCommerce logic end-to-end
- Prepare a clean codebase for React migration
- Maintain full control of a real business platform

## Known Limitations (Current Phase)

- No backend or database
- No authentication
- No payment gateway

These limitations are deliberate and will be addressed during the React + API phase.

## Roadmap

- Refactor UI into React components
- Replace local data with API-driven data
- Implement persistent cart and user authentication
- Integrate payment gateway API
- Build admin dashboard for product management
- Deploy frontend and backend services

## Author

Brian Mwangi  
Frontend Web Developer  
Founder — Jobri Collection
