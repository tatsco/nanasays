import React from 'react';
import nanasphoto from './images/nanasphoto1.png';
import './App.css';
import responses from './voiceCollection.js';

function App() {

  const returnNumber = () => {
    let responseNumber;
    const responsesLength = Object.values(responses).length;
    responseNumber = Math.ceil(Math.random() * responsesLength);
    console.log("responsesNumber", responseNumber, "responseLength", responsesLength);
    return responseNumber;
  };

  const handleClick = () => {
    const audio = new Audio(responses[returnNumber()]);
    audio.play()
  };
  return (

      <div className="App">
        <div className="card">
          <img src={nanasphoto} alt='nana'/>
          <h1 className="title">Sister Mary Said</h1>
          <h2 className="sub-title"> The HBIC and Deaconess</h2>
          <p className="description">Well hello, what the John Brown is wrong with you? You must be dizzy if you never heard about the Magic 8 Ball? God is my Magic 8 Ball, and all. Alright now, go ahead and close your eyes, ask me whatever is on your mind and press the damn button.</p>
          <p><button onClick={handleClick}>Ask Nana!*</button></p>
          <h5 className="disclaimer">*DISCLAIMER: By participating in the 'Ask Nana' experience you are opting to subject yourself to blunt and unfiltered honesty. All responses expressed on this website are soley those of Nana and she does not care about your feelings. Ask at your own risk.</h5>
        </div>

    </div>

  );
}

export default App;
