let day = document.getElementById('day')
let month = document.getElementById('month')
let year = document.getElementById('year')

let displayYear = document.getElementById('displayYear')
let displayMonth = document.getElementById('displayMonth')
let displayDay = document.getElementById('displayDay')

let errorDay = document.getElementById('day-result')
let errorMonth = document.getElementById('month-result')
let errorYear = document.getElementById('year-result')

let showDate = document.getElementById('img')
let dayLabel = document.getElementById('label-day')
let monthLabel = document.getElementById('label-month')
let yearLabel = document.getElementById('label-year')

 
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('togglebtn');
    const body = document.body;
  
    toggleButton.addEventListener('click', function () {
    
      body.classList.toggle('light-mode');
      body.classList.toggle('dark-mode');
  
     
      const innerCircle = toggleButton.querySelector('.inner-circle');
      innerCircle.classList.toggle('dark-mode');
    });
  });
  
showDate.addEventListener('click', (e)=> {
    e.preventDefault(); 
    let dayValue = day.value; 
    let monthValue =month.value;
    let yearValue = year.value;
    

  
    var currentDate = new Date();
    

    
    var enteredDate = new Date(yearValue, monthValue - 1, dayValue);

   
    var dateDifference = currentDate - enteredDate;
    

    
    var years = Math.floor(dateDifference / (365.25 * 24 * 60 * 60 * 1000));
    var months = Math.floor((dateDifference % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    var days = Math.floor((dateDifference % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));


     

    {
        
        if(day.value.trim() === '') {
           
            errorDay.innerHTML = "This field is required";
            displayError(day, dayLabel);
        } else if(dayValue >= 1 && dayValue <= 31) {
            displayDay.innerHTML = days.valueOf(days);
            errorDay.innerHTML = '';
            clearError(day, dayLabel);
        } else {
            errorDay.innerHTML = "must be a valid day";
           displayError(day, dayLabel);
        }
    }
    {
        
        if(month.value.trim() === '') {
            
            errorMonth.innerHTML = "This field is required";
            displayError(month, monthLabel);
        } else if (monthValue >= 1 && monthValue <= 12) {
            displayMonth.innerHTML = months.valueOf(days);
            errorMonth.innerHTML = '';
            clearError(month, monthLabel);
        } else {
            errorMonth.innerHTML = "must be a valid month";
           displayError(month, monthLabel);
        }
    }
    {
        
        if(year.value.trim() === '') {
            
            errorYear.innerHTML = "This field is required";
            displayError(year, yearLabel);
        } else if (yearValue >= 1900 && yearValue < 2025) {
            displayYear.innerHTML = years.valueOf(years);
            errorYear.innerHTML = '';
        } else {
            errorYear.innerHTML = "must be a valid year";
           displayError(year, yearLabel);
        }
    }

    let isValidDate = true;
    if (!isNaN(yearValue) && !isNaN(dayValue) && !isNaN(monthValue)){
            if ((dayValue > 31 || dayValue < 1) || (monthValue  > 12 || monthValue < 1)) {
                displayDay.innerHTML = '--';
                displayMonth.innerHTML = '--';
                displayYear.innerHTML = '--';
                isValidDate=false;   
            } else {
                
                localStorage.setItem('Guest', JSON.stringify({ years, months, days }));
            } 
    }


   

})

function displayError(value, label) {
    label.style.color = "red";
    value.style.borderColor = "red"
}
function clearError(value, label) {
    label.style.color = "black";
    value.style.borderColor = "grey"
}

