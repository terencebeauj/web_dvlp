var database = [
  {
    username: "Andrei",
    password: "1"
  },
  {
    username: "Eddy",
    password: "2"
  },
  {
    username: "Terry",
    password: "3"
  }
];

var newsFeed = [
  {
    username: "Bob",
    timeline: "So tired"
  },
  {
    username: "Sally",
    timeline: "Love learning"
  }
];

var userNamePromt = prompt("What's your username ?");
var passwordPrompt = prompt("What's your password ?");

function inDatabase(username, password){
  for(var i = 0; i<database.length; i++){
    if (database[i].username == userNamePromt){
      return true;
    }
  }
  return false;
}

function signIn(username, password){
  present = inDatabase(username, password);
  if (present) {
    console.log(newsFeed);
  }
  else {
    alert("Access denied");
  }
}
