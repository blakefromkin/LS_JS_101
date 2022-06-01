function welcome(arr, obj) {
  let name = arr.join(' ');

  console.log(`Hi, ${name}! Nice to have a ${obj['title']} ${obj['occupation']} around.`);

}

welcome(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });
