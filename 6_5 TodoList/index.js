// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  addCloseButton(li);
}


///////////////////////////////////////////////
// Add close button to a todo
function addCloseButton(dest){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    dest.appendChild(span);

    span.onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
}

// print todos
function prints(todos) {
	const ul = document.getElementById("myUL");
  ul.innerHTML = '';
  todos.forEach((todo) => {
    let li = document.createElement('li');
    let title = document.createTextNode(todo.title);
    li.appendChild(title);
    if(todo.completed){
      li.classList.toggle("checked");
    }
    addCloseButton(li);
    ul.appendChild(li);
  })
}

// fetch todos by userid
function getTodo(userid, callback) {
	const baseUrl = "https://jsonplaceholder.typicode.com";
	const todopath = "todos";

	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			callback(JSON.parse(xhttp.response));
		}
	};
	//xhttp.open("GET", [baseUrl, todopath, id].join("/"), true);
  xhttp.open("GET", `${baseUrl}/${todopath}?userId=${userid}`, true);
	xhttp.send();
}

// get userid from input
function getByUserId() {
  const userId = document.getElementById("userIdInput").value;
  if (userId === "") {
    alert("You must enter a user ID!");
    return;
  }

  getTodo(userId, prints);
}
