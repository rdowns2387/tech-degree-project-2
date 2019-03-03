/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//declare some global variables to be used throughout the program
const studentUL = document.querySelector('.student-list');
const studentList = studentUL.children;
const mainDiv = document.querySelector('div.page');
const studentsPerPage = 10;
let page = 1;
const pageNumber = Math.ceil(studentList.length/10);


// showPage function: Displays 10 students per page based on the current value of 'page' and value of 'studentList' as is looped over
const showPage = (list, page) =>{
  for (let i = 0; i < list.length; i++){
    if (i >= (page * studentsPerPage) - studentsPerPage && i< (page * studentsPerPage)){
      list[i].style.display = 'block';
    } else{
      list[i].style.display = 'none';
    }
  }
}


//run the function when the page loads to show the first 10 students
showPage(studentList, page);



//PART TWO: Pagination

// declare some variables and generate the pagination buttons dynamically
const paginationDiv = document.createElement('div');
paginationDiv.className = 'pagination';
mainDiv.appendChild(paginationDiv);


const paginationUL = document.createElement('ul');
paginationUL.className = "pagination-list"
paginationDiv.appendChild(paginationUL);



//The appendPageLinks function: Create li and a tags and append them to paginationUL, looping for the duration 'pageNumber' value
const appendPageLinks = ()=>{
  for (let i = 0; i < pageNumber; i++){
    li = document.createElement('li');
    a = document.createElement('a');
    a.textContent = i+1;
    a.setAttribute("href",'#');
    li.appendChild(a);
    paginationUL.appendChild(li);
  }
}

// run dat function
appendPageLinks();

// after generating li and a tags, select them and store them all in nonActiveLinks
const links = paginationUL.querySelectorAll('li');

// set the first item in the links variable to active
links[0].firstElementChild.className = 'active';

// add the event listener to items in paginationUL
paginationUL.addEventListener('click', ()=>{
  // based on the textContent of the button that is clicked, update the page variable to the target's integer value
  page = parseInt(event.target.textContent);
  // run the showPage function with the new value of 'page' to update the students on display
  showPage(studentList, page);

  // remove the active class from the page entirely
  for ( let i = 0; i < pageNumber; i++){
      links[i].firstElementChild.className = "";
    }

  // add the active class back to the button that was clicked!
  event.target.className = 'active';

});
