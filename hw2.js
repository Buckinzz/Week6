var heading = document.getElementsByTagName(`h1`);
console.log(heading);


document.querySelector(`h1`).innerHTML = `Generic Heading`
console.log(heading);


var paragraph = document.getElementsByTagName(`p`);
console.log(paragraph);


var paragraphs = document.getElementsByTagName(`p`);
for(var i = 0; i < paragraphs.length; i++)
{
    paragraphs[i].classList.add(`blue`);
}
console.log(paragraphs);


var para2 = document.createElement(`p`);
var div1 = document.querySelector(`div`);
var para3 = document.createTextNode(`new paragraph`);


para2.appendChild(para3);
div1.appendChild(para2);


var hobbies = ['video games', 'golf', 'anime',];
var ul = document.querySelector(`ul`);


for(var i = 0; i < hobbies.length; i++)
{
    var hobby = hobbies[i];
    var li = document.createElement(`li`);
    li.appendChild(document.createTextNode(hobby));
    ul.appendChild(li);
}


var form = document.querySelector(`form`);
