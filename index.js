const selectFontSize= document.getElementById("selectFontSize");
const selectbgcolor= document.getElementById("selectbgcolor");
const resetButton= document.getElementById("reset-button");
const mainElement= document.querySelector("main");

window.addEventListener("load", () => {
    const savedFontSize = localStorage.getItem("fontSize");
    const savedBgColor = localStorage.getItem("bgcolor");

if (savedFontSize) {
    mainElement.style.fontSize = savedFontSize;
    selectFontSize.value = savedFontSize; // Set the select value to match
}
if (savedBgColor) {
    mainElement.style.backgroundColor = savedBgColor;
    selectbgcolor.value = savedBgColor; // Set the select value to match
}
});
const changeFontsize=(event)=>{
   const selectedFontSize=event.target.value;
   mainElement.style.fontSize = selectedFontSize;
   localStorage.setItem("fontSize",selectedFontSize);
}

const changeselectbgcolor=(event)=>{
    const selectedBackgroundColor=event.target.value;
    mainElement.style.backgroundColor =selectedBackgroundColor ;
    localStorage.setItem("bgcolor",selectedBackgroundColor);
}

const resetStyles = () => {
    // Clear localStorage
    localStorage.removeItem("fontSize");
    localStorage.removeItem("bgcolor");

    // Reset styles to default
    mainElement.style.fontSize = ""; // Default font size
    mainElement.style.backgroundColor = ""; // Default background color

    // Reset dropdown values (assuming first option is the default)
    selectFontSize.selectedIndex = 0;
    selectbgcolor.selectedIndex = 0;
}
// addEventListener add here 

selectFontSize.addEventListener("change",changeFontsize); 
selectbgcolor.addEventListener("change",changeselectbgcolor); 
resetButton.addEventListener("click", resetStyles);