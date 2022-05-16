const refs = {
    input: document.querySelector('input#name-input'),
    output: document.querySelector('span#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.output.textContent = event.currentTarget.value;

    if (event.currentTarget.value === "") {
        refs.output.textContent = 'Anonymous';
    }
}

