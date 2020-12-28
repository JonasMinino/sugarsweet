

block = document.createElement("div");
block.setAttribute("id", "block");

// Changes the image of the navigatoin bar on hoover//
function picHover(id){

  var pic1 = document.getElementById('pic1');
  var pic2 = document.getElementById('pic2');
  var pic3 = document.getElementById('pic3');
  var pic4 = document.getElementById('pic4');

  switch (id) {
    case 'pic1':
      pic1.src = "../images/menu/confection2.jpg";
      break;

      case 'pic2':
      pic2.src="../images/menu/chocolate2.jpg";
      break;

      case 'pic3':
      pic3.src="../images/menu/cupcakes2.jpg";
      break;

      case 'pic4':
      pic4.src="../images/menu/candy2.jpg";
      break;

  }
}

function picOut(){
  document.getElementById('pic1').src = "../images/menu/confection1.jpg";
  document.getElementById('pic2').src="../images/menu/chocolate1.jpg";
  document.getElementById('pic3').src="../images/menu/cupcakes1.jpg";
  document.getElementById('pic4').src="../images/menu/candy1.jpg";
}
