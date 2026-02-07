React Quiz App 🧠
A dynamic, logic-driven technical quiz application built with React 19 and Vite 7. '
This project demonstrates advanced state management, component synchronization, 
and precise time-handling logic.

Images: 
<img width="910" height="847" alt="Screenshot 2026-02-07 170838" src="https://github.com/user-attachments/assets/5a10b8ae-8f29-40bd-bc1a-916e29c7ad08" />
<img width="946" height="857" alt="Screenshot 2026-02-07 170928" src="https://github.com/user-attachments/assets/58a4ab0b-703c-41d9-b749-9131374f308c" />
<img width="936" height="870" alt="Screenshot 2026-02-07 170920" src="https://github.com/user-attachments/assets/ed00ffdb-43ed-4c90-8dd8-92f109270cc8" />



🚀 Key Features
Timed Quiz Engine: Features a 5-minute (300-second) countdown timer 
with automatic termination when time expires.

Synchronized State Machine: Manages transitions between the WelcomeCard, 
QuizCard, and ResultCard components based on the app status.

Real-time Scoring: Accurately tracks user performance and 
provides instant feedback based on the percentage scored.

Result Analytics: Displays correct answers, total questions, 
and the exact time taken to complete the quiz.

Interactive UI: Responsive design with scale-on-focus inputs
and hover effects for buttons.

🛠️ Tech Stack
Core: React 19 (Functional Components & Hooks).

Build Tool: Vite 7.

Styling: Modern CSS3 (Flexbox & Responsive design).

Linting: ESLint 9 for code quality.

🧠 Technical Highlights
1. Memory Leak Prevention
The application ensures high performance by using the useEffect cleanup pattern. The setInterval used for the timer is cleared immediately when the component unmounts or the quiz status changes.

2. Side-Effect Synchronization
The app uses a "Referee" useEffect to monitor the timer state independently. This prevents stale closure bugs and ensures the quiz finishes exactly when the countdown hits zero.

3. Asynchronous State Safety
Score updates use functional state updates (setScore((preScore) => preScore + 1)) to guarantee accuracy during rapid user interactions.

🏁 Getting Started
Clone the Repository:

Bash
git clone https://github.com/Anshikatripathi649/react-quiz-app.git
Install Dependencies:

Bash
npm install
Launch Development Server:

Bash
npm run dev
📂 Project Structure
Plaintext
react-quiz-app/
├── src/
│   ├── components/
│   │   ├── WelcomeCard.jsx  # User entry & name capture
│   │   ├── QuizCard.jsx     # Timer display & question logic
│   │   └── ResultCard.jsx   # Performance analytics & reset
│   ├── App.jsx              # Main application engine
│   ├── main.jsx             # Entry point
│   └── index.css            # Global theme styles
├── .gitignore               # Excludes node_modules/ and build files
└── package.json             # Project dependencies & scripts
