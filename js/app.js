// inject content for INDEX.HTML > index-container
const index = document.querySelector(".index-container")
const coffees = [
    { name: "Perspiciatis", image: "images/coffee1.jpg" },
    { name: "Voluptatem", image: "images/coffee2.jpg" },
    { name: "Explicabo", image: "images/coffee3.jpg" },
    { name: "Rchitecto", image: "images/coffee4.jpg" },
    { name: " Beatae", image: "images/coffee5.jpg" },
    { name: " Vitae", image: "images/coffee6.jpg" },
    { name: "Inventore", image: "images/coffee7.jpg" },
    { name: "Veritatis", image: "images/coffee8.jpg" },
    { name: "Accusantium", image: "images/coffee9.jpg" },
]

//! builds each component iteratively and adds it to the HTML code
const showCoffees = () => {
    let output = ""
    coffees.forEach(({ name, image }) =>
        (output += `
        <div class="card">
          <img class="card--avatar" src=${image} />
          <h1 class="card--title">${name}</h1>
          <a class="card--link" href="#">taste</a>
        </div>
        `)
    )
    index.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)

// register the service worker with the app
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}

// for ABOUT.html
const about = document.querySelector(".about-container")

// for BLOG.html
const blog = document.querySelector(".blog-container")
