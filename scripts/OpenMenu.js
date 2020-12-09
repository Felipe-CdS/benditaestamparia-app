function openMenu() {
    
    var navbarPhoneStyle = document.getElementById("navbar-phone");//.style.display;
  

      if(navbarPhoneStyle.style.display == "flex"){ 
        navbarPhoneStyle.style.display = "none";
        try{
          document.getElementById("store-header").style.top = "5rem";
        }catch(e){}
      }
      else{ 
        navbarPhoneStyle.style.display = "flex";
        try{
          document.getElementById("store-header").style.top = "calc(60vh + 5rem)";
        }catch(e){}
      }


}

document.getElementById("navbar-phone-button").addEventListener("click", openMenu);