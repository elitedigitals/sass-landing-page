import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Usage in any component: const { user, login, logout, isAuthenticated } = useAuth();
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
