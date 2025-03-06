import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../styles/globalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
  },
  messageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: colors.secondary,
    padding: spacing.sm,
    borderRadius: 8,
    marginVertical: spacing.xs,
    maxWidth: '80%',
    marginHorizontal: spacing.md,
  },
  userMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
  },
  messageText: {
    color: colors.white,
  },
  header: {
    alignItems: 'center',
    marginVertical: spacing.md,
    backgroundColor: colors.background,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 8,
    padding: spacing.sm,
  },
  headerText: {
    fontSize: typography.fontSizes.medium,
    color: colors.black,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.md,
    marginHorizontal: spacing.md,
  },
  typingIndicator: {
    color: colors.black,
    fontSize: typography.fontSizes.large,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.md,
  },
  input: {
    flex: 1,
    padding: spacing.sm,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 8,
    marginRight: spacing.sm,
  },
  sendButton: {
    backgroundColor: colors.primary,
    padding: spacing.sm,
    borderRadius: 8,
  },
  sendButtonText: {
    color: colors.white,
  },
  contentContainer: {
    paddingBottom: spacing.lg,
  },
});