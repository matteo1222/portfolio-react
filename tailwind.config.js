module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeInFromLeft: {
          '0%': { transform: 'translateX(-3rem)', opacity: 0 },
          '100%': { transform: 'translateX(0rem)', opacity: 1 }
        },
        fadeInFromRight: {
          '0%': { transform: 'translateX(3rem)', opacity: 0 },
          '100%': { transform: 'translateX(0rem)', opacity: 1 }
        },
        rotateInAndRotateOut: {
          '0%': { transform: 'rotate3d(1, 0, 0, 60deg) translateY(-2rem)', opacity: 0 },
          '30%': { transform: 'rotate3d(1, 0, 0, 0deg) translateY(0rem)', opacity: 1 },
          '70%': { transform: 'rotate3d(1, 0, 0, 0deg) translateY(0rem)', opacity: 1 },
          '100%': { transform: 'rotate3d(1, 0, 0, -60deg) translateY(2rem)', opacity: 0 },
        }
      },
      animation: {
        'fadein-from-l': 'fadeInFromLeft 1s ease-in-out',
        'fadein-from-r': 'fadeInFromRight 1s ease-in-out',
        'rotate-in-and-out': 'rotateInAndRotateOut 1s ease-in-out'
      },
    },
  },
  plugins: [],
}
