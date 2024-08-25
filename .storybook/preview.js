export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  docs: { inlineStories: false },
  viewport: {
    viewports: {
      small: {
        name: 'Small Screen',
        styles: {
          width: '360px',
          height: '640px',
        },
      },
      large: {
        name: 'Large Screen',
        styles: {
          width: '1440px',
          height: '900px',
        },
      },
    },
  },
};
