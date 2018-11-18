// VARIABLES
const courses = document.querySelector("#courses-list");

// LISTENERS
loadEventListeners();
function loadEventListeners(){
  //WHEN A NEW COURSE IS ADDED
  courses.addEventListener("click", buyCourse);
}


// FUNCTIONS

function buyCourse(e){
  e.preventDefault();
  // USE DELEGATION TO FIND THE COURSE THAT WAS ADDED
  if(e.target.classList.contains("add-tocart")){
    //READ THE COURSE VALUES
    const course = e.target.parentElement.parentElement;

    // READ THE VALUES
    getCourseInfo(course);
  }

}
// READS THE HTML INFORMATION OF THE SELECTED COURSE
function getCourseInfo(course){
  // CREATE AN OBJECT WITH COURSE DATA
  const courseInfo = {
    
  }
}