document.addEventListener('DOMContentLoaded', function() {
    const filterInput = document.getElementById('filterInput');
    const projectList = document.getElementById('projectList');

    filterInput.addEventListener('input', function() {
        const filterValue = filterInput.value.toLowerCase();
        const projects = projectList.getElementsByTagName('li');
        
        Array.from(projects).forEach(function(project) {
            const title = project.textContent.toLowerCase();
            if (title.indexOf(filterValue) !== -1) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});
