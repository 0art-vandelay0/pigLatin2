import {pigLatin, reversePigLatin} from "./pigLatin";
import './css/styles.css';

function handleForm(event) {
    event.preventDefault();
    document.querySelector('#output').innerText = null;
    const text = document.querySelector("#input").value;
    const wordsToPL = pigLatin(text);
    // const sentence = joinWords(wordsToPL);
    const sentence = wordsToPL;
    const p = document.createElement("p");
    // p.innerText = wordsToPL;
    p.innerText = sentence;
    document.querySelector("#output").append(p);

    const reversedWords = reversePigLatin(text);
    const p2 = document.createElement("p");
    p2.innerText = reversedWords;
    document.querySelector("#output").append(p2);
}

window.addEventListener("load", function() {
    document.querySelector("#pigLatin").addEventListener("submit", handleForm);
});