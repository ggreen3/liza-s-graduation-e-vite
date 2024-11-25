// Wait for the page to load, then fade out the loader and redirect to index1.html
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-container');
    const textContainer = document.querySelector('.text-container');
  
    // Fade in the text
    textContainer.style.opacity = 1;
  
    // After 3 seconds (to allow the text to display), hide the loader and redirect to index1.html
    setTimeout(() => {
      loader.style.opacity = 0;
      loader.style.visibility = 'hidden'; // To remove the loader from the layout
  
      // Redirect to index1.html after the loader fades out
      window.location.href = "index1.html";
    }, 9000); // Change the timing here if needed (in ms)
  });
  