var list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
var name = 0;
var family = 0;
var username = 0;
var email = 0;
var password = 0;
var confirmation = 0;

function fname() {
    var input = document.getElementById("output1");
    var list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var val = document.getElementsByClassName("myinput")[0].value;
        val = val.split("");
        for (var i = 0; i < val.length; i++) {
            if (list.indexOf(val[i]) == -1) {
                input.innerHTML = "invalid name";
                name = 0;
                break;
            } else {
                input.innerHTML = "";
                name = 1;
            }
        }

    } else {
        name = 0;
        input.style.color = "red";
        input.innerHTML = "just characters";
    }

}

function lname() {
    var input = document.getElementById("output2");
    var list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var val = document.getElementsByClassName("myinput")[1].value;
        val = val.split("");
        console.log(val);
        for (var i = 0; i < val.length; i++) {
            if (list.indexOf(val[i]) == -1) {
                input.innerHTML = "invalid name";
                family = 0;
                break;
            } else {
                family = 1;
                input.innerHTML = "";
            }
        }

    } else {
        family = 0;
        input.style.color = "red";
        input.innerHTML = "just characters";
    }

}

function validation_email() {
    var email_output = document.getElementById("output4");
    var pattern = "[a-zA-Z0-9-_.]+@[a-zA-Z.-]+.[a-zA-Z]{2,4}$";
    // var pattern = "[a-z]+[._-]*[a-z0-9]*@(gmail|yahoo|outlook|hotmail).com$";
    var input = document.getElementById("email").value;
    if (input.match(pattern) == null || input.match(pattern).index != 0) {
        console.log(input.match(pattern));
        email = 0;
        email_output.style.opacity = "1";
        email_output.style.color = "red";
        email_output.innerHTML = "email address is invalid";

    } else {
        email = 1;
        console.log(input.match(pattern));
        email_output.innerHTML = "";
    }

}





function uname() {
    var input = document.getElementById("output5");
    var list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];
    if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 48 && event.keyCode <= 57)) {
        var val = document.getElementsByClassName("myinput")[4].value;
        val = val.split("");
        for (var i = 0; i < val.length; i++) {
            if (list.indexOf(val[i]) == -1) {
                input.innerHTML = "invalid username";
                username = 0;
                break;
            } else {
                username = 1;
                input.innerHTML = "";
            }
        }
    } else {
        username = 0;
        input.style.color = "red";
        input.innerHTML = "just characters";
        console.log(event);
    }

}

function pas() {
    var input = document.getElementById("output6");
    var val = document.getElementsByClassName("myinput")[5].value;
    val = val.split('');
    if (val.length < 8) {
        password = 0;
        input.style.color = "red";
        input.innerHTML = "at least 8 characters";
    } else {
        password = 1;
        input.innerHTML = "";
    }

}

function conf_pas() {
    var input = document.getElementById("output7");
    var val = document.getElementsByClassName("myinput")[5].value;
    var conf_val = document.getElementsByClassName("myinput")[6].value;
    if (val == conf_val) {
        confirmation = 1;
        input.innerHTML = "";
    } else if (conf_val == null) {
        confirmation = 0;
    } else {
        confirmation = 0;
        input.style.color = "red";
        input.innerHTML = "enter again";
    }
}


var input = document.getElementById("output8");
var code = "";
var rand;
for (var i = 0; i < 6; i++) {
    rand = Math.floor(Math.random() * 62);
    code += list[rand];

}
input.innerHTML = code;
console.log(code);

function send_info() {
    if (code == document.getElementsByClassName("myinput")[7].value) {
        document.getElementsByClassName("myinput")[7].style.border = "2px solid rgba(65, 105, 225, 0.356)";
    } else {
        document.getElementsByClassName("myinput")[7].style.border = "2px solid red";
    }
    if (name == 1) {
        document.getElementsByClassName("myinput")[0].style.border = "2px solid rgba(65, 105, 225, 0.356)";
    } else {
        document.getElementsByClassName("myinput")[0].style.border = "2px solid red";
    }
    if (family == 1) {
        document.getElementsByClassName("myinput")[1].style.border = "2px solid rgba(65, 105, 225, 0.356)";
    } else {
        document.getElementsByClassName("myinput")[1].style.border = "2px solid red";
    }
    if (username == 1) {
        document.getElementsByClassName("myinput")[4].style.border = "2px solid rgba(65, 105, 225, 0.356)";
    } else {
        document.getElementsByClassName("myinput")[4].style.border = "2px solid red";
    }
    if (email == 1) {
        document.getElementsByClassName("myinput")[3].style.border = "2px solid rgba(65, 105, 225, 0.356)";
    } else {
        document.getElementsByClassName("myinput")[3].style.border = "2px solid red";
    }
    if (password == 1) {
        document.getElementsByClassName("myinput")[5].style.border = "2px solid rgba(65, 105, 225, 0.356)";
    } else {
        document.getElementsByClassName("myinput")[5].style.border = "2px solid red";
    }
    if (confirmation == 1) {
        document.getElementsByClassName("myinput")[6].style.border = "2px solid rgba(65, 105, 225, 0.356)";
    } else {
        document.getElementsByClassName("myinput")[6].style.border = "2px solid red";
    }
    if (code == document.getElementsByClassName("myinput")[7].value && name == 1 && family == 1 && username == 1 && email == 1 && password == 1 && confirmation == 1) {
        document.getElementById("form_box").innerHTML = "you registered successfully";
        document.getElementById("form_box").classList.add("successfull");

    }
}