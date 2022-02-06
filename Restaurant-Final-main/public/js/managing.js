// FORM 1

const c1 = document.getElementsByName("name")[0];
const c2 = document.getElementsByName("image")[0];
const form1 = document.getElementById("f1");
const addedRow = document.getElementById("added-col");
const selectForm1 = document.getElementById('c0');
let createWhat = "Restaurant";
let alreadyExists = false;
let chosenValue = 1;

const createDivnInput = () => {
  if (!alreadyExists) {
    const div = document.createElement("div");
    div.setAttribute("class", "col-12");
    div.setAttribute("id", "added-col");
    document.getElementById("x").append(div);
    const input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('name', "menu_id");
    input.setAttribute('class', 'form-control');
    input.setAttribute('placeholder', "Menu Id");
    document.getElementById('added-col').appendChild(input);
    alreadyExists = true;
  }
}

const modifyInput1 = (formAction,placeholder1,placeholder2,name1,name2) => {
  form1.action = formAction;
  c1.placeholder = placeholder1;
  c2.placeholder = placeholder2;
  c1.name = name1;
  c2.name = name2
}

selectForm1.onchange = event => {
  const value = parseInt(event.target.value);
  if (value === 1) {
    modifyInput1("/restaurants",'Restaurant Name','Restaurant Image',"name","image");
    if (alreadyExists) {
      document.getElementById("added-col").remove();
      alreadyExists = false;
    }
  } else if (value === 2) {
    modifyInput1("/restaurants/:id/menus",'Menu title','Menu restaurant Id',"title","restaurant_id");
    if (alreadyExists) {
      document.getElementById("added-col").remove();
      alreadyExists = false;
    }
  } else if (value === 3) {
    modifyInput1("/restaurants/menus/menuitems",'Item','Item price',"item","price");
    createDivnInput();
  }
  createWhat = event.target.options[event.target.selectedIndex].text;
}


function cSubmitted() {
  console.log("This is running okay");
  var empt = document.forms["form1"]["name"].value;
  if (empt == "") {
    alert("Please input a Value");
    return false;
  } else {
    alert(`Thank you, a new ${createWhat} has been created!`);
    return true;
  }
}

// FORM 2

const u0 = document.getElementById("uid");
const u1 = document.getElementsByName("name")[1];
const u2 = document.getElementsByName("image")[1];
const form2 = document.getElementById("f2");
const addedRow2 = document.getElementById("added-col2");
const selectForm2 = document.getElementById('u0');
let createWhat2 = "Restaurant";
let alreadyExists2 = false;

const modifyInput2 = (formAction,placeholder1,placeholder2,name1,name2) => {
  form2.action = formAction;
  u1.placeholder = placeholder1;
  u2.placeholder = placeholder2;
  u1.name = name1;
  u2.name = name2
}

selectForm2.onchange = event => {
  const value = parseInt(event.target.value);
  if (value === 1) {
    modifyInput2("/restaurants/:id/update",'Restaurant Name','Restaurant Image',"name","image");
    if (alreadyExists2) {
      document.getElementById("added-col2").remove();
      alreadyExists2 = false;
    }
  } else if (value === 2) {
    modifyInput2("/restaurants/menu/update",'Menu title','Menu restaurant Id',"title","restaurant_id");
    if (alreadyExists2) {
      document.getElementById("added-col2").remove();
      alreadyExists2 = false;
    }
  } else if (value === 3) {
    modifyInput2("/restaurants/menu/menuitem/update",'Item','Item price',"item","price");
    createDivnInput2();
  }
  createWhat2 = event.target.options[event.target.selectedIndex].text;
  chosenValue = event.target.value;
}

const createDivnInput2 = () => {
  if (!alreadyExists2) {
    const div = document.createElement("div");
    div.setAttribute("class", "col-12");
    div.setAttribute("id", "added-col2");
    document.getElementById("y").append(div);
    const input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('name', "menu_id");
    input.setAttribute('class', 'form-control');
    input.setAttribute('placeholder', "Menu Id");
    document.getElementById('added-col2').appendChild(input);
    alreadyExists2 = true;
  }
}

// const verifySubmission = () => {
//   if (value === 1) {
//     if (u1.value === "") {
//       u1.removeAttribute("name");
//     }
//   }
// }

function uSubmitted() {
  verifySubmission();
  var empt = u0.value;
  if (empt == "" && parseInt(empt) < 1) {
    alert("Please input a Number");
    return false;
  } else {
    alert(`Thank you, the ${createWhat} has been deleted!`);
    return true;
  }
}


// FORM 3

console.log("Yes this has been called ");

const d1 = document.getElementById("d1");
const form3 = document.getElementById("f3");
const selectForm3 = document.getElementById('d0');

selectForm3.onchange = event => {
  const value = parseInt(event.target.value);
  if (value === 1) {
    form3.action = "/restaurants/:id";
  } else if (value === 2) {
    form3.action = "/restaurants/:id/menu";
  } else if (value === 3) {
    form3.action = "/restaurants/:id/menu/menuitems";
  }
  createWhat = event.target.options[event.target.selectedIndex].text;
}

function dSubmitted() {
  var empt = document.forms["form3"]["id"].value;
  console.log(`The empt is ${empt}`);
  if (empt == "" && parseInt(empt) < 0) {
    alert("Please input a Number");
    return false;
  } else {
    alert(`Thank you, the ${createWhat} has been deleted!`);
    return true;
  }
}