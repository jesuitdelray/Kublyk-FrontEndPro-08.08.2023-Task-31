const options = ["😃", "😊", "😐", "😕", "😞"]
const voteCount = new Array(options.length).fill(0)

function updateResults() {
    const resultsContainer = document.getElementById("resultsContainer")
    resultsContainer.innerHTML = ""

    for (let i = 0; i < options.length; i++) {
        const option = options[i]
        const count = voteCount[i]

        const smileyDiv = document.createElement("div")
        smileyDiv.textContent = option + " - " + count
        resultsContainer.appendChild(smileyDiv)
    }
}

function vote(index) {
    if (index >= 0 && index < options.length) {
        voteCount[index]++
        updateResults()
    }
}

updateResults() // Initialize results on page load
