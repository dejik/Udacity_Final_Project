/*
This is empty on purpose! Your code to build the resume will go here.
 */








var bio = {
		"name": "Dejik Hyde",
		"role": "Dev Ops Engineer",
		"contacts":{
	           "email": "dhyde@classwork.com",
	           "github": "dejik1",
	           "location": "Acworth, Georgia, USA",
			   "mobile": "678-761-2610"
				},
		"biopic": "images/Dejik.jpg",
        "welcomeMessage": "The price of greatness is responsibility that pride responsibility is want I offer.",
 		 "skills":   [" Swag"," Problem Solving"," Research Expert"," Amazon Web Server"," Programin Knowledge"]
     };    	

var projects = {
        "projects": [
{
	        "title": "Eccer",
	        "dates": "Septemeber 2016 - Decemeber 2016",
	        "description": "12 week course working with ruby and RuBY ON Rails",
	        "images":["images/Ex.png"],
	        "url": "http://exercism.io/languages/javascript"
},

{
			"title": "Final Portject",
			"dates": "October 2014",
			"description": "Build website using HTML/CSS/Javascript",
			"images": ["images/logo.png"],
			"url": "yearup.org"

},

                    ]};









var work = {
                "jobs":[
                   {
                   		"employer": "U.S Navy",
                   		"title": "Logistics Specialist",
                   		"location": "Norfolk, Virginia, USA",
                   		"dates": "August 2012 - August 2015",
                   		"description":"Logistical Database Management",
                   	},
                   	{
                   		"employer": "Classwork",
                        "title":    "Dev Ops Intern",
                        "location": "Altanta ,Georgia, USA",
                        "dates":  "August 2016 - January 2017",
                        "description": "Service and Support of the Classworks code,"+
                                       "Writing Scripts to Support Softwre"

                   	}	
                        ]
                    };    

var education = {
	         "schools": [
	          { "name": "Tech Talent South",
	           "dates": "July 2016 - August 2016",
               "majors": ["Code Imerison","Intro to programing"],
                "degree": "Ruby",
                "url": "www.techtalent",
                "location": "Altanta",

               },
               {
               	"name": "Year-Up",
               	"dates": "March 2016 - January 2017",
               	"majors": ["Qa","Programing"],
               	"degree":"Html/Css/Javascript",
               	"url": "www.yeaarup.org",
               	"location": "Atlanta",

               },                  
                         ],
              "onlineCourses": [

                        {
                              "school": "Udacity",
                              "title": "Intro to Programing",
                              "dates": "March 2016 - August 2016",
                              "url": "www.Udacity.com",
                        },
                        {
                        	"school": "Udacity",
                        	"title": "Html/Css",
                        	"dates": "August 2016 - Septemeber 2016",
                        	"url": "www.Udacity.com",
                        }


                               ]
             };
bio.display = function() {


var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);
var formattedEmail = HTMLemail.replace("email", bio.contacts.email);
$("#main").append(formattedEmail);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").prepend(formattedBioPic);
var formattedWmessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").prepend(formattedWmessage);
        
if(bio.skills !== null){
	var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
	for(var i = 0; formattedContactInfo.length > i ; i++){

$("#topContacts").append(formattedContactInfo[i]);
$("#footerContacts").append(formattedContactInfo[i]);

                   }
                     }
if(bio.skills.length == 5) {
	$("#header").append(HTMLskillsStart);

	for(var v = 0;bio.skills.length > v; v++) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[v]));
       
	}
}


	

 };

 bio.display(); 

work.display= function() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(var i = 0; work.jobs.length > i ; i++) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

};

work.display();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(var i =0;  projects.projects.length > i; i++) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(var img = 0; projects.projects[i].length > img; img++);  {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
};

projects.display();

 education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(var i = 0; education.schools.length > i; i++) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].majors);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].degree);
			

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			}
		}
        if(true){
		$("#education").append(HTMLonlineClasses);
		for(var v = 0; education.onlineCourses.length > v; v++) {
				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[v].title).replace("#", education.onlineCourses[v].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[v].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[v].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[v].url).replace("#", education.onlineCourses[v].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
				
            }		
		 }
};

education.display();


$("#mapDiv").append(googleMap);
