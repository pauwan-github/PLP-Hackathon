# Mental and General Health Care
## This is the documentation of Mental and General Health Care System and how to incorporate it into your desktop and run it.
Here's a step-by-step guide on how to get this project from GitHub and run it on your desktop:
###**Prerequisites:**
- **Git:** A version control system to clone the repository. You can download it from the official Git website.
- **Required Tools:** Ensure you have the necessary tools (npm, Node.js, vs code.) to run the project, depending on its programming language.
- ## Steps:
**Find the Repository:**
-Go to GitHub and search for the project you want.
-Once you find it, navigate to the repository's main page.
**Clone the Repository:**
-Using the Command Line:
-Open your terminal or command prompt.
-Navigate to the directory where you want to clone the repository.
Use the git clone command followed by the repository's URL:
```bash
git clone https://github.com/pauwan-github/PLP-Hackathon.git
```
**Using a Git Client:** Use a Git client like GitHub Desktop or SourceTree.   In the client, use the "Clone Repository" option and paste the repository's URL. 
**Navigate to the Repositories:**
  -Open your terminal or command prompt.
  -Use the cd command to navigate to the cloned repository's directory:
  
```bash
cd PLP-Hackathon
```
**Install Dependencies (if necessary):**

If the project has dependencies (express), you'll need to install them. By running the following code on your terminal
```bash
npm install express
```

**Run the Project:** 
Direct Execution: You might be able to directly execute the main file (e.g., node index.js for Node.js).

## 1. Project Overview
### Introduction

The Mental and General Health System documented here provides all the people with services to health practices and professionals in the line of medicine. This Mental and General Health System provides a streamlined way for hospitals and general people to access health diagnosis and access helath related information information. It features pages such as: a) Home, Diseases(HIV & AIDS, MPOX, Cholera, Typhoid, Bilharzia, Flu among others) Mental Check Up, Disease Detection, Mental Awareness. The project is implemented using HTML, CSS, JavaScript and ( for both client-side and server-side).

 ## 2. System Architecture
 The system follows a three-tier architecture: a) Presentation Layer (user interface) - Built with HTML, CSS and JavaScript. b) Application Layer - Node.js handles the server-side logic, manages user requests, processes data, and communicates. c). It’s simply Frontend (HTML, CSS, JS)  Backend (Node.js, Express.js).
 
 ## 3. Technologies and Packages
 IDE’s to install visit the links in brackets to install the software’s below. Note that node.js comes having npm(node package manager).
 [Visual Studio Code](https://code.visualstudio.com/)
[Node.js](https://nodejs.org/en)
[NPM]()
After installing the above soft wares: Open your Visual studio code and press ctrl + back-tick (`) to open a terminal. Write the following codes.
~~~bash
node –v # (to check if the node.js is installed and to check out its version)
~~~

~~~bash
npm –v # (to check if the npm is installed and to check out its version)
~~~

Languages and Frameworks
-Frontend - HTML, CSS, JavaScript
-Backend - Node.js, Express.js
-Express for server creation and handling routes
~~~ bash
npm install express
~~~
## 4. Frontend Structure and Code
The codes used are in this file repository.
## 5. Structure
~~~bash
├───node_modules
│   ├───.bin
│   ├───accepts
│   ├───array-flatten
│   ├───body-parser
│   │   └───lib
│   │       └───types
│   ├───bytes
│   ├───call-bind
│   │   ├───.github
│   │   └───test
│   ├───content-disposition
│   ├───content-type
│   ├───cookie
│   ├───cookie-signature
│   ├───debug
│   │   └───src
│   ├───define-data-property
│   │   ├───.github
│   │   └───test
│   ├───depd
│   │   └───lib
│   │       └───browser
│   ├───destroy
│   ├───ee-first
│   ├───encodeurl
│   ├───es-define-property
│   │   ├───.github
│   │   └───test
│   ├───es-errors
│   │   ├───.github
│   │   └───test
│   ├───escape-html
│   ├───etag
│   ├───express
│   │   └───lib
│   │       ├───middleware
│   │       └───router
│   ├───finalhandler
│   ├───forwarded
│   ├───fresh
│   ├───function-bind
│   │   ├───.github
│   │   └───test
│   ├───get-intrinsic
│   │   ├───.github
│   │   └───test
│   ├───gopd
│   │   ├───.github
│   │   └───test
│   ├───has-property-descriptors
│   │   ├───.github
│   │   └───test
│   ├───has-proto
│   │   ├───.github
│   │   ├───helpers
│   │   └───test
│   ├───has-symbols
│   │   ├───.github
│   │   └───test
│   │       └───shams
│   ├───hasown
│   │   └───.github
│   ├───http-errors
│   ├───iconv-lite
│   │   ├───encodings
│   │   │   └───tables
│   │   └───lib
│   ├───inherits
│   ├───ipaddr.js
│   │   └───lib
│   ├───media-typer
│   ├───merge-descriptors
│   ├───methods
│   ├───mime
│   │   └───src
│   ├───mime-db
│   ├───mime-types
│   ├───ms
│   ├───negotiator
│   │   └───lib
│   ├───object-inspect
│   │   ├───.github
│   │   ├───example
│   │   └───test
│   │       └───browser
│   ├───on-finished
│   ├───parseurl
│   ├───path-to-regexp
│   ├───proxy-addr
│   ├───qs
│   │   ├───.github
│   │   ├───dist
│   │   ├───lib
│   │   └───test
│   ├───range-parser
│   ├───raw-body
│   ├───safe-buffer
│   ├───safer-buffer
│   ├───send
│   │   └───node_modules
│   │       ├───encodeurl
│   │       └───ms
│   ├───serve-static
│   ├───set-function-length
│   │   └───.github
│   ├───setprototypeof
│   │   └───test
│   ├───side-channel
│   │   ├───.github
│   │   └───test
│   ├───statuses
│   ├───toidentifier
│   ├───type-is
│   ├───unpipe
│   ├───utils-merge
│   └───vary
└───public
    ├───illness
    │   └───pics
    └───pics~~~
# Follow the following procedures to set up vs code for running program backend
## server.js
*Open up your visual studio code and press ctrl + ` to open a new terminal.
*On the terminal write
~~~  npm install express~~~
After the packages are installed, a file (package.json) will be added on your folder that looks like that will have a part like the one shown below.
~~~"dependencies": {
    "express": "^4.21.1"
  }~~~
Go to your folder and add a file called server.js and write the following codes.
~~~const express = require('express');
const app = express();
const port = 3005;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:3005`);
});
~~~
##NOTE
The **PORT** number should align with one in your desktop that is free.

## 6. Deployment and Setup
Prerequisites Make sure that you’ve installed Node.js on your system. Steps to Run the Project
a. Clone the repository git clone cd Disease Detector

b. Make sure that you’ve the necessary packages npm install mysql express.

c. Start the server On the terminal write
~~~node server.js~~~
d. Using your browser, access the application by typing the following on your url section. http://localhost:3100
This documentation has provided a complete guide to understanding and setting up the Mental and Health General Health system on a local machine. Let me know if you need more details on specific sections.
 
