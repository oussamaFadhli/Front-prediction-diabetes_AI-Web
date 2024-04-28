// DashboardLayout.js
import React from 'react';
import { AsideBar } from '../components';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AsideBar/>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4">
          {/* Header content */}
          <h1 className="text-xl font-bold">Dashboard</h1>
        </header>

        {/* Main Content Area */}
        <main className="p-4">
          {/* Content */}
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
