"use client";

import { useState } from "react";
import {
  Bell,
  ChevronRight,
  Key,
  Moon,
  Wallet,
  Settings2,
  LogOut,
} from "lucide-react";

export default function ProfilePage() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen text-white pb-20">
      {/* Profile Header */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-700 p-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden">
            <img
              src="/dp.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-blue-100">@johndoe</p>
          </div>
          <div className="flex gap-8 text-center">
            <div>
              <p className="text-2xl font-bold">1.2k</p>
              <p className="text-blue-100">Following</p>
            </div>
            <div>
              <p className="text-2xl font-bold">8.5k</p>
              <p className="text-blue-100">Followers</p>
            </div>
            <div>
              <p className="text-2xl font-bold">$2.4k</p>
              <p className="text-blue-100">Earned</p>
            </div>
          </div>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="p-4 space-y-4">
        {/* Account Settings */}
        <div className="bg-[#2a2f35] rounded-lg">
          <button
            className="w-full flex items-center justify-between p-4"
            onClick={() => {}}
          >
            <div className="flex items-center gap-3">
              <Settings2 className="w-6 h-6 text-gray-400" />
              <span className="font-medium">Account Settings</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Notifications */}
        <div className="bg-[#2a2f35] rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-6 h-6 text-gray-400" />
              <span className="font-medium">Notifications</span>
            </div>
            <div
              className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                notifications ? "bg-blue-600" : "bg-gray-700"
              }`}
              onClick={() => setNotifications(!notifications)}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  notifications ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-[#2a2f35] rounded-lg">
          <button
            className="w-full flex items-center justify-between p-4"
            onClick={() => {}}
          >
            <div className="flex items-center gap-3">
              <Key className="w-6 h-6 text-gray-400" />
              <span className="font-medium">Security</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Connected Wallets */}
        <div className="bg-[#2a2f35] rounded-lg">
          <button
            className="w-full flex items-center justify-between p-4"
            onClick={() => {}}
          >
            <div className="flex items-center gap-3">
              <Wallet className="w-6 h-6 text-gray-400" />
              <span className="font-medium">Connected Wallets</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Appearance */}
        <div className="bg-[#2a2f35] rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Moon className="w-6 h-6 text-gray-400" />
              <span className="font-medium">Dark Mode</span>
            </div>
            <div
              className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                darkMode ? "bg-blue-600" : "bg-gray-700"
              }`}
              onClick={() => setDarkMode(!darkMode)}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  darkMode ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Logout */}
        <button className="w-full bg-red-600 text-white py-2 rounded-lg mt-8 flex items-center justify-center">
          <LogOut className="w-5 h-5 mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
}
