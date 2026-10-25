let button = document.querySelector(".btn");
    let body = document.querySelector(".body");
    button.textContent="Dark";
    body.style.backgroundColor="rgba(150, 90, 209, 0.3)";
            button.style.backgroundColor="rgba(150, 90, 209, 0.3)";
            button.style.color="rgba(150, 90, 209, 1)";
            button.style.borderColor="rgba(150, 90, 209, 1)"
    button.addEventListener("click", () => {
        if (button.textContent === "Light") {
            button.textContent="Dark";
            body.style.backgroundColor="rgba(150, 90, 209, 0.3)";
            button.style.backgroundColor="rgba(150, 90, 209, 0.3)";
            button.style.color="rgba(150, 90, 209, 1)";
            button.style.borderColor="rgba(150, 90, 209, 1)"
        }
        else if(button.textContent === "Dark")
        {
            button.textContent="Light";
            body.style.backgroundColor="rgba(150, 90, 209, 1)";
            button.style.backgroundColor= "rgba(150, 90, 209, 1)";
            button.style.color="#f2e9ff";
            button.style.borderColor="#f2e9ff"
        }
    }
    )
