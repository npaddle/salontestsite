// document.addEventListener('DOMContentLoaded', () => {
//   const serviceBox = document.querySelector('.service-box');
//   const serviceDetails = document.querySelector('.service-details');

//   serviceBox.addEventListener('click', () => {
//     // Toggle visibility of the details
//     serviceDetails.style.display = serviceDetails.style.display === 'block' ? 'none' : 'block';
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  // Select all service boxes
  const serviceBoxes = document.querySelectorAll('.service-box');

  serviceBoxes.forEach((box) => {
    // Get the details section within the current box
    const serviceDetails = box.querySelector('.service-details');

    // Add a click event to each box
    box.addEventListener('click', () => {
      // Toggle visibility of the details section for the clicked box
      serviceDetails.style.display = serviceDetails.style.display === 'block' ? 'none' : 'block';
    });
  });
});
