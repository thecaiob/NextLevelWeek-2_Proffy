// document.querySelector('#container').style.backgroundColor = "red" => mudança de elementos do CSS da interface através do JavaScript

// Procurar o botão
document.querySelector("#add-time")
.addEventListener('click',cloneField)
// Quando clicar no botão

// Executar uma ação
function cloneField() {
    // console.log('') -> interagir com o console da página web

    // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Limpar campos:
    // const fields = newFieldContainer.querySelectorAll('input')

    // console.log(fields[0].value = '') => atribuição de valor a uma variável a partir do console da página web.

    // Limpar de cada campo, independente da quantidade:
    //  fields.forEach(function(field){
        // Pega o field atual e coloca ele como vazio
    //    field.value = ''
    //})

    // Colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
