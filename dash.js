//close notifications bar
let close = document.getElementsByClassName('close')[0];
let bannner = document.getElementById('banner');
close.onclick = () => {
    bannner.innerHTML = ""
    bannner.style.width = "0px";
    bannner.style.height = "0px";
    bannner.style.padding = "0px";
}


//side bar collapse behaviour
let pin = document.getElementById('pin');
let sidebar = document.getElementById('side_bar');

//on click on the pin in side bar the sidebar should be collapsed
pin.addEventListener('click', () => {
    // sidebar.style.height = "0"
    let x = pin.getAttribute('class');
    x = x+" text-dark";
    pin.setAttribute("class" ,x);
    
    sidebar.innerHTML ="";
    let side_bar_class = sidebar.getAttribute('class');
    side_bar_class = "col-1 bg-white";
    sidebar.setAttribute("class",side_bar_class);

    sidebar.innerHTML = `
    <div class="row">
    <div class="col-12 ml-2 pt-5">
    <button class="border-dark rounded-circle bg-white">
            <svg width="24" height="24" viewBox="0 0 24 24">
                <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" transform="translate(-.8)">
                    <path d="M21.6 17.8a1.6 1.6 0 01-1.6 1.6H5.6A1.6 1.6 0 014 17.8V9a1.6 1.6 0 011.6-1.6h3.2L10.4 5h4.8l1.6 2.4H20A1.6 1.6 0 0121.6 9v8.8z">
                    </path>
                    <circle cx="12.8" cy="13" r="3.2">
                    </circle>
                </g>
            </svg>
    </button>
</div> </div>

<div class="row">
<div class="col-12 mt-1 ml-2 pt-5">
<img src = "https://www.flaticon.com/svg/static/icons/svg/992/992482.svg" class="w-50" id="create_task"/>
</div>
</div>
`
});

sidebar.addEventListener("onmouseenter",() => {
})
//creating a task from side bar

let task = document.getElementById('create_task')
let body = document.querySelector('body')

task.onclick = () => {
}


                            