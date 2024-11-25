document.getElementById('rsvp-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Extract form data
    const name = e.target.name.value;
    const response = e.target.response.value;
    const message = e.target.message.value || 'No additional message.';
  
    // Construct the mailto link
    const subject = `RSVP Confirmation from ${name}`;
    const body = `Name: ${name}          
Response: ${response}             

Message: ${message}`;
    const mailtoLink = `mailto:georgeobuya883@gmail.com?cc=owinoliza@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    // Trigger the mailto link
    window.location.href = mailtoLink;
});
