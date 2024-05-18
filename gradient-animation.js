let header = document.getElementById("header");
header.addEventListener("mouseover", (e)=> {
    rect = e.currentTarget.getBoundingClientRect();
    let x = e.clientX - rect.left; //x position within the element.
    let y = e.clientY - rect.top;  //y position within the element.
    let percentage = Math.round(100*x/rect.width);
    
    // header.style.background = "linear-gradient(70deg, darkblue "+ percentage.toString() + "%,#006a8f,#00bf9f "+ (percentage+20).toString() +"%, lightgreen)"
})