function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runExtension() {
  await sleep(500);

  var rememberMeCheckbox = document.querySelector('.remember-me');
  var loginButton = document.querySelector('#btn-login');
  var passwordField = document.querySelector('.input-password');

  // delete safed usernames
  localStorage.removeItem("localforage/mw_localUsers");

  // remove "Remember Me" checkbox
  if (rememberMeCheckbox !== null) {
    document.querySelector('.remember-me').remove();
  }

  // move login button after the password field
  if (loginButton !== null && passwordField !== null) {
    loginButton.disabled = false;
    insertAfter(loginButton, passwordField);
  }

  console.info("Relution Enhancer applied");
}

runExtension();