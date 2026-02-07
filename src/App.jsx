import { useState, useEffect } from 'react'
import './App.css'
import WelcomeCard from './components/WelcomeCard'
import QuizCard from './components/QuizCard'
import ResultCard from './components/ResultCard'

function App() {
  const data = [
  {
    id: 1,
    question: "Which hook is used to manage state in a functional React component?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correctAnswer: "useState",
    difficulty: "Beginner",
    topic: "React Hooks"
  },
  {
    id: 2,
    question: "What is the correct syntax to create a function in JavaScript?",
    options: [
      "function = myFunction()",
      "function:myFunction()",
      "function myFunction()",
      "create myFunction()"
    ],
    correctAnswer: "function myFunction()",
    difficulty: "Beginner",
    topic: "JS Basics"
  },
  {
    id: 3,
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "JavaScript Extension",
      "JSON XML",
      "Java Syntax Extension"
    ],
    correctAnswer: "JavaScript XML",
    difficulty: "Beginner",
    topic: "React Fundamentals"
  },
  {
    id: 4,
    question: "Which of the following is used to pass data to a child component?",
    options: ["State", "Props", "Keys", "Refs"],
    correctAnswer: "Props",
    difficulty: "Beginner",
    topic: "React Components"
  },
  {
    id: 5,
    question: "Which keyword is used to declare a constant variable in ES6?",
    options: ["var", "let", "const", "constant"],
    correctAnswer: "const",
    difficulty: "Beginner",
    topic: "JS ES6"
  }
  ];
  const [quizAppStatus, setQuizAppStatus] = useState('welcome');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState('')
  const [timer, setTimer] = useState(300);
 
  useEffect(() => {
     let id;
    if(quizAppStatus === 'active'){
       id = setInterval( ()=>
      {
          setTimer((pre) => pre-1);
  }, 1000);
    }
    return () => clearInterval(id);
  }, [ quizAppStatus]);

 useEffect(() => {
  if(timer === 0 && quizAppStatus === 'active') {
      setQuizAppStatus('finish');
    }
 }, [timer, quizAppStatus]);

  const changeIdx = (idx, answer) => {
    if(answer === data[currentIdx].correctAnswer) {
      setScore((preScore) => preScore+1);
    }
    if(idx == data.length-1){
        setQuizAppStatus('finish');
    }else {
      setCurrentIdx(idx+1);   
    }
  }

  const handleReStartQuiz = () => {
    setCurrentIdx(0);
    setScore(0);
    setTimer(300);
    setQuizAppStatus("active");
    setScore(0);
  }
  return (
    <>
     <div className='card'>
      {quizAppStatus === 'welcome' && <WelcomeCard changeStatus={setQuizAppStatus} setName={setUserName} name={userName}/>}
      {quizAppStatus === 'active' && <QuizCard data={data} changeIdx={changeIdx} currentIdx={currentIdx} time={timer}/>}
      {quizAppStatus === 'finish' && <ResultCard score={score} total={data.length} changeStatus={handleReStartQuiz} name={userName} timeUsed={300 - timer}/>}
      </div>
       
    </>
  )
}

export default App
