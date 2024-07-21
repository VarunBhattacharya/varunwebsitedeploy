/*LOADING SCREEN*/
window.onload = function () {
    academicShow();
    professionalExpShow();
    skillsShow()
};
/*END LOADING SCREEN*/


/*SPOTLIGHT SECTION*/
function resumeButton() {
    window.open("https://drive.google.com/file/d/1QRyx16MY2teGRbJ32zOl1UlTI007W-yk/view?usp=drive_link", "_blank");
}

function cvButton() {
    window.open("https://drive.google.com/file/d/1CBbUezjLSxMbx8rGt_k1TX4oVy_nO2dW/view?usp=drive_link", "_blank");

}
/*SPOTLIGHT SECTION END*/


/*EDUCATION SECTION*/
function academicShow() {
    document.getElementById("educationSection").innerHTML = '<br>' + '<font face="font1">' +
        '<ul>' +
        '&#10154; <b>BTech. in Information Technology (Dec 2020 - Present)</b> <br>' +
        '&nbsp;&nbsp; <font face="font1" size="4px">Vellore Institute of Technology, Vellore, India</font> <br>' +
        '<!-- &nbsp;&nbsp; <font face="font1" size="4px">CGPA: 9.11 / 10</font> -->' +
        '</ul>' +
        '<ul>' +
        '&#10154; <b>Diploma in High School (June 2020)</b> <br>' +
        '&nbsp;&nbsp; <font face="font1" size="4px">Brilliant Junior College, Hyderabad, India</font> <br>' +
        '<!-- &nbsp;&nbsp; <font face="font1" size="4px">Percentage: 89.4%</font> -->' +
        '</ul>' +
        '<ul>' +
        '&#10154; <b>Diploma in Middle School (June 2018)</b> <br>' +
        '&nbsp;&nbsp; <font face="font1" size="4px">Kennedy High the Global School, Hyderabad, India</font> <br>' +
        '<!-- &nbsp;&nbsp; <font face="font1" size="4px">Percentage: 90.2%</font> -->' +
        '</ul>' +
        '</font>';
}

function certificationsShow() {
    document.getElementById("educationSection").innerHTML =
        `
    <br>
    <font face = "font1" size = 5px>
        <div id="certBarAllign" onclick="techCertifications()">
            <b>Tech</b>
        </div>
        <div id="certBarAllign" onclick="nontechCertifications()">
            <b>Non-Tech</b>
        </div>
    </font>
    `;
}

function techCertifications() {
    document.getElementById("educationSection").innerHTML =
        `
    <br>
    <ul>
    <b>Cloud</b> <br>
    &#10174; <b>Oracle</b> Cloud Infrastructure Foundations 2023 Associate &nbsp;
    <div id = "certiDiv" onclick = "oracleCloudInfraFoundation()"><i id = "certiLink" class = "fa" style = "font-size: 16px;">&#xf08e;</i></div>
    
    <br>

    &#10174; <b>Oracle</b> Cloud Infrastructure AI Foundations 2023 Associate &nbsp;
    <div id = "certiDiv" onclick = "oracleCloudInfraAIFoundation()"><i id = "certiLink" class = "fa" style = "font-size: 16px;">&#xf08e;</i></div></a>
</ul>

<ul>
    <b>Machine Learning and Data Science</b> <br>
    &#10174; <b>Google</b> Data Analytics Professional &nbsp;
    <div id = "certiDiv" onclick = "googleDataAnalytics()"><i id = "certiLink" class = "fa" style = "font-size: 16px;">&#xf08e;</i></div>

    <br>

    &#10174; <b>Stanford University:</b> Machine Learning &nbsp;
    <div id = "certiDiv" onclick = "stanfordMachineLearning()"><i id = "certiLink" class = "fa" style = "font-size: 16px;">&#xf08e;</i></div>
</ul>

<ul>
    <b>Security</b> <br>
    &#10174; <b>Microsoft</b> Certified: Security, Compliance, and Identity Fundamentals &nbsp;
    <div id = "certiDiv" onclick = "microsoftSecurity()"><i id = "certiLink" class = "fa" style = "font-size: 16px;">&#xf08e;</i></div>
</ul>

<ul>
    <b>Language</b> <br>
    &#10174; <b>University of Michigan:</b> Python specialization &nbsp;
    <div id = "certiDiv" onclick = "pythonSpecialization()"><i id = "certiLink" class = "fa" style = "font-size: 16px;">&#xf08e;</i></div>

    <br>

    &#10174; <b>University of California, Davis:</b> SQL for Data Science &nbsp;
    <div id = "certiDiv" onclick = "sqlDataScience()"><i id = "certiLink" class = "fa" style = "font-size: 16px;">&#xf08e;</i></div>

</ul>`;
}

function nontechCertifications() {
    document.getElementById("educationSection").innerHTML =
        `
    <br>
    <ul>
        <b>Keyboard and Piano Certification</b> <br>
        &#10174; <b>Trinity College London:</b> Grade 1 - Electronic Keyboard (Level - 1) &nbsp;
        <div id = "certiDiv" onclick = "grade1Keyboard()"><i id = "certiLink" class = "fa" style = "font-size: 16px;">&#xf08e;</i></div>
        
        <br>

        &#10174; <b>Trinity College London:</b> Grade 3 - Piano (Level - 1) &nbsp;
        <div id = "certiDiv" onclick = "grade3Piano()"><i id = "certiLink" class = "fa" style = "font-size: 16px;">&#xf08e;</i></div>

        <br>

        &#10174; <b>Trinity College London:</b> Grade 4 - Piano (Level - 2) &nbsp;
        <div id = "certiDiv" onclick = "grade4Piano()"><i id = "certiLink" class = "fa" style = "font-size: 16px;">&#xf08e;</i></div>

        <br>

        &#10174; <b>Trinity College London:</b> Grade 6 - Piano (Level - 3) &nbsp;
        <div id = "certiDiv" onclick = "grade6Piano()"><i id = "certiLink" class = "fa" style = "font-size: 16px;">&#xf08e;</i></div>
    </ul>
    `;
}
/*END EDUCATION SECTION*/









/*EXPERIENCE SECTION*/
function internshipShow() {
    document.getElementById("experienceSection").innerHTML =
        `
    <ul>
        &#10149; <font face = "font1" size = 4px><b>
        <div id = "internLinkAllign" onclick = "teConnectivityWebsite()">TE Connectivity</div>
        </b> &#8680; Product Engineer Intern</font>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;
        &#10551; <font size = 3px>Bengaluru, Karnataka, India &#8680; November 2022 - August 2023</font>
        <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div id = "experienceTextAllign1"><font size = 3px>
            &#10174; Worked on signal optimizing algorithms using both Hw/Sw technologies to transmit correct signals efficiently. 
            <br> 
            &#10174; Building a custom machine learning model using transfer learning approach. 
            <br>
            &#10174; In-charge of removing the noise from the signal and using signal processing techniques. 
            <br>
            &#10174; The built model is used for connector of PCB designing to improve the signal loss, reduce the impedance and improve the accuracy of transferring the signal. 
            <br>
            &#10174; Minimised the return loss and the insertion loss to get the optimum signal transfer through the connector. 
            <br>
            &#10174; Worked on the new design of the PCB connector design for signal transfer.
        </div></font>
    </ul>

    <ul>
        &#10149; <font face = "font1" size = 4px><b>
        <div id = "internLinkAllign" onclick = "samsungWebsite()">Samsung R&D Institute</div>
        </b> &#8680; Research Intern</font>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;
        &#10551; <font size = 3px>Bengaluru, Karnataka, India &#8680; December 2022 - July 2023</font>
        <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div id = "experienceTextAllign2"><font size = 3px>
            &#10174; Worked on the worklet-id ATL22VIT - Oriented Hand Detection, Advanced research problem. 
            <br>
            &#10174; Developed deep learning based model for oriented bounding box detection.
            <br>
            &#10174; The bounding box and the orientation of the hand in angles is obtained.
            <br>
            &#10174; Performed Benchmarking and had accuracy over 90% with hand orientation error less than 5 degrees.
        </div></font>
    </ul>

    <ul>
        &#10149; <font face = "font1" size = 4px><b>
        <div id = "internLinkAllign" onclick = "codespeedyWebsite()">CodeSpeedy Technologies</div>
        </b> &#8680; Technical Blog Writer</font>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;
        &#10551; <font size = 3px>Kolkata, West Bengal, India &#8680; May 2022 - December 2022</font>
        <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div id = "experienceTextAllign2"><font size = 3px>
            &#10174; Wrote several blogs on core Python and its modules. 
            <br>
            &#10174; Worked on automation scripts with Selenium using Python.
        </div></font>
    </ul>

    <ul>
        &#10149; <font face = "font1" size = 4px><b>
        <div id = "internLinkAllign" onclick = "ltiWebsite()">Larsen and Toubro Infotech</div>
        </b> &#8680; ML Engineer Intern</font>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;
        &#10551; <font size = 3px>Hyderabad, Telangana, India &#8680; May 2022 - August 2022</font>
        <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div id = "experienceTextAllign1"><font size = 3px>
            &#10174; Worked on custom computer vision model to detect personal protected equipments using transfer learning. 
            <br>
            &#10174; Deployed model in edge computing device NVIDIA Xavier Jetson using L4T by re-building the python wheel files.
            <br>
            &#10174; Worked with AWS Green Grass and Azure to build the model, deployment, and the frontend for the system.
        </div></font>
    </ul>
    `;
}

function professionalExpShow() {
    document.getElementById("experienceSection").innerHTML =
        `
    <ul>
        &#10149; <font face = "font1" size = 4px><b>
        <div id = "internLinkAllign" onclick = "oracleWebsite()">Oracle</div>
        </b> &#8680; Associate Software Developer</font>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;
        &#10551; <font size = 3px>Bengaluru, Karnataka, India &#8680; 30 July 2024 - Present</font>
        <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div id = "experienceTextAllign2"><font size = 3px>
            &#10174; Working on CNDRA.
            <br>
            &#10174; Creating new UI screens for the product as per the UX design team requirements.
            <br>
            <u>Skills</u>: Python, Java, BDD, Jenkins, Docker, Helm, Kubernetes, ReactJS, RAPID, Openstack
        </div></font>
    </ul> 

    <ul>
        &#10149; <font face = "font1" size = 4px><b>
        <div id = "internLinkAllign" onclick = "oracleWebsite()">Oracle</div>
        </b> &#8680; Application Developer Intern</font>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;
        &#10551; <font size = 3px>Bengaluru, Karnataka, India &#8680; 17 January 2024 - 12 July 2024</font>
        <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div id = "experienceTextAllign2"><font size = 3px>
            &#10174; Worked on Cloud Native Diameter Routing Agent (CNDRA) product.
            <br>
            &#10174; Developed the overall testing suite for the product using BDD and python scripts.
            <br>
            &#10174; Introduced a new alternative tool for Seagull for signalling cases and utilized it for the product.
            <br>
            &#10174; Worked on the automation of the product using Jenkins and Docker.
            <br>
            &#10174; Worked on the deployment of the product in the cloud using Kubernetes.
            <br>
            &#10174; Developed few UI screens for the product using RAPID framework based on ReactJS.
            <br>
            &#10174; Created new VM's with the support of SCTP signalling cases.
            <br>
            <u>Skills</u>: Python, Java, BDD, Jenkins, Docker, Helm, Kubernetes, ReactJS, RAPID, Openstack
        </div></font>
    </ul> 
    `;
}

function clubChapShow() {
    document.getElementById("experienceSection").innerHTML =
        `
    <ul>
        &#10149; <font face = "font1" size = 4px>
        <b>
        <div id = "internLinkAllign" onclick = "isaWebsite()">International Society of Automation (ISA) VIT</div>
        </b> &#8680; Machine Learning Lead</font>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;
        &#10551; <font size = 4px>Vellore, Tamil Nadu, India &#8680; January 2022 - March 2023</font>
        <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div id = "experienceTextAllign1"><font size = 3px>
            &#10174; Worked majorly in the machine learning field and contributed towards training sessions and tasks for core members.
            <br>
            &#10174; Worked with other domain leads for building successful major projects.
            <br>
            &#10174; Helped in teaching the concepts of machine learning and deep learning to junior core members with hands-on sessions
            <br>
            &#10174; Conducted membership drive for freshers.
            <br>
            &#10174; Conducted various different events and engaged in the success of it.
            <br>
        </div></font>
    </ul> 
    `;
}

function achievementsShow() {
    document.getElementById("experienceSection").innerHTML =
        `
    <ul>
        <font face = "font1" size = 4px>
            &#10149; <b><div id = "internLinkAllign" onclick = "ismsWebsite()">Information Systems and Management Science</div></b>
            <br> &nbsp;&nbsp;&nbsp;
            &#10551; <font size = 4px>Best Research Paper Award on 6th International Conference on Information Systems and Management Science 2023 (Springer) - ISMS2023</font>
        </font>
    </ul>

    <ul>
        <font face = "font1" size = 4px>
            &#10149; <b><div id = "internLinkAllign" onclick = "volkswagenWebsite()">Volkswagen Group Technology Solutions India</div></b>
            <br> &nbsp;&nbsp;&nbsp;
            &#10551; <font size = 3px>Semi-Finalist in i.mobilothon 3.0 2023</font>
        </font>
    </ul>    

    <ul>
        <font face = "font1" size = 4px>
            &#10149; <b><div id = "internLinkAllign" onclick = "teConnectivityWebsite()">TE Connectivity</div></b>
            <br> &nbsp;&nbsp;&nbsp;
            &#10551; <font size = 3px>AI in Signal Integrity Winner 2023</font>
        </font>
    </ul>

    <ul>
        <font face = "font1" size = 4px>
            &#10149; <b><div id = "internLinkAllign" onclick = "jpmcWebsite()">JP Morgan Chase and Co.</div></b>
            <br> &nbsp;&nbsp;&nbsp;
            &#10551; <font size = 3px>Code for Good Hackathon 2023 Finalist</font>
        </font>
    </ul>
    `;
}

/*END EXPERIENCE SECTION*/







/*PROJECT AND SKILLS SECTION*/
function projectsShow() {
    document.getElementById("projectSection").innerHTML =
        `
    <ul>
        <font size = 5px>
            &#10149; <b>Predictor Machine</b> &nbsp;
            <div id = "projectDivLink" onclick = "predictorMachine()"><i id = "projectLink" class = "fa" style = "font-size: 16px;">&#xf08e;</i></div>
        </font>
        <br>
        <div id = "projectTextAllign1"><font size = 3px>
            &#10174; Predictor Machine predicts the winner of the cricket match based on actual ground and player parameters using advanced machine learning techniques.
            <br>
            &#10174; <u>Skills</u>: Python, Machine Learning, Deep Learning, HTML, CSS, JavaScript, PHP, MySQL, Image and Video Editing
        </div></font>
    </ul>

    <ul>
        <font size = 5px>
            &#10149; <b>Family Wishlish Console</b> &nbsp;
            <div id = "projectDivLink" onclick = "familyWishlist()"><i id = "projectLink" class = "fa" style = "font-size: 16px;">&#xf08e;</i></div>
        </font>
        <br>
        <div id = "projectTextAllign1"><font size = 3px>
            &#10174; Family Wishlist Console is mainly for prioritizing family related information and sending notifications accordingly to the family members.
            <br>
            &#10174; <u>Skills</u>: Java, JavaFX, SceneBuilder, MySQL, SQLite, Image and Video Editing
        </div></font>
    </ul>

    <ul>
        <font size = 5px>
            &#10149; <b>Cryptographic Algorithm Analyser</b> &nbsp;
            <div id = "projectDivLink" onclick = "cryptoAnalyser()"><i id = "projectLink" class = "fa" style = "font-size: 16px;">&#xf08e;</i></div>
        </font>
        <br>
        <div id = "projectTextAllign1"><font size = 3px>
            &#10174; Cryptographic Algorithm Analyser is a windows application for encrypting and decrypting text based on various different cryptographic algorithms basing on user's choice.
            <br>
            &#10174; <u>Skills</u>: Python, Tkinter, OpenSSL, MySQL, SQLite
        </div></font>
    </ul>

    <ul>
        <font size = 5px>
            &#10149; <b>oilQuad</b> &nbsp;
            <div id = "projectDivLink" onclick = "oilQuad()"><i id = "projectLink" class = "fa" style = "font-size: 16px;">&#xf08e;</i></div>
        </font>
        <br>
        <div id = "projectTextAllign1"><font size = 3px>
            &#10174; oilQuad is a system which uses a custom viscometric device to determine car oil change intervals and sends information to a shared cloud from where the mandate persons can access that data and can take the necessary actions regarding it.
            <br>
            &#10174; <u>Skills</u>: Microprocessor and Microcontrollers, Sensor Programming, Cloud Computing
        </div></font>
    </ul>
    `;
}

function researchShow() {
    document.getElementById("projectSection").innerHTML =
        `
    <ul>
        <font size = 5px>
            &#10149; <b>Advancing Gender, Age and Ethnicity with YOLOv5 and Transfer Learning</b> &nbsp;
            <div id = "projectDivLink" onclick = "ismsWebsite()"><i id = "projectLink" class = "fa" style = "font-size: 16px;">&#xf08e;</i></div>
        </font>
        <br>
        <div id = "projectTextAllign1"><font size = 3px>
            &#10551; <font size = 4px>Used advanced machine learning and deep learning techniques to detect and predict age, gender and ethnicity from images and made model light-weight such that deployment in edge computing devices can be easy to prevent human trafficing and other purposes.</font>
            <br>
            &#10174; <u>Skills</u>: Python, Machine Learning, Deep Learning, Transfer Learning, OpenCV, GluonCV, Edge computing
        </div></font>

        <br><br>
        <font size = 5px>
            &#10149; <b>Enhancing Security with Microcontroller-Based Face Detection in Sensitive Environments</b> &nbsp;
            <div id = "projectDivLink" onclick = "microcontrollerPaperRelease()"><i id = "projectLink" class = "fa" style = "font-size: 16px;">&#xf08e;</i></div>
        </font>
        <br>
        <div id = "projectTextAllign1"><font size = 3px>
            &#10551; <font size = 4px>This research describes the design and development of an Arduino-powered face identification and tracking robot that is lightweight, affordable, and highly effective.</font>
            <br>
            &#10174; <u>Skills</u>: Python, C++, Deep Learning, Image Processing, OpenCV, GluonCV, Edge computing, Android, Kotlin, Bluetooth Modules
        </div></font>

        <br><br>
        <font size = 5px>
            &#10149; <b>NeuraPose: Effective Human Pose Detection using Transfer Learning</b> &nbsp;
            <div id = "projectDivLink" onclick = "icdsaWebsite()"><i id = "projectLink" class = "fa" style = "font-size: 16px;">&#xf08e;</i></div>
        </font>
        <br>
        <div id = "projectTextAllign1"><font size = 3px>
            &#10551; <font size = 4px>The study uses the advanced YOLOv8 model to accurately detect and analyze body posture, surpassing previous models and focusing on key body points to improve musculoskeletal health through early diagnosis and personalized treatment recommendations.</font>
            <br>
            &#10174; <u>Skills</u>: Python, Deep Learning, Image Processing, OpenCV, GluonCV, Edge computing
        </div></font>
    </ul>
    `;
}

function skillsShow() {
    document.getElementById("projectSection").innerHTML =
        `
    <ul>
        <font size = 5px>
            &#10149; <b>Programming Languages</b>
        </font>
        <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div id = "skillIconSection1">
            <div id = "skillIconArrange" onclick = "pyWebsite()"><img src = "images/skillIcons/pyIcon.png"></div>
            <div id = "skillIconArrange" onclick = "javaWebsite()"><img src = "images/skillIcons/javaIcon.png"></div>
            <div id = "skillIconArrange" onclick = "cWebsite()"><img src = "images/skillIcons/cIcon.png"></div>
            <div id = "skillIconArrange" onclick = "cppWebsite()"><img src = "images/skillIcons/c++Icon.png"></div>
            <div id = "skillIconArrange" onclick = "csharpWebsite()"><img src = "images/skillIcons/csharpIcon.png"></div>
            <div id = "skillIconArrange" onclick = "rWebsite()"><img src = "images/skillIcons/rIcon.png"></div>
            <div id = "skillIconArrange" onclick = "rexxWebsite()"><img src = "images/skillIcons/rexxIcon.png"></div>
            <div id = "skillIconArrange" onclick = "mySQLWebsite()"><img src = "images/skillIcons/mySqlIcon.png"></div>
            <div id = "skillIconArrange" onclick = "htmlWebsite()"><img src = "images/skillIcons/htmlIcon.png"></div>
            <div id = "skillIconArrange" onclick = "cssWebsite()"><img src = "images/skillIcons/cssIcon.png"></div>
            <div id = "skillIconArrange" onclick = "jsWebsite()"><img src = "images/skillIcons/jsIcon.png"></div>
            <div id = "skillIconArrange" onclick = "jqueryWebsite()"><img src = "images/skillIcons/jqueryIcon.png"></div>
            <div id = "skillIconArrange" onclick = "typescriptWebsite()"><img src = "images/skillIcons/typescriptIcon.png"></div>
            <div id = "skillIconArrange" onclick = "phpWebsite()"><img src = "images/skillIcons/phpIcon.png"></div>
            <div id = "skillIconArrange" onclick = "seleniumWebsite()"><img src = "images/skillIcons/seleniumIcon.png"></div>
            <div id = "skillIconArrange" onclick = "gitWebsite()"><img src = "images/skillIcons/gitIcon.png"></div>
        </div>
    </ul>


    <ul>
        <font size = 5px>
            &#10149; <b>Frameworks</b>
        </font>
        <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div id = "skillIconSection2">
            <div id = "skillIconArrange" onclick = "djangoWebsite()"><img src = "images/skillIcons/djangoIcon.png"></div>
            <div id = "skillIconArrange" onclick = "flaskWebsite()"><img src = "images/skillIcons/flaskIcon.png"></div>
            <div id = "skillIconArrange" onclick = "fastapiWebsite()"><img src = "images/skillIcons/fastapiIcon.png"></div>
            <div id = "skillIconArrange" onclick = "javafxWebsite()"><img src = "images/skillIcons/javafxIcon.png"></div>
            <div id = "skillIconArrange" onclick = "nodejsWebsite()"><img src = "images/skillIcons/nodejsIcon.png"></div>
            <div id = "skillIconArrange" onclick = "angularjsWebsite()"><img src = "images/skillIcons/angularjsIcon.png"></div>
            <div id = "skillIconArrange" onclick = "reactjsWebsite()"><img src = "images/skillIcons/reactIcon.png"></div>
            <div id = "skillIconArrange" onclick = "k8Website()"><img src = "images/skillIcons/k8Icon.png"></div>
        </div>
    </ul>

    <ul>
        <font size = 5px>
            &#10149; <b>Cloud</b>
        </font>
        <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div id = "skillIconSection2">
            <div id = "skillIconArrange" onclick = "azureWebsite()"><img src = "images/skillIcons/azureIcon.png"></div>
            <div id = "skillIconArrange" onclick = "ociWebsite()"><img src = "images/skillIcons/oracleIcon.png"></div>
            <div id = "skillIconArrange" onclick = "gcpWebsite()"><img src = "images/skillIcons/gcpIcon.png"></div>
            <div id = "skillIconArrange" onclick = "awsWebsite()"><img src = "images/skillIcons/awsIcon.png"></div>
            <div id = "skillIconArrange" onclick = "openstackWebsite()"><img src = "images/skillIcons/openstackIcon.png"></div>
        </div>
    </ul>

    <ul>
        <font size = 5px>
            &#10149; <b>Operating Systems</b>
        </font>
        <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div id = "skillIconSection2">
            <div id = "skillIconArrange" onclick = "windowsWebsite()"><img src = "images/skillIcons/winIcon.png"></div>
            <div id = "skillIconArrange" onclick = "macosWebsite()"><img src = "images/skillIcons/macIcon.png"></div>
            <div id = "skillIconArrange" onclick = "ubuntuWebsite()"><img src = "images/skillIcons/ubuntuIcon.png"></div>
            <div id = "skillIconArrange" onclick = "kalilinuxWebsite()"><img src = "images/skillIcons/kaliIcon.png"></div>
            <div id = "skillIconArrange" onclick = "oraclelinuxWebsite()"><img src = "images/skillIcons/oracleLinuxIcon.png"></div>
        </div>
    </ul>
    `;
}
/*PROJECT AND SKILLS SECTION END*/







/*CERTIFICATION LINK*/
function oracleCloudInfraFoundation() {
    window.open("https://catalog-education.oracle.com/pls/certview/sharebadge?id=A582BEB82D928F7076AE0ABA73F28C3FC1033406DC3A0B2E8749061315DF7240", "_blank");
}

function oracleCloudInfraAIFoundation() {
    window.open("https://catalog-education.oracle.com/pls/certview/sharebadge?id=BF845B5A9715F571F4B0DFB838DE107D52C23EBCEB84BFB1ECF8D342AF14FC2A", "_blank");
}

function googleDataAnalytics() {
    window.open("https://www.coursera.org/account/accomplishments/specialization/certificate/CNFHCBT8HU3R", "_blank");
}

function stanfordMachineLearning() {
    window.open("https://www.coursera.org/account/accomplishments/certificate/7YNA7TS966RX", "_blank");
}

function microsoftSecurity() {
    window.open("https://drive.google.com/file/d/1RfweSTxfm7-dRXutLXHqRn9aOChkcc7-/view?usp=drive_link", "_blank");
}

function pythonSpecialization() {
    window.open("https://www.coursera.org/account/accomplishments/specialization/certificate/C32MNHA7FHZG", "_blank");
}

function sqlDataScience() {
    window.open("https://www.coursera.org/account/accomplishments/certificate/HXYQQHWR83YU", "_blank");
}

function grade1Keyboard() {
    window.open("https://drive.google.com/file/d/1_oPmtTHuSnhNxlIRP3z4j17bcYdioXrr/view?usp=sharing", "_blank");
}

function grade3Piano() {
    window.open("https://drive.google.com/file/d/11fiffxPuRAi6Vbl4CSf_dSsK_FRcpjI4/view?usp=drive_link", "_blank");
}

function grade4Piano() {
    window.open("https://drive.google.com/file/d/1lH8jXksheplIh2Y__Ee4DzgmfAI-9jNy/view?usp=drive_link", "_blank");
}

function grade6Piano() {
    window.open("https://drive.google.com/file/d/1R-9qurhyiT9n7VtThBPmnmZFW9jF1b_e/view?usp=drive_link", "_blank");
}
/*CERTIFICATION LINK END*/




/*COMPANY WEBSITE CLICK*/
function teConnectivityWebsite() {
    window.open("https://www.te.com/usa-en/home.html", "_blank");
}

function samsungWebsite() {
    window.open("https://research.samsung.com/sri-b", "_blank");
}

function codespeedyWebsite() {
    window.open("https://www.codespeedy.com/", "_blank");
}

function ltiWebsite() {
    window.open("https://www.ltimindtree.com/", "_blank");
}

function oracleWebsite() {
    window.open("https://www.oracle.com/", "_blank");
}

function isaWebsite() {
    window.open("https://www.isa.org/", "_blank");
}

function jpmcWebsite() {
    window.open("https://www.jpmorgan.com/", "_blank");
}

function volkswagenWebsite() {
    window.open("https://www.volkswagen.co.in/en.html", "_blank");
}

function ismsWebsite() {
    window.open("https://isms2023.opju.ac.in/", "_blank");
}

function microcontrollerPaperRelease() {
    window.open("https://ieeexplore.ieee.org/abstract/document/10493589", "_blank")
}

function icdsaWebsite() {
    window.open("https://scrs.in/conference/icdsa2024", "_blank");
}
/*END COMPANY WEBSITE CLICK*/






/*SKILL WEBSITE CLICK*/
function pyWebsite() {
    window.open("https://www.python.org/", "_blank");
}

function javaWebsite() {
    window.open("https://www.java.com/en/", "_blank");
}

function cWebsite() {
    window.open("https://en.wikipedia.org/wiki/C_(programming_language)", "_blank");
}

function cppWebsite() {
    window.open("https://cplusplus.com/", "_blank");
}

function csharpWebsite() {
    window.open("https://docs.microsoft.com/en-us/dotnet/csharp/", "_blank");
}

function rWebsite() {
    window.open("https://www.r-project.org/", "_blank");
}

function rexxWebsite() {
    window.open("https://www.ibm.com/docs/en/zos/2.1.0?topic=guide-learning-rexx-language", "_blank");
}

function htmlWebsite() {
    window.open("https://en.wikipedia.org/wiki/HTML", "_blank");
}

function cssWebsite() {
    window.open("https://en.wikipedia.org/wiki/CSS", "_blank");
}

function jsWebsite() {
    window.open("https://www.javascript.com/", "_blank");
}

function jqueryWebsite() {
    window.open("https://jquery.com/", "_blank");
}

function typescriptWebsite() {
    window.open("https://www.typescriptlang.org/", "_blank");
}

function phpWebsite() {
    window.open("https://www.php.net/", "_blank");
}

function seleniumWebsite() {
    window.open("https://www.selenium.dev/", "_blank");
}
function mySQLWebsite() {
    window.open("https://www.mysql.com/", "_blank");
}
function gitWebsite() {
    window.open("https://git-scm.com/", "_blank");
}

function djangoWebsite() {
    window.open("https://www.djangoproject.com/", "_blank");
}

function flaskWebsite() {
    window.open("https://flask.palletsprojects.com/en/3.0.x/", "_blank");
}

function fastapiWebsite() {
    window.open("https://fastapi.tiangolo.com/", "_blank");
}

function javafxWebsite() {
    window.open("https://openjfx.io/", "_blank");
}

function nodejsWebsite() {
    window.open("https://nodejs.org/en", "_blank");
}

function angularjsWebsite() {
    window.open("https://angularjs.org/", "_blank");
}

function reactjsWebsite() {
    window.open("https://reactjs.org/", "_blank");
}

function k8Website() {
    window.open("https://kubernetes.io/", "_blank");
}

function azureWebsite() {
    window.open("https://azure.microsoft.com/en-in", "_blank");
}

function ociWebsite() {
    window.open("https://www.oracle.com/in/cloud/", "_blank");
}

function gcpWebsite() {
    window.open("https://cloud.google.com/?hl=en", "_blank");
}

function awsWebsite() {
    window.open("https://aws.amazon.com/", "_blank");
}

function openstackWebsite() {
    window.open("https://www.openstack.org/", "_blank");
}

function windowsWebsite() {
    window.open("https://www.microsoft.com/en-in/windows", "_blank");
}

function macosWebsite() {
    window.open("https://www.apple.com/in/macos/", "_blank");
}

function ubuntuWebsite() {
    window.open("https://ubuntu.com/", "_blank");
}

function kalilinuxWebsite() {
    window.open("https://www.kali.org/", "_blank");
}

function oraclelinuxWebsite() {
    window.open("https://docs.oracle.com/en/operating-systems/oracle-linux/", "_blank");
}
/*END SKILL WEBSITE CLICK*/



/*PROJECT LINK CLICK*/
function predictorMachine() {
    window.open("https://github.com/VarunBhattacharya/IPL_Predictor", "_blank");
}

function familyWishlist() {
    window.open("https://github.com/VarunBhattacharya/FamilyWishlistConsole", "_blank");
}

function cryptoAnalyser() {
    window.open("https://github.com/VarunBhattacharya/Cryptographic_Algorithm_Analyser", "_blank");
}

function oilQuad()
{
    window.open("https://github.com/VarunBhattacharya/oilQuad", "_blank");
}
/*END PROJECT LINK CLICK*/