let users = {
    chandra:{
        name : "chandra Mouli",
        email: "mouliofficial98@gmail.com",
        tasks: {
            personal:{
                0:["milk","laundry"],
                1:["something","files"]
            },
            work:{
                0:["milk","laundry"],
                1:["something","files"]
            },
            grocery: {
                0:["milk","laundry"],
                1:["something","files"],
            }
        }
    },
    pranay:{
        name: "Pranay Kumar",
        email: "pranay@gmail.com",
        tasks:{
            personal:{
                0:["milk","laundry"],
                1:["something","files"]
            },
            work:{
                0:["milk","laundry"],
                1:["something","files"]
            },
            grocery: {
                0:["milk","laundry"],
                1:["something","files"],
            }
        }
    },
    shreekant:{
        name: "Shree Kant",
        email: "shreekant@gmail.com",
        tasks:{
            personal:{
                0:["milk","laundry"],
                1:["something","files"]
            },
            work:{
                0:["milk","laundry"],
                1:["something","files"]
            },
            grocery: {
                0:["milk","laundry"],
                1:["something","files"],
            }
        }
    },

};

console.log(users);

localStorage.setItem("allusers",JSON.stringify(users));





//close notifications bar
let close = document.getElementsByClassName('close')[0];
let bannner = document.getElementById('banner');

close.onclick = () => {
    bannner.style.display = "none";
}


//side bar collapse behaviour
//on click on the pin in side bar the sidebar should be collapsed 
// Add one camera icon and create task icon

let pin = document.getElementById('pin');
let sidebar = document.getElementById('side_bar');

pin.addEventListener('click', () => {
    
    
    sidebar.innerHTML ="";
    sidebar.style.width = "80px";

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

//Customized Greeting according to the time of login

let users_name = "Pranay kumar";
let note = document.getElementById('note');
// console.log(note.textContent)

var time = new Date().getHours()

if(time < 12) {
    note.textContent = "Good Morning,  " +users_name;
}
else if( time < 17 ) {
    note.textContent = "Good Afternoon,  " +users_name;
}
else {
    note.textContent = "Good Evening,  " +users_name;
}


//taking task input from the user and append it to DOM 
// update the local storage with user input

let input = document.getElementById('task-input');
let add = document.getElementById("add_task");


add.onclick = () => {
    
}
