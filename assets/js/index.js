// portfolio data
var educationInfo = [{
    name: "The Evergreen State College",
    description: "B.S. in Computer Science",
    graduationDate: "December 2014",
    location: "Olympia, WA"
},
{
name: "Coding Dojo",
description: "Coding Bootcamp",
graduationDate: "May 2018",
location: "Bellevue, WA"
}];

var experienceInfo = [{
name: "Accord365",
company: "Sapient Technologies",
location: "Seattle, WA",
title: "Intern",
dateStarted: "June 2019",
dateEnded: "March 2021",
description: "I co-facilitated the project’s focus group, for the meetings I created questions, study forms, and took notes. I Created a wireframe for the project with Sketch and consulted with client multiple times. I created and updated a Postgress database to store user information, created models for that database. I implemented both Buffalo and Gin frameworks, I used MySQL with Gin. I developed a ERC-20 token buying site using Solidity, JSON, JavaScript, and I also used Truffle-Contracts. I made API calls to web3.js to make transactions on a blockchain. I tested the app using Ganache, Metamask, Geth, and the Ethereum test networks Rinkeby and Robsten."
}]

var projectsInfo = [{
name: "My Gem Tarot",
location: "Seattle, WA",
title: "Software Developer",
dateStarted: "May 2021",
dateEnded: "May 2021",
description: "I originated, mocked-up, and programmed a Swift 5.3 iOS application. I made an asynchronous API call to the’ Tarot Card Meanings REST API’. I developed and styled each view and created models for data. I implemented CoreData to save data persistently and perform CrUD operations on each reading. I bound data from models to views using property wrappers and developed views to navigate though tarot card and gem information by card suit."
}, 
{
name: "Cyber Defense Game",
location: "Olympia, WA",
title: "Engineer",
dateStarted: "June 2014",
dateEnded: "April 2015",
description: "I structured and created a SQL database filled with nonce data, wrote a scoreboard, and submission checker in C. I used Chef to automate tasks on an Amazon Web Services EC2 Linux machine. I Collaborated carefully and clearly with a teammate to set up a Windows Server 2008 system (with AWS-EC2) for the vulnerability protecting (Blue) team. I invented 60% of the vulnerabilities for the system attacking (Red) team to exploit in a website that connected to the database mentioned above."
}]

var skillsData = ['Java', 'Go', 'Swift', 'MySQL', 'PostgresSQL', 'HTML', 'CSS', 'LATEX', 'Python (Django)', 'JavaScript', 'node.js', 'web3.js API', 'Solidity', 'Amazon Web Services (EC2/VPC)', 'Vim', 'Git', 'VMware', 'Sketch', 'Windows', 'macOS', 'Android', 'iOS'];



$(window).on('load', function() {
    // Display educationInfo
    for (i = 0; i < educationInfo.length; i++) {
        $('<div class="education" />').html("<b>" + educationInfo[i].name + " | " + educationInfo[i].location + "</b>" + "<br />" + educationInfo[i].graduationDate + "<br />" + educationInfo[i].description).appendTo('#education-data-container');
    }

    // Display experienceInfo
    for (i = 0; i < projectsInfo.length; i++) {
        $('<div class="experience" />').html("<p class='info'>" + "<b>" + experienceInfo[i].name + " | " + experienceInfo[i].company + " | " + experienceInfo[i].location + " | " + experienceInfo[i].title + "</b>" + "</p>" + "<br />" + "<p>" + experienceInfo[i].dateStarted + " - " + experienceInfo[i].dateEnded + "</p>" + "<br />" + "<p class='description'>" + experienceInfo[i].description + "</p>").appendTo('#experience-data-container');
    }

    // Display projectsInfo
    for (i = 0; i < projectsInfo.length; i++) {
        $('<div class="project" />').html("<p class='info'>" + "<b>" + projectsInfo[i].name + " | " + projectsInfo[i].location + " | " + projectsInfo[i].title + "</b>" + "</p>" +"<br />" + "<p>" + projectsInfo[i].dateStarted + " - " + projectsInfo[i].dateEnded + "</p>" + "<br />" + "<p class='description'>" + projectsInfo[i].description + "</p>").appendTo('#projects-data-container');
    }

    // Display skillsData
    for (i = 0; i < skillsData.length; i++) {
        $('<div class="skill" />').html("<b>" + skillsData[i] + "</b>").appendTo('#skills-data-container');
    }


});