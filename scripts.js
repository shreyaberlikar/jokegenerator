document.addEventListener('DOMContentLoaded', function() {
    const jokeElement = document.getElementById('joke');
    const newJokeBtn = document.getElementById('newJokeBtn');

    newJokeBtn.addEventListener('click', fetchJoke);

    function fetchJoke() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(data => {
                jokeElement.innerHTML = ` ${data.setup}  -  ${data.punchline} 😜`;
            })
            .catch(error => {
                jokeElement.textContent = 'Oops! Something went wrong. 😵';
            });
    }

    // Fetch a joke on page load
    fetchJoke();
});
