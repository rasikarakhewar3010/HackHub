document.addEventListener("DOMContentLoaded", () => {
    // FullCalendar initialization
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        editable: true, // Allows user to move and edit events
        selectable: true, // Allows selecting dates to add events
        events: [
            {
                title: 'Hackathon Day 1',
                start: '2024-10-15',
                end: '2024-10-16'
            },
            {
                title: 'Hackathon Day 2',
                start: '2024-10-16'
            }
        ],
        eventClick: function(info) {
            alert('Event: ' + info.event.title); // Handling the click event on an event
        },
        dateClick: function(info) {
            // Ask the user for the event title
            let eventTitle = prompt("Enter event title for " + info.dateStr);
            if (eventTitle) {
                // Add the event to the calendar
                calendar.addEvent({
                    title: eventTitle,
                    start: info.dateStr
                });
                alert('Event "' + eventTitle + '" added on ' + info.dateStr);
            }
        }
    });

    calendar.render(); // Render the calendar

    // Handle icon display logic
    const iconDisplay = document.querySelector('#iconDisplay');
    const icon = localStorage.getItem('icon');

    if (icon) {
        iconDisplay.innerHTML = `<i class="bi ${icon}"></i>`;
    }
});
