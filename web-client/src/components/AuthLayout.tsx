import React from "react";

interface AuthLayoutProps {
  title: string;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  children: React.ReactNode;
}

function AuthLayout({ children, onSubmit, title }: AuthLayoutProps) {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="p-6 max-w-lg w-full  border-2 rounded-2xl shadow-xl">
        <form onSubmit={onSubmit}>
          <div className="space-y-6">
            <h2 className="font-bold w-full text-center text-2xl">{title}</h2>
            {children}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthLayout;
