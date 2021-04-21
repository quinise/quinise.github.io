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
    description: "I co-facilitated focus group, created questions/study forms and Created a wireframe and consulted with client. I created/updated Postgress database to store user information, created models for database. I implemented both Buffalo and Gin Go frameworks. I developed a ERC-20 token buying site using Solidity, JSON, and JavaScript. I made API calls to Web3 making contract/transaction interactions on a blockchain (also used Truffle-Contracts). I tested the app using Ganache, Metamask, Geth, and Ethereum test networks (Rinkeby and Robsten)"
}]

var projectsInfo = [{
    name: "Cyber Defense Game",
    location: "Olympia, WA",
    title: "Engineer",
    dateStarted: "June 2014",
    dateEnded: "April 2015",
    description: "I structured and created a SQL database filled with nonce data and wrote scoreboard and submission checker in C. I used Chef to automate tasks on EC2 Linux machine. I Collaborated carefully and clearly to set up a Windows Server 2008 system, with AWS-EC2 for the vulnerability protecting team and invented 60% vulnerabilities for the system attacking team to exploit in a website that connects to the above database."
}]

var skillsData = ['Java', 'MySQL', 'PostgresSQL', 'HTML', 'CSS', 'LATEX', 'Python (Django)', 'JavaScript', 'node.js', 'Solidity', 'Amazon Web Services (EC2/VPC)', 'Vim', 'Git', 'VMware', 'Sketch', 'Windows', 'macOS', 'Android', 'iOS'];


$(window).on('load', function() {
    // Display educationInfo
    for (i = 0; i < educationInfo.length; i++) {
        $('<div class="education" />').html("<b>" + educationInfo[i].name + " | " + educationInfo[i].location + "</b>" + "<br />" + educationInfo[i].graduationDate + "<br />" + educationInfo[i].description).appendTo('#education-data-container');
    }

    // Display experienceInfo
    for (i = 0; i < projectsInfo.length; i++) {
        $('<div class="experience" />').html("<p>" + "<b>" + experienceInfo[i].name + " | " + experienceInfo[i].company + " | " + experienceInfo[i].location + " | " + experienceInfo[i].title + "</b>" + "</p>" + "<br />" + "</p>" + experienceInfo[i].dateStarted + " - " + experienceInfo[i].dateEnded + "</p>" + "<br />" + experienceInfo[i].description).appendTo('#experience-data-container');
    }

    // Display projectsInfo
    for (i = 0; i < projectsInfo.length; i++) {
        $('<div class="project" />').html("<p>" + "<b>" + projectsInfo[i].name + " | " + projectsInfo[i].location + " | " + projectsInfo[i].title + "</b>" + "</p>" +"<br />" + "<p>" + projectsInfo[i].dateStarted + " - " + projectsInfo[i].dateEnded + "</p>" + "<br />" + projectsInfo[i].description).appendTo('#projects-data-container');
    }

    // Display skillsData
    for (i = 0; i < skillsData.length; i++) {
        $('<div class="skill" />').html("<b>" + skillsData[i] + "</b>").appendTo('#skills-data-container');
    }


});