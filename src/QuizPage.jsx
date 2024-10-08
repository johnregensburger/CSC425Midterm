import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const QuizPage = () => {

  const navigate = useNavigate();

  const [react, setReact] = useState(null);
  const [html, setHtml] = useState(null);
  const [js, setJs] = useState(null);

  const goToWelcomePage = () => {
    if(react == "true" && html == "true" && js == "true") {
      navigate('/welcome'); // Navigate to the Welcome page
    } else {
      alert("EXTREMELY LOUD INCORRECT BUZZER!");
    }
  };
 
    return (
      <div>
        <h1>Take Quiz to Qualify</h1>
        <p>Welcome to the qualifier quiz</p>
        <form>
          <label>React is used for full stack web development.</label><br></br>
          <input name = "react" type = "radio" id = "reactTrue" value = "true" onChange = {(e) => setReact(e.target.value)}></input>
          <label for = "reactTrue">True</label>
          <input name = "react" type = "radio" id = "reactFalse" value = "false" onChange = {(e) => setReact(e.target.value)}></input>
          <label for = "reactFalse">False</label>
          <br></br>
          <label>HTML is used for full stack web development.</label><br></br>
          <input name = "html" type = "radio" id = "htmlTrue" value = "true" onChange = {(e) => setHtml(e.target.value)}></input>
          <label for = "htmlTrue">True</label>
          <input name = "html" type = "radio" id = "htmlFalse" value = "false" onChange = {(e) => setHtml(e.target.value)}></input>
          <label for = "htmlFalse">False</label>
          <br></br>
          <label>JavaScript is used for full stack web development.</label><br></br>
          <input name = "js" type = "radio" id = "jsTrue" value = "true" onChange = {(e) => setJs(e.target.value)}></input>
          <label for = "jsTrue">True</label>
          <input name = "js" type = "radio" id = "jsFalse" value = "false" onChange = {(e) => setJs(e.target.value)}></input>
          <label for = "jsFalse">False</label>
        </form>
        <button onClick={goToWelcomePage}>Submit Quiz</button>
      </div>
    );
  };
  
  export default QuizPage;
  
  