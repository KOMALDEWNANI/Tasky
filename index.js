const taskContainer = document.querySelector(".task__container");   
const generateNewCard = (taskData) => {
  return `<div class="col-md-4 id = ${taskData.id}">
       <div class="card text-center">
         <div class="card-header d-flex justify-content-end gap-2">
           <button type="button" class="btn btn-outline-success"><i class="fas fa-pen"></i></button>
   <button type="button" class="btn btn-outline-danger"><i class="far fa-trash-alt"></i></button>
         </div>
         <img   src="${taskData.imageurl}" class = "card-img-top" />
         <div class="card-body">
          
           <h5 class="card-title">${taskData.tasktitle}</h5>
           <p class="card-text">${taskData.tasktype}</p>
           <p class="card-text">${taskData.taskdescription}</p>
         </div>
         <div class="card-footer text-muted">
           <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
         </div>
       </div>
     </div> `;
}

const saveChanges = () => {
  const taskData = {
    id: `${Date.now()}`,
    imageurl: document.getElementById("image__url").value,
    tasktitle: document.getElementById("task__title").value,
    tasktype: document.getElementById("task__type").value,
    taskdescription: document.getElementById("task__description").value,

  };

  taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));
  



}
