document.querySelectorAll(".seat").forEach(seat => {
    seat.addEventListener("click", () => {

        // If seat is booked, do nothing
        if (seat.classList.contains("booked")) return;

        // Toggle selected class
        seat.classList.toggle("selected");
    });
});
