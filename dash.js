window.onload =() => {
    let pin = document.getElementById('pin')
    pin.addEventListener('click', () => {
        alert('sidebar')
        let sidebar = document.getElementById('user')
        sidebar.style.height = "0"
    })
}


