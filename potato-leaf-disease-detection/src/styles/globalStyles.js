import { StyleSheet } from 'react-native';

// Global colors
export const colors = {
  primary: '#2E7D32',
  primaryLight: '#4CAF50',
  secondary: '#81C784',
  white: '#FFFFFF',
  black: '#333333',
  gray: '#757575',
  lightGray: '#E0E0E0',
  background: '#F5F5F5',
};

// Global typography
export const typography = {
  fontSizes: {
    small: 12,
    medium: 16,
    large: 18,
    xlarge: 24,
    xxlarge: 32,
  },
  fontWeights: {
    normal: 'normal',
    medium: '500',
    bold: 'bold',
  },
};

// Spacing
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Global styles
export default StyleSheet.create({
  // General container layouts
  container: {
    flex: 1,
    padding: spacing.md,
    backgroundColor: colors.white,
  },
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    backgroundColor: colors.white,
  },
  
  // Typography
  title: {
    fontSize: typography.fontSizes.xlarge,
    fontWeight: typography.fontWeights.bold,
    color: colors.primary,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: typography.fontSizes.medium,
    color: colors.primary,
    marginBottom: spacing.lg,
    textAlign: 'center',
    paddingHorizontal: spacing.md,
  },
  bodyText: {
    fontSize: typography.fontSizes.medium,
    color: colors.black,
    lineHeight: 24,
  },
  
  // Buttons
  button: {
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 24,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: typography.fontWeights.medium,
    fontSize: typography.fontSizes.medium,
  },
  secondaryButton: {
    width: '100%',
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 24,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: colors.primary,
    textAlign: 'center',
    fontWeight: typography.fontWeights.medium,
    fontSize: typography.fontSizes.medium,
  },
  
  // Form elements
  input: {
    width: '100%',
    padding: spacing.md,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.secondary,
    backgroundColor: colors.white,
    marginBottom: spacing.md,
  },
  picker: {
    width: '100%',
    padding: spacing.md,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    marginTop: spacing.md,
  },
  
  // Navbar styles
  navbar: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
    padding: spacing.md,
    paddingBottom: spacing.md,
    elevation: 5,
  },
  navbarGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navbarItem: {
    alignItems: 'center',
    padding: spacing.xs,
  },
  navbarIcon: {
    width: 24,
    height: 24,
    color: colors.gray,
  },
  navbarIconActive: {
    color: colors.primary,
  },
  navbarText: {
    fontSize: typography.fontSizes.small,
    marginTop: spacing.xs,
    color: colors.gray,
  },
  navbarTextActive: {
    color: colors.primary,
  },
  
  // Card styles
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.md,
    elevation: 2,
  },
  
  // Image styles
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: spacing.md,
  },
  
  // Camera container
  cameraContainer: {
    aspectRatio: 1,
    borderRadius: 16,
    backgroundColor: colors.lightGray,
    marginBottom: spacing.md,
    position: 'relative',
    overflow: 'hidden',
  },
  captureButton: {
    position: 'absolute',
    bottom: spacing.xl,
    alignSelf: 'center',
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: 50,
    elevation: 3,
  },
  captureButtonIcon: {
    color: colors.white,
  },
});