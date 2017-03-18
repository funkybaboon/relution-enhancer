//document.querySelector("body").style.background = "black";
//document.querySelector(".module-page.session.login").style.background = "transparent";

// delete safed usernames
localStorage.removeItem("localforage/mw_localUsers");

// stay logged in
document.querySelector("input[type=checkbox][name=rememberMe]").checked = true

// move login button after the password field
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
insertAfter(document.querySelector('#btn-login'), document.querySelector('.input-password'));

// stay logged in
// document.getElementById('#btn-login').disabled = false;