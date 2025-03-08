import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../styles/globalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    padding: spacing.md,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.md,
    elevation: 2,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: spacing.sm,
    color: colors.primary,
    fontSize: 18,
  },
  cardText: {
    fontSize: 16,
    color: colors.black,
    lineHeight: 24,
  },
});