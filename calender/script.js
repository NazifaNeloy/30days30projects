const scrollContainer = document.getElementById('scrollContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const monthIndicator = document.getElementById('monthIndicator');

const year = 2026;
const months = [
    { name: "January", color: "#FFD1DC" }, { name: "February", color: "#FFECB3" },
    { name: "March", color: "#B2F2BB" }, { name: "April", color: "#A5D8FF" },
    { name: "May", color: "#D0EBFF" }, { name: "June", color: "#E5DBFF" },
    { name: "July", color: "#FFD8A8" }, { name: "August", color: "#FFF9DB" },
    { name: "September", color: "#F3D9FA" }, { name: "October", color: "#C2FBFF" },
    { name: "November", color: "#D3F9D8" }, { name: "December", color: "#FFDEEB" }
];

nextBtn.addEventListener('click', () => {
    if (currentIndex < 11) {
        currentIndex++;
        scrollContainer.scrollTo({
            left: currentIndex * scrollContainer.offsetWidth,
            behavior: 'smooth'
        });
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        scrollContainer.scrollTo({
            left: currentIndex * scrollContainer.offsetWidth,
            behavior: 'smooth'
        });
    }
});