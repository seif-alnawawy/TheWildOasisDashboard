import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // Load the authenticated user
  const { isLoading, user } = useUser();

  // if no authenticated user, redirect to login page
  useEffect(() => {
    if (!user && !isLoading) navigate("/login");

    return () => {};
  }, [isLoading, navigate, user]);

  // if  there is user logged in, render the app
  if (user) return children;
}
