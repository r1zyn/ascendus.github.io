const readline = require("readline");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const chalk = require("chalk").default;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Commits recent changes made within the code to the GitHub repository, using the COMMIT_MESSAGE environment variable from the .env file for commiting after compiling TypeScript code.
 * @async
 * @function
 * @param {string} message
 * @type {Promise<void>}
 */
async function push(message) {
    const { stdout, stderr } = await exec(`git add . && git commit -m \"${message}\" && git push origin main`);
    console.log(stdout);
    console.error(stderr);
    rl.close();
};

let difference;

rl.question("Enter your commit message: ",
    /**
     * @param {string} message 
     */
    (message) => {
        const start = process.hrtime();
        push(message);
        difference = process.hrtime(start);
    });

rl.on("close", () => {
    console.log(`${chalk.magenta("event")} - Finished pushing commit to repository, executed in ${Math.round(difference[1] / 1e3)}ms`);
    process.exit(0);
});