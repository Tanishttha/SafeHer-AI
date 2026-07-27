<h1 align="center">SafeHer AI</h1>
<h3 align="center">
SafeHer AI is an AI-powered women safety platform that combines Artificial Intelligence, real-time communication, and location intelligence to provide proactive protection during emergencies. It empowers users with intelligent safety features including AI voice assistance, emergency SOS, live guardian tracking, safe route navigation, fake calls, and secure evidence collection.
</h3>
<h2>Live Demo</h2>

```bash
https://safe-her-ai-blush.vercel.app
```
<p>The backend is deployed on Render, which automatically goes to sleep after a period of inactivity. On the first visit, it may take <b>minutes</b> for the backend to wake up. Please wait briefly before using the application.</p>

<h2>🏗️ System Architecture</h2>

<p align="center">
Frontend (React + TypeScript) ⇄ Express API ⇄ MongoDB Atlas<br>
                             │<br>
        Google OAuth • Firebase Auth • Socket.IO<br>
                             │<br>
AI Assistant • Safe Routes • Live Tracking • Emergency Services
</p>

---

<h2>✨ Features</h2>

<h3>👩 User Safety Features</h3>

- AI Safety Assistant
- Live Location Sharing
- Emergency SOS
- Fake Call Simulation
- Ride Guardian
- Safe Route Navigation
- Emergency Contacts
- Guardian Connection
- Safety Dashboard
- Evidence Vault
- Community Safety Alerts
- Nearby Safe Places
- Real-time Notifications
- Secure Authentication
- Responsive Glassmorphism UI

---

<h3>🛡️ Guardian Features</h3>

- Guardian Login
- Live User Tracking
- Real-time Map Monitoring
- Instant SOS Alerts
- Multiple Connected Users
- Emergency Navigation
- User Activity Status
- Emergency Notification System

---

<h3>🤖 AI Features</h3>

- AI Safety Assistant
- Natural Language Conversations
- Speech-to-Text
- Text-to-Speech
- Emergency Guidance
- Hands-free Voice Interaction
- AI Safety Recommendations
- Intelligent Risk Assistance

---

<h3>📍 Safety & Navigation</h3>

- Safe Route Navigation
- Live GPS Tracking
- Route Risk Awareness
- Location Sharing
- Emergency Route Assistance
- Ride Monitoring
- Interactive Maps

---

<h2>🛠️ Technology Stack</h2>

<h3>Frontend</h3>

- React.js
- TypeScript
- Vite
- TanStack Router
- Tailwind CSS
- Framer Motion
- React Query
- React Hook Form
- Leaflet Maps
- Axios

---

<h3>Backend</h3>

- Node.js
- Express.js
- MongoDB
- Prisma ORM
- Socket.IO
- JWT Authentication
- Google OAuth
- Firebase Authentication
- REST APIs

---

<h3>Artificial Intelligence</h3>

- Google Gemini AI
- Large Language Models (LLMs)
- Speech Recognition
- Text-to-Speech
- AI Safety Assistance
- Prompt Engineering

---

<h3>Database & Cloud</h3>

- MongoDB Atlas
- Cloudinary
- Render
- Vercel

---

<h2>📂 Project Structure</h2>

```text
SafeHer-AI/
│
├── client/
│   ├── src/
│   ├── public/
│   ├── assets/
│   └── package.json
│
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── prisma/
│   ├── services/
│   ├── utils/
│   └── package.json
│
├── README.md
└── package.json
```

---

<h2>⚙️ Installation</h2>

<h3>Clone Repository</h3>

```bash
git clone https://github.com/yourusername/SafeHer-AI.git
cd SafeHer-AI
```

---

<h3>Install Dependencies</h3>

### Client

```bash
cd client
npm install
```

### Server

```bash
cd ../server
npm install
```

---

<h2>🔐 Environment Variables</h2>

<h3>Server (.env)</h3>

```env
PORT=5000

DATABASE_URL=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET

GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET

GEMINI_API_KEY=YOUR_GEMINI_API_KEY

FRONTEND_URL=http://localhost:5173
```

---

<h3>Client (.env)</h3>

```env
VITE_API_URL=http://localhost:5000/api

VITE_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID

VITE_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
```

---

<h2>▶️ Running the Project</h2>

<h3>Backend</h3>

```bash
cd server
npm run dev
```

---

<h3>Frontend</h3>

```bash
cd client
npm run dev
```

---

<h2>🌐 Application URLs</h2>

**Frontend**

```
http://localhost:5173
```

**Backend**

```
http://localhost:5000
```

---

<h2>📸 Screenshots</h2>

| Home | AI Assistant |
|------|--------------|
| Add Screenshot | Add Screenshot |

| Safe Route | Guardian Dashboard |
|------------|-------------------|
| Add Screenshot | Add Screenshot |

| SOS | Live Tracking |
|-----|---------------|
| Add Screenshot | Add Screenshot |

---

<h2>🚀 Deployment</h2>

### Frontend

- Vercel

### Backend

- Render

### Database

- MongoDB Atlas

---

<h2>📱 Android App (Capacitor)</h2>

### Install Capacitor

```bash
npm install @capacitor/core @capacitor/cli
npm install @capacitor/android
```

### Initialize

```bash
npx cap init
```

### Build Project

```bash
npm run build
```

### Add Android

```bash
npx cap add android
```

### Sync Project

```bash
npx cap copy
```

### Open Android Studio

```bash
npx cap open android
```

---

<h2>📲 Android Permissions</h2>

- Internet
- Fine Location
- Background Location
- Microphone
- Notifications
- Foreground Service
- Wake Lock
- Vibration
- Camera (Optional)
- Storage Access (Optional)

---

<h2>🔒 Security Features</h2>

- JWT Authentication
- Google OAuth
- Firebase Authentication
- Protected Routes
- Secure API Communication
- Password Encryption
- Role-Based Guardian Access

---

<h2>🛣️ Roadmap</h2>

- AI Risk Prediction
- Background Threat Detection
- Voice Trigger SOS
- Emergency Video Recording
- Smart Wearable Integration
- Offline Emergency Mode
- Crash Detection
- AI Incident Analysis
- Nearby Safe Zone Detection
- Multi-language AI Assistant
- Emergency Call Automation
- Anonymous Community Reporting

---

<h2>📄 License</h2>

This project is developed for educational, research, and social impact purposes.

---

<h2 align="center">⭐ If you found this project helpful, consider giving it a Star!</h2>