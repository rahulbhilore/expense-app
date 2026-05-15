import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/login"> Login</Link>

      <Link to="/register"> Register</Link>

      <Link to="/dashboard"> DashBoard</Link>

      <Link to="/home"> Home</Link>
    </nav>
  );
};

export default Navbar;



