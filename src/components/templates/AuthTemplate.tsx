import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      {children}
    </div>
  </div>
);
export default AuthLayout;
