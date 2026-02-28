const courses = [
    { code: "WDD130", credits: 2, completed: true, subject: "WDD" },
    { code: "WDD131", credits: 2, completed: true, subject: "WDD" },
    { code: "WDD231", credits: 2, completed: false, subject: "WDD" },
    { code: "CSE110", credits: 2, completed: true, subject: "CSE" }
];

const courseContainer = document.getElementById("courses");
const totalCredits = document.getElementById("totalCredits");

function displayCourses(courseList) {
    courseContainer.innerHTML = "";

    courseList.forEach(course => {
        const div = document.createElement("div");
        div.textContent = `${course.code} - ${course.credits} credits`;

        if (course.completed) {
            div.classList.add("completed");
        }

        courseContainer.appendChild(div);
    });

    const credits = courseList.reduce((sum, course) => sum + course.credits, 0);
    totalCredits.textContent = `Total Credits: ${credits}`;
}

displayCourses(courses);

document.getElementById("allBtn").addEventListener("click", () => {
    displayCourses(courses);
});

document.getElementById("wddBtn").addEventListener("click", () => {
    displayCourses(courses.filter(c => c.subject === "WDD"));
});

document.getElementById("cseBtn").addEventListener("click", () => {
    displayCourses(courses.filter(c => c.subject === "CSE"));
});