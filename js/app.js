// VARIABLES
const courses = document.querySelector("#courses-list"),
      shoppingCartContent = document.querySelector("#cart-content tbody"),
      clearCartBtn = document.querySelector("#clear-cart");

// LISTENERS
loadEventListeners();

function loadEventListeners(){
  //WHEN A NEW COURSE IS ADDED
  courses.addEventListener("click", buyCourse);

  // WHEN THE REMOVE BUTTON IS CLICKED
  shoppingCartContent.addEventListener("click", removeCourse);

  // CLEAR CART Btn
  clearCartBtn.addEventListener("click", clearCart);

  // DOCUMENT READY
  document.addEventListener("DOMContentLoaded", getFromLocalStorage);
}


// FUNCTIONS

function buyCourse(e){
  e.preventDefault();
  // USE DELEGATION TO FIND THE COURSE THAT WAS ADDED
  if(e.target.classList.contains("add-to-cart")){
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
    image: course.querySelector("img").src,
    title: course.querySelector("h4").textContent,
    price: course.querySelector(".price span").textContent,
    id: course.querySelector("a").getAttribute("data-id")

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
      <tr>
          <td>
              <img src="${course.image}" width=100>
          </td>
          <td>${course.title}</td>
          <td>${course.price}</td>
          <td>
              <a href="#" class="remove" data-id="${course.id}">x</a>
          </td>
      
      </tr>
    `;
    // ADD INTO THE SHOPPING CART
    shoppingCartContent.appendChild(row);

    // ADD COURSE INTO STORAGE
    saveIntoStorage(course);

}

// ADD THE COURSES INTO THE LOCAL STORAGE

function saveIntoStorage(course) {
    let courses = getCoursesFromStorage();

    // ADD THE COURSE INTO THE ARRAY
    courses.push(course);

    // SINCE STORAGE ONLY SAVES STRINGS. WE NEED TO CONVERT JSON INTO STRING
    localStorage.setItem("courses", JSON.stringify(courses));
}

// GET THE CONTENTS FROM STORAGE
function getCoursesFromStorage(){

  let courses;

  // If somehting exists on storage then we get the value, otherwise create an empty array
  if(localStorage.getItem("courses")=== null) {
    courses = [];
  }else {
    courses = JSON.parse(localStorage.getItem("courses"));
  }
  return courses;

}

// REMOVE COURSE FROM THE DOM
function removeCourse(e){
  if(e.target.classList.contains("remove")) {
    e.target.parentElement.parentElement.remove();
  }
}
// CLEAR THE SHOPPING CART
function clearCart() {
  // shoppingCartContent.innerHTML = "";
  while(shoppingCartContent.firstChild){
    shoppingCartContent.removeChild(shoppingCartContent.firstChild);
  }
}

// LOADS WHEN DOCUMENT IS READY AND PRINT COURSES INTO SHOPPING CART

function getFromLocalStorage(){
  let coursesLS = getCoursesFromStorage();

  // LOOP THROUGHT THE COURSES AND PRINT INTO THE CART
  coursesLS.forEach(function(courses){
    // CREATE THE <tr>
    const row = document.createElement("tr");

    // PRINT THE CONTENT
    row.innerHTML = `
    <tr>
          <td>
              <img src="${course.image}" width=100>
          </td>
          <td>${course.title}</td>
          <td>${course.price}</td>
          <td>
              <a href="#" class="remove" data-id="${course.id}">x</a>
          </td>
      
      </tr>
    
    
    `;
    shoppingCartContent.appendChild(row);
  })
}