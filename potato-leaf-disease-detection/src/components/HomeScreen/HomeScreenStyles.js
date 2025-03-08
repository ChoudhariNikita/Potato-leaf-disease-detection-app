import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../styles/globalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#4CAF50',
  },
  userIcon: {
    color: '#fff',
  },
  username: {
    marginLeft: 8,
    fontSize: 18,
    color: '#fff',
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  welcomeMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  additionalMessage: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginVertical: 8,
  },
  motto: {
    fontSize: 16,
    color: '#888',
    fontStyle: 'italic',
    marginTop: 16,
  },
  captureButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
  },
  captureButtonText: {
    color: '#fff',
    fontSize: 16,
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