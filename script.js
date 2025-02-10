document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded'); // Debugging line
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close');
    
    if (!modal) console.error('Modal element not found');
    if (!closeBtn) console.error('Close button not found');

    document.body.addEventListener('click', function(e) {
        console.log('Clicked element:', e.target); // Debugging line
        if (e.target.matches('.view-details')) {
            console.log('View details button clicked'); // Debugging line
            const card = e.target.closest('.project-card');
            if (card) {
                console.log('Card found:', card); // Debugging line
                populateModal(card);
                modal.style.display = 'block';
            }
        }
    });

    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    document.querySelector('.career-details-btn').addEventListener('click', () => {
        populateCareerModal();
        document.getElementById('careerModal').style.display = 'block';
    });
});

const projectDetails = {
    "NRBCB Agent Banking": {
        description: "NRBCB Agent Banking is an Android application designed for the agent banking system of NRB Commercial Bank. This app facilitates various customer services, including fund transfers, balance inquiries, deposits, withdrawals, and account verifications. One of its key features is biometric authentication using fingerprint technology, ensuring secure transactions and fraud prevention. The application integrates seamlessly with the bank's existing systems via REST APIs.",
        technologies: ["Java", "REST", "Asynctask", "OkHttp", "Third-party Biometric SDK", "Android Studio", "Advanced REST Client Chrome Application"]
    },
    "CityAgent Banking": {
        description: "CityAgent Banking is an Android application developed for the agent banking system of City Bank. The app enables agents to provide multiple banking services to customers, leveraging biometric authentication for security. By integrating REST APIs with Dagger dependency injection, the application ensures modularity and scalability. SQLite is used for local storage, enhancing offline usability.",
        technologies: ["Java", "REST", "Dagger", "Asynctask", "Retrofit", "SQLite", "Third-party Biometric SDK"]
    },
    "Agrani-Doer Banking": {
        description: "Agrani-Doer Banking is an Android application created for Agrani Bank's agent banking system. It offers a range of banking services such as cash deposits, withdrawals, fund transfers, and account inquiries. The app employs fingerprint authentication for customer verification, ensuring high security. Modern development practices such as dependency injection with HILT and coroutine-based asynchronous programming are used for optimal performance and maintainability.",
        technologies: ["Kotlin", "Java", "REST", "HILT", "Coroutine", "Retrofit", "Third-party Biometric SDK", "Android Studio", "Advanced REST Client Chrome Application"]
    },
    "Doer Pay Point": {
        description: "Doer Pay Point is an Android application designed to facilitate remittance disbursement through selected banking channels, primarily Agrani Bank. The app ensures seamless fund transfer and withdrawal services for users, utilizing WorkManager for background task execution, ensuring reliability in processing transactions.",
        technologies: ["Kotlin", "REST", "HILT", "Coroutine", "Retrofit", "WorkManager"]
    },
    "Employee Book": {
        description: "Employee Book is a cross-platform mobile application built using Flutter, designed for in-house report management. It integrates with REST APIs to fetch real-time data and presents it using custom UI widgets for an intuitive user experience. The app enhances organizational efficiency by providing seamless data access and reporting features.",
        technologies: ["Flutter", "Dart", "REST", "Custom Widgets"]
    },
    "Pelican": {
        description: "Pelican is an on-demand cannabis delivery application that connects users with vendors to purchase cannabis and related products. The app features a user-friendly interface for browsing products, placing orders, and tracking deliveries. A dedicated driver interface ensures smooth logistics and order fulfillment.",
        technologies: ["Kotlin", "REST", "HILT", "Coroutine", "Retrofit"]
    },
    "ModeOne": {
        description: "ModeOne is a powerful application designed to manage case facts, obtain and analyze evidence stored on smartphones, and extract crucial data from messaging applications. It provides an automated, secure, and defensible workflow for legal and forensic investigations.",
        technologies: ["Kotlin", "REST", "HILT", "Coroutine", "Retrofit", "ContentProviders", "WorkManager", "Services"]
    },
    "MiniSuffa": {
        description: "MiniSuffa is a 2D cross-platform educational game for children, aimed at teaching them prayers, colors, and shapes in an engaging way. The game uses Lottie animations and custom Flutter widgets to provide an interactive learning experience.",
        technologies: ["Flutter", "Dart", "Custom Widgets", "Lottie"]
    },
    "TrustN": {
        description: "TrustN is an AI-powered chatbot application designed to provide seamless answers to user queries. It leverages REST APIs for backend communication and presents responses using custom Flutter widgets, ensuring an engaging user experience.",
        technologies: ["Flutter", "Dart", "REST", "Custom Widgets"]
    },
    "SafeLot": {
        description: "SafeLot is an anti-theft automotive application that integrates with a BLE device to prevent vehicle theft. With just a tap of a button, users can remotely disable their vehicle's engine, ensuring security against unauthorized access.",
        technologies: ["Kotlin", "REST", "HILT", "Coroutine", "Retrofit", "BLE Integration"]
    },
    "Exastim": {
        description: "Exastim is an application for which we conducted extensive unit test coverage, achieving 80% test coverage using industry-standard testing frameworks. The focus was on ensuring reliability and robustness in core functionalities.",
        technologies: ["JUnit", "Mockito"]
    },
    "Yohavo": {
        description: "Yohavo is a lottery-based application that allows users to participate in various lottery events. The app ensures a seamless experience through an intuitive UI and efficient backend connectivity.",
        technologies: ["Kotlin", "REST", "HILT", "Coroutine", "Retrofit"]
    }
};

function populateModal(card) {
    const title = card.querySelector('h3').textContent.replace(/^[^a-zA-Z]+/, '').trim();
    const details = projectDetails[title];
    
    if (!details) {
        console.error('No details found for project:', title);
        return;
    }

    // Set title and subtitle
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalSubtitle').textContent = card.querySelector('.subtitle').textContent;
    
    // Set description
    document.getElementById('modalDescription').textContent = details.description;
    
    // Preserve existing features
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    card.querySelectorAll('.feature-list li').forEach(li => {
        const clone = li.cloneNode(true);
        featuresList.appendChild(clone);
    });

    // Set technologies
    const techContainer = document.getElementById('modalTechnologies');
    techContainer.innerHTML = '';
    details.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.innerHTML = `<i class="${getTechIcon(tech)}"></i>${tech}`;
        techContainer.appendChild(span);
    });
}

function getTechIcon(tech) {
    const icons = {
        'Java': 'fab fa-java',
        'Kotlin': 'fab fa-android',
        'REST': 'fas fa-cloud',
        'HILT': 'fas fa-code',
        'Coroutine': 'fas fa-bolt',
        'Flutter': 'fab fa-flutter',
        'Dart': 'fas fa-code',
        'SQLite': 'fas fa-database',
        'WorkManager': 'fas fa-tasks',
        'ContentProviders': 'fas fa-database',
        'Services': 'fas fa-cogs',
        'Lottie': 'fas fa-film',
        'BLE Integration': 'fas fa-bluetooth',
        'JUnit': 'fas fa-bug',
        'Mockito': 'fas fa-check-double',
        'Custom Widgets': 'fas fa-puzzle-piece'
    };
    return icons[tech] || 'fas fa-code';
}

function populateCareerModal() {
    const summary = `Proven and dedicated Android Developer with 7+ years of experience in developing high-performance applications using Kotlin and Java, and 2 years of hands-on experience with Flutter for cross-platform mobile app development. Proficient in implementing MVVM, MVC patterns, and SOLID design principles. Expertise in unit testing and UI testing using JUnit, as well as Flutter's testing frameworks, to ensure code quality and application reliability. Adept at applying the System Development Life Cycle (SDLC) for end-to-end application development, from requirements analysis to maintenance and enhancements. Strong communication skills for collaborating with cross-functional teams, integrating REST APIs, and delivering seamless user experiences.`;

    const experiences = {
        "Silicon Orchard Ltd": {
            period: "OCT 2022 - PRESENT",
            points: [
                "Developed 3+ high-performance Android apps using Kotlin, Java, and frameworks like Room, ViewModel, and Hilt, reducing load time by 30%",
                "Delivered 2 cross-platform Flutter apps, achieving 95% user satisfaction and cutting development time by 20%",
                "Expert in MVVM, MVC, and SOLID design principles",
                "Worked on 4+ SDLC projects, meeting 100% of deadlines with minimal defects",
                "Integrated REST APIs with Retrofit, boosting data retrieval speed and app responsiveness",
                "Worked with BLE devices, implementing encrypted communication for secure data transmission"
            ]
        },
        "Orion Group": {
            period: "FEB 2021 - SEP 2022",
            points: [
                "Developed cross-platform apps with Flutter for inhouse Reports by integrating REST APIs with custom Flutter UI widgets",
                "Managed end-to-end development and testing of 3+ document management systems, reducing processing times by 40%",
                "Supervised and mentored a team of 5 developers, ensuring 100% sprint completion rate",
                "Identified problems and optimized performance through data analysis"
            ]
        },
        "Adaptive Enterprise Limited": {
            period: "JUN 2015 - FEB 2021",
            points: [
                "Deployed 5+ secure mobile apps for agent banking with biometric authentication",
                "Designed security and printing modules ensuring 99.9% uptime",
                "Developed reusable data layer component using RxJava and Retrofit",
                "Created service for BLE-enabled biometric devices"
            ]
        }
    };

    document.getElementById('careerSummary').textContent = summary;
    
    const experienceContainer = document.querySelector('.experience-items');
    experienceContainer.innerHTML = '';
    
    Object.entries(experiences).forEach(([company, details]) => {
        const experienceHTML = `
            <div class="experience-item">
                <h3>${company} <span class="date">${details.period}</span></h3>
                <ul class="experience-list">
                    ${details.points.map(point => `<li>${point}</li>`).join('')}
                </ul>
            </div>
        `;
        experienceContainer.insertAdjacentHTML('beforeend', experienceHTML);
    });
} 