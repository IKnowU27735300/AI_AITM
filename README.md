# AI_AITM - AI Training Portal

AI_AITM is a comprehensive, AI-powered educational platform designed to enhance the learning experience for engineering students. It integrates advanced AI capabilities with traditional learning management tools to provide a dynamic and personalized training environment.

## 🚀 Key Features

### 🤖 AI-Powered Quiz Generator
- **Gemini API Integration:** Leverages Google's Gemini Pro model to generate unique, high-quality aptitude questions instantly.
- **Customizable Assessments:** Generate quizzes based on specific prompts, subjects, difficulty levels (Easy, Medium, Hard), and target student years.
- **Smart Duplicate Detection:** Built-in logic to ensure every generated question is unique.
- **One-Click Deployment:** Admins can review, approve, and save generated quizzes directly to the student portal.

### � Real-time Notification System
- **Instant Alerts:**
    - Students are notified immediately when a new test is available.
    - Admins receive real-time alerts when a student starts a test.
- **Interactive UI:** Notification bell with unread count badge in the dashboard header.

### 📊 Comprehensive Result Management
- **Detailed Analytics:**
    - View individual student results with score breakdown and performance charts.
    - Dedicated "Results" panel for admins to monitor student progress.
- **Result Actions:** Admins can delete invalid or test submissions directly from the dashboard.

### 📱 Enhanced Mobile Experience
- **Responsive Design:** Fully optimized sidebar and navigation for mobile devices.
- **Touch-Friendly:** Improved touch interactions for dashboards and test interfaces.

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3 (Modern UI with Glassmorphism, Responsive), JavaScript (ES6+)
- **Backend & Database:** Firebase Authentication, Cloud Firestore
- **AI Engine:** Google Gemini Pro API
- **Icons & Fonts:** FontAwesome, Google Fonts (Inter, Outfit)

## 📂 Project Structure

```
HOME/
├── index.html              # Main Landing & Login Page
├── admin.html              # Admin Dashboard
├── student-dashboard.html  # Student Dashboard
├── test.html               # Test Creation (AI & Manual)
├── take-test.html          # Test Taking Interface
├── result.html             # Detailed Result View
├── ai-quiz-generator.html  # AI Quiz Creation Tool
├── library.html            # Resource Library Hub
├── coding-platform.html    # Coding Practice Area
├── game.html               # Educational Games
└── ... (Language specific pages: cpp.html, java.html, etc.)
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
