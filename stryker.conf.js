module.exports=function (config) {
    config.set({
        mutator:"javascript",
        packageManager: "npm",
        commandRunner: {
            command: "npm run test"
        },
        coverageAnalysis: "off",
        reporters: ["html", "progress"],
        htmlReporter: {
            baseDir: "reports/mutation/html"
        },
        mutate: ["warrior/*.js", "!warrior/warrior.js"],
        timeoutMS: 10000,
        maxConcurrentTestRunners: 1
    });
};