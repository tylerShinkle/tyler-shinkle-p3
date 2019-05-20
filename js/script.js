// 6 events
// reference existing element
// inject content
// create element and inject it




$(document).ready(function() {
  var darkMode = false;
  //post object constructor...
  function Post(title, content) {
    this.title = title;
    this.content = content;
    this.date = function() {
      var d = new Date();
      var month = d.getMonth() + 1;
      var day = d.getDate();
      var year = d.getFullYear();
      return month + "/" + day + "/" + year;
    };
    this.delButt = $("<button>Delete</button>");
    this.build = function() {
      var postContainer = $("#postContainer");
      var postBlock = $("<div></div>");
      postBlock.addClass("post");
      var titleEl = $("<h3></h3>").text(this.title);
      titleEl.addClass("postTitle");
      var dateEl = $("<h3></h3>").text(this.date());
      dateEl.addClass("postDate");
      var contentEl = $("<p></p>").html(this.content);
      contentEl.addClass("postContent");
      var deleteEl = this.delButt;
      deleteEl.addClass("del");
      postBlock.append(titleEl);
      postBlock.append(dateEl);
      postBlock.append(contentEl);
      postBlock.append(deleteEl);
      postContainer.append(postBlock);
    };
  }

  //data array for test or "fake posts"
  var posts = [];
  //initial posts contruction and pushing to array...
  var postA = new Post("Creating a Server in Node.js", "In order to create a server in Node.js you must first include the http module like so... <br><br>var http = require ('http');<br><br>Then you will use a mehthod of this module which returns a server object. The mehtod is known as createServer() it should look something like this...<br><br>http.createServer(function(req,res){<br>&emsp;//code<br>}).listen(8080);<br><br>More on nodeJS in my next post.");
  posts.push(postA);
  var postB = new Post("Directives in AngularJS", "The first three directives you should learn are ng-app, ng-model and ng-bind. Research theses directives and we will build a project together in the future.");
  posts.push(postB);
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

  //del button
  $(document).on('click', '.del', function() {
    $(this).parent('.post').remove();
  })

  //logout button
  $("#logout").click(function() {
    clearScreen();
    $("#loginContainer").css("display", "table");
  });

  //theme button
  $("#theme").click(function() {
    if (!darkMode) {
      $("body").css("background-color", "black");
      $("body").css("color", "white");
      $(".post").css("border-bottom", "2px solid white");
      $("nav").css("border-bottom", "2px solid white");
      darkMode = true;
    } else {
      $("body").css("background-color", "white");
      $("body").css("color", "black");
      $(".post").css("border-bottom", "2px solid black");
      $("nav").css("border-bottom", "2px solid black");
      darkMode = false;
    }
  });

  //open modal
  $("#addPost").click(function() {
    var modal = $("#modal");
    modal.css("display", "block");
  });

  //cancel modal
  $("#cancelModal").click(function() {
    clearModal();
  });

  //make new post (submin modal)
  $("#submitModal").click(function() {
    var newTitle = $("#modalTitle").val();
    var newContent = $("#newPostContent").val();
    var aNewPost = new Post(newTitle, newContent);
    aNewPost.build();
    clearModal();
  });

  //clear modal
  function clearModal() {
    $("#modal").css("display", "none");
    $("#modalTitle").val("");
    $("#newPostContent").val("");
  }
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
    loadPosts();
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
    var postContainer = $("#postContainer");
    $("input").val("");
    login.css("display", "none");
    signup.css("display", "none");
    mainPage.css("display", "none");
    postContainer.empty();
  }

  //set User Name
  function setUser(un) {
    var user = $("#navUser");
    user.text(un);
  }

  //load data posts
  function loadPosts() {
    for (var i = 0; i < posts.length; i++) {
      posts[i].build();
    }
  };
});