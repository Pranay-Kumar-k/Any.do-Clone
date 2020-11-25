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

    var currentUserName = JSON.parse(localStorage.get("currentUser"))
    
    var allUsers = JSON.parse(localStorage.get("all_users"))

    var currentuserDetails = allUsers.currentUserName

    rendorDom()

    var addTaskBtn = document.getElementById("taskAddbtn")
        addTaskBtn.addEventListener("click", handleQuickTask )
    let pin = document.getElementById('pin')
    pin.addEventListener('click', () => {
        
        let sidebar = document.getElementById('user')
        sidebar.style.height = "0"
    })
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

    rendorDom()


}

function rendorDom(){
    currentuserDetails
}

// 