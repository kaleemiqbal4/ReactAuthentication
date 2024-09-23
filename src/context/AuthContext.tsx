import React, { createContext, useContext, useState } from "react";

// Define the shape of the auth context
interface AuthContextType {
  user: any; // Replace 'any' with a specific user type if you have one
  login: (userData: any) => void;
  logout: () => void;
}

// Create the AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null); // Manage user state

  const login = (userData: any) => {
    setUser(userData); // Set user data on login
    // You could also add logic to save user data to local storage or handle tokens here
  };

  const logout = () => {
    setUser(null); // Clear user data on logout
    // Add any additional logout logic, such as clearing tokens
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
