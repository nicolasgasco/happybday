const userNames = ["nerea", "ainhoa", "dom", "karmen", "itxaso", "nicolas", "mikel",
                    "aitor"].sort();

const colors = {
    "rosa": {
        mainColor: "#9B51AC",
        darkAccent: "#4F4350",
        lightAccent: "#B5A7B6",
    },
    "naranja": {
        mainColor: "#FF8E00",
        darkAccent: "#524439",
        lightAccent: "#BAA89B",
    },
    "verde": {
        mainColor: "#00FF4C",
        darkAccent: "#3E4A3D",
        lightAccent: "#A1AF9F",
    },
    "rojo": {
        mainColor: "#FF0000",
        darkAccent: "#56423D",
        lightAccent: "#BEA6A0",
    },
    "negro": {
        mainColor: "#000000",
        darkAccent: "#677381",
        lightAccent: "#A3CFCD",
    },
    "amarillo": {
        mainColor: "#EEFF2A",
        darkAccent: "#484838",
        lightAccent: "#ADAC9A",
    },
};


createColorList();
changeColorTheme();

createUsernameList();
celebrateUser()









function celebrateUser() {
    const textInHeader = document.querySelector("#happybd-h1");
    const selectUserForm = document.querySelector("#select-user");

    selectUserForm.onchange = function () {
        let chosenUser = selectUserForm.value;

        textInHeader.innerText = `Zorionak ${chosenUser.charAt(0).toUpperCase() + chosenUser.substring(1)}!!!`
        document.querySelector("#header-text").style.display = "flex";

        document.querySelector("#div-intro").innerHTML = ``;
    

        document.querySelector("#show-content").innerHTML += 

            `<img id="confetti" src="./img/confetti.gif" style="position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; object-fit: fill; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;">
            <img src="./img/happybd.gif" style="position:fixed; top:10%; left:35%; border:none; margin:0; padding:0; overflow:hidden; z-index:999;">
            `
        
        setTimeout( function () {
            document.querySelector("#show-content").innerHTML = ``;
            }
            , 3000)
        
        askIfPresents();
    }
}


function askIfPresents() {
    const introDiv = document.querySelector("#div-intro");

    introDiv.innerHTML =
    `
    <p>Elige un regalo</p>
    <select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
    </select>

    `


}



function changeColorTheme() {
    const darkAccentElems = document.querySelectorAll("#div-intro, #show-content");
    const lightAccentElems = document.querySelectorAll("body, #select-user, #select-color");
    const mainColorElems = document.querySelectorAll("#main-header");

    const whiteText = document.querySelectorAll("#happybd-h1, #color-theme-choice");


    const selectColorForm = document.querySelector("#select-color");

    selectColorForm.onchange = function () {
            for ( let element of darkAccentElems ) {
                element.style.backgroundColor = colors[selectColorForm.value.toLowerCase()].darkAccent;
            }

            for ( let element of lightAccentElems ) {
                element.style.backgroundColor = colors[selectColorForm.value.toLowerCase()].lightAccent;
            }

            for ( let element of mainColorElems ) {
                element.style.backgroundColor = colors[selectColorForm.value.toLowerCase()].mainColor;
            }

            // For black background, white text is needed
            if ( selectColorForm.value.toLowerCase() === "negro" ) {
                for ( let element of whiteText ) {
                    element.style.color = colors[selectColorForm.value.toLowerCase()].lightAccent;
                }
            } else {
                for ( let element of whiteText ) {
                    element.style.color = colors[selectColorForm.value.toLowerCase()].darkAccent;
                }
            }

        };

}


function createUsernameList() {
    const selectUserForm = document.querySelector("#select-user");


    for ( let userName of userNames ) {
        selectUserForm.innerHTML +=
            `
            <option value=${userName}>${userName.charAt(0).toUpperCase()}${userName.substring(1)}</option>
            `
    }
}


function createColorList(){
    const selectColorForm = document.querySelector("#select-color");

    const arrayColors = Object.keys(colors).sort();

    for ( let colorName of arrayColors ) {
        selectColorForm.innerHTML +=
        `
        <option value=${colorName}>${colorName.charAt(0).toUpperCase() + colorName.substring(1)}</option>
        `
    }
}
