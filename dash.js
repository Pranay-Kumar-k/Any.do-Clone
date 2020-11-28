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



var today = document.getElementById("today")
var nextSevendays = document.getElementById("nextSevenDays")
var allTasks = document.getElementById("allTasks")

localStorage.setItem('allusers', JSON.stringify(users))

let side_bar_today = document.querySelector(".today")
let dayDivChild = document.getElementById("todayDivChild")
let main_today_count = document.querySelector("#todayDivChild > .count")
var todayDIv = document.getElementById("todayDiv")
let name = document.getElementById('name')

// let allUsers = users
var allUsers = JSON.parse(localStorage.getItem("allusers"))
// console.log(allUsers)

//on click on today displays all the today's tasks for the user
today.addEventListener("click",handleTodaysData)

let user = "pranay"
var currentuserDetails = allUsers[user].tasks
console.log(currentuserDetails)

window.onload = () => {

    localStorage.setItem('currentUser',JSON.stringify(user))

    let today = new Date().getDay()
    let users_name = user + " kumar"

    name.textContent = users_name
    // console.log(name.textContent)

    side_bar_today.textContent = (currentuserDetails.personal[today]).length
    main_today_count.textContent = side_bar_today.textContent
    
    for(var i=(currentuserDetails.personal[today]).length-1; i>=0 ; i--) {
        // console.log(user.tasks.personal[today][i])
        var chekcbox  = document.createElement("input")
        chekcbox.setAttribute("type","radio")
    
    chekcbox.style.width = "20px"
    chekcbox.style.height = "20px"
    chekcbox.style.marginRight= "10px"
    
    
    chekcbox.style.float = "left"
    var taskDiv = document.createElement("div")
    var textDiv = document.createElement("div")

    textDiv.innerHTML = (currentuserDetails.personal[today])[i]
    // console.log(textDiv.textContent)
    textDiv.style.width = "auto"
    
    taskDiv.style.padding = "8px"
    taskDiv.style.margin = "20px 0px 20px 0px"
    taskDiv.style.border = "2px solid pink"
    taskDiv.style.borderRadius = "7px"
    chekcbox.setAttribute('id',i)
    taskDiv.setAttribute('id',i+1)
    
    taskDiv.appendChild(chekcbox)
    taskDiv.appendChild(textDiv)
    todayDIv.appendChild(taskDiv)
    
    }

//Customized Greeting according to the time of login
///welcome note for the user according to the time
    // console.log(users_name)
    
    let note = document.getElementById('welcome_note');
    
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

    handleCheckBoxes()
}



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
    // personal_task[day].push(input.value)
    handleCheckBoxes()

}



//adding task 

var addTaskBtn = document.getElementById("taskAddbtn")
var quickAddedTask = document.getElementById("quickAddedTask")


addTaskBtn.onclick = () => {
    // console.log(quickAddedTask.value)
    let value = quickAddedTask.value
    handleQuickTask(value)
}





function handleQuickTask(value){
    
    handleCheckBoxes()
    var currentid = localStorage.getItem("i")
    
    dayDivChild.style.marginBottom = "5px"
    
    let count  = Number(document.querySelector("#todayDivChild > .count").textContent)
    let today_count = Number(document.querySelector(".today").textContent)
    document.querySelector("#todayDivChild > .count").textContent = count+1
    document.querySelector(".today").textContent = today_count+1
    
    if(value.length == 0){
        return
    }
    saveTask(value)

    // create a checkbox
    var chekcbox  = document.createElement("input")
    chekcbox.setAttribute("type","radio")

    var checkBoxId = currentid 
    currentid = Number(currentid) + 1 
    // console.log("checkbox id "+checkBoxId);
    chekcbox.setAttribute("id",checkBoxId)
    
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


    var taskDivId = currentid 
    // console.log(taskDivId);
    taskDiv.setAttribute("id",taskDivId)
    currentid++
    localStorage.setItem("i",currentid)
    
    taskDiv.appendChild(chekcbox)
    taskDiv.appendChild(textDiv)
    var todayDIv = document.getElementById("todayDiv")
    todayDIv.appendChild(taskDiv)

    handleCheckBoxes()
}


function handleCheckBoxes(){
    
    var allCheckBoxes = document.querySelectorAll("input")
    
    for(var i = 0; i < allCheckBoxes.length; i++){
        if( (allCheckBoxes[i].type) && allCheckBoxes[i].type === "radio"){
            
            // let count  = Number(document.querySelector("#todayDivChild > .count").textContent)
            // let today_count = Number(document.querySelector(".today").textContent)
            
        // document.querySelector("#todayDivChild > .count").textContent = count-1
        
        allCheckBoxes[i].addEventListener("click", function(){
            var checkId = event.target.id
            var NumberCheckId = Number(checkId)
            var requiredId = NumberCheckId + 1
            console.log(requiredId)
            var requiredElement = document.getElementById(requiredId)
            // document.querySelector(".today").textContent = today_count-1
                requiredElement.remove()
            })
        }
    }
}



function handleTodaysData(){
    var quicktaskCard = document.getElementById("left_card")
    quicktaskCard.textContent =""
    var h5 = document.createElement("h5")
    h5.setAttribute("class","h5 p-1 m-1")
    h5.textContent ="Today"

    quicktaskCard.appendChild(h5)
    var presentDate = new Date().getDay()

    
    for( listType in currentuserDetails) {
        for(date in currentuserDetails[listType]){
            
            
            var dateInList = currentuserDetails[listType][date]
            if(dateInList == presentDate){
                
                var listOfTasks = currentuserDetails[listType]
                listOfTasks = listOfTasks[date]
                for(var k=0;k<listOfTasks.length;k++){
                    var currentid = localStorage.getItem("i")
    
                    
                    var dataTask = listOfTasks[k]

                    if(dataTask.length == 0){
                        return
                    }

                    // create a checkbox
                    var chekcbox  = document.createElement("input")
                    chekcbox.setAttribute("type","radio")
                    var checkBoxId = currentid 
                    currentid = Number(currentid) + 1 
                    console.log("checkbox id "+checkBoxId);
                    chekcbox.setAttribute("id",checkBoxId)
                    
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
                    //to set the id for the taskDiv
                    var taskDivId = currentid 
                    console.log(taskDivId);
                    taskDiv.setAttribute("id",taskDivId)
                    currentid++
                    //again store the value i in local storaget
                    localStorage.setItem("i",currentid)
                    
                    taskDiv.appendChild(chekcbox)
                    taskDiv.appendChild(textDiv)
                    // var todayDIv = document.getElementById("todayDiv")
                    quicktaskCard.appendChild(taskDiv)

                    handleCheckBoxes()
                }
            }
        }
    }
}




function saveTask(task){
    var currentUserName = JSON.parse(localStorage.getItem("currentUser"))

    var allUsers = JSON.parse(localStorage.getItem("allusers"))

    var currentuserDetails = allUsers[currentUserName].tasks
    var presentDate = new Date().getDay()
    for(date in currentuserDetails.personal){
        var dateInList = currentuserDetails.personal.presentDate
        console.log(dateInList)
            if(dateInList == presentDate){
                
                var listOfTasks = currentuserDetails.personal
                listOfTasks = listOfTasks[date]
                console.log( listOfTasks);
                listOfTasks.push(task)
            }
    }
    localStorage.setItem("allusers",JSON.stringify(allUsers))
}
