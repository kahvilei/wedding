document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.dialogue-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            
            // Show the corresponding dialogue content
            const content = button.nextElementSibling;
            const nextButton = content.nextElementSibling;

            //add in the text from the button as bold text in place of the button
            const text = button.textContent;
            const newText = document.createElement('b');
            newText.textContent = text;
            button.parentElement.replaceChild(newText, button);
            
            if (content && content.classList.contains('dialogue-content')) {
                content.style.display = 'block';
            }
            if (nextButton && nextButton.classList.contains('dialogue-button')) {
                nextButton.style.display = 'block';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownHeaders = document.querySelectorAll('.dropdown-header');
    dropdownHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = header.nextElementSibling;
            // add active class to the header
            header.classList.toggle('active');
            content.classList.toggle('active');
        });
    });
});