var results = document.getElementById('first');
console.log(results)

var results = document.getElementsByClassName('fruits');
console.log(results)

var results = document.getElementsByTagName('h1');
console.log(results)

//Changing between var and let gives you a different result

//---------------------------------------------------------------------------

var results = document.querySelector('#first')
console.log(results)

//Logs id with a '#' symbol in front of the id name

var results = document.querySelector('.fruits')
console.log(results)

//Logs class with a period in front of the class name

var results = document.querySelector('.basket')
console.log(results)

//Chooses one class or id and returns output

var results = document.querySelectorAll('ul.basket > li')  //'ul#id-name > li
console.log(Array.from(results))

//Accesses unordered list from html file
//Grabs the class named 'basket'
// '>' Points 'basket' > to 'li' and gives access to the inner list
//Logs ul class and NodeList

for (var i = 0; i< results.length; i++) {
     results[i].textContent = ' *REDACTED* '
}

//Loop modifies the behavior of (Array.from(results))
//and .textContent modifies the text of the array 