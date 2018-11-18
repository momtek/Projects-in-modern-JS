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
    image: couse.querySelector("img").src,
    title: couse.querySelector("h4").textContent,
    price: couse.querySelector(".price span").textContent,
    id: couse.querySelector("a").getAttribute("data-id")

  }
  // INSERT INTO THE SHOPPING CART
  addInfoCart(courseInfo);
}
// DISPLAY THE SELECTED COURSE INTO THE SHOPPING CART

function addInfoCart(course) {
  // CREATE A <tr>
  const row = document.createElement("tr");

  // BUILD THE TEMPLATE
    row.innerHTML = `
    
    `;

}