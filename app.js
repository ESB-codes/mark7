let buttonEl = document.querySelector("#button");
let input = document.querySelector("textarea");
let outputEl = document.querySelector("#output")
let api = "https://api.funtranslations.com/translate/shakespeare.json"
function errorHandler(error){
    console.log("the issue here is: "+error)
    alert("please try again after an hour or so")
}

function translate() {
    console.log("button was clicked by Ekam");
    console.log(input.value)
    fetch(api + "?text=" + input.value)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            outputEl.innerHTML = data.contents.translated;
        })
        .catch(errorHandler)
}

buttonEl.addEventListener("click", translate);