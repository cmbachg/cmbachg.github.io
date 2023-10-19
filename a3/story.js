/* for the javascript coding I have used my code from previous assignments, such as A2 for the hiding and revealing
and E2 or E3 for the starting and loading page. */

/* fieldset */
/* fieldsets are used to create a nice border around the different parts of the story and differ the text from the choises to give it a clearer structure for the user to interact with*/
let fieldset2 = document.getElementById("fieldset2");
let fieldset3 = document.getElementById("fieldset3");
let fieldset4 = document.getElementById("fieldset4");
let fieldset5 = document.getElementById("fieldset5");
let fieldset6 = document.getElementById("fieldset6");

/* option */
/* option refers to the two options each part has, with different namingalterations to keep it clear for me when coding */
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let optionB1 = document.getElementById("optionB1");
let optionB2 = document.getElementById("optionB2");
let optionC1 = document.getElementById("optionC1");
let optionC2 = document.getElementById("optionC2");
let optionC3 = document.getElementById("optionC3");
let optionC4 = document.getElementById("optionC4");

/* imgoption */
/* image options are the images that are connected to the choises */
let imgOption1 = document.getElementById("imgOption1");
let imgOption2 = document.getElementById("imgOption2");
let imgOptionB1 = document.getElementById("imgOptionB1");
let imgOptionB2 = document.getElementById("imgOptionB2");
let imgOptionC1 = document.getElementById("imgOptionC1");
let imgOptionC2 = document.getElementById("imgOptionC2");
let imgOptionC3 = document.getElementById("imgOptionC3");
let imgOptionC4 = document.getElementById("imgOptionC4");

/* these parts of the story are initially hidden and are revealed one by one. when a certain choice is made, the connected part of the story will reveal*/
fieldset2.style.display="none";
fieldset3.style.display="none";
fieldset4.style.display="none";
fieldset5.style.display="none";
fieldset6.style.display="none"; 


/* I wanted to have a little surprise effect, a hidden affordance. This reveals an image of part of what is happening next.
This feeds the curousity as well ;) */
/* if mouse is hoveres over the option buttons an image will be revealed that gives a little glance of what is going to happen next when that option is chosen. */
/* 1 */
option1.addEventListener('mouseenter',() => {
    imgOption1.style.display = 'block';
});

option1.addEventListener('mouseleave',() => {
    imgOption1.style.display = 'none';
});

option2.addEventListener('mouseenter',() => {
    imgOption2.style.display = 'block';
});

option2.addEventListener('mouseleave',() => {
    imgOption2.style.display = 'none';
});


/* 2 */
optionB1.addEventListener('mouseenter',() => {
    imgOptionB1.style.display = 'block';
});

optionB1.addEventListener('mouseleave',() => {
    imgOptionB1.style.display = 'none';
});

optionB2.addEventListener('mouseenter',() => {
    imgOptionB2.style.display = 'block';
});

optionB2.addEventListener('mouseleave',() => {
    imgOptionB2.style.display = 'none';
});


/* 3 */
optionC1.addEventListener('mouseenter',() => {
    imgOptionC1.style.display = 'block';
});

optionC1.addEventListener('mouseleave',() => {
    imgOptionC1.style.display = 'none';
});

optionC2.addEventListener('mouseenter',() => {
    imgOptionC2.style.display = 'block';
});

optionC2.addEventListener('mouseleave',() => {
    imgOptionC2.style.display = 'none';
});


/* 4 */
optionC3.addEventListener('mouseenter',() => {
    imgOptionC3.style.display = 'block';
});

optionC3.addEventListener('mouseleave',() => {
    imgOptionC3.style.display = 'none';
});

optionC4.addEventListener('mouseenter',() => {
    imgOptionC4.style.display = 'block';
});

optionC4.addEventListener('mouseleave',() => {
    imgOptionC4.style.display = 'none';
});


/* when an option is clicked, it will reveal the next part of the story.
Orginally I wanted to let the previous part of the story disappear when 
the user clicked on one of the options. However, I chose to let the previous 
part stay, because I think it would be nice to eventually read the whole story as one big piece.
 */
option1.addEventListener('click',() => {
    fieldset2.style.display = 'block';
}); 

option2.addEventListener('click',() => {
    fieldset5.style.display = 'block';
});

optionB1.addEventListener('click',() => {
    fieldset3.style.display = 'block';
}); 

optionB2.addEventListener('click',() => {
    fieldset4.style.display = 'block';
}); 

optionC1.addEventListener('click',() => {
    fieldset6.style.display = 'block';
}); 

optionC2.addEventListener('click',() => {
    fieldset6.style.display = 'block';
}); 

optionC3.addEventListener('click',() => {
    fieldset6.style.display = 'block';
});

optionC4.addEventListener('click',() => {
    fieldset6.style.display = 'block';
});



