
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





window.onload = ()=> {
    // romoving the outline og  all buttons 
    var btnsArr = document.querySelectorAll("button")
    console.log(btnsArr);
    for(var i=0;i<btnsArr.length;i++){
        btnsArr[i].addEventListener("click",function(){
            event.target.style.outline = "none"
        })
    }
    
    // removing the outline of the all the input elements 
    var btnsArr = document.querySelectorAll("input")
    console.log(btnsArr);
    for(var i=0;i<btnsArr.length;i++){
        btnsArr[i].addEventListener("click",function(){
            event.target.style.outline = "none"
        })
    }

    // var currentUserName = JSON.parse(localStorage.get("currentUser"))
    
    // var allUsers = JSON.parse(localStorage.get("all_users"))

    // var currentuserDetails = allUsers.currentUserName

    // rendorDom()

    var addTaskBtn = document.getElementById("taskAddbtn")
        addTaskBtn.addEventListener("click", handleQuickTask )
    // let pin = document.getElementById('pin')
    // pin.addEventListener('click', () => {
        
    //     let sidebar = document.getElementById('user')
    //     sidebar.style.height = "0"
    // })
}
//close notifications bar
let close = document.getElementsByClassName('close')[0];
let bannner = document.getElementById('banner');

close.onclick = () => {
    bannner.style.display = "none";
}

function handleQuickTask(){
    var quickAddedTask = document.getElementById("quickAddedTask")
    var dayDivChild = document.getElementById("todayDivChild")
    dayDivChild.style.marginBottom = "5px"
    var dataTask = quickAddedTask.value

    if(dataTask.length == 0){
        return
    }

    // create a checkbox
    var chekcbox  = document.createElement("input")
    chekcbox.setAttribute("type","radio")
    
    chekcbox.style.width = "20px"
    chekcbox.style.height = "20px"
    chekcbox.style.marginRight= "10px"
    
    
    chekcbox.style.float = "left"
    var taskDiv = document.createElement("div")
    var textDiv = document.createElement("div")
    textDiv.innerHTML = dataTask
    textDiv.style.width = "auto"
    
    taskDiv.style.padding = "8px"
    taskDiv.style.margin = "20px 0px 20px 0px"
    taskDiv.style.border = "2px solid pink"
    taskDiv.style.borderRadius = "7px"
    
    taskDiv.appendChild(chekcbox)
    taskDiv.appendChild(textDiv)
    var todayDIv = document.getElementById("todayDiv")
    todayDIv.appendChild(taskDiv)

    // rendorDom()


}

// function rendorDom(){
//     currentuserDetails
// }
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


let input = document.getElementById('task-input');
let add = document.getElementById("add_task");


add.onclick = () => {
    console.log(input.value);
    handleQuickTask()
}


function handleQuickTask(){
    var dayDivChild = document.getElementById("todayDivChild")
    dayDivChild.style.marginBottom = "5px"
    var dataTask = input.value

    if(dataTask.length == 0){
        return
    }

    // create a checkbox
    var chekcbox  = document.createElement("input")
    chekcbox.setAttribute("type","radio")
    
    chekcbox.style.width = "20px"
    chekcbox.style.height = "20px"
    chekcbox.style.marginRight= "10px"
    
    
    chekcbox.style.float = "left"
    var taskDiv = document.createElement("div")
    var textDiv = document.createElement("div")
    textDiv.innerHTML = dataTask
    textDiv.style.width = "auto"
    
    taskDiv.style.padding = "8px"
    taskDiv.style.margin = "20px 0px 20px 0px"
    taskDiv.style.border = "2px solid pink"
    taskDiv.style.borderRadius = "7px"
    
    taskDiv.appendChild(chekcbox)
    taskDiv.appendChild(textDiv)
    var todayDIv = document.getElementById("todayDiv")
    todayDIv.appendChild(taskDiv)
}