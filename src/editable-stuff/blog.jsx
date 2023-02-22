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
    "Paragraph 1"
  )
  .addParagraph(
    "Paragraph 2"
  )
  .addHeading("Technologies and Languages Used")
  .addParagraph(
    "Paragraph 3"
  );

const blog1 = new BlogBuilder({
  title: "Dukehub Schedule Builder/Visualizer",
  image: require('../assets/img/scheduleBuilder.jpg'),
  description:
    "Developed a web application for Duke University to enable students to more easily build class schedules for future semesters while being able to visualize relevant data.",
})
  .addHeading("About the Project")
  .addParagraph(
    "Paragraph 1"
  )
  .addParagraph(
    "Paragraph 2"
  );

const blog2 = new BlogBuilder({
  title: "AI Squat Assist Device",
  image: require('../assets/img/AISquatDevice.jpg'),
  description:
    "Currently building a device integrating hardware and software that uses ML Models to monitor a squat, count the amount of reps, determine sufficient squat depth, provide visual and audio cues, and analyze where the squat potentially went wrong.",
})
  .addHeading("About the Project")
  .addParagraph(
    "Paragraph 1"
  )
  .addParagraph(
    "Paragraph 2"
  );

const blog3 = new BlogBuilder({
  title: "Arduino Robot",
  image: require('../assets/img/arduinoRobot.jpeg'),
  description:
    "Built a functioning robot that could perform line following, object detection, color sensing, and communication with other robots.",
})
  .addHeading("About the Project")
  .addParagraph(
    "Paragraph 1"
  )
  .addParagraph(
    "Paragraph 2"
  );

bloglist.push(blog1);
bloglist.push(blog);

bloglist.push(blog2);
bloglist.push(blog3);


export default bloglist;
