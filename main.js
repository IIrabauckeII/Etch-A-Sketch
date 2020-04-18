// global variable declaration
const containerDiv = document.getElementById('container');
const btnClear = document.getElementById('btnClear');
const btnNewGrid = document.getElementById('btnNewGrid');
const btnPickColor = document.getElementById('btnPickColor');
const btnRandomColor = document.getElementById('btnRandomColor');


// function setup: create Divs
let createDivs = (numberOfRows) => {
  for (i=0; i<(numberOfRows*numberOfRows); i++) {
    let createDiv = document.createElement('div');
    let newDiv = containerDiv.appendChild(createDiv);
    newDiv.classList.add('subDiv');
  }
  containerDiv.style['grid-template-columns'] = `repeat(${numberOfRows}, 1fr)`
}

//function setup: delete Divs
function removeElementsByClass(className){
    let elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// create Divs
createDivs(16);

// eventListener hover
const colorChildDivOnHover = (event) => {
  if (event.target.className == "subDiv") {
  event.target.style['background-color'] = '#FFFFFF';
  }
};

containerDiv.addEventListener('mouseover', colorChildDivOnHover)

//addEventListener clearGrid
const subDivs = document.querySelectorAll('.subDiv');

const clearGrid = () => {
  for (let i=0; i<subDivs.length; i++) {
    subDivs[i].style['background-color'] = "#202020";
  }
};

btnClear.addEventListener('click', clearGrid);

//eventListener newGrid
const rowNrInput = () => {
  let rowNr = window.prompt('How many rows should the new grid have?', 'Initial Value: 16');
  if (Number.isInteger(Number(rowNr)) && rowNr > 0 && rowNr <= 128) {
    removeElementsByClass('subDiv');
    createDivs(rowNr);
  } else {
    alert("Please enter an integer above zero.")
  }
}

btnNewGrid.addEventListener('click', rowNrInput);

//eventListener Pick a Color
const chooseColor = () => {
  
}

btnPickColor.addEventListener('click', chooseColor)
