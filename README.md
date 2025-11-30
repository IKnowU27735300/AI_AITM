# AI_AITM - AI Training Portal

AI_AITM is a comprehensive, AI-powered educational platform designed to enhance the learning experience for engineering students. It integrates advanced AI capabilities with traditional learning management tools to provide a dynamic and personalized training environment.

## 🚀 Key Features

### 🤖 AI-Powered Quiz Generator
- **Gemini API Integration:** Leverages Google's Gemini Pro model to generate unique, high-quality aptitude questions instantly.
- **Customizable Assessments:** Generate quizzes based on specific prompts, subjects, difficulty levels (Easy, Medium, Hard), and target student years.
- **Smart Duplicate Detection:** Built-in logic to ensure every generated question is unique.
- **One-Click Deployment:** Admins can review, approve, and save generated quizzes directly to the student portal.

### 👥 Role-Based Access Control
- **Admin Portal:**
  - Secure login with device verification.
  - Manage students, create/edit tests, and view comprehensive performance results.
  - Access to the AI Quiz Generator.
- **Student Portal:**
  - Year-specific dashboards (2nd, 3rd, 4th Year).
  - Take assigned tests and view instant results.
  - Access learning resources and coding platforms.

### 📚 Learning Resources & Tools
- **Digital Library:** Curated resources for programming languages including C++, Java, Python, R, HTML, and CSS.
- **Coding Platform:** Integrated environment for practicing coding problems.
- **Gamified Learning:** Interactive games to make learning fun and engaging.

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3 (Modern UI with Glassmorphism), JavaScript (ES6+)
- **Backend & Database:** Firebase Authentication, Cloud Firestore
- **AI Engine:** Google Gemini Pro API
- **Icons & Fonts:** FontAwesome, Google Fonts (Inter, Outfit)

## 📂 Project Structure

```
HOME/
├── index.html              # Main Landing & Login Page
├── admin.html              # Admin Dashboard
├── student-dashboard.html  # Student Dashboard
├── ai-quiz-generator.html  # AI Quiz Creation Tool
├── library.html            # Resource Library Hub
├── coding-platform.html    # Coding Practice Area
├── game.html               # Educational Games
└── ... (Language specific pages: cpp.html, java.html, etc.)
```

## 🚀 Getting Started

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/AI_AITM.git
    ```
2.  **Open the Application**
    - Navigate to the `HOME` directory.
    - Open `index.html` in your preferred web browser.
    - *Note: For the best experience, use a local server (e.g., Live Server in VS Code).*

3.  **Configuration**
    - The project uses Firebase for backend services. Ensure you have an active internet connection.
    - AI features require a valid Google Gemini API key (configured in `ai-quiz-generator.html`).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
