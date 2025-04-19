import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px) rotate(-15deg)' },
        },
      },
      animation: {
        float: 'float 1s ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;