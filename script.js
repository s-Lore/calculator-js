function insertToDisplay(data){
    document.querySelector('#display').value += data
}

function clean(){
    document.querySelector('#display').value = ''
}

function deleteLast(){
    const display = document.querySelector('#display')
    display.value = display.value.slice(0, -1)
}

