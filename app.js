const buttons = document.querySelectorAll('button');
const toastContainer = document.getElementById('toast');

let successMsg = `Successfully Submitted`
let errorMsg = `Unexpected Error`
let invalidMsg = `Invalid input, try again`

buttons.forEach(button => {
    button.addEventListener('click', e => {
        let dataType = button.getAttribute('data-type')
        createdShow(dataType)
    })
})


function createdShow(data) {
    let myData;
    switch (data) {
        case 'success' :
            myData = `<i class="fa-solid fa-circle-check"></i> ${successMsg}`;
            break;
        case 'error' :
            myData = `<i class="fa-solid fa-bug"></i> ${errorMsg}`;
            break;
        case 'invalid' :
            myData = `<i class="fa-solid fa-circle-exclamation"></i> ${invalidMsg}`;
            break;
        default :
        myData = 'This is my Data'
    }
    creatElement(myData)
}


function creatElement(param1) {
    let createdEl = document.createElement('div');
    createdEl.classList.add('my-toast');
    createdEl.innerHTML = param1;
    toastContainer.appendChild(createdEl);

    if (param1.includes('Successfully Submitted')) {
        createdEl.classList.add( 'success')
    } else if (param1.includes('Unexpected Error')) {
        createdEl.classList.add('error')
    } else {
        createdEl.classList.add('invalid')
    }

    setTimeout(() => {
        createdEl.remove()
    }, 5000)
}