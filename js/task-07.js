const refs = {
    input: document.querySelector('input#font-size-control'),
    output: document.querySelector('span#text'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.output.style.fontSize = event.currentTarget.value + "px";
}

