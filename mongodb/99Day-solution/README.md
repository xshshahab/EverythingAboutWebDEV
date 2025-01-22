# Generating Random Employee Data

![Banner](https://github.com/xshshahab/EverythingAboutWebDEV/blob/main/mongodb/99Day-solution/Showcase.png)

### Overview

This project allows you to generate random employee data using the following technologies:

- **Frontend**: EJS (Embedded JavaScript) for rendering the data dynamically.
- **Backend**: Express for handling API requests and responses.
- **Database**: MongoDB for storing the employee data (optional, based on your requirements).

### How it Works

1. **Frontend**:

   - An EJS template is used to display the employee data in a table format.
   - A "Generate" button is provided that, when clicked, triggers the backend to generate random employee data and display it in a table.

2. **Backend**:
   - The backend is built using **Express** and provides an endpoint to generate random employee data.
   - The data is generated using a package like **faker.js** or **chance.js**.
   - The employee data can be optionally stored in a MongoDB database and returned as a JSON response to be displayed in the frontend.

### Key Features

- Generate random employee data such as:
  - Employee ID
  - Name
  - Position
  - Department
  - Salary
- The data is dynamically displayed in an HTML table.
- The system allows for easy scaling and customization.

### Technologies Used

- **EJS** (for templating in frontend)
- **Express** (for backend API and handling requests)
- **MongoDB** (for database storage, if required)
- **Faker.js** (for generating random employee data)

### How to Use

1. **Run the Backend**:

   - Install required dependencies:
     ```bash
     npm install express mongoose faker
     ```
   - Start the server:
     ```bash
     node server.js
     ```

2. **Visit the Application**:
   - Go to `http://localhost:3000` in your browser to interact with the app.
   - Click the "Generate" button to display the random employee data in the table.

### Sample Screenshot

![Employee Data Table](https://github.com/xshshahab/EverythingAboutWebDEV/blob/main/mongodb/99Day-solution/Showcase.png) <!-- Replace with actual screenshot if you have one -->

### Conclusion

This simple app showcases how to use **EJS**, **Express**, and **MongoDB** to generate and display random employee data. The system is scalable and can be modified to suit various use cases, such as generating different types of data or integrating with a production database.
