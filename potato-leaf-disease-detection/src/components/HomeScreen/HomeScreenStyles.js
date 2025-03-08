import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../styles/globalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: spacing.md,
  },
  userIcon: {
    color: colors.primary,
  },
  username: {
    marginLeft: spacing.sm,
    color: colors.primary,
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
  captureButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  carouselContainer: {
    padding: spacing.md,
  },
  carouselTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.sm,
  },
});