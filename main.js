showtask();
let addlist = document.getElementById("addlist");
let addtbutton = document.getElementById("addtbutton");

const todoList = document.querySelector(".todoList");

addtbutton.addEventListener("click", function(){
    addlistval = addlist.value;
    if(addlistval.trim()!=0){
        let webtask = localStorage.getItem("localtask");
        if(webtask == null){
            taskObj = [];
        }
        else{
            taskObj = JSON.parse(webtask);
        }
        taskObj.push({'task_name':addlistval, 'completeStatus':false});
		// console.log(taskObj, 'Ashendra');
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        addlist.value = '';
    }
    showtask();
})
 
function showtask(){
    let webtask = localStorage.getItem("localtask");
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }
    let html = '';
    let addedtasklist = document.getElementById("addedtasklist");
    taskObj.forEach((item, index) => {

        if(item.completeStatus==true){
            taskCompleteValue = `<li class="completed">${item.task_name}</li>`;
        }else{
            taskCompleteValue = `<li>${item.task_name}</li>`;
        }
        html += `<li>                
        ${taskCompleteValue}
         <li> <button type="button" onclick="deleteitem(${index})" class="button_supprimer"><i class="fas fa-trash"></i></li>
         <li>` ;
    });
    addedtasklist.innerHTML = html;
}


function deleteitem(index){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
}


let deleteall = document.getElementById("deleteall");
deleteall.addEventListener("click", function(){   
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
        taskObj = [];
    }
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
})


