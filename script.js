document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to the "Explore More" button
    const exploreButton = document.querySelector('.cta button');
    exploreButton.addEventListener('click', () => {
        alert('Explore More button clicked! Redirecting to more categories.');
        // Simulate navigation to another section or page
        window.location.href = '#categories';
    });

    // Add hover effect for category cards
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('mouseenter', () => {
            category.style.transform = 'scale(1.05)';
            category.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.2)';
        });
        category.addEventListener('mouseleave', () => {
            category.style.transform = 'scale(1)';
            category.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
});