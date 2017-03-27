function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runExtension() {
  await sleep(500);


    function escapeRegExp(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }

    function matchUrl() {
      var currentUrl = window.location.toString();
      var loginUrl =
        escapeRegExp("https://") +
        '[^\\.]+' +
        escapeRegExp(".relution.io/relution/portal/#/login");
      loginUrl = new RegExp(loginUrl);

      return result = loginUrl.test(currentUrl);
    }

    if (matchUrl()) {

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

}

runExtension();