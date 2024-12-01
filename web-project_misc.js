const contributions = document.querySelectorAll('.contrubution'); 

contributions.forEach((contribution) => {
    contribution.addEventListener('click', () => {
        alert('Contribution details for: ${contribution.parentElement.previousElementSibling.textContent');
    });
});