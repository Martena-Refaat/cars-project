

var fullname=document.getElementById("fullname");
var email=document.getElementById("email");
var phone=document.getElementById("phone");




function editeName(){
  let x=fullname.value.trim().toLowerCase();
  let y= x.split(' ');
  var z=  y.map(function(r){
      return (r. slice(0,1).toUpperCase()+r.slice(1));
  });
  fullname.value=z.join(' ');
}




function editeEmail(){
    email.value=email.value.trim().toLowerCase();
}
 function editePhone(){
    if(isNaN(phone.value)){
        alert("please enter numbers")

    }else{
        phone.value =phone.value.trim();

    }
}

//popup
let openPopupBtn = document.querySelector('#openPopup');
let closePopupBtn = document.querySelector('#closePopup');

let popUpDiv = document.querySelector('#popupscreen');
let bodyele =  document.querySelector('body');


openPopupBtn.addEventListener("click", function(){
	popUpDiv.style.zIndex = "5000";
	popUpDiv.style.opacity = "1";
	bodyele.style.overflow = "hidden";
});

closePopupBtn.addEventListener("click", function(){
	
	popUpDiv.style.opacity = "0";
	
	window.setTimeout(function(){
		popUpDiv.style.zIndex = "-1";
		bodyele.style.overflow = "auto";
	},1000);
});

