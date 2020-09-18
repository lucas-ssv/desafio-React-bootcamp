module.exports = {
    presets: [
        "@babel/preset-env", // import export, arrow functions
        "@babel/preset-react" // transforma o que o browser não entende: JSX
    ],
    plugins: [
        [
            "@babel/plugin-proposal-class-properties", { "loose": true }
        ]
    ]
};