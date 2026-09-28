function filterProjects(category) {
    const cards=document.querySelectorAll('.project-card');
    cards.forEach(card=>{
        if(category==='all'||card.classList.contains(category)){
            card.computedStyleMap.display='block';// Show
        }else{
            card.computedStyleMap.display='none';//Hide
        }
    });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorElement = document.getElementById('formError');
    
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "" || message === "") {
        errorElement.textContent = "Please fill out all fields.";
    } else if (!email.match(emailPattern)) {
        errorElement.textContent = "Please enter a valid email address.";
    } else {
        errorElement.style.color = "green";
        errorElement.textContent = "Thank you! Your message has been sent successfully.";
        this.reset(); 
    }
});