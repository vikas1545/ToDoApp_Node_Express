
//***********************Taking value from selected checkbox and send it for deletion****************************//

function dosomething(val) {
  var checkedValue = document.querySelector('.messageCheckbox:checked').value;

  var link = "/delete-task/"+checkedValue;
document.getElementById('myLink').setAttribute("href",link);

   console.log("your value is:",checkedValue);
  
}

//***********************Setting color of Activities accordingly****************************//

var changeColor = document.getElementsByClassName("last-btn");
for (var i of changeColor) {
  if(i.innerText=="shoping") {
    i.style.background="green";
    console.log(i);
  }
  if(i.innerText=="study") {
    i.style.background="black";
    console.log(i.innerText);
  }
  if(i.innerText=="personal") {
    i.style.background="#fc0f03";
    console.log(i.innerText);
  }
  if(i.innerText=="college") {
    i.style.background="#55ad89";
    console.log(i.innerText);
  }
  
}
