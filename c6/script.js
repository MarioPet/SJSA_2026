// DOM

// console.log(document);
// console.dir(document.body);
// console.dir(document.body.children);

// const h2_name = document.getElementById("name");
// h2_name.innerHTML = "Hello World";
// h2_name.style.color = "red";

// console.dir(h2_name);

// const box = document.getElementsByClassName("box");
// console.log(box.length);

// check if array is an array (typeof won't work)

// const box = document.getElementsByClassName("box");
// box[0].style.backgroundColor = "red";
// box[0].style.width = "50px";
// box[0].style.height = "50px";
// console.log(box[0].style);

// const paragraphs = document.getElementsByClassName("text");
// paragraphs[1].innerHTML = "Changed the second paragraph";
// paragraphs[1].style.color = "blue";
// console.log(paragraphs);

// const my_image = document.getElementsByTagName("img");
// const my_image = document.querySelector(".sample-image");
// my_image.src = "https://picsum.photos/536/354";
// my_image.width = 1000;
// my_image.style.width = "1000px";
// const my_image = document.querySelectorAll("img");
// console.log("🚀 ~ my_image:", my_image);

// const programming_language = document.getElementById("prog-language");
// const button = document.querySelector("button");

// console.log(programming_language);
// console.log(button);

// button.addEventListener("click", function () {
//     programming_language.innerHTML = "Python";
// });

// const main_paragraph = document.querySelector(".main-paragraph");
// const paragraph_button = document.querySelector(".paragraph-button");
// let count = 0;

// paragraph_button.addEventListener("click", () => {
//     count++;
//     // main_paragraph.innerHTML = "This button was clicked " + count + " times.";
//     main_paragraph.innerHTML = `This button was clicked ${count} times`;
// });

// const changer = document.querySelector(".changer");
// const link = document.querySelector(".link");

// changer.addEventListener("click", () => {
//     // link.classList.add("new-class");
//     // link.classList.remove("new-class");
//     link.classList.toggle("new-class");
// });

// const h2 = document.createElement("h2");
// h2.textContent = "Hello World";
// document.body.appendChild(h2);
// console.log(h2);

let colors = ["Red", "Green", "Blue"];
const ul = document.createElement("ul");
for(let i = 0; i < colors.length; i++) {
    const li = document.createElement("li");
    li.textContent = colors[i];
    ul.appendChild(li);
}

document.body.appendChild(ul);

let movies = ["Rushmore", "His Girl Friday", "F for Fake", "A Matter of Life and Death"];

const table = document.createElement("table");
const row = document.createElement("tr");

for(let i = 0; i < movies.length; i++) {
    const cell = document.createElement("td");
    cell.textContent = movies[i];
    row.appendChild(cell);
}

table.appendChild(row);
document.body.appendChild(table);