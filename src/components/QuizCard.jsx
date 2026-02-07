import {useEffect, useState} from 'react'

const QuizCard = ({data, changeIdx, currentIdx, time }) => {
 console.log(currentIdx);
 const [selectedOption, setSelectedOption] = useState('');
    const handleOnclick = (e) => {
        setSelectedOption(e.target.value);
    }
 let min = Math.floor(time/60).toString().padStart(2, '0');
 let sec = (time % 60).toString().padStart(2, '0');
  return (
    <div> 
      <button> {min}:{sec} </button>
      <h3>Question {data[currentIdx].id} of 5</h3>
      <h2>{data[currentIdx].question}</h2>
      <div key={currentIdx}>
         <input type="radio" name='option' id='a' onClick={handleOnclick} value={data[currentIdx].options[0]}
       />
     <label htmlFor="a">{data[currentIdx].options[0]}</label>
     <br />
      <input type="radio" name='option' id='b' onClick={handleOnclick} value={data[currentIdx].options[1]}
       />
        <label htmlFor="b">{data[currentIdx].options[1]}</label>
        <br />
      <input type="radio" name='option' id='c' onClick={handleOnclick} value={data[currentIdx].options[2]}
       />
      <label htmlFor="c"> {data[currentIdx].options[2]}</label>
       <br />
      <input type="radio" name='option' id='d' onClick={handleOnclick} value={data[currentIdx].options[3]}
       />
      <label htmlFor="d">{data[currentIdx].options[3]}</label>
      </div>
      
      <br />
      <button onClick={()=>(changeIdx(currentIdx, selectedOption, ), setSelectedOption(''))}
        disabled={!selectedOption}>Next</button>
    </div>
  )
}
 
export default QuizCard;
