# NoteVerse Exchange

A full-stack platform for sharing, organizing, and managing educational notes among students.

---

## 🚀 Features

- **Note Management:** Create, edit, and delete notes with rich descriptions.
- **Privacy Controls:** Toggle note privacy (public or private).
- **Social Interactions:** Like and save notes.
- **Search & Filter:** Find notes filtered by branch, academic year, and subject.
- **File Attachments:** Upload and download PDF/document attachments.
- **Authentication:** Secure user registration and login using JWT (JSON Web Tokens) and bcrypt.

---

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS, Radix UI (shadcn/ui), Lucide Icons
- **Backend:** Node.js, Express, TypeScript, Mongoose
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)

---

## 📋 Prerequisites

Before starting, make sure you have installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)
- [MongoDB Community Edition](https://www.mongodb.com/try/download/community) or Docker

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Itzme-Jayy/noteverse-exchange.git
cd noteverse-exchange
```

### 2. Start MongoDB

**On macOS (using Homebrew):**
```bash
brew services start mongodb/brew/mongodb-community
```

**Or using Docker:**
```bash
docker run -d -p 27017:27017 --name noteverse-mongo mongo:latest
```

*(To verify MongoDB is running: `mongosh --eval "db.runCommand({ connectionStatus: 1 })"`)*

### 3. Install Dependencies

Install dependencies for both frontend (root directory) and backend:

```bash
# 1. Install frontend dependencies (in root)
npm install

# 2. Install backend dependencies
cd backend
npm install
cd ..
```

### 4. Environment Variables

The backend uses environment variables configured in `backend/.env`. A template is provided in `backend/.env.example`:

```env
PORT=5001
MONGODB_URI=mongodb://localhost:27017/noteverse
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=development
```

---

## 🏃 Running the Application

### Option A: Start Both Servers Together (Recommended)

From the project root:

```bash
chmod +x dev.sh
./dev.sh
```

> **Note:** Press `Ctrl + C` at any time to stop both servers gracefully.

---

### Option B: Run in Separate Terminals

**Terminal 1 — Backend API:**
```bash
cd backend
npm run dev
```
*Backend runs on:* `http://localhost:5001`

**Terminal 2 — Frontend App:**
```bash
npm run dev
```
*Frontend runs on:* `http://localhost:5173`

Open **[http://localhost:5173](http://localhost:5173)** in your browser to start using NoteVerse!

---

## 🗄️ Accessing the MongoDB Database

- **Connection URL:** `mongodb://localhost:27017/noteverse`

### Using MongoDB Shell (`mongosh`)
```bash
mongosh mongodb://localhost:27017/noteverse

# Example queries:
show collections
db.notes.find().pretty()
db.users.find().pretty()
```

### Using MongoDB Compass (GUI)
1. Open **MongoDB Compass**.
2. Paste the connection string: `mongodb://localhost:27017/noteverse`
3. Click **Connect** to visually inspect and manage collections.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
