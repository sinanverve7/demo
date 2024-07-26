import { Pressable, StyleSheet, Text } from "react-native";
export type LoginButtonProps = {
  buttonText: string;
  onPress?: () => void;
  disabled?: boolean;
};
export default function LoginButton({
  buttonText,
  onPress,
  disabled,
}: LoginButtonProps) {
  return (
    <Pressable
      style={[styles.loginButton, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: "#FF6600",
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#cccccc",
  },
});
