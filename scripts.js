document.addEventListener('DOMContentLoaded', function() {
    // Get the navigation links
    var homeLink = document.getElementById('homeLink');
    var vacanciesLink = document.getElementById('vacanciesLink');
    var candidatesLink = document.getElementById('candidatesLink');

    // Get the sections
    var homeSection = document.getElementById('home');
    var vacanciesSection = document.getElementById('vacancies');
    var candidatesSection = document.getElementById('candidates');

    // Function to hide all sections
    function hideAllSections() {
        homeSection.style.display = 'none';
        vacanciesSection.style.display = 'none';
        candidatesSection.style.display = 'none';
    }

    // Show the home section and hide others when the home link is clicked
    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        hideAllSections();
        homeSection.style.display = 'block';
    });

    // Show the vacancies section and hide others when the vacancies link is clicked
    vacanciesLink.addEventListener('click', function(e) {
        e.preventDefault();
        hideAllSections();
        vacanciesSection.style.display = 'block';
    });

    // Show the candidates section and hide others when the candidates link is clicked
    candidatesLink.addEventListener('click', function(e) {
        e.preventDefault();
        hideAllSections();
        candidatesSection.style.display = 'block';
    });
});
// Get the forms and the lists
var vacancyForm = document.getElementById('vacancyForm');
var candidateForm = document.getElementById('candidateForm');
var vacanciesList = document.getElementById('vacanciesList');
var candidatesList = document.getElementById('candidatesList');



// Get the buttons
var addVacancyButton = document.getElementById('addVacancyButton');
var addCandidateButton = document.getElementById('addCandidateButton');

// Show the vacancy form when the "Добавить вакансию" button is clicked
addVacancyButton.addEventListener('click', function(e) {
    e.preventDefault();
    vacancyForm.style.display = 'block';
});

// Show the candidate form when the "Добавить кандидата" button is clicked
addCandidateButton.addEventListener('click', function(e) {
    e.preventDefault();
    candidateForm.style.display = 'block';
});
// Get the buttons
var sortVacanciesButton = document.getElementById('sortVacanciesButton');
var sortCandidatesButton = document.getElementById('sortCandidatesButton');

// Sort the vacancies list when the "Сортировать вакансии" button is clicked
sortVacanciesButton.addEventListener('click', function(e) {
    e.preventDefault();
    var vacancies = Array.from(vacanciesList.getElementsByTagName('li'));
    vacancies.sort(function(a, b) {
        return a.textContent.localeCompare(b.textContent);
    });
    vacancies.forEach(function(vacancy) {
        vacanciesList.appendChild(vacancy);
    });
});

// Sort the candidates list when the "Сортировать кандидатов" button is clicked
sortCandidatesButton.addEventListener('click', function(e) {
    e.preventDefault();
    var candidates = Array.from(candidatesList.getElementsByTagName('li'));
    candidates.sort(function(a, b) {
        return a.textContent.localeCompare(b.textContent);
    });
    candidates.forEach(function(candidate) {
        candidatesList.appendChild(candidate);
    });
});
// Get the count elements
var vacancyCount = document.getElementById('vacancyCount').querySelector('span');
var candidateCount = document.getElementById('candidateCount').querySelector('span');

// Handle the vacancy form submission
vacancyForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var vacancyTitle = document.getElementById('vacancyTitle').value;
    var vacancyDescription = document.getElementById('vacancyDescription').value;
    vacanciesList.innerHTML += '<li>' + vacancyTitle + ': ' + vacancyDescription + '</li>';
    vacancyForm.reset();
    vacancyCount.textContent = vacanciesList.getElementsByTagName('li').length;
});

// Handle the candidate form submission
candidateForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var candidateName = document.getElementById('candidateName').value;
    var candidateSkills = document.getElementById('candidateSkills').value;
    candidatesList.innerHTML += '<li>' + candidateName + ': ' + candidateSkills + '</li>';
    candidateForm.reset();
    candidateCount.textContent = candidatesList.getElementsByTagName('li').length;
});

// Set the initial counts
vacancyCount.textContent = vacanciesList.getElementsByTagName('li').length;
candidateCount.textContent = candidatesList.getElementsByTagName('li').length;

