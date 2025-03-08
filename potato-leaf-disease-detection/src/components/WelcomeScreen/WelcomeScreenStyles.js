import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../styles/globalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.md,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
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
  picker: {
    width: '80%',
    marginTop: spacing.md,
  },
});