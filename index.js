document.addEventListener('click', event => {
    if (event.target && event.target.id === "btn") { functioncalc() }
})

function functioncalc() {
    const countOfCourses = document.getElementById('countOfCourses').value;
    const avgStudentsPerCourse = document.getElementById('avgStudentsPerCourse').value;
    const totalStudents = countOfCourses*avgStudentsPerCourse;
    document.getElementById('answer').value = totalStudents;
}