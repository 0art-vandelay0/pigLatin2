import pigLatin from "./pigLatin";
import './css/styles.css';

function handleForm(event) {
    event.preventDefault();
    document.querySelector('#output').innerText = null;
    const text = document.querySelector("#input").value;
    const wordsToPL = pigLatin(text);
    wordsToPL.forEach(function(element) {
        const p = document.createElement("p");
        p.innerText = element;
        document.querySelector("#output").appendChild(p);
    });
}

window.addEventListener("load", function() {
    document.querySelector("#pigLatin").addEventListener("submit", handleForm);
});