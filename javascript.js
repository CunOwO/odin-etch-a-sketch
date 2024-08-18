const container = document.querySelector(".container");


for (let i = 0; i < 16; i++)
{
    const div = document.createElement("div");
    div.setAttribute("style", "background-color: white; display: flex; flex-direction: column; flex: 1;");
    container.appendChild(div);
    for (let j = 0; j < 16; j++) {
        const divChild = document.createElement("div");
        divChild.setAttribute("style", "border: solid black 0.1px; flex: 1;");
        div.appendChild(divChild);
    }
}
