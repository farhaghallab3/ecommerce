// src/context/AuthContext.tsx
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  type ReactNode,
} from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  userName: string | null;
  login: (token: string, name: string) => void;
  logout: () => void;
}

// إنشاء الـ Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider Component لتوفير الـ Context لباقي التطبيق
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    // عند تحميل التطبيق، تحقق من وجود token واسم مستخدم في localStorage
    const token = localStorage.getItem("token");
    const storedUserName = localStorage.getItem("userName");

    if (token && storedUserName) {
      setIsAuthenticated(true);
      setUserName(storedUserName);
    }
  }, []); // [] يعني هذا الـ effect سيعمل مرة واحدة فقط عند تحميل الـ component

  // دالة تسجيل الدخول: تخزن الـ token واسم المستخدم
  const login = (token: string, name: string) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userName", name);
    setIsAuthenticated(true);
    setUserName(name);
  };

  // دالة تسجيل الخروج: تحذف الـ token واسم المستخدم
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setIsAuthenticated(false);
    setUserName(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook مخصص لسهولة استخدام الـ Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};