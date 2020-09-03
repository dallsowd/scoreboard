var loggedIn = false;

function authenticate() {
  var password = document.getElementById('password').value;
  
  loggedIn = login(password);
  status();
}

function login(password) {
    var storedPassword = '123';

    return password == storedPassword;
}

function status() {
  if(loggedIn) {
    document.location.href = "fdffhjk6uhugywetehn5,mutytdrusefrdgbjr67gtgrtyfrvb6uk5f.html";
  } else {
    alert('You are not in :(');
  }
}