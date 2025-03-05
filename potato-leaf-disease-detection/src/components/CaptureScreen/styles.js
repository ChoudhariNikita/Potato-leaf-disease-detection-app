import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../styles/globalStyles';

export default StyleSheet.create({
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.md,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.xl,
  },
  captureButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: spacing.xl,
    elevation: 4,
  },
  captureButtonIcon: {
    color: colors.white,
  },
  subtitle: {
    fontSize: 16,
    color: colors.primary,
    marginTop: spacing.lg,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.lg,
  },
  uploadButton: {
    padding: spacing.sm,
    backgroundColor: colors.primary,
    borderRadius: 24,
    marginRight: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
  uploadButtonIcon: {
    marginRight: 4,
    color: colors.white,
  },
  uploadButtonText: {
    color: colors.white,
  },
  galleryButton: {
    padding: spacing.sm,
    backgroundColor: colors.primary,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  galleryButtonText: {
    color: colors.white,
  },
});