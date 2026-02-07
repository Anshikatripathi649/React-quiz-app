import {useState} from 'react'
const WelcomeCard = ({ changeStatus, setName, name }) => {

  const handleOnclick = (e) => {
    changeStatus("active");
     
  };
  const handleOnChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div className='card'>
      <h1>TECH QUIZ</h1>
        <h2>Test your React & JS fundamentals</h2>
        <input type="text" className='name-input' placeholder='Enter your name to begin...' onChange={handleOnChange} value={name}/>
        <br />
        <button onClick={handleOnclick} className='start-btn' disabled={!name}>Start Quiz</button>
    </div>
  )
}

export default WelcomeCard;
