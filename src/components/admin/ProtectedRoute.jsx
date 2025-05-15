import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "recruiter") {
      navigate("/"); // Redirect to home if not authenticated or not a recruiter
    }
  }, [user, navigate]); // Add user and navigate to the dependency array

  // Render children only if the user is authenticated and has the correct role
  return user && user.role === "recruiter" ? children : null;
};

export default ProtectedRoute;
