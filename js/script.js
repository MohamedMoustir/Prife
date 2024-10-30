let setdata;
var tmp = null;
let mood= 'create'
console.log(tmp);

// get data in html
const addTasks = document.getElementById("addTasks");
//add tasks
addTasks.addEventListener('click', function () {
 

  if (document.getElementById("description").value == '' || document.getElementById("titer").value == '' || document.getElementById("date_limite").value == '') {
    alert("email is found")


  } else {

    let description = document.getElementById("description");
    let Titer = document.getElementById("titer");
    let priorite = document.getElementById("priorite");
    let Status = document.getElementById("Status");
    let date_limite = document.getElementById("date_limite");
    let id;


    if (localStorage.getItem("task") != null) {
      setdata = JSON.parse(localStorage.getItem("task"))
    } else {
      setdata = [];
    }
   
    let getDta = {
      id:Math.random() * 100,
      Titer: Titer.value,
      priorite: priorite.value,
      Status: Status.value,
      date_limite: date_limite.value,
      description: description.value,

    }
    
    console.log("id is ",tmp); 
    
     if(mood =='create'){
      setdata.push(getDta)
      
     }else{
      setdata[tmp]=getDta;
      tmp =null
     }
    
     localStorage.setItem("task", JSON.stringify(setdata))

    setDataInnerHtml()
    closeCardsTasks()
    clearFormFields()
    location.reload()
  }
})
console.log(mood);


// clear data
function clearFormFields() {

  document.getElementById("description").value = '';
  document.getElementById("titer").value = '';
  document.getElementById("priorite").value = '';
  document.getElementById("Status").value = '';
  document.getElementById("date_limite").value = '';

}

// ajout data in html

function setDataInnerHtml() {

  let taskContainer1 = document.getElementById("task1");
  let taskContainer2 = document.getElementById("task2");
  let taskContainer3 = document.getElementById("task3");




  taskContainer1.innerHTML = "";
  taskContainer2.innerHTML = "";
  taskContainer3.innerHTML = "";


  setdata.forEach(task => {
  
    switch (task.Status) {

      case "To Do":
        
        taskContainer1.innerHTML += `
          <div  >
            <div class="bg-white shadow-md border border-red-600 border-l-8 p-4 mb-4 w-64 relative" >
              <div class="absolute leading-3 font-bold right-2 top-0 size-5">
                <h1 onclick="openChoxtodo()">...</h1>
              </div>
              <div class="relative max-w-sm">
                <div class="absolute z-10 flex items-center ps-1 pointer-events-none right-11 top-8">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
                </div>
                <h1 id="default-datepicker"  class="border border-red-700   w-16 absolute right-0 top-7 px-5">${task.date_limite}</h1>
              </div>
              <h3 class="font-bold">${task.Titer}</h3>
              <p class="text-zinc-500 text-xs my-2">${task.description} | <span>${task.priorite}</p>
              <div class="flex justify-between mt-3">
                <button type="button" onclick="removeTask(${task.id})" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2">Remove</button>
                <button type="button"  onclick="UpditeTask(${task.id})" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3">Update</button>
              </div>
            </div>
            </div>
          `;
        break;

        
      case "In Progess":
       
        taskContainer2.innerHTML += `
          <div class="">
          <div class="bg-white shadow-md border border-black border-l-8 p-4 mb-4 w-64  block justify-center" >
             <div class="absolute leading-3 font-bold right-2 top-0 size-5">
                <h1 onclick="openChoxtodo()">...</h1>
              </div>
            <div class="relative max-w-sm">
              <div class="absolute z-10 flex items-center ps-1 pointer-events-none right-11 top-8">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
              </div>
              <h1 id="default-datepicker"  class="border border-red-700   w-16 absolute right-0 top-7 px-5">${task.date_limite}</h1>
            </div>
            <h3 class="font-bold">${task.Titer}</h3>
            <p class="text-zinc-500 text-xs my-2">${task.description} | <span>${task.priorite}</p>
            <div class="flex justify-between mt-3">
              <button type="button" onclick="removeTask(${task.id})" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2">Remove</button>
              <button type="button"  onclick="UpditeTask(${task.id})" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3">Update</button>
            </div>
          </div>
          </div>
        `;

        
break;

      case "Done":
        
        taskContainer3.innerHTML += `
           <div class="">
          <div class="bg-white shadow-md border border-green-600 border-l-8 p-4 mb-4 w-64  block justify-center" >
             <div class="absolute leading-3 font-bold right-2 top-0 size-5">
                <h1 onclick="openChoxtodo()">...</h1>
              </div>
            <div class="relative max-w-sm">
              <div class="absolute z-10 flex items-center ps-1 pointer-events-none right-11 top-8">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
              </div>
              <h1 id="default-datepicker"  class="border border-red-700   w-16 absolute right-0 top-7 px-5">${task.date_limite}</h1>
            </div>
            <h3 class="font-bold">${task.Titer}</h3>
            <p class="text-zinc-500 text-xs my-2">${task.description} | <span>${task.priorite}</span></p>
            <div class="flex justify-between mt-3">
              <button type="button" onclick="removeTask(${task.id})" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2">Remove</button>
              <button type="button"  onclick="UpditeTask(${task.id})" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3">Update</button>
            </div>
          </div>
          </div>
        `;
        
      default:
        break;

    }
  
  });


}





// onload data
window.onload = function () {
  if (localStorage.getItem("task") != null) {
    setdata = JSON.parse(localStorage.getItem("task"));
  }
  setDataInnerHtml();

};






const header = document.querySelector("header");

// function Open mun
function OpenMnue() {
  let navbar = document.getElementById("navbar-hamburger")
  navbar.classList.toggle("hidden");
}

// function Open cards Add Tasks and add style in header
let crud_modal = document.getElementById("crud-modal")

function openCardsTasks() {
  crud_modal.classList.toggle("hidden");
  header.classList.toggle('blur-sm');

}
//  close cards add tasks
function closeCardsTasks() {
  crud_modal.classList.toggle("hidden");
  header.classList.toggle('blur-sm');
  
}





// function popup Remove
function removeTask(id) {
  // let popup_remove= document.getElementById("popup-remove");
  //  popup_remove.classList.toggle("hidden");
  //  header.classList.toggle('blur-sm');
  setdata = setdata.filter(filter => filter.id !== id);
  localStorage.setItem("task", JSON.stringify(setdata));
  setDataInnerHtml();
}

function closepopupremove() {
  let popup_remove = document.getElementById("popup-remove");
  popup_remove.classList.toggle("hidden");
  header.classList.toggle('blur-sm');
}


// function Update Tasks


function UpditeTask(i) {
  crud_modal.classList.toggle("hidden");
  header.classList.toggle('blur-sm');
  addTasks.innerHTML="Updite";


const task = setdata.find(task => task.id === i);

if (task) {
  document.getElementById("description").value = task.description;
  document.getElementById("titer").value = task.Titer;
  document.getElementById("priorite").value = task.priorite;
  document.getElementById("Status").value = task.Status;
  document.getElementById("date_limite").value = task.date_limite;
}
 mood = 'updite';
tmp=i;

 }
 
 function recherche(value){
 let recher = document.getElementById("recher")
  setdata = setdata.filter(filter => filter.Titer === value);
  setDataInnerHtml();
  if (recher.value == '') {
    location.reload()
  }
 }