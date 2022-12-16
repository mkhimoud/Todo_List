let response = document.getElementById('response');
let data_name = document.getElementById('data_name');
let valider = document.getElementById('valider');
let clear = document.getElementById('clear');

var localArr = [];
var tabUsers = [];

if (localStorage.getItem('users') != null) {
    localArr = localStorage.getItem('users').split(',');
    localArr.forEach(function(item, index) {
        response.innerHTML += "<p> -  " + item + " </p> ";
        console.log(item)
    });
}

valider.addEventListener('click', function() {
    tabUsers.push(data_name.value);
    let tabString = tabUsers.toString();
    localStorage.setItem('users', tabString);
    localArr = localStorage.getItem('users').split(',');
    console.log(localArr);
    localArr.forEach(function(item, index) {
        response.innerHTML +=  "<p> - " + item + " </p> ";"<p>" + item + "</p>";       
    });
});

clear.addEventListener('click', function() {
    localStorage.clear();
});



