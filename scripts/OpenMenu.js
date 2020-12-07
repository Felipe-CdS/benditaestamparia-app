function openMenu() {
    
    var navbarPhoneStyle = document.getElementById("navbar-phone");//.style.display;

    console.log(navbarPhoneStyle);
  
      if(navbarPhoneStyle.style.display == "flex"){ 
        navbarPhoneStyle.style.display = "none";
        document.getElementById("store-header").style.top = "5rem";
      }
      else{ 
        navbarPhoneStyle.style.display = "flex";
        document.getElementById("store-header").style.top = "calc(60vh + 5rem)";
        
      }


}

document.getElementById("navbar-phone-button").addEventListener("click", openMenu);