    document.getElementById('registration-form').addEventListener('submit', function(event) {
        event.preventDefault();

        let username = document.getElementById('username').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        let usernameError = document.getElementById('username-error');
        let emailError = document.getElementById('email-error');
        let passwordError = document.getElementById('password-error');
        let isValid = true;

        if (username.length <= 5) {
            usernameError.textContent = 'Username must be more than 5 characters';
            isValid = false;
        }
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        }
        if (password.length <= 8) {
            passwordError.textContent = 'Password must be more than 8 characters';
            isValid = false;
        }
        if (isValid) {
            fetch('https://6657373e9f970b3b36c869e6.mockapi.io/imge', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, email, password }),
                })
                .then(response => {
                    window.location.href = `home.html?username=${encodeURIComponent(username)}`;
                })
        }
    });



    let fetchUrl = `https://6657373e9f970b3b36c869e6.mockapi.io/imge/${username}`;

    function displayUsername() {
        fetch(fetchUrl, {
                method: 'GET',
            })
            .then(response => {
                return response.json();
            })
            .then(userData => {
                if (userData.username) {
                    const welcomeMessageElement = document.getElementById('p');
                    welcomeMessageElement.textContent = `Welcome, ${userData.username}!`;
                }
            })
    }
    displayUsername();