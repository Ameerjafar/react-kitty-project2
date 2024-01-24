import React, { useState } from 'react';

export const ParagraphGenerator = () => {
  const [fileContent, setFileContent] = useState('');
  const fileName = 'paragraph.txt';
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(fileName, {
        headers: {
        'Content-Type': 'text/plain'
        }
      })
      if(response.ok) {
        const content = await response.text();
        setFileContent(content);
        console.log(content);
        console.log("the file is fetch properly");
      }else {
        console.log("The file is not fetch properly");
      }
    }
    fetchData();
  }, [fileContent]);
  return (
    <div>
      <h2>Para Generator</h2>
      <input type = "text" placeholder='Enter size of your paragraph'></input>
      <button>Generate</button>
      <p>{fileContent}</p>
    </div>
  )
};


