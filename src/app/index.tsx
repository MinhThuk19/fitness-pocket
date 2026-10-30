
import { Redirect } from 'expo-router';
import { useAuth } from '../features/auth/contexts/AuthContext';

export default function Index() {
  const { user } = useAuth();

  return <Redirect href={user ? '/profile' : '/login'} />;
}
