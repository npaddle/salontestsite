
document.querySelectorAll('.dropdown-toggle').forEach((button) => {
          button.addEventListener('click', () => {
            const category = button.parentElement;
            category.classList.toggle('active');
          });
        });
        