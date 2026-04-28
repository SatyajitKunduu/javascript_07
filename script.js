//DOM: WHEN A WEB PAGE IS LOADED,THE BROWSER CREATES A DOCUMENT OBJECT MODEL(DOM) OF THE PAGE
//WINDOW-->DOCUMENT-->HTML

console.dir(document.head);
console.dir(document.body);
document.body.style.background = "pink" //dynamic changes or dynamic manupulations

//DOM MANUPULATION
//1. SELECTION WITH ID:
let heading = document.getElementById("heading");
console.dir(heading);
console.log(heading);
//2.SELECTION WITH CLASS:
let headings = document.getElementsByClassName("myclass");
console.dir(headings);
console.log(headings);
let botton = document.getElementById("myid");
console.dir(botton);
console.log(botton)
//3.SELECTION WITH TAG:
let parahs = document.getElementsByTagName("p");
console.dir(parahs);
console.log(parahs);

//QUERY SELECTOR:
//for tag:
let element = document.querySelector("p");
console.log(element);

let elements = document.querySelectorAll("h1");
console.log(elements)

//for class:
let classes = document.querySelector(".myclass");
console.dir(classes);
//for id:
let id = document.querySelector("#myid");
console.dir(id);

//PROPERTIES:
//1. TAGNAME:RETURN TAG FOR ELEMENT NODES.
//2. INNERTEXT:RETURNS THE TEXT CONTENT OF THE ELEMENT AND ALL ITS CHILDREN.
//3. INNERHTML:RETURNS THE PLAIN TEXT OR HTML CONTENTS IN THE ELEMENT.
//4. TEXTCONTENT:RETURNS TEXTUAL CONTENT EVEN FOR HIDDEN ELEMENTS.


//👉question-01: CREATE A H2 HEADING ELEMENT WITH TEXT - "HELLO, WORLD!".APPEND "FROM APNA COLLEGE STUDENTS" TO THIS TEXT USING JS.
 let question = document.querySelector("h2");
 console.dir(question.innerText);
 question.innerText = question.innerText + "from apna college students";

//👉question-02: CREATE 3 DIVS WITH COMMON CLASS NAME- "BOX".ACCESS THEM & ADD SOME UNIQUE TEXT TO EACH OF THEM.

let divs = document.querySelectorAll(".box");
let idx=1;
for(let div of divs){
    div.innerText = `new text for all divs ${idx}`;
    idx++;
}


