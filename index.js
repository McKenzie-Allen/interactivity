console.log("hello world")
const message = document.querySelector('#message')
var delayInMilliseconds = 3000;

function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector('input')

    const movie = document.createElement('li')

    const movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle)
    document.querySelector('ul').appendChild(movie)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    inputField.value = ' '
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = 'Movie Deleted!!!'
    setTimeout(function() {
        message.textContent = ''
    }, delayInMilliseconds)
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')

    if (event.target.classList.contains('checked') === true) {
        message.textContent = 'Achevement Unlocked!'
    } else {
        message.textContent = 'Movie added back!'
    }
    setTimeout(function() {
        message.textContent = ''
    }, delayInMilliseconds)
}

document.querySelector('form').addEventListener('submit', addMovie)