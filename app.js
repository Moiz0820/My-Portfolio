const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Data for experience dashboard
    const experienceData = [
        {
            title: "Internship at Company A",
            duration: "6 Months",
            description: "Worked on front-end development using React.",
        },
        {
            title: "Internship at Company B",
            duration: "4 Months",
            description: "Assisted in data analysis using Python.",
        },
        {
            title: "Software Developer at Company C",
            duration: "2 Years",
            description: "Full-stack development using Node.js and Angular.",
        },
    ];

    // Data for academics
    const academicData = [
        {
            level: "10th Grade",
            school: "XYZ High School",
            percentage: "85%",
        },
        {
            level: "12th Grade",
            school: "ABC Senior Secondary School",
            percentage: "90%",
        },
        {
            level: "Undergraduate",
            college: "DEF University",
            cgpa: "8.5",
        },
    ];

    // Load experience data
    const experienceContainer = document.querySelector('#experience-dashboard .experience-dashboard-content');
    experienceData.forEach(item => {
        const experienceItem = document.createElement('div');
        experienceItem.classList.add('experience-item');
        
        const experienceTitle = document.createElement('h2');
        experienceTitle.textContent = item.title;
        experienceItem.appendChild(experienceTitle);

        const experienceDuration = document.createElement('p');
        experienceDuration.textContent = `Duration: ${item.duration}`;
        experienceItem.appendChild(experienceDuration);

        const experienceDescription = document.createElement('p');
        experienceDescription.textContent = item.description;
        experienceItem.appendChild(experienceDescription);

        experienceContainer.appendChild(experienceItem);
    });

    // Load academic data
    const academicsContainer = document.querySelector('#academics .academics-content');
    academicData.forEach(item => {
        const academicItem = document.createElement('div');
        academicItem.classList.add('academic-item');

        const academicLevel = document.createElement('h2');
        academicLevel.textContent = item.level;
        academicItem.appendChild(academicLevel);

        const academicSchool = document.createElement('p');
        academicSchool.textContent = `School Name: ${item.school}`;
        academicItem.appendChild(academicSchool);

        const academicPercentage = document.createElement('p');
        academicPercentage.textContent = item.percentage ? `Percentage: ${item.percentage}` : `CGPA: ${item.cgpa}`;
        academicItem.appendChild(academicPercentage);

        academicsContainer.appendChild(academicItem);
    });

    // Update totals in experience dashboard
    const totalInternshipExperience = experienceData
        .filter(exp => exp.title.toLowerCase().includes('internship'))
        .reduce((total, exp) => total + parseInt(exp.duration), 0);

    const totalWorkExperience = experienceData
        .filter(exp => !exp.title.toLowerCase().includes('internship'))
        .reduce((total, exp) => total + parseInt(exp.duration), 0);

    document.querySelector('#experience-dashboard .total-internship-experience').textContent = `${totalInternshipExperience} Months`;
    document.querySelector('#experience-dashboard .total-work-experience').textContent = `${totalWorkExperience} Months`;
});


menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
