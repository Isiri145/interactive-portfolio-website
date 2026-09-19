const tabs = document.querySelectorAll('.work__button');
const contents = document.querySelectorAll('.work__content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        // remove active from all
        tabs.forEach(t => t.classList.remove('work-active'));
        contents.forEach(c => c.classList.remove('work-active'));

        // activate clicked
        tab.classList.add('work-active');
        document.querySelector(tab.dataset.target).classList.add('work-active');
    });
});

///////////////toggle icon navbar//////////////////////
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
///////////////////////scroll sections active link/////////////
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset =sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top>=offset && top < offset +height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    ///////////////////////////////////////////////////////sticky nav bar/////////
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
    ////////////////remove toggle icon and navbar when click navbar link scroll////////////////
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
};

///////////////////scroll reveal//////////////////
 ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading, .section__title', { origin: 'top' });
 ScrollReveal().reveal('.services-container, .portfolio-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h3, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });







///////////////////////typed js///////////////////////////////////
const typed = new Typed('.multiple-text',{
    strings: ['Isiri Perera', 'Isiri Perera', 'Isiri Perera'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});

//////////////////////////////project card
const modal = document.getElementById("project-modal");
let scrollPosition = 0;

function openProject(id) {

    scrollPosition = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    modal.style.display = "flex";
    
    if(id === 1){
        document.getElementById("modal-title").textContent =
            "SolidWorks Design Project";

        document.getElementById("modal-image").src =
            "project1.png";

        document.getElementById("modal-description").innerHTML = `
            <ul>
                <li> Designed 50+ parts including the monocoque, cockpit, and wheels of a Formula 1 racing car using SolidWorks</li>
                <li> Assembled parts and sub-assemblies to model the vehicle body and assisted teammates with engine assembly</li>
                <li> Conducted simulations and motion studies, optimizing the car’s core support structure</li>
            </ul?
            <strong>SKILLS GAINED:</strong> SolidWorks, CAD, 3D modelling, communication and collaboration<br><br>

            <strong>PROJECT VIDEO:</strong><br>
            
            <video controls class="project-video">
                <source src="f1tenthsolidworks.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    }

    if(id === 2){
        document.getElementById("modal-title").textContent =
            "OS/161: Building a Unix-like Operating System";

        document.getElementById("modal-image").src =
            "project2.png";

        document.getElementById("modal-description").innerHTML = `
            <ul>
                <li> Implemented synchronization primitives including locks, semaphores, and condition variables in C within 
                the OS/161 kernel to support safe concurrent thread execution</li>
                <li> Applied synchronization mechanisms to solve complex concurrency problems, including the Air Balloon 
                deadlock-avoidance challenge, ensuring correct thread coordination under competing resource access</li>
                <li> Developed kernel-level system calls such as fork, execv, and process wait operations to enable process 
                creation, execution, and synchronization within the operating system </li>
                <li> Implemented virtual memory functionality including address translation and page management to 
                improve memory handling and process isolation in the OS/161 kernel </li>
            </ul>
        `;
    }

    if(id === 3){
        document.getElementById("modal-title").textContent =
            "SolidWorks Design Project";

        document.getElementById("modal-image").src =
            "project5.png";

        document.getElementById("modal-description").textContent =
            "This project involved...";
    }

    if(id === 4){
        document.getElementById("modal-title").textContent =
            "Athlete Injury Prediction/constellation identifier";

        document.getElementById("modal-image").src =
            "project4.png";

        document.getElementById("modal-description").innerHTML = `
            <ul>
                <li>Designed 50+ parts including the monocoque, cockpit, and wheels of a Formula 1 racing car using SolidWorks.</li>
                <li>Assembled parts and sub-assemblies to model the vehicle body and assisted teammates with engine assembly.</li>
                <li>Conducted simulations, motion studies, and collision detection to optimize the car’s core support structure.</li>
            </ul>
        `;
    }

    if(id === 5){
        document.getElementById("modal-title").textContent =
            "Athlete Scouting and Recruitment DBMS";

        document.getElementById("modal-image").src =
            "project5.png";

        document.getElementById("modal-description").innerHTML = `
            <ul>
                <li> Designed and implemented an athlete scouting management database and user interface to track player performance, recruitment decisions, and club operations.</li>
                <li> Implemented CRUD operations with input validation, SQL selection/projection, and multi-table joins</li>
                <li> Built queries using GROUP BY & HAVING nested aggregations, and division to analyze player performance and scout evaluations</li>
                <li> Developed an interactive graphical user interface with forms and buttons for executing queries and viewing results</li>
            </ul>
            <br><br>
            <strong>SKILLS GAINED:</strong> PHP, Oracle database, SQL, Relational DBMS<br><br>


        `;
    }

    if(id === 6){
        document.getElementById("modal-title").textContent =
            "Company website project";

        document.getElementById("modal-image").src =
            "project6.png";

        document.getElementById("modal-description").innerHTML = `
            <ul>
                <li> Designed clear, intuitive UI/UX with straightforward navigation and content flow.</li>
                <li> Built responsive layouts and resized the site for phones, tablets, and multiple screen widths.</li>  
                <li>Developed and hosted the website using semantic HTML, CSS, JavaScript, and GitHub Pages.</li>
            </ul>
            <br><br>
            <strong>SKILLS GAINED:</strong> JavaScript, HTML, CSS, UI/UX design<br><br>

            <strong>PROJECT VIDEO:</strong><br>
            
            <video controls class="project-video">
                <source src="companywebsiteproject.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        `;
    }

}

function closeModal(){
    modal.style.display = "none";

    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";

    // Disable smooth scrolling temporarily
    document.documentElement.style.scrollBehavior = "auto";

    window.scrollTo(0, scrollPosition);

    // Restore smooth scrolling
    setTimeout(() => {
        document.documentElement.style.scrollBehavior = "smooth";
    }, 0);
}

document.querySelector(".close").onclick = closeModal;

window.onclick = function(event){
    if(event.target === modal){
        closeModal();
    }
};

