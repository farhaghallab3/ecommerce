import React from 'react';

interface AuthTemplateProps {
  children: React.ReactNode;
}

const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6  rounded-xl shadow-md">
        {children}
      </div>
    </div>
  );
};

export default AuthTemplate;
