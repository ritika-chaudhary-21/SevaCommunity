const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});
//dash

document.addEventListener('DOMContentLoaded', function() {
    const currentMonth = document.getElementById('currentMonth');
    const calendarGrid = document.getElementById('calendarGrid');
    const monthDropdown = document.getElementById('monthDropdown');
    const yearDropdown = document.getElementById('yearDropdown');
    

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonthIndex = currentDate.getMonth();

    // Populate month dropdown
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    months.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = month;
        monthDropdown.appendChild(option);
    });

    // Populate year dropdown
    for (let year = currentYear - 10; year <= currentYear + 10; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearDropdown.appendChild(option);
    }

    // Set initial selected values
    monthDropdown.value = currentMonthIndex;
    yearDropdown.value = currentYear;

    renderCalendar(currentYear, currentMonthIndex);

    monthDropdown.addEventListener('change', () => {
        currentMonthIndex = parseInt(monthDropdown.value);
        renderCalendar(currentYear, currentMonthIndex);
    });

    yearDropdown.addEventListener('change', () => {
        currentYear = parseInt(yearDropdown.value);
        renderCalendar(currentYear, currentMonthIndex);
    });

    function renderCalendar(year, month) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayIndex = new Date(year, month, 1).getDay();

        calendarGrid.innerHTML = '';
        currentMonth.textContent = months[month];

        for (let i = 0; i < firstDayIndex; i++) {
            const prevMonthDay = document.createElement('div');
            prevMonthDay.classList.add('calendar-day', 'prev-next-month');
            prevMonthDay.textContent = new Date(year, month, -firstDayIndex + i + 1).getDate();
            calendarGrid.appendChild(prevMonthDay);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const day = document.createElement('div');
            day.classList.add('calendar-day');
            day.textContent = i;
            if (year === currentDate.getFullYear() && month === currentDate.getMonth() && i === currentDate.getDate()) {
                day.classList.add('today');
            }
            calendarGrid.appendChild(day);
        }
    }
});