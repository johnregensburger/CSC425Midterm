
import { useNavigate } from 'react-router-dom';
const WelcomePage = () => {

  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/'); // Navigate to the home page
  };
 
    return (
      <div>
        <h1>Welcome to HackerCon</h1>
        <h3>Time: midnight</h3>
        <h3>Place: my house</h3>
        <h3>Goal: hack</h3>
        <button onClick={goToHomePage}>HOME</button>
      </div>
    );
  };
  
  export default WelcomePage;
  
  