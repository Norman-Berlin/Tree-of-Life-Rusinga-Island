      // Scroll to section
      function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    }

    // Animate team members on scroll
    const teamMembers = document.querySelectorAll('.team-member');
    
    function checkTeamMembers() {
        teamMembers.forEach((member, index) => {
            const memberPosition = member.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (memberPosition < screenPosition) {
                setTimeout(() => {
                    member.classList.add('show');
                }, index * 200);
            }
        });
    }

    // Animate stats on scroll
    const statItems = document.querySelectorAll('.stat-item');
    let statsAnimated = false;
    
    function checkStats() {
        const statsPosition = document.querySelector('.stats').getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (statsPosition < screenPosition && !statsAnimated) {
            statItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('show');
                }, index * 300);
            });
            
            animateStats();
            statsAnimated = true;
        }
    }

    // Animate counting numbers
    function animateStats() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200;
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateStats, 1);
            } else {
                counter.innerText = target;
            }
        });
    }

    // Testimonial slider
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('show'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentTestimonial = index;
        testimonials[currentTestimonial].classList.add('show');
        dots[currentTestimonial].classList.add('active');
    }
    
    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(nextTestimonial, 5000);

    // Form submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // Check elements on page load and scroll
    window.addEventListener('load', () => {
        checkTeamMembers();
        checkStats();
    });
    
    window.addEventListener('scroll', () => {
        checkTeamMembers();
        checkStats();
    });