function goto(id){
    window.location.href = `#${id}`;
    history.replaceState(null, null, ' ');
}
const corporateSponsor = document.querySelector('.event-corporate-sponser-shortcut');
corporateSponsor.addEventListener('click', () => {
    goto('corporate-sponsor');
});
const registrationForm = document.querySelector('.register-form-shortcut-link');
registrationForm.addEventListener('click', () => {
    goto('registration-form');
});