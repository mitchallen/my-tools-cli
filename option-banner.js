import { default as figlet } from "figlet";

export function optionBanner(message) {
 let output = figlet.textSync(message);
  console.log(output);
}