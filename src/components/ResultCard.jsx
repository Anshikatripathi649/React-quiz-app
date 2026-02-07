import React from 'react'

const ResultCard = ({score, total, changeStatus, name, timeUsed}) => {
    const percent = (score/total)* 100 ;
    let min = Math.floor(timeUsed/60).toString().padStart(2, '0');
   let sec = (timeUsed % 60).toString().padStart(2, '0');
  return (
    <div>
      <h2>Result Dashboard</h2>
      { (percent <= 100 && percent >= 90) ? 
      <h3>{name} Perfect Score! You're a Master. 🏆</h3>: 
       (percent >= 50 && percent < 90) ? <h3> {name} Great job! Keep refining your skills. 👍</h3>
       :<h3> {name} Good attempt! Time to hit the docs and try again. 📖</h3>}
      <h3>Total Questions: {total}</h3>
      <h3>Correct Answers: {score}</h3>
      <h3> Time Taken: {min} Min, {sec} Sec </h3>
       <button className='start-btn' onClick={()=>changeStatus("active")}>RESTART QUIZ</button>
    </div>
  )
}

export default ResultCard
