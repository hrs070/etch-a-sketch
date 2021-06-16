const container = document.querySelector(".container");
const buttonsContainer = document.querySelector(".buttons");

const btnBlack = document.createElement("button");
const btnGray = document.createElement("button");
const btnRGB = document.createElement("button");
const btnSize = document.createElement("button");

function createDivs(cols, rows) {
    for (let i = 0; i < (cols * rows); i++) {
        const div = document.createElement("div");
        div.style.border = `1px dotted rgb(160,160,255)`;
        container.style.gridTemplateColumns = `repeat(${cols},1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add("box");
    }
}
createDivs(16, 16);

function grayColor() {
    const boxes = container.querySelectorAll(".box");
    btnGray.textContent = "Gray";
    btnGray.addEventListener("click", () => {
        boxes.forEach(box => box.addEventListener("mouseover", () => {
            let rNum = Math.floor(Math.random() * 255);
            box.style.backgroundColor = `rgb(${rNum}, ${rNum}, ${rNum})`;
        }))
    })
    buttonsContainer.appendChild(btnGray).classList.add("btn");
}
grayColor()

function blackColor() {
    const boxes = container.querySelectorAll(".box");
    btnBlack.textContent = "Black";
    btnBlack.addEventListener("click", () => {
        boxes.forEach(box => box.addEventListener("mouseover", () => {
            box.style.backgroundColor = `black`;
        }))
    })
    buttonsContainer.appendChild(btnBlack).classList.add("btn");
}
blackColor()

function RGBColor() {
    const boxes = container.querySelectorAll(".box");
    btnRGB.textContent = "RGB";
    btnRGB.addEventListener("click", () => {
        boxes.forEach(box => box.addEventListener("mouseover", () => {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }))
    })
    buttonsContainer.appendChild(btnRGB).classList.add("btn");
}
RGBColor()

function reset() {
    const boxes = container.querySelectorAll(".box");
    boxes.forEach(box => box.remove());
}

function resize() {
    btnSize.textContent = "Grid Size";
    btnSize.addEventListener("click", () => {
        let user = prompt("Enter the number of Grids");
        if (user === null || user < 16 || user > 100) {
            reset()
            createDivs(16, 16)
            blackColor()
            grayColor()
            RGBColor()
        } else {
            reset()
            createDivs(user, user)
            blackColor()
            grayColor()
            RGBColor()
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add("btn");
}
resize()