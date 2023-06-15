my-tools-cli
==

My command line tools

## Related article

This code is from my article:

* [How to Parse Command Line Arguments (CLI, Node.JS, Commander.js)](https://scriptable.com/how-to-parse-command-line-arguments-cli-nodejs/)

## Usage

```shell
node index.js --help
```

### To setup an alias on a Mac:

To setup an alias:

  1. Add this to ~/.zshrc
```shell
alias mytools="npm exec --yes -- https://github.com/mitchallen/my-tools-cli";
```
2. save it
3. source it:
```shell
source ~/.zshrc
```
4. Test it:
```shell
mytools --help
```