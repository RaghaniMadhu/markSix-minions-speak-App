var txtInput = document.querySelector("#txt-input");
var buttonTranslate = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";


function getURL(input){
    return serverURL + "?text=" + input;
    alert("Something went wrong with server! try again after some time");
}

// json response is given as
// {
//     "success": {
//         "total": 1
//     },
//     "contents": {
//         "translated": "ka am natew",
//         "text": "I am dancing",
//         "translation": "minion"
//     }
// }

function errorHandler(error) {
    console.log("An Error Occured: ", error);
    alert("Something wrong with server! Please try again after some time.")
}

function functionTranslate(){
    var txtInputValue = txtInput.value;

    if(txtInputValue==""){
        alert("Please enter something to translate");

    }

    var url = getURL(txtInputValue);
    fetch(url)
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText;
        })
        .catch(errorHandler);
}

buttonTranslate.addEventListener("click", functionTranslate);