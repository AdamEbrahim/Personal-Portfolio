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

  const blog4 = new BlogBuilder({
    title: "Ultrasound Transmitter Device",
    image: require('../assets/img/UltrasoundTransmitter.jpg'),
    description:
      "Created a standalone embedded systems device with a easy-to-use UI that generates ultrasound waves with the desired parameters to drive transducers.",
  })
    .addHeading("About the Project")
    .addParagraph(
      "During my internship at a startup in Durham, NC, I led the development of an embedded systems device using Arduino microcontrollers, PCBs, and other electrical components/chips to generate ultrasound waves capable of driving transducers.\
       This involved writing a comprehensive Arduino software to provide an easy-to-use UI for users to program the device to output ultrasound waves with their desired parameters."
    )
    .addHeading("Features")
    .addParagraph(
      "For the sake of confidentiality, I will not divulge in-depth information about the features of the device. Different aspects of the device that I was able to work on include: soldering and wiring on PCBs, working with and building off circuit diagrams/schematics, iteration upon previous designs, integrating different chips/electrical components into a holistic design, creating an API to program registers and SRAM of the ultrasound board, and creating a UI for users to interact with the device (either physical through an OLED screen and knob or over serial port). Different protocols I worked with in Arduino include SPI and I2C."
    )
    .addHeading("Technologies and Languages Used")
    .addParagraph(
      "The hardware for the device included a designed PCB, an ultrasound board with an SPI-programmable chip, Adafruit Feather RP2040 microcontrollers, DACs, clock generators, DC converters/amplifiers, level shifters, and other electrical components. The code for the UI and to program the ultrasound board was written in the Arduino programming language."
    );

    const blog5 = new BlogBuilder({
      title: "Computer Vision Droplet Characterization",
      image: require('../assets/img/DropletImage.png'),
      description:
        "Created a custom object tracking module in Python/OpenCV that uses image preprocessing techniques and interpolation to detect, track, and take measurements of in-focus aerosol droplets from videos without significant slowdown.",
    })
      .addHeading("About the Project")
      .addParagraph(
        "During my internship at a startup in Durham, NC, I	created a custom object tracking module in Python with OpenCV to perform droplet characterization on videos of aerosol droplets flowing across the screen. The software uses image preprocessing techniques and mathematical interpolation to detect, track, and take measurements of aerosol droplets that are in-focus, and the lightweight nature of the module results in minimal slowdown when processing the video.\
        This software was created to solve the need for a faster, automatic approach to measuring the diameter and velocity of aerosol droplets. Previous methods of obtaining these useful metrics involved the time-intensive process of manually cycling through videos, taking screenshots of frames where in-focus droplets were present, using an external software to measure pixel values, and then manually calculating the diameter and velocity through some conversion factor. This software, however, does this all automatically along with introducing features not able to be achieved when manually taking measurements. An example of the software in action is shown below."
      )
      .addVideo("/dropSoftwareVideo.mp4")
      .addHeading("Features")
      .addParagraph(
        "I created a user-input based initialization system that allows the user to customize the settings of the droplet tracking software prior to processing the video. During this stage, the user will provide what is known as a 'calibration droplet' (either in the form of a video or an image), which \
        is a droplet that they already have measured the diameter of. Because image preprocessing techniques to automatically isolate and detect droplets need to be unique to the type of background and the types of external noise present in a frame, I implemented a feedback loop based system to allow the user to change key preprocessing parameters (level of gaussian blur, thresholding values, etc.) while being able to see how it changes what gets detected in a frame. This allows users to continue changing parameters for the calibration image preprocessing until they find that the correct droplet is able to be detected by the software. \
        One issue that came up is that oftentimes the droplet in the calibration image would be slightly out of frame due to camera constraints. Thus, to solve this, I implemented an alternative method of getting calibration measurements specifically designed for out-of-frame droplets that used contour tracking and detection. \
        Once the correct calibration droplet is detected, the user provides its diameter and the software resizes the image to ensure measurements are consistent across the calibration image and the video to be processed, and then it calculates a conversion factor between pixels on the frame and meaningful units (typically on the scale of micrometers)."
      )
      .addParagraph(
        "The user then has the option to change preprocessing parameters for the video of droplets that they want the software to analyze. This allows for, again, videos with different backgrounds or levels of noise to be properly analyzed. Finally, the user provides the frames-per-second of the video of droplets flowing, which typically is anywhere from 1000-10000 due to the high FPS required for the camera to keep up with the speed of aerosol droplets. \
        Then, the software processes the video. It detects only the in-focus droplets in each frame of the video using a simple blob detector (or using contour-based measurements for droplets that are a bit out of frame), uses the calculated conversion factor to obtain each droplets diameter, and uses the object tracker I designed to obtain a velocity calculation as the droplet flows across the screen. To track the droplets across frames, I found the tracking modules on OpenCV to cause to much slowdown on the video processing. Instead, I created my own object tracking class to track a single droplet across frames since I could make it much more lightweight. To do this, I utilized concepts such as mathematical interpolation to track a droplets path and \
        proximity measurements to assign each droplet detected in subsequent frames to a uniquely identified droplet in a previous frame, all while accounting for droplets entering and exiting the frame as they flow."
      )
      .addParagraph(
        "One more thing to address is the software's method of distinguishing between in-focus and out-of-focus droplets that appear in a frame of the video. It was necessary that the calculations only be made for in-focus droplets since those are the ones that flowed at the correct distance from the camera for the measurements obtained through the calibration image to be accurate.\
        To do this, the image processing that gets done on each frame is able to eliminate the blur around droplets and isolate the dark centers. The droplets that are in-focus have less blurred edges and therefore once the blur is removed, their dark centers remain circular. Out-of-focus droplets on the other hand lose their circularity and only an elliptical section is left. So, these circularity and darkness parameters (a result of changing the binary-thresholding values) are able to detect in-focus droplets. \
        These parameters are also tunable by the user if they find that different ones are needed for the particular video they are trying to process. The high customizability of the software allows for it to be used for a much larger array of videos."
      )
      .addHeading("Technologies and Languages Used")
      .addParagraph(
        "The code was written in Python and used the OpenCV library."
      );

bloglist.push(blog4);
bloglist.push(blog5)
bloglist.push(blog2);
bloglist.push(blog1);
bloglist.push(blog);
bloglist.push(blog3);


export default bloglist;
