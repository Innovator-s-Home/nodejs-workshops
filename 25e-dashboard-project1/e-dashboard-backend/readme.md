# Ecommerce Backend Dashboard With Nodejs(Express)

This is a backend project built with Express.js and Node.js. It serves as the server-side application for an e-commerce application.

## Prerequisites

- Node.js (latest stable version is recommended)
- MongoDB (Make sure MongoDB is installed and running on your local machine)

## Getting Started

1. Clone the repository:

   ```shell
   git clone <repository-url>

2. Install the dependencies
 
    ```shell
    npm install

3. Create a MongoDB database:
   - Make sure MongoDB is running on your local machine.
   - Open a MongoDB client (MongoDB Compass recommended ).
   - Create a new database named 'e-commerce'.

4. Configure the database connection:
   - Open the config.js file in the project root directory.
   - Update the line with
    ```script
    mongoose.connect("mongodb://127.0.0.1:27017/e-commerce")
  
1. Start the server:
   ```shell
   nodemon