# HackHub  

HackHub is a comprehensive platform designed to streamline the organization and participation of college-level hackathons. It empowers organizers with tools to create, manage, and promote hackathons effortlessly, while providing participants with an intuitive interface to discover, register, and engage in these events. HackHub bridges the gap between creativity and collaboration, fostering a thriving community of innovators and problem-solvers.

## Features  

- User login and registration for both organizers and participants.  
- Organizers can create, manage, and publish hackathons.  
- Participants can browse and register for available hackathons.  
- Interactive dashboard for monitoring hackathon details.  

## Technologies Used  

- **Frontend**:  
  - HTML  
  - CSS  
  - JavaScript  
  - Bootstrap (for responsive design)  
  - GSAP and Three.js (for animations)  

- **Backend**:  
  - Node.js  
  - Express.js  

- **Database**:  
  - MongoDB
 

## Preview  

You can access the live version of HackHub at the following URL:  
[Note: If you are opening this link on a mobile device, please enable desktop mode in your browser for the best experience.]
```bash
[npx nodemon app.js
](https://hackhub-mzj8.onrender.com/hackathon)
```


## How to Use This Repository  

### Step 1: Clone the Repository  

Clone this repository to your local machine:  
```bash
git clone https://github.com/GDGOnCampusMGMsCOE/HackHub.git
```

### Step 2: Navigate to the Project Directory

```bash
cd HackHub
```

### Step 3: Install Dependencies

Install the necessary dependencies using the following command:
```bash
npm install
```

### Step 4: Set Up the Database
Create a new MongoDB database.
Update the database credentials in the .env file:
     ```env
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=yourpassword
     DB_NAME=hackhub
     ```
     
### Step 5: Run the Application

Start the application using:
```bash
node app.js
```
Alternatively, if you have Nodemon installed:

```bash
npx nodemon app.js
```

### Step 6: Access the Application
Open your web browser and navigate to http://localhost:8080/hackathon to access HackHub.
