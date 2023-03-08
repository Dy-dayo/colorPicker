const form = document.getElementById('form')
const color = document.getElementById('color')
const colorMode = document.getElementById('color-mode')


let colorArray = []

form.addEventListener('submit', (e) => {
    e.preventDefault()
    getColor() 
})

function getColor() {
    const thisColor = color.value.slice(1)
    const mode = colorMode.value

    fetch(`https://www.thecolorapi.com/scheme?hex=${thisColor}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(color => {
            const myColors = color.colors.map(color => {
                return color.hex.value
            })
            colorArray = myColors

            renderColors()
        })
}
getColor()

function renderColors() {
    const colorScheme = colorArray.map(color => {
        return `
        <div class="color-div">
            <div style="background-color:${color};"></div>
            <span>${color}</span>
        </div>`
    }).join('')
    document.getElementById('for-color-scheme').innerHTML = colorScheme
}