import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../styles/globalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  captureButtonIcon: {
    color: colors.white,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.md,
  },
  uploadButton: {
    backgroundColor: colors.primary,
    padding: spacing.sm,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: spacing.sm,
  },
  uploadButtonIcon: {
    marginRight: 4,
    color: colors.white,
  },
  uploadButtonText: {
    color: colors.white,
  },
  galleryButton: {
    backgroundColor: colors.secondary,
    padding: spacing.sm,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  galleryButtonText: {
    color: colors.white,
  },
});