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


let currentIndex = 0;

function init() {
    months.forEach((m, index) => {
        const card = document.createElement('div');
        card.className = 'month-card';
        card.style.backgroundColor = m.color;

        card.innerHTML = `
            <span class="year-label">${year}</span>
            <div class="month-name">${m.name}</div>
            <div class="calendar-grid">
                <div class="day-label">S</div><div class="day-label">M</div>
                <div class="day-label">T</div><div class="day-label">W</div>
                <div class="day-label">T</div><div class="day-label">F</div>
                <div class="day-label">S</div>
                ${generateDays(index)}
            </div>
        `;
        scrollContainer.appendChild(card);
    });
}

function generateDays(monthIdx) {
    let html = "";
    const firstDay = new Date(year, monthIdx, 1).getDay();
    const totalDays = new Date(year, monthIdx + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        html += `<div></div>`;
    }

    for (let d = 1; d <= totalDays; d++) {
        html += `<div class="day-num">${d}</div>`;
    }
    return html;
}



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

