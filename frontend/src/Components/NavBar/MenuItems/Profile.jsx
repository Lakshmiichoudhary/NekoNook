import { useDispatch } from "react-redux";
import { removeuser } from "../../../Store/UserSlice"; 
import { useNavigate, Link } from "react-router-dom";
import PropTypes from "prop-types";

const Profile = ({ currentUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeuser());
  
    localStorage.removeItem("token");
  
    navigate("/login");
  };

  return (
    <div className="flex flex-col p-2 text-sm text-gray-700 font-rubik">
      {currentUser ? (
        <>
          {/* Authenticated logged-in menu option routes */}
          <div className="px-4 py-2 font-bold text-gray-900 border-b border-gray-100 max-w-[140px] truncate">
            Hi, {currentUser.name || "User"}
          </div>
          
          {currentUser.role === "admin" && (
            <Link to="/Admin-Dashboard" className="px-4 py-2 hover:bg-gray-100 rounded text-left transition font-medium text-orange-600">
              Admin Board
            </Link>
          )}
          
          {/* Clean logout element button component layout */}
          <button
            onClick={handleLogout}
            className="mt-1 px-4 py-2 text-left text-red-600 font-semibold hover:bg-red-50 rounded transition w-full"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          {/* Guest User Option Links */}
          <Link to="/login" className="px-4 py-2 hover:bg-gray-100 rounded text-left font-medium text-orange-500 transition">
            Login / Sign In
          </Link>
        </>
      )}
    </div>
  );
};

Profile.propTypes = {
  currentUser: PropTypes.object,
};

export default Profile;