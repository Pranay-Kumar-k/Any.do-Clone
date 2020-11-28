window.onload =() => {
    let pin = document.getElementById('pin')
    pin.addEventListener('click', () => {
        alert('sidebar')
        let sidebar = document.getElementById('user')
        sidebar.style.height = "0"
    })
}

$(document).ready(function(){
  $("#id1").click(function(){
    $("#id2").css("margin-right", "560px");
  });
});


