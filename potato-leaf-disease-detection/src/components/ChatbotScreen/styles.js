import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../styles/globalStyles';

export default StyleSheet.create({
  chatContainer: {
    flex: 1,
    padding: spacing.md,
  },
  messageContainer: {
    padding: spacing.sm,
    borderRadius: 8,
    marginVertical: spacing.xs,
    maxWidth: '80%',
    marginHorizontal: spacing.md,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: colors.secondary,
  },
  messageText: {
    color: colors.white,
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: spacing.md,
    backgroundColor: colors.background,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    padding: spacing.sm,
  },
  headerText: {
    fontSize: 16,
    color: colors.text,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.md,
    marginHorizontal: spacing.md,
  },
  footerText: {
    color: colors.text,
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.md,
  },
  input: {
    flex: 1,
    padding: spacing.sm,
    borderColor: colors.border,
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
  flatListContent: {
    paddingBottom: spacing.lg,
  },
});