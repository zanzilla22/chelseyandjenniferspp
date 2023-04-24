document.addEventListener("DOMContentLoaded", function() {
    const events = [
        { date: "2023-05-01", name: "Clothing Swap Event" },
        { date: "2023-06-15", name: "Summer Fashion Exchange" },
    ];

    const eventsContainer = document.getElementById("events");

    events.forEach(event => {
        const eventDiv = document.createElement("div");
        eventDiv.innerHTML = `<strong>${event.date}:</strong> ${event.name}`;
        eventsContainer.appendChild(eventDiv);
    });
});
