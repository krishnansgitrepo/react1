const heading = document.createElement("h1");
heading.innerHTML = "Heading Using Plain JS";

const rootElement = document.getElementById("root");
console.log(rootElement);
rootElement.appendChild(heading);