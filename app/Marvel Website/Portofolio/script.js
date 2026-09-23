document.addEventListener('DOMContentLoaded', () => {
    // Set Tahun Dinamis
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    console.log("Monochrome portfolio loaded successfully.");
});