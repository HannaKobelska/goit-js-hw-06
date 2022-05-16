const refs = {
    submitBtn: document.querySelector('.login-form'),
};

refs.submitBtn.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    
    const formOutput = [
        {
            name: 'email',
            value: email.value,
        },
       {
        name: 'password',
            value: password.value,
       },];
    
    console.log(formOutput);

    // const formData = new FormData(event.currentTarget);

    // formData.forEach((value, name) => {
    //     console.log("onFormSubmit -> name", name);
    //     console.log("onFormSubmit -> value", value);
    // });

    event.currentTarget.reset();
}