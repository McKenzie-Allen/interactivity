console.log("hello world")
const message = document.querySelector('#message')

function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector('input')

    const movie = document.createElement('li')

    const movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value
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
}

function crossOffMovie()

document.querySelector('form').addEventListener('submit', addMovie)