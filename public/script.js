
let elements = document.querySelectorAll('*')
console.log(elements)
let arrayOfElements = Array.from(elements)

arrayOfElements.forEach(element => {
    Array.from(element.childNodes).forEach(node => {
        if (node.childNodes.length === 1) {
            if (node.childNodes[0].nodeName === "#text") {
                if (Check(node.childNodes[0].nodeValue)) {
                    node.className += ' hvtool'
                    node.onClick = () => { return false }
                    node.addEventListener('click', (e) => {
                        e.preventDefault()
                        return console.log(Check(e.target.innerText))
                    })
                }
            }
        }
    })
})

function Check(text) {
    if (text) {
        var r = /((?:\d+\S\d+)|(?:\d+))/g;
        var match = text.match(r)
        if (match) {
            return match
        } else return false
    } else return false
}
