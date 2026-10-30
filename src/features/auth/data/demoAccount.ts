
import type { UserProfile } from '../types';

type DemoAccount = {
  username: string;
  password: string;
  profile: UserProfile;
};

export const demoAccount: DemoAccount = {
  username: 'minhthu',
  password: 'Gym@123',
  profile: {
    memberCode: 'FIT001',
    fullName: 'Nguyen Minh Thu',
    planName: 'Premium',
    trainingSessions: [
      {
        id: 'S001',
        title: 'Strength Training',
        day: 'Monday',
        duration: '60 minutes',
      },
      {
        id: 'S002',
        title: 'Cardio Workout',
        day: 'Wednesday',
        duration: '45 minutes',
      },
      {
        id: 'S003',
        title: 'Yoga Session',
        day: 'Friday',
        duration: '50 minutes',
      },
    ],
  },
};
