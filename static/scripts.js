function moveSlide(direction) {
    const container = document.querySelector('.project-scroll-container');
    const scrollAmount = 300; // Adjust this value based on your project card width and desired scroll amount

    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
    }
}
