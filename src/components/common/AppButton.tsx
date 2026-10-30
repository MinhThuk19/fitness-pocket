
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  type PressableProps,
} from 'react-native';

type AppButtonProps = Omit<PressableProps, 'children'> & {
  title: string;
  loading?: boolean;
  variant?: 'primary' | 'danger';
};

export default function AppButton({
  title,
  loading = false,
  disabled = false,
  variant = 'primary',
  style,
  ...pressableProps
}: AppButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      {...pressableProps}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      style={(state) => [
        styles.button,
        variant === 'danger' ? styles.dangerButton : styles.primaryButton,
        isDisabled ? styles.disabledButton : null,
        state.pressed && !isDisabled ? styles.pressedButton : null,
        typeof style === 'function'
          ? style(state)
          : style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 50,
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#176B87',
  },
  dangerButton: {
    backgroundColor: '#DC2626',
  },
  disabledButton: {
    opacity: 0.6,
  },
  pressedButton: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
