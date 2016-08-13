var name = "Matthew Hardwick";
var role = "Front-End Web Developer";
var contactInfo = "matthardwick@gmail.com";
var bioPic = "images/fry.jpg";
var welcomeMessage = "Hello!";
var skills = ["a", "b", "c"];


var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);




var bio = {
  "name" : name,
  "role" : role,
  "contacts" : {
    "email" : "matthardwick@gmail.com",
    "github" : "matthardwick",
  },
  "bioPic" : bioPic,
  "welcomeMessage" : welcomeMessage,
  "skills" : skills
};


var work = {};
work.position = "CSA";
work.employer = "DMIG";
work.years =  3;
work.city = "Fresno";


var education = {};
education["name"] = "Reedley";
education["years"] = 3;


$("#main").append(work["position"]);
$("#main").append(education.name);

var education = {
  "schools": [
    {
      "name": "Reedley",
      "city": "Reedley, CA",
      "degree": "Piano"
    }
  ],
  "OnlineCourses": [
    {
      "name": "Udacity",
      "course": "NanoDegree"
    }
  ]
}
