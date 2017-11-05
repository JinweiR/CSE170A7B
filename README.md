Project: Gradetime
Authors: Oliver Kelton, Jinwei Ren, Jialiang Zhou
Date: Nov. 4, 2017

Gradetime is a mobile app that intends to improve communication between parents and educators, for the benefit of their children’s education. The app allows parents to monitor their children’s grades on assignments and tests, ask questions to their teachers, discuss school issues with other parents, and find tutors for their children.

The first page of the app, after login, is index.html. This page contains a list of students the parent has enrolled on the app, as well as an “add student” link that redirects them to a page to add another student to their account. Clicking on any of the students’ names will lead to another page, “features/<student’s name>.html”, which contains information for that individual student.

From the student’s page, the parent has four options: see the student’s grades in “Grades”, engage with teachers and advisors in a virtual “conference center,” discuss school issues with other parents in the “Parent Forum,” or find a tutor using “Find Tutor.” The urls for these features are: “<name>/grades.html”, “<name>/conference.html”, “<name>/forum.html”, and “<name>/tutor.html”.

The file “template.html” contains the standard navbar for the app, which appears (with some modifications) on every page. The navbar contains a link to “features/<name>” called “Home,” a central dropdown menu that provides access the each page’s sibling pages, and a righthand dropdown menu, signified by three dots, which provides access to the settings menu and index.html, and allows the user to log out. The navbar functions using the script “navbar.js” (url: “./js/navbar.js”).