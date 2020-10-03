
var buttonSelect = document.querySelectorAll('.bt-select')

buttonSelect.forEach(e => {
    e.prevenDefault()
    e.addEventListener('click', () => {
        var value = e.getAttribute('data-value');
        console.log(value)
    })
})
