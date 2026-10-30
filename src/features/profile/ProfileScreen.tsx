
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

import { useAuth } from '../auth/contexts/AuthContext';
import AppButton from '../../components/common/AppButton';
import TrainingSessionItem from '../../components/common/TrainingSessionItem';

export default function ProfileScreen() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  if (!user) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Fitness Pocket</Text>
      <Text style={styles.subtitle}>Member Profile</Text>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user.fullName.charAt(0).toUpperCase()}
          </Text>
        </View>

        <Text style={styles.fullName}>{user.fullName}</Text>
        <Text style={styles.memberCode}>
          Member Code: {user.memberCode}
        </Text>

        <View style={styles.planBadge}>
          <Text style={styles.planText}>{user.planName} Plan</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Training Sessions</Text>

      {user.trainingSessions.map((session) => (
        <TrainingSessionItem key={session.id} session={session} />
      ))}

      <AppButton
        title="Logout"
        variant="danger"
        onPress={handleLogout}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 48,
    paddingBottom: 32,
    backgroundColor: '#F4F7FB',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#176B87',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 24,
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 28,
  },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#176B87',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  fullName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
  },
  memberCode: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 8,
  },
  planBadge: {
    backgroundColor: '#DFF5E8',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 14,
  },
  planText: {
    color: '#16794B',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 14,
  },
});
