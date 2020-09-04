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
    var users = [{username: "guest", password:"password"},{username: "cazza", password:"beats"},{username: "damian", password:"securebattle"},{username: "paul", password:"securebattle"},{username: "verrall", password:"securebattle"},{username: "nicholas", password:"securebattle"},{username: "belton", password:"owner654"},{username:"campbell", password:"harley"}];

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
