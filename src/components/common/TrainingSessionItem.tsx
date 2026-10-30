
import { StyleSheet, Text, View } from 'react-native';
import type { TrainingSession } from '../../features/auth/types';

type TrainingSessionItemProps = {
  session: TrainingSession;
};

export default function TrainingSessionItem({
  session,
}: TrainingSessionItemProps) {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>🏋️</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.title}>{session.title}</Text>
        <Text style={styles.day}>{session.day}</Text>
        <Text style={styles.duration}>{session.duration}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#E0F2FE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  icon: {
    fontSize: 24,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  day: {
    fontSize: 14,
    color: '#176B87',
    marginTop: 4,
  },
  duration: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 3,
  },
});
