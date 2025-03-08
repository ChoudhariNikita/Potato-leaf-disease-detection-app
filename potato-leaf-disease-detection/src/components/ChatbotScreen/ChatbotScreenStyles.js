import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../styles/globalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  dateText: {
    textAlign: 'center',
    marginVertical: spacing.md,
    fontSize: 16,
    color: colors.primary,
  },
  flatList: {
    flex: 1,
  },
  messagesContainer: {
    padding: spacing.md,
  },
  messageContainer: {
    padding: spacing.md,
    borderRadius: 12,
    marginBottom: spacing.sm,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: colors.primary,
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: colors.secondary,
    alignSelf: 'flex-start',
  },
  messageText: {
    color: colors.white,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    borderTopWidth: 1,
    borderColor: colors.secondary,
  },
  input: {
    flex: 1,
    padding: spacing.md,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.secondary,
    backgroundColor: colors.white,
    marginRight: spacing.sm,
  },
  sendButton: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.md,
  },
  loadingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginHorizontal: 4,
  },
});