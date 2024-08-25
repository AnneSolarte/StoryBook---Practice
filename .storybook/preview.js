/** @type { import('@storybook/react').Preview } */
import '../src/index.css';
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Añade otros parámetros globales si es necesario
  },
};

export default preview;