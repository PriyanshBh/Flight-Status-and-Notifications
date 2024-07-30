# Flight Status and Notifications/Indigo Hack to Hire

Flight Status and Notifications
Description: Develop a system to provide real-time flight status updates and notifications to
passengers.

## Getting Started

To run this application locally, follow these steps:

### Clone the Repository

```bash
git clone https://github.com/PriyanshBh/Flight-Status-and-Notifications.git
```
Setup the Backend
Navigate to the backend directory:
```bash
cd backend
```
Install dependencies
```bash
npm install
```
Create a .env file in the backend directory and add your environment variables. Use the provided '.env sample' :
```bash
// # MongoDB URI
MONGO_URI=mongodb://localhost:27017/your_database_name

// # Gmail SMTP Credentials
EMAIL_USER=your_gmail_email@gmail.com
EMAIL_PASS=your_gmail_app_password

// # Twilio Credentials
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
```

 
Start the backend server:
```bash
npm start
```
Setup the Frontend

Navigate to the frontend directory:
```bash
cd ../frontend
```
Install dependencies:
```bash
npm install
```
Start the frontend development server:
```bash
npm start
```

Access the Application
Open your browser and go to 
```bash
http://localhost:3000 
```
to access the application.

Folder Structure

backend: Contains the server-side code, including API routes, controllers, and database models.
frontend: Contains the client-side code, including React components and styling.

Contact

For any questions or support, please contact krpriyanshbhardwaj@gmail.com.
