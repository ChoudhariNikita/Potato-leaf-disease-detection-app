// General constants
export const APP_NAME = 'PlantHealth';
export const APP_VERSION = '1.0.0';

// Welcome screen constants
export const WELCOME_SCREEN = {
  TITLE: 'Welcome to PlantHealth',
  SIGN_UP_LOGIN: 'Sign Up / Login',
  CONTINUE_AS_GUEST: 'Continue as Guest',
  VERSION: `Version ${APP_VERSION}`,
};

// Login screen constants
export const LOGIN_SCREEN = {
  TITLE: `Login to ${APP_NAME}`,
  EMAIL_PLACEHOLDER: 'Email',
  PASSWORD_PLACEHOLDER: 'Password',
  LOGIN_BUTTON: 'Login',
  CONTINUE_WITH_GOOGLE: 'Continue with Google',
  SKIP_CONTINUE_AS_GUEST: 'Skip & Continue as Guest',
  INVALID_CREDENTIALS: 'Invalid credentials',
};

// Guest login screen constants
export const GUEST_LOGIN_SCREEN = {
  TITLE: 'Enter Your Name',
  NAME_PLACEHOLDER: 'Name',
  CONTINUE_BUTTON: 'Continue',
};

// Home screen constants
export const HOME_SCREEN = {
  WELCOME_MESSAGE: 'Hello, {username}!',
  ADDITIONAL_MESSAGE: 'Welcome to PlantHealth.',
  MOTTO: 'Detecting plant diseases with ease.',
  INSTRUCTION: 'Use the capture button to take a photo of a potato leaf.',
};

// Chatbot screen constants
export const CHATBOT_SCREEN = {
  INITIAL_MESSAGE: 'Hi {username}! How can I help you today?',
  PLACEHOLDER: 'Type a message...',
  SEND_BUTTON: 'Send',
  TITLE: 'Chatbot',
  SUBTITLE: 'Ask me anything!',
};

// Disease info screen constants
export const DISEASE_INFO_SCREEN = {
  LATE_BLIGHT: {
    NAME: 'Late Blight',
    DESCRIPTION: 'Late blight is a plant disease that mainly attacks potatoes and tomatoes. It is caused by the microorganism Phytophthora infestans. The disease spreads rapidly in wet weather with temperatures of 15-20°C.',
    TREATMENT: 'Remove and destroy all infected plant parts. Apply copper-based fungicides preventatively. Ensure proper spacing between plants to improve air circulation. Avoid overhead irrigation.',
  },
  EARLY_BLIGHT: {
    NAME: 'Early Blight',
    DESCRIPTION: 'Early blight is a common disease affecting potatoes and tomatoes, caused by the fungus Alternaria solani. It typically appears on older leaves first, causing dark spots with concentric rings.',
    TREATMENT: 'Remove and destroy infected leaves. Apply fungicides containing chlorothalonil or mancozeb. Rotate crops and avoid planting potatoes or tomatoes in the same location each year.',
  },
};

// Doctor contact screen constants
export const DOCTOR_CONTACT_SCREEN = {
  DOCTORS: [
    {
      NAME: 'Dr. John Doe',
      SPECIALIZATION: 'Plant Pathologist',
      CONTACT: 'Call, WhatsApp, Email',
    },
    // Add more doctors here
  ],
  VIDEO_CONSULTATION: 'Video Consultation',
};

// Navbar constants
export const NAVBAR = {
  CAPTURE: 'Capture',
  INFO: 'Info',
  CHAT: 'Chat',
  LEARN: 'Learn',
  TRANSLATE: 'Translate',
  CONSULT: 'Consult',
  LOGOUT: 'Logout',
};