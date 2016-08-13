var bio = {
  "name": "Matthew Hardwick",
  "role": "Front-End Web Developer",
  "contacts": {
    "email": "matthardwick@gmail.com",
    "github": "matthardwick",
    "location": "Fresno, CA"
  },
  "welcomeMessage": "Hello World!",
  "skills": [
    "a", "b", "c"
  ],
  "bioPic": "images/fry.jpg"
}

var work = {
  "jobs": [{
    "employer": "DerManouel Insurance Group",
    "title": "Account Manager",
    "location": "Fresno, CA",
    "dates": "April 2013 to Present",
    "description": "Managing a book of dedicated Health Insurance business with responsibilies including Marketing, Enrollment, Escalated Claims Issues, and developing tools to ease the transition into the Affordable Care Act rating system",
    "license": "California Life and Accident/Health Agent - 0I08142"
  }, {
    "employer": "Aetna",
    "title": "Customer Service Representative",
    "location": "Fresno, CA",
    "dates": "January 2008 to April 2013",
    "description": "Incoming call center",
  }]
}

var projects = {
  "websites": [{
    "title": "Where the Garden Grows Preschool",
    "url": "wtggpreschool.com"
  }, {
    "title": "Personal Blog",
    "url": "mattdhardwick.com"
  }]
}


var education = {
  "Online Courses": [{
    "name": "Udacity",
    "type": "Front-End Web Developer NanoDegree"
  }]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedName);
$("#header").append(formattedRole);


if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
}

function displayWork() {
  for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();


projects.display = function() {
  for (project in projects.websites) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.websites[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedURL = HTMLprojectDescription.replace("%data%", projects.websites[project].url);
    $(".project-entry:last").append(formattedURL);
  }
}
projects.display();


$("#mapDiv").append(googleMap);

$("#main").append(internationalizeButton);

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}
