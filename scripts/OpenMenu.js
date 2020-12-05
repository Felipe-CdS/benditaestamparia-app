function openMenu() {
    var navbarPhoneStyle = document.getElementById("navbar-phone").style.display;
  
      if(navbarPhoneStyle == "flex"){ navbarPhoneStyle = "none" }
      else{ navbarPhoneStyle = "flex" }
}

//document.getElementById("navbar-phone-button").addEventListener("click", openMenu);