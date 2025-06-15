// src/context/AuthContext.tsx
import  {
  createContext,
  useState,
  useEffect,
  useContext,
  type ReactNode, 
} from "react";
import { useNavigate } from "react-router-dom"; 

interface AuthContextType {
  isAuthenticated: boolean;
  userName: string | null;
  userEmail: string | null;
  login: (token: string, name: string, email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// قم بتعديل تعريف الـ props هنا
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserName = localStorage.getItem("userName");
    const storedUserEmail = localStorage.getItem("userEmail");

    if (token && storedUserName) {
      setIsAuthenticated(true);
      setUserName(storedUserName);
      setUserEmail(storedUserEmail);
    }
  }, []);

  const login = (token: string, name: string, email: string) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    setIsAuthenticated(true);
    setUserName(name);
    setUserEmail(email);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    setIsAuthenticated(false);
    setUserName(null);
    setUserEmail(null);
    console.trace("Redirect from AuthContext logout.");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userName, login, logout, userEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};