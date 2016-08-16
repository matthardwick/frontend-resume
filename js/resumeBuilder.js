// Resume data
var bio = {
  "name": "Matthew Hardwick",
  "role": "Front-End Web Developer",
  "contacts": {
    "mobile": "559-549-7123",
    "email": "matthardwick@gmail.com",
    "github": "matthardwick",
    "location": "Fresno, CA"
  },
  "welcomeMessage": "Welcome! Thank you for taking a look at my Online Résumé",
  "skills": [
    "HTML, CSS, Javascript", "Professional Logo/Image Vectorization (Illustrator)", "Microsoft " + "Excel (Advanced)"
  ],
  "biopic": "images/avatar.jpg"
};

var education = {
  "schools": [{
    "name": "Reedley College",
    "location": "995 North Reed Ave, Reedley, CA 93654",
    "degree": "BA",
    "majors": ["Music (Instrumental)"],
    "dates": "August 2009 - June 2012",
    "url": "http://reedleycollege.edu"
  }],
  "onlineCourses": [{
    "title": "Front End Web Developer NanoDegree",
    "school": "Udacity",
    "dates": "May 2016 - In Progress",
    "url": "http://www.udacity.com"
  }]
};

var work = {
  "jobs": [{
    "employer": "DerManouel Insurance Group",
    "title": "Account Manager",
    "location": "548 W. Cromwell Ave., Fresno, CA 93711",
    "dates": "April 2013 - September 2016",
    "description": "Managing a book of dedicated Health Insurance business with responsibilies " + "including Marketing, Enrollment, Escalated Claims Issues, and developing tools to ease the " + "transition into the Affordable Care Act Small Group rating system"
  }, {
    "employer": "Aetna",
    "title": "Customer Service Representative",
    "location": "1385 E Shaw Ave, Fresno, CA 93710",
    "dates": "January 2008 - April 2013",
    "description": "Taking calls from an inbound queue from members, providers, plan sponsors, " +  "and  brokers.</br> Assigned to the 'mentor queue,' taking calls from other customer " + "service representatives and handling supervisor requests.</br> Monitoring the 'Fresno " + "Small  Group Mailbox,' an email box designed to answer questions from brokers, general " + "agents, and Sales Executives regarding escalated claim and enrollment issues.</br> " + "Regional Business Sales Support Appreciation Award for 2012. Recognized for performing " +  "excellent service and collaborative efforts to Aetna's Sales team.",
  }, {
    "employer": "Alpha Designs",
    "title": "Graphics Designer",
    "location": "316 E 4th St, Hanford, CA 93230",
    "dates": "April 2004 - June 2006",
    "description": "Managed orders from customers, both in person and over the phone.</br> " + "Developed graphics solutions for silk-screen, embroidery, signs and print media.</br> " + "Installed signs and vinyl graphics.</br> Experience in daily use of graphics software " + "such as Adobe Photoshop and Illustrator.",
  }]
};

var projects = {
  "projects": [{
    "title": "Where the Garden Grows Preschool",
    "dates": "May 2016",
    "description": "Basic multi-page website for client. Hosted on a VPS (DigitalOcean, Ubuntu " + "14.04) using NGINX as the web-server. Built with GRAV as the CMS for the client using a " + "modified Gravstrap theme. Mobile ready and responsive. Everything was configured from " + "scratch on an extremely tight deadline.",
    "images": [
      "images/wtgg-thumb2.png", "images/wtgg-thumb.png"
    ],
    "url": "https://github.com/matthardwick/wtgg"
  }, {
    "title": "Personal Blog",
    "dates": "June 2016",
    "description": "personal responsive blog using Jekyll, hosted on github-pages.",
    "images": [
      "images/blog.PNG"
    ],
    "url": "https://github.com/matthardwick/matthardwick.github.io"
  }, {
    "title": "Portfolio Page",
    "dates": "July 2016",
    "description": "Portolio Page built on Google's Web Starter Kit",
    "images": [
      "images/portfolio-image.PNG",
      "images/portfolio-image2.PNG"
    ],
    "url": "https://github.com/matthardwick/lesson-portfolio"
  }, {
    "title": "Animal Trading Card Demo",
    "dates": "May 2016",
    "description": "CSS card demo",
    "images": [
      "images/coyote-css-card.PNG"
    ],
    "url": "https://github.com/matthardwick/lesson-card-css"
  }]
};
// End of Resume Data

// Header Containing bio section: role, name, contacts, bioPic, welcomeMessage, skills
bio.display = function () {
  // name, role, biopic, welcomemessage
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#header").prepend(formattedRole).prepend(formattedName).append(formattedBioPic, formattedWelcomeMsg, HTMLskillsStart);

  // skills
  for (var i = 0; i < bio.skills.length; i++) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkills);
  }

  // contacts
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
  $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

};

// Body of HTML start - Work Experience Section
work.display = function () {
    $("#workExperience").append(HTMLworkStart);

    for (var i = 0; i < work.jobs.length; i++) {

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
      var formattedWorkTitle = formattedEmployer + formattedTitle;
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

      $(".work-entry:last").append(formattedWorkTitle, formattedWorkLocation, formattedDates, formattedDescription);
  }
};

// Projects Section
projects.display = function () {

  for (var i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);

    // contained setting title within $ to chain setting each href as well
    var formattedProjectTitle = $(HTMLprojectTitle.replace("%data%", projects.projects[i].title)).attr("href", projects.projects[i].url);
    //
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    var formattedProjectDescr = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

    $(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(formattedProjectDates, formattedProjectDescr);

    var formattedProjectImages = [];
    for (var img = 0; img < projects.projects[i].images.length; img++) {
      formattedProjectImages[img] = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
    }
    for (var pic = 0; pic < formattedProjectImages.length; pic++) {
      $(".project-entry:last").append(formattedProjectImages[pic]);
    }

    $(".project-entry:last").append("<hr>");
  }
};

// Education Section
education.display = function () {
  // Schools
  for (var i = 0; i < education.schools.length; i++) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
    var linkedSchoolName = $(formattedSchoolNameDegree).attr("href", education.schools[i].url);
    //
    $(".education-entry:last").append(linkedSchoolName, formattedSchoolLocation, formattedSchoolDates, formattedSchoolMajor);
  }
  $("#education").append(HTMLonlineClasses);
  // Online Courses
  for (var ii = 0; ii < education.onlineCourses.length; ii++) {
    $("#education").append(HTMLschoolStart);

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[ii].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[ii].school);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[ii].dates);
    var formattedOnlineURL = $(HTMLonlineURL.replace("%data%", education.onlineCourses[ii].url)).attr("href", education.onlineCourses[ii].url);
    var formattedOnlineSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
    var linkedCourseName = $(formattedOnlineSchoolTitle).attr("href", education.onlineCourses[ii].url);

    $(".education-entry:last").append(linkedCourseName, formattedOnlineDates, formattedOnlineURL);
  }
};

// display each section
work.display();
projects.display();
education.display();
bio.display();

// display the map
$("#mapDiv").append(googleMap);


// $("#main").append(internationalizeButton);
//
// function inName(name) {
//   name = name.trim().split(" ");
//   console.log(name);
//   name[1] = name[1].toUpperCase();
//   name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//
//   return name[0] + " " + name[1];
// }
