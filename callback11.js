function displayMessage(name) {
  console.log(`Hello, ${name}!`);
}

function getUserInput(callback) {
  setTimeout(() => {
    const username = "Meenu";
    callback(username); 
  }, 1000);
}

getUserInput(displayMessage);