let users = {
    chandra:{
        name : "chandra Mouli",
        email: "mouliofficial98@gmail.com",
        tasks: {
            personal:{
                0:["milk","laundry"],
                1:["something","files"],
                2:["milk","laundry"],
                3:["something","files"],
                4:["milk","laundry"],
                5:["something","files"],
                6:["milk","laundry"],
            },
            work:{
                0:["milk","laundry"],
                1:["something","files"],
                2:["milk","laundry"],
                3:["something","files"],
                4:["milk","laundry"],
                5:["something","files"],
                6:["milk","laundry"],
            },
            grocery: {
                0:["milk","laundry"],
                1:["something","files"],
                2:["milk","laundry"],
                3:["something","files"],
                4:["milk","laundry"],
                5:["something","files"],
                6:["milk","laundry"],
            }
        }
    },
    pranay:{
        name: "Pranay Kumar",
        email: "pranay@gmail.com",
        tasks:{
            personal:{
                0:["milk","laundry"],
                1:["something","files"],
                2:["milk","laundry"],
                3:["something","files"],
                4:["milk","laundry"],
                5:["something","files"],
                6:["milk","laundry"],
            },
            work:{
                0:["milk","laundry"],
                1:["something","files"],
                2:["milk","laundry"],
                3:["something","files"],
                4:["milk","laundry"],
                5:["something","files"],
                6:["milk","laundry"],
            },
            grocery: {
                0:["milk","laundry"],
                1:["something","files"],
                2:["milk","laundry"],
                3:["something","files"],
                4:["milk","laundry"],
                5:["something","files"],
                6:["milk","laundry"],
            }
        }
    },
    shreekant:{
        name: "Shree Kant",
        email: "shreekant@gmail.com",
        tasks:{
            personal:{
                0:["milk","laundry"],
                1:["something","files"],
                2:["milk","laundry"],
                3:["something","files"],
                4:["milk","laundry"],
                5:["something","files"],
                6:["milk","laundry"],
            },
            work:{
                0:["milk","laundry"],
                1:["something","files"],
                2:["milk","laundry"],
                3:["something","files"],
                4:["milk","laundry"],
                5:["something","files"],
                6:["milk","laundry"],
            },
            grocery: {
                0:["milk","laundry"],
                1:["something","files"],
                2:["milk","laundry"],
                3:["something","files"],
                4:["milk","laundry"],
                5:["something","files"],
                6:["milk","laundry"],
            }
        }
    },

};


let side_bar_today = document.querySelector(".today")
let dayDivChild = document.getElementById("todayDivChild")
let main_today_count = document.querySelector("#todayDivChild > .count")
var todayDIv = document.getElementById("todayDiv")
let name = document.getElementById('name')
//Customized Greeting according to the time of login
window.onload = () => {
    
    let user = users.pranay
    let today = new Date().getDay()
    let users_name = user.name

    name.textContent = users_name
    // console.log(name.textContent)

    side_bar_today.textContent = user.tasks.personal[today].length
    main_today_count.textContent = side_bar_today.textContent
    
    for(var i=user.tasks.personal[today].length-1; i>=0 ; i--) {
        // console.log(user.tasks.personal[today][i])
        var chekcbox  = document.createElement("input")
        chekcbox.setAttribute("type","radio")
    
    chekcbox.style.width = "20px"
    chekcbox.style.height = "20px"
    chekcbox.style.marginRight= "10px"
    
    
    chekcbox.style.float = "left"
    var taskDiv = document.createElement("div")
    var textDiv = document.createElement("div")
    textDiv.innerHTML = user.tasks.personal[today][i]
    // console.log(textDiv.textContent)
    textDiv.style.width = "auto"
    
    taskDiv.style.padding = "8px"
    taskDiv.style.margin = "20px 0px 20px 0px"
    taskDiv.style.border = "2px solid pink"
    taskDiv.style.borderRadius = "7px"
    
    taskDiv.appendChild(chekcbox)
    taskDiv.appendChild(textDiv)
    todayDIv.appendChild(taskDiv)
    }




    console.log(users_name)
    
    let note = document.getElementById('note');
    
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

    // console.log(users);
    
    localStorage.setItem("allusers",JSON.stringify(users));
}


//adding task 

var addTaskBtn = document.getElementById("taskAddbtn")
    addTaskBtn.addEventListener("click", handleQuickTask )


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


///on click add task button in modal task is added to the task list
let input = document.getElementById('task-input');
let add = document.getElementById("add_task");


add.onclick = () => {
    // console.log(input.value);
    handleQuickTask(input.value)
}


var addTaskBtn = document.getElementById("taskAddbtn")
var quickAddedTask = document.getElementById("quickAddedTask")


addTaskBtn.onclick = () => {
    console.log(quickAddedTask.value)
    let value = quickAddedTask.value
    handleQuickTask(value)

    let personal_task = user.tasks.personal
    let day = new Date().getDay()


    console.log(personal_task[day].push(value))

    localStorage.setItem("allusers",JSON.stringify(users));

}





function handleQuickTask(value){
    
    
    dayDivChild.style.marginBottom = "5px"
    let count  = Number(document.querySelector("#todayDivChild > .count").textContent)
    let today_count = Number(document.querySelector(".today").textContent)
    
    document.querySelector("#todayDivChild > .count").textContent = count+1
    document.querySelector(".today").textContent = today_count+1
    
    if(value.length == 0){
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
    textDiv.innerHTML = value
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