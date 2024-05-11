const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js', // Punto de entrada de tu aplicación
    output: {
        path: path.resolve(__dirname, 'dist'), // Directorio de salida
        filename: 'bundle.js' // Nombre del archivo de salida
    }
};
