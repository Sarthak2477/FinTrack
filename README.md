# FinTrack

FinTrack is a web application that helps users manage and track their financial transactions efficiently. The application consists of a **React frontend** and an **Express.js backend** connected to a **MongoDB database**.
Live Demo: https://fintrack-bga73lmr3-sarthaks-projects-69798058.vercel.app/
## Features
- Add, edit, and delete transactions
- View transaction insights with a bar chart
- Filter transactions by time periods (week, month, all time)
- Secure backend API with MongoDB for data persistence

## Tech Stack
### Frontend
- React.js
- Recharts (for data visualization)

### Backend
- Node.js
- Express.js
- MongoDB (via MongoDB Atlas)
```

## Installation & Setup
### 1. Clone the repository
```sh
git clone https://github.com/your-username/finance-tracker.git
cd finance-tracker
```

### 2. Install dependencies
#### Backend
```sh
cd backend
npm install
```
#### Frontend
```sh
cd frontend
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the **backend** folder and add:
```
MONGO_URI=your-mongodb-atlas-connection-string
PORT=5000
```

### 4. Run the project
#### Start the Backend Server
```sh
cd backend
node run dev
```
#### Start the Frontend
```sh
cd frontend
npm start
```
The frontend will be available at `http://localhost:3000`.

## License
This project is licensed under the MIT License.

