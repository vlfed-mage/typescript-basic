const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    // entry: './src/7-understanding-and-typing-this/0-a-this-keyword-primer/index.ts',
    // entry: './src/7-understanding-and-typing-this/1-exploring-this-with-call-apply-and-bind/index.ts',
    // entry: './src/7-understanding-and-typing-this/2-arrow-functions-and-lexical-scope/index.ts',
    // entry: './src/7-understanding-and-typing-this/3-typing-this-and-no-implicit-this/index.ts',

    // entry: './src/8-type-queries/0-typeof-type-queries/index.ts',
    // entry: './src/8-type-queries/1-keyof-index-type-queries/index.ts',
    // entry: './src/8-type-queries/2-keyof-generics-and-lookup-types/index.ts',

    // entry: './src/9-mapped-types/0-readonly-mapped-type/index.ts',
    // entry: './src/9-mapped-types/1-partial-mapped-type/index.ts',
    // entry: './src/9-mapped-types/2-required-mapped-type-and-modifiers/index.ts',
    // entry: './src/9-mapped-types/3-pick-mapped-type/index.ts',
    // entry: './src/9-mapped-types/4-record-mapped-type/index.ts',

    // entry: './src/10-exploring-type-guards/0-typeof-and-type-guards/index.ts',
    // entry: './src/10-exploring-type-guards/1-instanceof-and-type-guards/index.ts',
    // entry: './src/10-exploring-type-guards/2-user-defined-type-guards/index.ts',
    // entry: './src/10-exploring-type-guards/3-literal-type-guards-and-in-operator/index.ts',

    // entry: './src/11-advanced-types-and-practices/0-intersection-types/index.ts',
    // entry: './src/11-advanced-types-and-practices/1-discriminated-tagged-unions/index.ts',
    // entry: './src/11-advanced-types-and-practices/2-interfaces-vs-type-aliases/index.ts',
    // entry: './src/11-advanced-types-and-practices/3-interfaces-vs-classes/index.ts',

    // entry: './src/12-generics-and-overloads/0-function-generics/index.ts',
    entry: './src/12-generics-and-overloads/1-function-overloads/index.ts',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
};
