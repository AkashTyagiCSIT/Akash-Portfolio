export interface PersonalInfo {
  name: string;
  email: string;
}

export interface BusinessInfo {
  companyName: string;
  industry: string;
  companySize: string;
}

export interface Preferences {
  theme: 'light' | 'dark';
  defaultLayout: 'grid' | 'list';
}

export interface UserData {
  personalInfo: PersonalInfo;
  businessInfo: BusinessInfo;
  preferences: Preferences;
  isOnboardingComplete: boolean;
}

export interface DashboardStats {
  teamMembers: number;
  activeProjects: number;
  notifications: number;
}