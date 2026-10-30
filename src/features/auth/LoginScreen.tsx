
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

import { useAuth } from './contexts/AuthContext';
import FormInput from '../../components/common/FormInput';
import AppButton from '../../components/common/AppButton';

export default function LoginScreen() {
  const { login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (loading) {
      return;
    }

    if (!username.trim() || !password) {
      setError('Please enter your username and password.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const success = await login(
        username.trim().toLowerCase(),
        password
      );

      if (success) {
        router.replace('/profile');
      } else {
        setError('Incorrect username or password.');
      }
    } catch {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fitness Pocket</Text>
      <Text style={styles.subtitle}>Sign in to your account</Text>

      <FormInput
        label="Username"
        placeholder="Enter username"
        value={username}
        onChangeText={(value) => {
          setUsername(value);
          setError('');
        }}
        autoCapitalize="none"
        autoCorrect={false}
        editable={!loading}
      />

      <FormInput
        label="Password"
        placeholder="Enter password"
        value={password}
        onChangeText={(value) => {
          setPassword(value);
          setError('');
        }}
        secureTextEntry
        editable={!loading}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <AppButton
        title="Login"
        onPress={handleLogin}
        loading={loading}
        disabled={loading}
      />

      <Text style={styles.hint}>
        Demo account: minhthu / Gym@123
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F4F7FB',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#176B87',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 32,
  },
  error: {
    color: '#DC2626',
    marginBottom: 14,
  },
  hint: {
    marginTop: 20,
    textAlign: 'center',
    color: '#64748B',
    fontSize: 13,
  },
});
