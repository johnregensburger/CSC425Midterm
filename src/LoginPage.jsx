import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const users = new Map();
  users.set("username", "password");
  
  const goToLoginPage = () => {
    if (users.has(username) && users.get(username) == password) {
      navigate('/landing'); // Navigate to the Login page
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <div>
      <h1>Login Here</h1>
      <div>
        <label htmlFor = "user">Username:</label><br></br>
        <input type = "text" id = "user" value = {username} onChange = {(e) => setUsername(e.target.value)}></input><br></br>
        <label for = "pass">Password:</label><br></br>
        <input type = "text" id = "pass" value = {password} onChange = {(e) => setPassword(e.target.value)}></input>
      </div>
      <br></br>
      <button onClick={goToLoginPage}>Take Qualifier Quiz</button>
    </div>
  );
};
  
  export default LoginPage;
  