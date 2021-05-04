let elements = document.querySelectorAll('*')
console.log(elements)
let arrayOfElements = Array.from(elements)
let textElementArr = []
arrayOfElements.forEach(element => {
    if (Check(element.innerText) && element.nodeName !== 'NOSCRIPT' && element.nodeName !== 'SCRIPT') {
        element.className += ' hvtool'
        element.addEventListener('click', (e) => {return console.log(Check(e.target.innerText))})
        textElementArr.push(element)
    }
    // element.className +=   ' ' + arrayOfElements.indexOf(element);
})
console.log(textElementArr)

function Check(text){
    if(text){
        var r = /((?:\d+\S\d+)|(?:\d+))/g;
        var match = text.match(r)
        if(match){
            return match
        } else return false
    } else return false
}