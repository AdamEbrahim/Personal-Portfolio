import { BlogBuilder } from "../components/blog/BlogBuilder";
const bloglist = [];

const blog = new BlogBuilder({
  title: "Workout Routine Generator",
  image: require('../assets/img/workoutGenerator.jpg'),
  description:
    "Worked on developing a web application to generate customized, weekly workout routines based on user-input settings.",
})
  .addHeading("About the Project")
  .addParagraph(
    "I worked on developing a web application to generate customized, weekly workout routines based on user-input settings. My motivation for this web application came from both a love of strength training and a desire to try to simplify a process that so many people find daunting.\
    By working on this project I hoped to design something that would eliminate the need for people to invest time into coming up with a strength-based workout routine. Although not currently hosted, code can be found in the github repositories linked at the bottom of this page."
  )
  .addHeading("Features")
  .addParagraph(
    "I built a RESTful backend API to access a database and retrieve specific types of exercises with their relevant information, such as muscles worked, exercise descriptions, and images. To get the exercises into my database with the attributes that I wanted, I parsed through, cleaned, and compiled hundreds of pieces of data from various online endpoints.\
    This made it easier to retrieve different types of exercises based on specific user preferences. I also worked on developing a backend algorithm to return a specific and individualized combination of exercises from the database with generated sets/reps, rest times, and more based on the user inputs. The Redux library was also implemented to store state globally in the React frontend, which made it easier to access data.\
    Finally, I utilized CI/CD pipelines to automatically ensure the app functions smoothly in development and production environments."
  )
  .addHeading("Technologies and Languages Used")
  .addParagraph(
    "The tech stack for the web app consisted of a React/Redux frontend, a Golang backend, and a PostgreSQL database. The app was hosted on Heroku before free plans were removed, and the code can be found in the following github repositories: https://github.com/AdamEbrahim/workout-generator-frontend and https://github.com/AdamEbrahim/workout-generator-backend."
  );

const blog1 = new BlogBuilder({
  title: "Dukehub Schedule Builder/Visualizer",
  image: require('../assets/img/scheduleBuilder.jpg'),
  description:
    "Developed a web application for Duke University to enable students to more easily build class schedules for future semesters while being able to visualize relevant data.",
})
  .addHeading("About the Project")
  .addParagraph(
    "During the summer of 2022 I interned with Duke University. Throughout this internship, I worked with a team to develop a web application for Duke to enable students to more easily build class schedules for future semesters while being able to visualize and analyze relevant data.\
    This project aimed to remove the inefficiencies and issues that students found with the current scheduling system. The web app can be accessed at the following link: https://dhsv-test.cloud.duke.edu/"
  )
  .addHeading("Features")
  .addParagraph(
    "I worked on creating a RESTful backend API to allow users' selected courses and custom schedule features to be stored in a database for future accessing across sessions, and to retrieve a subset of all available courses based on a filtering system (filter by class code, department, start time, etc).\
    To get all the courses and their associated attributes/information into the database, I automated the process of parsing XML files containing class information and inserting/updating them into the database, which also ensured the courses were up to date.\
    Additionally, I designed the relational database table structure to hold user data and course information. I also worked on integrating the university's authentication system into our web app, and on creating a shopping cart for courses that a user has selected that would persist across a session or multiple sessions."
  )
  .addParagraph(
    "Furthermore, I consistently worked on frontend design of the website using React, and our user-friendly website design and features aimed to increase the speed and ease of building schedules. I also implemented React's Context API to share state throughout the application."
  )
  .addHeading("Technologies and Languages Used")
  .addParagraph(
    "The tech stack for the web app consisted of a React frontend, a Ruby on Rails backend framework, and a PostgreSQL database. The app is hosted on OpenShift and can be accessed using the following link: https://dhsv-test.cloud.duke.edu/. The code can be found in the following gitlab repository: https://gitlab.oit.duke.edu/codeplus2022 (Inaccessible to those outside Duke University)."
  );

const blog2 = new BlogBuilder({
  title: "AI Squat Assist Device",
  image: require('../assets/img/AISquatDevice.jpg'),
  description:
    "Currently building a device integrating hardware and software that uses ML Models to monitor a squat, count the amount of reps, determine sufficient squat depth, provide visual and audio cues, and analyze where the squat potentially went wrong.",
})
  .addHeading("About the Project")
  .addParagraph(
    "I am currently building a device integrating hardware and software that uses Machine Learning models to monitor a squat in real time, count the amount of reps, determine sufficient squat depth, provide visual and audio cues, and analyze where the squat potentially went wrong. \
    Future plans for the project involve creating an app for users to interface with the device, which would enable features such as remote turn on/off and manual selection of different types of feedback that users want the device to provide. This device ultimately started with the aim to be a replacement for the need for other people to judge proper squat depth during powerlifting meets, but it has evolved into also being an overall squat improvement tool/trainer.\
    An example use case is if someone wants to hold the bottom position of a squat for 3 seconds to increase their strength in that position. The device would promote this by providing a cue that the user should rise only after this 3 second interval, which starts once the device detects the user has entered the suitable position, has passed."
  )
  .addHeading("Features")
  .addParagraph(
    "I developed squat-state transition logic in Python to determine what part of the squat a user is in at a given time. This is based on the angles between certain limbs, where the limbs are derived from certain pose landmarks estimated by Mediapipe's Holistic Machine Learning model. This pose inference is spedup by Tensorflow working with Mediapipe to perform GPU inference.\
    Additionally, I have worked on creating other feedback and analysis systems based on Mediapipe's pose inference, such as whether or not a user has reached proper depth, if a user is learning too far forward, or how long it takes a user to ascend from the bottom position. I developed different types of feedback for the user based on the identified issues during a single rep, and there is multi-rep support as well (analysis is provided for each rep after they are all completed). I have also worked on creating real time cues, such as a green light turning on and a voice command, to notify a user\
    when they have reached depth and when they need to start ascending. This utilizes the same NVIDIA Jetson Nano microprocessor that is used to monitor the squat and perform inference."
  )
  .addHeading("Technologies and Languages Used")
  .addParagraph(
    "This hardware for this project utilizes a NVIDIA Jetson Nano microprocessor for faster GPU inference, a camera module, and other electrical components for the visual cues and displays. The software consists of Python as the main language, Mediapipe's Holsitic ML Model for pose detection, Tensorflow for additional GPU inference speedup, and OpenCV for image processing."
  );

const blog3 = new BlogBuilder({
  title: "Arduino Robot",
  image: require('../assets/img/arduinoRobot.jpeg'),
  description:
    "Built a functioning robot that could perform line following, object detection, color sensing, and communication with other robots.",
})
  .addHeading("About the Project")
  .addParagraph(
    "My classmate and I used an Arduino microcontroller and other electrical components to build a functioning robot that could perform line following, object detection, color sensing, and communication with other robots."
  )
  .addHeading("Features")
  .addParagraph(
    "I worked on both software and hardware for the robot. I implemented a feedback response system to achieve line following, whereby the readings from the QTI sensor would dictate how the servos would react to ensure the robot followed lines of varying shapes.\
    Additionally, I used an RGB sensor to perform object detection, which allowed us to identify the presence or lack of target objects. The RGB sensor was also used to perform color sensing, which enabled us to identify different type of terrain on the given course.\
    Finally, we achieved communication with other robots by integrating the Arduino XBee module to convey our robot's results from its tasks."
  )
  .addParagraph(
    "The wiring on the robot consisted of attaching the modules, adding a portable power supply, and connecting LED's, resistors, and buttons."
  )
  .addHeading("Technologies and Languages Used")
  .addParagraph(
    "The robot was built using an Arduino Mega 2560 microcontroller, servos, a BOE shield, an XBee communication module, electrical components, and various sensors including QTI and RGB sensors. The code was written in the Arduino programming language."
  );

bloglist.push(blog1);
bloglist.push(blog);

bloglist.push(blog2);
bloglist.push(blog3);


export default bloglist;
