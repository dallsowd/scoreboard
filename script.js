var loggedIn = false;

document.addEventListener('keyup', (e) => {
  if (e.code === "Enter") {
    authenticate();
  }
});

function authenticate() {
  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  login(username, password);
}

function login(username, password) {
    var users = [{username: "dallsowd", password:"28118"},{username: "sowdedj", password:"28118"}];

for (i = 0; i < users.length; i++) {
  if(username == users[i].username && password == users[i].password) {
    loggedIn = true;
  }
}
    status();
}

function status() {
  if(loggedIn) {
    document.location.href = "fdffhjk6uhugywetehn5,mutytdrusefrdgbjr67gtgrtyfrvb6uk5f.html";
  } else {
    alert('You are not in :(');
  }
}