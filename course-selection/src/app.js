const Api = (() => {
  const endpoint = 'http://localhost:4232/courseList';
  const fetchCourseData = fetch(endpoint).then(response => response.json());
  return { fetchCourseData };
})();

const View = (() => {
  const domElements = {
      availableCourses: document.querySelector('.available-courses'),
      selectedCourses: document.querySelector('.selected-courses')
  };

  const createCourseTemplate = (courses) => {
      let template = `<h4>Available Courses</h4>`;
      courses.forEach(course => {
          const courseType = course.required ? 'Compulsory' : 'Elective';
          template += `<li class="dynamic-list-item" data-credit="${course.credit}">
                              ${course.courseName}<br>
                              Course Type: ${courseType}<br>
                              Course Credit: ${course.credit}
                         </li>`;
      });
      return template;
  };

  const renderContent = (element, content) => {
      element.innerHTML = content;
  };

  return { domElements, createCourseTemplate, renderContent };
})();

const Model = ((view, api) => {
  const { domElements, createCourseTemplate, renderContent } = view;
  const { fetchCourseData } = api;

  class State {
      constructor() {
          this.courseList = [];
      }

      getCourseList() {
          return this.courseList;
      }

      setCourseList(courseArray) {
          this.courseList = courseArray;
          renderContent(domElements.availableCourses, createCourseTemplate(this.courseList));
      }
  }

  return { fetchCourseData, State };
})(View, Api);

const Controller = ((view, model) => {
  const { domElements } = view;
  const { fetchCourseData, State } = model;
  
  const appState = new State();

  const initialize = () => {
      fetchCourseData.then(data => appState.setCourseList(data));
  };

  const updateCreditTotal = () => {
      const totalCreditElement = document.querySelector('h2');
      const selectedCourses = document.querySelectorAll('.dynamic-list-item.selected');
      
      let totalCredits = 0;
      selectedCourses.forEach(course => {
          totalCredits += parseInt(course.dataset.credit);
      });
      
      totalCreditElement.textContent = `Total Credit: ${totalCredits}`;
      
      return totalCredits;
  };

  const toggleCourseSelection = () => {
    const courseContainer = document.querySelector('.available-courses'); 
      courseContainer.addEventListener('click', event => {
          const target = event.target;
          if (target.classList.contains('dynamic-list-item')) {
            const courseCredit = parseInt(target.dataset.credit);  
            const isCurrentlySelected = target.classList.contains('selected'); 
            const currentTotal = updateCreditTotal();  
            const newTotal = isCurrentlySelected ? currentTotal - courseCredit : currentTotal + courseCredit; 
        
            
            if (!isCurrentlySelected && newTotal > 18) {
                alert("You can only choose up to 18 credits in one semester!");
                return; 
            }
        
            target.classList.toggle('selected');  
            updateCreditTotal();  
            target.style.backgroundColor = target.classList.contains('selected') ? 'cornflowerblue' : '';  
        }
      });
  };

  document.addEventListener('DOMContentLoaded', () => {
      toggleCourseSelection();
  });

  const handleCourseSelection = () => {
    const selectButton = document.getElementById('selectButton');
    
    selectButton.addEventListener('click', () => {
        const totalCredits = updateCreditTotal(); 
        
        const confirmation = confirm(`You have chosen ${totalCredits} credits for this semester. You cannot unselect once you submit. Do you want to confirm?`);
        
        if (confirmation) {
            displaySelectedCourses();
            selectButton.classList.add('selectButton-disabled'); 
            selectButton.disabled = true; 
        }
    });
};

      


  const displaySelectedCourses = () => {
      const selectedCourses = document.querySelectorAll('.dynamic-list-item.selected');
      const selectedCourseList = domElements.selectedCourses.querySelector('ul');
      selectedCourseList.innerHTML = '';
      selectedCourses.forEach(course => {
          const newCourseItem = document.createElement('li');
          newCourseItem.innerHTML = course.innerHTML;
          selectedCourseList.appendChild(newCourseItem);
      });
  };

  const bootstrap = () => {
      initialize();
      handleCourseSelection();
  };

  return { bootstrap };

})(View, Model);

Controller.bootstrap();
