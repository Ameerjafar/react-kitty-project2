import React, { useState } from 'react';
export const ParagraphGenerator = () => {
  const [sentence, setSentence] = useState('');
  const [words, setWords] = useState(0);
  const Content = "hi this is ameer jafar who is created this text file.";
  const list = Content.split(' ');
  const onClickHander = () => {
    console.log(list);
    let str = "";
    for(let i = 0; i < words; i++) { 
      const randomIndex = Math.floor(Math.random() * list.length);
      str += list[randomIndex] + " ";
    }
    setSentence(str);
  }
  return (
    <div>
      <h2>Para Generator</h2>
      <input onChange = {(events) => {
        setWords(parseInt(events.target.value));
      }} type = "text" placeholder='Enter size of your paragraph'></input>
      <button onClick = {onClickHander}>Generate</button>
      <p>{sentence}</p>
    </div>
  )
};
 