# 🧠 AI_AITM – AI Training Portal

> **An intelligent, secure, and personalized learning ecosystem for engineering students**

AI_AITITM is a next-generation, AI-powered educational platform designed to enhance learning and assessment for engineering students. It integrates **AI-driven content generation**, a **secure coding environment**, and an **advanced proctoring system** to deliver dynamic, adaptive, and cheat-resistant training experiences.

---

## 🚀 Key Features

### 🧠 AI-Powered Quiz & Coding Problem Generator
- **Gemini API Integration**: Uses Google’s **Gemini Pro** to generate unique aptitude questions and real-world coding problems (Python, Java, C++, JavaScript, etc.).
- **Customizable Assessments**: Filter by subject, difficulty (Easy/Medium/Hard), and student year.
- **Smart Duplicate Detection**: Ensures semantic uniqueness across all generated content.
- **One-Click Deployment**: Admins can approve and publish quizzes directly to the student portal.

### 💻 Integrated Coding Platform
- **In-Browser IDE** with syntax highlighting, auto-complete, and real-time error feedback.
- **Auto-Grading Engine**: Validates code against test cases, checks time/space complexity, and output correctness.
- **Multi-Language Support**: Python, Java, C++, JavaScript, C#, and more.
- **Curated Problem Bank**: DSA, system design, and project-based challenges.

### 👁️ AI-Driven Proctoring System (Secure Exam Mode)
> *Prevents cheating with real-time behavioral and environmental monitoring*

- **🔒 Browser Lockdown**:  
  Students **cannot exit the test window**, open new tabs, or switch apps. Violations trigger warnings or **auto-submit**.
  
- **👀 Gaze & Presence Monitoring**:  
  Uses webcam to track eye movement. **Looking away >5 seconds** = flagged activity.

- **👥 Multi-Face Detection**:  
  If **>1 face** is detected, the system logs it and may auto-submit the test.

- **📱 Mobile Device Detection (Radar-Like)**:  
  Scans for phones within **~6 feet** using:
  - Wi-Fi/BLE proximity signals
  - IP address correlation (e.g., if the laptop uses a phone hotspot)  
  → **Detected device = automatic test submission**

- **📹 Full Audit Trail**:  
  Session recording (video + screen) stored securely for admin review.

### 🔔 Real-Time Notification System
- Students get instant alerts when a new test is live.
- Admins receive live notifications when a student starts a test.
- Interactive bell icon with unread count in the dashboard.

### 📊 Comprehensive Result Management
- Individual performance reports with score breakdowns and skill-gap analysis.
- Admin dashboard for class-wide analytics and progress tracking.
- Delete or regrade invalid/test submissions with one click.

### 📱 Mobile-Optimized Experience
- Fully responsive design with touch-friendly navigation.
- Works seamlessly on phones and tablets.

---

## 🛠️ Technology Stack

| Layer          | Technologies |
|----------------|--------------|
| **Frontend**   | HTML5, CSS3 (Glassmorphism), JavaScript (ES6+), Responsive Design |
| **Backend**    | Firebase Authentication, Cloud Firestore |
| **AI Engine**  | Google Gemini Pro API |
| **Proctoring** | WebRTC, TensorFlow.js (client-side face/gaze detection), Network scanning (with user consent) |
| **Coding IDE** | Monaco Editor (VS Code engine) |
| **Styling**    | FontAwesome, Google Fonts (`Inter`, `Outfit`) |

---

## 🤝 Contributing

Contributions are **welcome**! Whether you're improving the proctoring logic, adding new programming languages, or enhancing UI/UX:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4) Push to the branch (`git push origin feature/AmazingFeature`)
5) Open a **Pull Request**

> Please ensure your code follows our style guide and includes appropriate tests.

---

## 📄 License

This project is currently **private/internal**. Contact the maintainers for usage rights.

---

> **AI_AITM**: Where learning meets intelligence, integrity, and innovation.
