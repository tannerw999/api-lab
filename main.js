// const { default: axios } = require("axios");

// const { default: axios } = require("axios");

const button = document.querySelector(".btn")
const baseUrl = "https://swapi.dev/api/planets/2/"
// Tried using URL https://swapi.dev/api/planets?search=alderaan and it won't work.

function buttonClick() {
    console.log("button clicked");
        axios.get(baseUrl).then((res) => {
                let residents = res.data.residents
                for(let i = 0; i < residents.length; i++) {
                axios.get(residents[i]).then((res) => {
                        console.log(res.data.name)
                        let names = document.createElement("h2")
                        names.textContent = res.data.name
                        document.querySelector("body").appendChild(names)
            })
        }
    })
}

button.addEventListener("click", buttonClick)