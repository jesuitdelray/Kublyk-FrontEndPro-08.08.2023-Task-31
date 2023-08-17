const parent = document.querySelector(".parent")

parent.addEventListener("click", event => {
    if (event.target.closest(".emoji__picture")) {
        const nextElementSibling = event.target.nextElementSibling

        nextElementSibling.textContent = Number(nextElementSibling.textContent) + 1
    }
})
