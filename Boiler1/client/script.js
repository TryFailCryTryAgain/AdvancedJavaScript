document.addEventListener("DOMContentLoaded", function() {

    const urlParams = new URLSearchParams(window.location.search);

    const influencer = urlParams.get('influencer');
    const source = urlParams.get('source');

    if (influencer) {
        const CachedInfluencer = localStorage.setItem("influencer", influencer);
    }

    if (source) {
        const CachedSource = localStorage.setItem("source", source);
    }

    const CheckStatusBtn = document.getElementById("check");

    CheckStatusBtn.addEventListener("click", ShowCach);

    function ShowCach() {

        const ShowCachedInfluencer = localStorage.getItem("influencer");
        const ShowCachedSource = localStorage.getItem("source");

        console.log(`${ShowCachedInfluencer}, ${ShowCachedSource}`);

    };


    const registerForm = document.getElementById("register-form");

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;

        const CachedInfluencer = localStorage.getItem('influencer');
        const CachedSource = localStorage.getItem('source');

        let displayData = `
            Username: ${username}
            Email: ${email}
        `

        if (CachedInfluencer) {
            displayData += `Influencer: ${CachedInfluencer}\n`;
        }
        if (CachedSource) {
            displayData += `Source: ${CachedSource}\n`;
        }

        console.log('Registration Details:', displayData);

    });


});