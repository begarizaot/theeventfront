export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    // Este es un ajuste opcional para habilitar la eliminación de clases no utilizadas en producción.
    purge: [
      './src/**/*.{html,js,jsx,ts,tsx}', // Archivos que Tailwind debe revisar para clases usadas
    ],
  }
  