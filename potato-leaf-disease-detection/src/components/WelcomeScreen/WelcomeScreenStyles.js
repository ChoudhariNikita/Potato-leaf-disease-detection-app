import { StyleSheet, Dimensions, Platform } from 'react-native';
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
  header: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 30,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerContainer: {
    width: 110,
    borderWidth: 0.5,
    borderColor: colors.primary,
    borderRadius: 8,
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  picker: {
    width: '100%',
    height: 36,
    color: colors.primary,
    fontSize: 14,
  },
  logo: {
    width: width * 0.2, // Adjust width to make the logo smaller
    height: width * 0.2, // Adjust height to make the logo smaller
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
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: spacing.md,
    width: '70%',
    elevation: 2,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.secondary,
    alignItems: 'center',
    width: '70%',
  },
  secondaryButtonText: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
  },
  version: {
    color: colors.textLight,
    fontSize: 12,
  }
});