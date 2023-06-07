import * as cowsay from "cowsay";

export function optionMoo(message) {
  let output = cowsay.say({ text: message });
  console.log(output);
}