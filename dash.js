
var currentUserName = JSON.parse(localStorage.getItem("currentUser"))

var allUsers = JSON.parse(localStorage.getItem("allusers"))

var currentuserDetails = allUsers[currentUserName].tasks


var addTaskBtn = document.getElementById("taskAddbtn")
var quickAddedTask = document.getElementById("quickAddedTask")


addTaskBtn.onclick = () => {
    // console.log(quickAddedTask.value)
    let value = quickAddedTask.value
    handleQuickTaskModal(value)
}

let side_bar_today = document.querySelector(".today")
let dayDivChild = document.getElementById("todayDivChild")
let main_today_count = document.querySelector("#todayDivChild > .count")
var todayDIv = document.getElementById("todayDiv")

var today = document.getElementById("today")



function handleQuickTaskModal(value){

    handleCheckBoxes()
    var currentid = localStorage.getItem("i")

    let count  = Number(document.querySelector("#todayDivChild > .count").textContent)
    let today_count = Number(document.querySelector(".today").textContent)
    dayDivChild.style.marginBottom = "5px"
    
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

}


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



    handleCheckBoxes()

    var today = document.getElementById("today")
    var nextSevendays = document.getElementById("nextSevenDays")
    var allTasks = document.getElementById("allTasks")

    today.addEventListener("click",handleTodaysData)



    // rendorDom()

    var addTaskBtn = document.getElementById("taskAddbtn")
        addTaskBtn.addEventListener("click", handleQuickTask )
}
//close notifications bar
let close = document.getElementsByClassName('close')[0];
let bannner = document.getElementById('banner');
close.onclick = () => {
    bannner.innerHTML = ""
    bannner.style.width = "0px";
    bannner.style.height = "0px";
    bannner.style.padding = "0px";
}

function handleQuickTask(){
    // to set id for check box and taskBox 
    var currentid = localStorage.getItem("i")
    
    var quickAddedTask = document.getElementById("quickAddedTask")
    var dayDivChild = document.getElementById("todayDivChild")
    dayDivChild.style.marginBottom = "5px"
    var dataTask = quickAddedTask.value

    console.log(dataTask);
    saveTask(dataTask)

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
    var todayDIv = document.getElementById("todayDiv")
    todayDIv.appendChild(taskDiv)

    handleCheckBoxes()
    // rendorDom()


}

// function rendorDom(){
//     currentuserDetails
// }
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

sidebar.addEventListener("mouseover",() => {


})

sidebar.addEventListener("mouseout", () => {

})


//Customized Greeting according to the time of login

let users_name = "Pranay"
let note = document.getElementById('note')
// console.log(note.textContent)

var time = new Date().getHours()

if(time < 12) {
    note.textContent = "Good Morning,  " +users_name
}
else if( time < 17 ) {
    note.textContent = "Good Afternoon,  " +users_name
}
else {
    note.textContent = "Good Evening,  " +users_name
}


// localStorage.setItem("allusers",JSON.stringify(users))

// cursor: pointer;

function handleCheckBoxes(){

    var allCheckBoxes = document.querySelectorAll("input")
    
    for(var i = 0; i < allCheckBoxes.length; i++){
        if( (allCheckBoxes[i].type) && allCheckBoxes[i].type === "radio"){
            
            allCheckBoxes[i].addEventListener("click", function(){
                var checkId = event.target.id
                var NumberCheckId = Number(checkId)
                var requiredId = NumberCheckId + 1
                
                var requiredElement = document.getElementById(requiredId)
                requiredElement.remove()
            })
        }
    }
}

function handleTodaysData(){
    var quicktaskCard = document.getElementById("scrolllinID")
    quicktaskCard.textContent =""
    var h5 = document.createElement("h5")
    h5.setAttribute("class","h5 p-1 m-1")
    h5.textContent ="Today"

    quicktaskCard.appendChild(h5)
    var presentDate = new Date().getDate()

    
    for( listType in currentuserDetails){
        for(date in currentuserDetails[listType]){
            
            var dateInList = date.split("-").map(Number)
            if(dateInList[0] == presentDate){
                
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
    var presentDate = new Date().getDate()
    for(date in currentuserDetails.personal){
        var dateInList = date.split("-").map(Number)
            if(dateInList[0] == presentDate){
                
                var listOfTasks = currentuserDetails.personal
                listOfTasks = listOfTasks[date]
                console.log( listOfTasks);
                listOfTasks.push(task)
            }
    }
    localStorage.setItem("allusers",JSON.stringify(allUsers))
}


// {"chandra":
//     {
//         "name":"chandra",
//         "email":"mouliofficial98@gmail.com",
//         "tasks":{"personal":
//                     {"25-11-2020":["milk","laundry"],
//                     "26-11-2020":["something","files"]
//                 },
//                 "work":
//                     {"25-11-2020":["milk","laundry"],
//                     "26-11-2020":["something","files"]
//                 },
//                 "grocery":
//                     {"25-11-2020":["milk","laundry"],
//                     "26-11-2020":["something","files"]
//                 }
//             }
//         },
//     "pranay":
//     {"name":"Pranay",
//     "email":"pranay@gmail.com",
//     "tasks":{"personal":
//                 {"25-11-2020":["milk","laundry"],
//                 "26-11-2020":["something","files"]
//             },
//             "work":
//                 {"25-11-2020":["milk","laundry"],
//                 "26-11-2020":["something","files"]
//             },
//             "grocery":
//                 {"25-11-2020":["milk","laundry"],
//                 "26-11-2020":["something","files"]
//             }
//         }
//     },
//     "shreekant":
//     {"name":"Shree",
//     "email":"shreekant@gmail.com",
//     "tasks":{"personal":
//                 {"25-11-2020":["milk","laundry"],
//                 "26-11-2020":["something","files"]
//             },
//             "work":
//                 {"25-11-2020":["milk","laundry"],
//                 "26-11-2020":["something","files"]
//             },
//             "grocery":
//                 {"25-11-2020":["milk","laundry"],
//                 "26-11-2020":["something","files"]
//             }
//         }
//     }
// }

let users = {
    chandra:{
        name : "chandra Mouli",
        email: "mouliofficial98@gmail.com",
        tasks: {
            personal:{
                0:["sunday","milk","laundry"],
                1:["monday","something","files"],
                2:["tuesday","milk","laundry"],
                3:["wednesday","something","files"],
                4:["thursday","milk","laundry"],
                5:["friday","something","files"],
                6:["saturday","milk","laundry"],
            },
            work:{
                0:["sunday","milk","laundry"],
                1:["monday","something","files"],
                2:["tuesday","milk","laundry"],
                3:["wednesday","something","files"],
                4:["thursday","milk","laundry"],
                5:["friday","something","files"],
                6:["saturday","milk","laundry"],
            },
            grocery: {
                0:["sunday","milk","laundry"],
                1:["monday","something","files"],
                2:["tuesday","milk","laundry"],
                3:["wednesday","something","files"],
                4:["thursday","milk","laundry"],
                5:["friday","something","files"],
                6:["saturday","milk","laundry"],
            }
        }
    },
    pranay:{
        name: "Pranay Kumar",
        email: "pranay@gmail.com",
        tasks:{
            personal:{
                0:["sunday","milk","laundry"],
                1:["monday","something","files"],
                2:["tuesday","milk","laundry"],
                3:["wednesday","something","files"],
                4:["thursday","milk","laundry"],
                5:["friday","something","files"],
                6:["saturday","milk","laundry"],
            },
            work:{
                0:["sunday","milk","laundry"],
                1:["monday","something","files"],
                2:["tuesday","milk","laundry"],
                3:["wednesday","something","files"],
                4:["thursday","milk","laundry"],
                5:["friday","something","files"],
                6:["saturday","milk","laundry"],
            },
            grocery: {
                0:["sunday","milk","laundry"],
                1:["monday","something","files"],
                2:["tuesday","milk","laundry"],
                3:["wednesday","something","files"],
                4:["thursday","milk","laundry"],
                5:["friday","something","files"],
                6:["saturday","milk","laundry"],
            }
        }
    },
    shreekant:{
        name: "Shree Kant",
        email: "shreekant@gmail.com",
        tasks:{
            personal:{
                0:["sunday","milk","laundry"],
                1:["monday","something","files"],
                2:["tuesday","milk","laundry"],
                3:["wednesday","something","files"],
                4:["thursday","milk","laundry"],
                5:["friday","something","files"],
                6:["saturday","milk","laundry"],
            },
            work:{
                0:["sunday","milk","laundry"],
                1:["monday","something","files"],
                2:["tuesday","milk","laundry"],
                3:["wednesday","something","files"],
                4:["thursday","milk","laundry"],
                5:["friday","something","files"],
                6:["saturday","milk","laundry"],
            },
            grocery: {
                0:["sunday","milk","laundry"],
                1:["monday","something","files"],
                2:["tuesday","milk","laundry"],
                3:["wednesday","something","files"],
                4:["thursday","milk","laundry"],
                5:["friday","something","files"],
                6:["saturday","milk","laundry"],
            }
        }
    },

};

localStorage.setItem("users",JSON.stringify(users))