import { withAuthProvider } from "./authProvider";
import { cssDecorator } from "./cssDecorator";
import './styles-base.css';
import '../src/stories/styles/super-styles.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    defaultViewport: 'figmaPlugin',
    viewports: {
      figmaPlugin: {
        name: 'Plugin Default',
        styles:
        {
          width: '232px', height: '650px',
          borderRadius: '2px', border: '1px solid black'
        }
      },
    }
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

//Custom Providers
export const decorators = [withAuthProvider, cssDecorator];

//Toolbar global options
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
      showName: true,
      dynamicTitle: true,
    },
  },
  logging: {
    name: 'User Loggin',
    description: 'User Login state',
    defaultValue: 'Logged Out',
    icon: 'check',
    toolbar: {
      items: ['Logged Out', 'Logging In', 'Logged In'],
      showName: true,
      dynamicTitle: true,
    },
  },
  proUser: {
    name: 'Pro User',
    description: 'Purchased user account',
    defaultValue: false,
    icon: 'check',
    toolbar: {
      items: ['No Pro', 'Pro'],
      showName: true,
      dynamicTitle: true,
    },
  },
};

