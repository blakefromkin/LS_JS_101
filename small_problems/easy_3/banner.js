function logInBox(text) {
  let firstAndLast = `+${'-'.repeat(text.length + 2)}+`;
  let emptyLine = `|${' '.repeat(text.length + 2)}|`;

  console.log(firstAndLast);
  console.log(emptyLine);
  console.log(`| ${text} |`);
  console.log(emptyLine);
  console.log(firstAndLast);
}

logInBox('Hi, my name is Blake.');
logInBox('To boldly go where no one has gone before.');
logInBox('');
