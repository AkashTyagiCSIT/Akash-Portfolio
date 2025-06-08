import React, { useState, useEffect } from 'react';
import { useUser } from '../../contexts/UserContext';
import { Users, FolderOpen, Bell, Settings, LogOut } from 'lucide-react';
import StatsCard from './StatsCard';
import { DashboardStats } from '../../types';

export default function Dashboard() {
  const { userData, resetOnboarding } = useUser();
  const [stats, setStats] = useState<DashboardStats>({
    teamMembers: 12,
    activeProjects: 8,
    notifications: 5,
  });

  // Simulate loading stats (in a real app, this would be an API call)
  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        teamMembers: Math.floor(Math.random() * 50) + 5,
        activeProjects: Math.floor(Math.random() * 20) + 3,
        notifications: Math.floor(Math.random() * 15) + 1,
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    resetOnboarding();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-3"></div>
              <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button
                onClick={handleLogout}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white p-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Welcome back, {userData.personalInfo.name}! 👋
              </h2>
              <p className="text-blue-100 mb-2">
                {userData.businessInfo.companyName} • {userData.businessInfo.industry}
              </p>
              <p className="text-blue-100">
                Here's what's happening with your projects today.
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <div className="text-sm text-blue-100">Company Size</div>
              <div className="text-lg font-semibold">{userData.businessInfo.companySize}</div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Team Members"
            value={stats.teamMembers}
            icon={Users}
            color="bg-gradient-to-r from-blue-500 to-blue-600"
            trend={{ value: 12, isPositive: true }}
          />
          <StatsCard
            title="Active Projects"
            value={stats.activeProjects}
            icon={FolderOpen}
            color="bg-gradient-to-r from-green-500 to-green-600"
            trend={{ value: 8, isPositive: true }}
          />
          <StatsCard
            title="Notifications"
            value={stats.notifications}
            icon={Bell}
            color="bg-gradient-to-r from-purple-500 to-purple-600"
            trend={{ value: 3, isPositive: false }}
          />
        </div>

        {/* Content Grid */}
        <div className={`grid gap-6 ${
          userData.preferences.defaultLayout === 'grid' 
            ? 'grid-cols-1 lg:grid-cols-2' 
            : 'grid-cols-1'
        }`}>
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { action: 'Project "Website Redesign" was updated', time: '2 hours ago' },
                { action: 'New team member joined', time: '4 hours ago' },
                { action: 'Milestone "Phase 1" completed', time: '1 day ago' },
                { action: 'Client feedback received', time: '2 days ago' },
              ].map((activity, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-gray-700">{activity.action}</span>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'New Project', color: 'bg-blue-500 hover:bg-blue-600' },
                { label: 'Add Member', color: 'bg-green-500 hover:bg-green-600' },
                { label: 'View Reports', color: 'bg-purple-500 hover:bg-purple-600' },
                { label: 'Settings', color: 'bg-gray-500 hover:bg-gray-600' },
              ].map((action, index) => (
                <button
                  key={index}
                  className={`${action.color} text-white p-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105`}
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* User Preferences Info */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Preferences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Theme</span>
              <span className="font-medium capitalize">{userData.preferences.theme}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Layout</span>
              <span className="font-medium capitalize">{userData.preferences.defaultLayout}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}