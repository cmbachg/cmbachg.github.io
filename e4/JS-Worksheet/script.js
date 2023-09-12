let firstSection = document.getElementById("keyterms");       /* let is a variable */
console.log(firstSection);

function changeBGColour(bgColour){
    console.log("I'm clciked");
    firstSection.style.backgroundColor = bgColour;
    firstSection.style.color = "green";                        /* color refers to the color of the text */
}

let demo4 = document.getElementById("demo4");       /* let is a variable */
console.log(firstSection);

function changeBgColour(bgColour){
    console.log("I'm clciked");
    demo4.style.backgroundColor = bgColour;
    demo4.style.backgroundColor = 'orange';
}







changeBGColour();

/* setTimeout(changeBGColour, 10000);    */                          /* colour is applied after 10000ms */