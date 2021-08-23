initialise();

function initialise() {
    emailjs.init('user_srgpCMh2jSEef6XiI84sJ');
};

window.onload = function() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                name.value = "";
                email.value = "";
                message.value = "";
            }, function(error) {
                alert("Something went wrong, try again!");
            });
    });
}