import React, { useState } from 'react';
import { Palette, Layout, Sun, Moon, Grid, List } from 'lucide-react';
import { Preferences } from '../../types';

interface Step3PreferencesProps {
  initialData: Preferences;
  onSubmit: (data: Preferences) => void;
  onBack: () => void;
}

export default function Step3Preferences({ initialData, onSubmit, onBack }: Step3PreferencesProps) {
  const [formData, setFormData] = useState<Preferences>(initialData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (field: keyof Preferences, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-8">
        <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-4">
          <Palette className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Preferences</h2>
        <p className="text-gray-600">Customize your experience</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Theme Preference
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                formData.theme === 'light'
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onClick={() => handleInputChange('theme', 'light')}
            >
              <div className="flex items-center justify-center mb-3">
                <Sun className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-center font-medium text-gray-900">Light Mode</h3>
              <p className="text-center text-sm text-gray-600 mt-1">
                Clean and bright interface
              </p>
            </div>
            <div
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                formData.theme === 'dark'
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onClick={() => handleInputChange('theme', 'dark')}
            >
              <div className="flex items-center justify-center mb-3">
                <Moon className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-center font-medium text-gray-900">Dark Mode</h3>
              <p className="text-center text-sm text-gray-600 mt-1">
                Easy on the eyes
              </p>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Default Dashboard Layout
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                formData.defaultLayout === 'grid'
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onClick={() => handleInputChange('defaultLayout', 'grid')}
            >
              <div className="flex items-center justify-center mb-3">
                <Grid className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-center font-medium text-gray-900">Grid Layout</h3>
              <p className="text-center text-sm text-gray-600 mt-1">
                Cards in a grid format
              </p>
            </div>
            <div
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                formData.defaultLayout === 'list'
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onClick={() => handleInputChange('defaultLayout', 'list')}
            >
              <div className="flex items-center justify-center mb-3">
                <List className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-center font-medium text-gray-900">List Layout</h3>
              <p className="text-center text-sm text-gray-600 mt-1">
                Items in a vertical list
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200"
          >
            Back
          </button>
          <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 px-6 rounded-lg font-medium hover:from-green-600 hover:to-teal-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
          >
            Complete Setup
          </button>
        </div>
      </form>
    </div>
  );
}