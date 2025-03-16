import { StyleSheet, Dimensions } from 'react-native';
import { colors, spacing } from '../../styles/globalStyles';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  logo: {
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: width * 0.120, // Adjust border radius accordingly
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    padding: spacing.md,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.secondary,
    backgroundColor: colors.white,
    marginBottom: spacing.md,
  },
  button: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: 24,
    alignItems: 'center',
    marginBottom: spacing.md,
    width: '80%',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
    padding: spacing.md,
    borderRadius: 24,
    alignItems: 'center',
    width: '80%',
  },
  secondaryButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  skipButton: {
    marginTop: spacing.lg,
  },
  skipButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});