# Pathshala Official

Pathshala Official is a modern educational platform built using React, Tailwind CSS, Firebase, and React Router DOM for the client side, with an Express.js backend. This project emphasizes implementing Firebase authentication and protected routes to provide a secure user experience.

## Table of Contents

- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)
- [Project Features](#project-features)
- [Installation](#installation)
- [Common Issues & Resolutions](#common-issues--resolutions)
- [Design Inspiration](#design-inspiration)
- [License](#license)

## Live Demo

Check out the live project [here](https://pathshala-official.web.app/).

## Tech Stack

- **Frontend:** React, Tailwind CSS, React Router DOM
- **Backend:** Express.js
- **Authentication:** Firebase
- **Build Tools:** Vite
- **Additional Libraries:** React Toastify, React to PDF, React to Print

## Project Features

- Implemented Firebase Authentication for secure user sign-in.
- Protected routes to ensure access control across different parts of the application.
- Responsive UI designed with Tailwind CSS, inspired by [shikho.com](https://shikho.com/).
- Integrated PDF generation and printing functionalities for better user experience.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pathshala-official.git
   ```
2. Navigate to the project directory:
   ```bash
   cd pathshala-official
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Common Issues & Resolutions

While building this project, several errors were encountered:

1. **Error:** `sh: react-scripts: command not found`

   - **Solution:** Ensure all dependencies are installed. Run `npm install` and verify that `react-scripts` is listed in your `package.json`.

2. **Error:** `firebase is not defined`

   - **Solution:** Import Firebase correctly in the files where it's being used. Make sure the Firebase configuration and initialization are properly set up.

3. **Error:** `ReferenceError: process is not defined` (using Vite)
   - **Solution:** Add the `process` package to the project dependencies. Install it using:
     ```bash
     npm install process
     ```
   - Ensure Vite configuration correctly handles environment variables.

## Design Inspiration

The user interface of this project is inspired by [Shikho](https://shikho.com/), focusing on clean design and a user-friendly layout.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
