function switchStyles() {
   const themeLink = document.getElementById("theme");
    if (themeLink.getAttribute("href") == "styles.css") {
        themeLink.setAttribute("href", "styles1.css"); 
    } else {
        themeLink.setAttribute("href", "styles.css"); 
    }
}
