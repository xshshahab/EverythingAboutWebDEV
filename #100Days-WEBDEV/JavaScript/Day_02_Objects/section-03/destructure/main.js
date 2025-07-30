const course = {
  courseName: "Master JavaScript",
  coursePrice: "$999",
  courseDescription: "Mastering JavaScript in Hindi",
};

const { courseName, coursePrice, courseDescription } = course;

console.log("CourseName: ", courseName);
console.log("coursePrice: ", coursePrice);
console.log("CourseDescription: ", courseDescription);

const { courseDescription: courseDesc } = course;

console.log("Short Course Desc : ", courseDesc);
