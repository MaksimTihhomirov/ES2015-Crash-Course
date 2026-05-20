import babel from 'rollup-plugin-babel';

export default {
    entry: 'src/main.js',
    dest: 'out/main.js',

    plugins: [babel()]
};