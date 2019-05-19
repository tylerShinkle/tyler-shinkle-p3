// 6 events
// reference existing element
// inject content
// create element and inject it




$(document).ready(function() {
  //login & signup buttons and events...

  //login button event
  $("#loginButt").click(function() {
    var un = $("#loginUN").val();
    var pw = $("#loginPW").val();
    verifyLogin(un, pw);
  });

  //signup button event
  $("#signUpButt").click(function() {
    loadSignUp();
  });

  //join button event
  $("#joinButt").click(function() {
    var un = $("#unJoin").val();
    var pw = $("#pwJoin").val();
    verifyLogin(un, pw);
  });

  //cancel signup button events
  $("#cancelButt").click(function() {
    cancelSignup();
  });

  // function for login button.
  function verifyLogin(un, pw) {
    if ((un.length <= 10 && un.length >= 5) && (pw.length <= 10 && un.length >= 5)) {
      //successful login
      loadMain(un);
    } else {
      //failed login
      alert("Both your username and password must be between 5 and 10 characters. That's all, they don't even need to be in our database; this is a mock website, we don't even have a database.");
    }
  };

  //load main page
  function loadMain(un) {
    //set all displays to none.
    var mainPage = $("#mainPage");
    //set user name
    setUser(un);
    //clear window
    clearScreen();
    //show main
    mainPage.css("display", "block");
  };


  //load signup page
  function loadSignUp() {
    clearScreen();
    var signUp = $("#signUpContainer");
    signUp.css("display", "table");
  }

  //cancel sign up
  function cancelSignup() {
    clearScreen();
    var login = $("#loginContainer");
    login.css("display", "table");
  };

  //clear screens and input fields
  function clearScreen() {
    var login = $("#loginContainer");
    var signup = $("#signUpContainer");
    var mainPage = $("#mainPage");
    $("input").val("");
    login.css("display", "none");
    signup.css("display", "none");
    mainPage.css("display", "none");
  }

  //set User Name
  function setUser(un) {
    var user = $("#navUser");
    user.text(un);
  }

});