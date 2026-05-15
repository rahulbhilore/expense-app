import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Home = () => {

    const navigate = useNavigate()

    const handleSubmit = ()=>{
        navigate(1)
    }

  return (
    <div>
      <h3>This is Home Page</h3>
      <button onClick={handleSubmit}></button>
      <Link to="/login">Go to login page</Link>
    </div>
  );
};

export default Home;
