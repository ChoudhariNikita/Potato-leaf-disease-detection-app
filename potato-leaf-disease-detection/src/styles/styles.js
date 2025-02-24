import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  button: {
    width: '100%',
    backgroundColor: 'green',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  secondaryButton: {
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 8,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: 'green',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 8,
  },
  subtitle: {
    color: 'green',
    marginBottom: 8,
    textAlign: 'center',
  },
  iconContainer: {
    width: 96,
    height: 96,
    marginBottom: 16,
    borderRadius: 48,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: 'green',
    fontSize: 32,
  },
  navbar: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'gray',
    padding: 16,
  },
  navbarGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navbarItem: {
    alignItems: 'center',
  },
  navbarIcon: {
    width: 24,
    height: 24,
    color: 'gray',
  },
  navbarText: {
    fontSize: 12,
    marginTop: 4,
    color: 'gray',
  },
});