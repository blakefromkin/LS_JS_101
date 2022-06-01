function madLibs() {
  let readline = require('readline-sync');

  let noun = readline.question('Enter a noun: ');
  let verb = readline.question('Enter a verb: ');
  let adverb = readline.question('Enter an adverb: ');
  let adjective = readline.question('Enter an adjective: ');

  let madLib =
  `My favorite part of coding is when I get to program a ${noun} that helps the world.
  I'll sit down in my desk chair, ${verb} my laptop, and get to work
  knowing my ${adjective} code will one day give so many people a reason
  to ${verb} ${adverb}.`;

  console.log(`\n${madLib}`);
}

madLibs();
