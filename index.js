#!/usr/bin/env node

import { Command, Option } from "commander";
import { default as figlet } from "figlet";
import { optionBanner } from "./option-banner.js";
import { optionMoo } from "./option-moo.js";
import { optionFileCount } from "./option-file-count.js";

function main() {

    const program = new Command();

    program
        .version("0.0.1", "-v, --version", "output the current version")
        .addHelpText("before", figlet.textSync("MY TOOLS"))
        .helpOption("-h, --help", "display help")
        .description("My Tools")

        .addHelpText(
            "after",
            "\nTo setup an alias:\n" +
            "\n  1. Add this to ~/.zshrc" +
            '\n\n       alias mytools="npm exec --yes -- https://github.com/mitchallen/my-tools-cli";\n' +
            "\n  2. save it" +
            "\n  3. $ source ~/.zshrc" +
            "\n  4. $ mytools --help" +
            `\n`
        )

        // add message argument and flags

        .argument("<message>", "message to parse")
        .option("    --banner", "create a banner out of the message")
        .addOption(new Option("    --moo").hideHelp())
        .action((message, options) => {
            // console.log(`DEBUG: ${message},\n${JSON.stringify(options,null,2)}`)
            if (options.banner) optionBanner(message);
            if (options.moo) optionMoo(message);
        });

    // add a command handler

    program
        .command("file")
        .description("process a file")
        .argument("<filename>", "target file")
        // node index.js file temp.txt --count
        .option("    --count", "count words in a file")
        .action((filename, options) => {
            // console.log(`DEBUG: ${filename},\n${JSON.stringify(options, null, 2)}`)
            if (options.count) optionFileCount(filename);
        });

    // parse arguments

    program.parse(process.argv).opts()
}

main();
