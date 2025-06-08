import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { UserData, PersonalInfo, BusinessInfo, Preferences } from '../types';

interface UserContextType {
  userData: UserData;
  updatePersonalInfo: (info: PersonalInfo) => void;
  updateBusinessInfo: (info: BusinessInfo) => void;
  updatePreferences: (prefs: Preferences) => void;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const initialUserData: UserData = {
  personalInfo: { name: '', email: '' },
  businessInfo: { companyName: '', industry: '', companySize: '' },
  preferences: { theme: 'light', defaultLayout: 'grid' },
  isOnboardingComplete: false,
};

type UserAction =
  | { type: 'UPDATE_PERSONAL_INFO'; payload: PersonalInfo }
  | { type: 'UPDATE_BUSINESS_INFO'; payload: BusinessInfo }
  | { type: 'UPDATE_PREFERENCES'; payload: Preferences }
  | { type: 'COMPLETE_ONBOARDING' }
  | { type: 'RESET_ONBOARDING' }
  | { type: 'LOAD_USER_DATA'; payload: UserData };

function userReducer(state: UserData, action: UserAction): UserData {
  switch (action.type) {
    case 'UPDATE_PERSONAL_INFO':
      return { ...state, personalInfo: action.payload };
    case 'UPDATE_BUSINESS_INFO':
      return { ...state, businessInfo: action.payload };
    case 'UPDATE_PREFERENCES':
      return { ...state, preferences: action.payload };
    case 'COMPLETE_ONBOARDING':
      return { ...state, isOnboardingComplete: true };
    case 'RESET_ONBOARDING':
      return { ...initialUserData };
    case 'LOAD_USER_DATA':
      return action.payload;
    default:
      return state;
  }
}

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, dispatch] = useReducer(userReducer, initialUserData);

  useEffect(() => {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        dispatch({ type: 'LOAD_USER_DATA', payload: parsedData });
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  const updatePersonalInfo = (info: PersonalInfo) => {
    dispatch({ type: 'UPDATE_PERSONAL_INFO', payload: info });
  };

  const updateBusinessInfo = (info: BusinessInfo) => {
    dispatch({ type: 'UPDATE_BUSINESS_INFO', payload: info });
  };

  const updatePreferences = (prefs: Preferences) => {
    dispatch({ type: 'UPDATE_PREFERENCES', payload: prefs });
  };

  const completeOnboarding = () => {
    dispatch({ type: 'COMPLETE_ONBOARDING' });
  };

  const resetOnboarding = () => {
    dispatch({ type: 'RESET_ONBOARDING' });
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        updatePersonalInfo,
        updateBusinessInfo,
        updatePreferences,
        completeOnboarding,
        resetOnboarding,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}