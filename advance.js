//DOM

let button = document.querySelector(".btn");
let body = document.querySelector(".body");

let initial_background_color=`linear-gradient(90deg, #113e41 0%, #111215 100%)`;

//Initial By Default State 
button.textContent = "Dark";
body.style.background = initial_background_color;
button.style.background = initial_background_color;
button.style.color = "cyan";
button.style.borderColor = "cyan";

//Event Listener And Conditions

button.addEventListener("click", () => {

    //Random Red Colors 

let light_red_one=Math.random()*100;

let light_red_two=Math.random()*100;

let dark_red_one=Math.random()*100+155;

let dark_red_two=Math.random()*100+155;

//Random Green Colors

let light_green_one=Math.random()*100;

let light_green_two=Math.random()*100;

let dark_green_one=Math.random()*100+155;

let dark_green_two=Math.random()*100+155;

//Random Blue Colors

let light_blue_one=Math.random()*100;

let light_blue_two=Math.random()*100;

let dark_blue_one=Math.random()*100+155;

let dark_blue_two=Math.random()*100+155;

// Random Angle

let deg=Math.random()*180;

//variables

//light background

let light_color = `linear-gradient(${deg}deg, rgb(${light_red_one},${light_green_one},${light_blue_one}), rgb(${light_red_two},${light_green_two},${light_blue_two}))`;

//dark background

let dark_color = `linear-gradient(${deg}deg, rgb(${dark_red_one},${dark_green_one},${dark_blue_one}), rgb(${dark_red_two},${dark_green_two},${dark_blue_two}))`;

//light text and border colors

let light_text=`rgb(${light_red_one},${light_green_one},${light_blue_one})`;

//dark text and border colors

let dark_text=`rgb(${dark_red_one},${dark_green_one},${dark_blue_one})`;

    if (button.textContent === "Light") {
        button.textContent = "Dark";
        body.style.background = light_color;
        button.style.background = light_color;
        button.style.color = dark_text;
        button.style.borderColor = dark_text;
    }
    else if (button.textContent === "Dark") {
        button.textContent = "Light";
        body.style.background = dark_color;
        button.style.background = dark_color;
        button.style.color = light_text;
        button.style.borderColor = light_text;
    }
}
)
