import React, { useState } from 'react';
import { useUser } from '../../contexts/UserContext';
import ProgressBar from './ProgressBar';
import Step1PersonalInfo from './Step1PersonalInfo';
import Step2BusinessInfo from './Step2BusinessInfo';
import Step3Preferences from './Step3Preferences';
import { PersonalInfo, BusinessInfo, Preferences } from '../../types';

export default function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const { userData, updatePersonalInfo, updateBusinessInfo, updatePreferences, completeOnboarding } = useUser();

  const handleStep1Next = (data: PersonalInfo) => {
    updatePersonalInfo(data);
    setCurrentStep(2);
  };

  const handleStep2Next = (data: BusinessInfo) => {
    updateBusinessInfo(data);
    setCurrentStep(3);
  };

  const handleStep3Submit = (data: Preferences) => {
    updatePreferences(data);
    completeOnboarding();
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1PersonalInfo
            initialData={userData.personalInfo}
            onNext={handleStep1Next}
          />
        );
      case 2:
        return (
          <Step2BusinessInfo
            initialData={userData.businessInfo}
            onNext={handleStep2Next}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <Step3Preferences
            initialData={userData.preferences}
            onSubmit={handleStep3Submit}
            onBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <ProgressBar currentStep={currentStep} totalSteps={3} />
        {renderCurrentStep()}
      </div>
    </div>
  );
}