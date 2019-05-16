/*let str = "Hello World";
let num = 12345;
let bool = true;
let Null = null;
let undef;
let obj = {
    firstName: "Ivan",
    lastName: "Ivanov"    
}

alert(str + " " + num + " " + bool + " " + Null + " " + undef + " " +  obj.firstName + " " + obj.lastName);
*/

openMenuButton = $('#openMenu');
closeMenuButton = $('#closeMenu');

menu = $('.menu');

openMenuButton.on('click', function() {
    menu.toggleClass('open');
})

closeMenuButton.on('click', function() {
    menu.toggleClass('open');
})

