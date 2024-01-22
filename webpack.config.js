const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js', // путь к вашему основному файлу js
    output: {
        filename: 'bundle.js', // имя файла с вашим кодом
        path: path.resolve(__dirname, 'dist'), // путь к папке с результатом сборки
    },
};