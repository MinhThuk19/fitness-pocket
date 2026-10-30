
import { Redirect } from 'expo-router';
import { useAuth } from '../features/auth/contexts/AuthContext';
import ProfileScreen from '../features/profile/ProfileScreen';

export default function ProfileRoute() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/login" />;
  }

  return <ProfileScreen />;
}
