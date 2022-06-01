
// unnecessarily uses two return statements
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

// my solves
function isColorGood(color) {
  return color === 'blue' || color === 'green';
}


console.log(isColorGood('green'));
console.log(isColorGood('orange'));
