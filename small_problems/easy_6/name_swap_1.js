// Name swap, but if the person has 1+ middle names

function swapName(name) {
  let nameArray = name.split(' ');
  let firstName = nameArray.pop();

  return firstName + ', ' + nameArray.join(' ');
}

swapName('Karl Oskar Henriksson Ragvals');  // "Ragvals, Karl Oskar Henriksson"
