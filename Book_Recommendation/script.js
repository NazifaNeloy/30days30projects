const library = [
    { 
        id: 1, 
        title: "The Girls Who Disappeared", 
        author: "Claire Douglas", 
        link: "https://www.penguin.co.uk/books/446655/the-girls-who-disappeared-by-douglas-claire/9781405951180",
        image: "./books/thegirlswhodisappeared .jpg",
        innerImage: "", 
        tags: ["Mystery", "Dual Timelines", "Thriller"], 
        genre: "Thriller",
        description: "In a rural town, three girls drive into the woods. Only one returns. Twenty years later, a journalist tries to uncover the truth."
    }, { 
        id: 2, 
        title: "The Love Hypothesis", 
        author: "Ali Hazelwood", 
        link: "https://www.penguinrandomhouse.com/books/673978/the-love-hypothesis-by-ali-hazelwood/",
        image: "./books/thelovehypothesis.jpg",
        innerImage: "",
        tags: ["Fake Dating", "STEM", "Romance"], 
        genre: "Romance",
        description: "A fake dating experiment between a PhD student and a professor."
    },
    
    { 
        id: 3, 
        title: "Things We Never Got Over", 
        author: "Lucy Score", 
        link: "https://www.barnesandnoble.com/w/things-we-never-got-over-lucy-score/1139747850",
        image: "./books/thingswenevergotover.jpg",
        innerImage: "",
        tags: ["Small Town", "Grumpy x Sunshine", "Romance"], 
        genre: "Romance",
        description: "A runaway bride ends up in a small town with a grumpy barber."
    },
    { 
        id: 4, 
        title: "I Knew You Were Trouble", 
        author: "Alicia Garnier", 
        link: "https://www.goodreads.com/",
        image: "./books/iknewuweretrouble.jpg",
        innerImage: "",
        tags: ["Enemies to Lovers", "Drama", "Romance"], 
        genre: "Romance",
        description: "A dramatic romance filled with tension and attraction."
    },
    { 
        id: 5, 
        title: "The Love Hypothesis", 
        author: "Ali Hazelwood", 
        link: "https://www.penguinrandomhouse.com/books/673978/the-love-hypothesis-by-ali-hazelwood/",
        image: "./books/thelovehypothesis.jpg",
        innerImage: "",
        tags: ["Fake Dating", "STEM", "Romance"], 
        genre: "Romance",
        description: "A fake dating experiment between a PhD student and a professor."
    },
    { 
        id: 6, 
        title: "Story of My Life", 
        author: "Lucy Score", 
        link: "https://www.barnesandnoble.com/w/story-of-my-life-lucy-score/1143431343",
        image: "./books/storyofmylife.jpg",
        innerImage: "",
        tags: ["Small Town", "Second Chance", "Romance"], 
        genre: "Romance",
        description: "A small-town romance where old flames reconnect and must face their past."
    },
    { 
        id: 7, 
        title: "Icebreaker", 
        author: "Hannah Grace", 
        link: "https://www.simonandschuster.com/books/Icebreaker/Hannah-Grace/9781668026038",
        image: "./books/icebreaker.jpg",
        innerImage: "",
        tags: ["Hockey", "Sports Romance", "Grumpy x Sunshine"], 
        genre: "Sports",
        description: "A figure skater and hockey captain are forced to share a rink, and sparks fly."
    },
    { 
        id: 8, 
        title: "Love on the Brain", 
        author: "Ali Hazelwood", 
        link: "https://www.penguinrandomhouse.com/books/679583/love-on-the-brain-by-ali-hazelwood/",
        image: "./books/loveonthebrain.jpg",
        innerImage: "",
        tags: ["STEM", "Enemies to Lovers", "Romance"], 
        genre: "Romance",
        description: "A neuroscientist forced to work with her rival on a NASA project."
    }
];const grid = document.getElementById('bookGrid');
const searchInput = document.getElementById('searchInput');


function renderBooks(data) {
    grid.innerHTML = "";

    if (data.length === 0) {
        grid.innerHTML = "<h3 style='color:#999; text-align:center;'>No books found...</h3>";
        return;
    }

    data.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';

        const imgSrc = book.image || "./books/default.jpg";

        card.innerHTML = `
            <img src="${imgSrc}" class="book-cover" alt="${book.title}">
            <div class="book-title">${book.title}</div>
            <div class="book-author">${book.author}</div>
        `;

        card.addEventListener("click", () => showDetails(book));

        grid.appendChild(card);
    });
}

function showDetails(book) {
    document.getElementById('detailTitle').innerText = book.title;
    document.getElementById('detailDesc').innerText = book.description;

    const tagBox = document.getElementById('detailTags');
    tagBox.innerHTML = "";
    book.tags.forEach(tag => {
        const rotation = Math.floor(Math.random() * 10) - 5;
        tagBox.innerHTML += 
            `<span class="handwritten-tag" style="transform: rotate(${rotation}deg)">#${tag}</span>`;
    });

    const linkBtn = document.getElementById('detailLink');
    linkBtn.href = book.link;
    linkBtn.style.display = "inline-block";

    const insideImg = document.getElementById('innerImageDisplay');
    insideImg.src = book.innerImage || 
        "https://via.placeholder.com/400x400?text=Add+Inside+Look";


    document.getElementById('detailModal').style.display = "flex";
}


function closeModal() {
    document.getElementById('detailModal').style.display = "none";
}


searchInput.addEventListener('keyup', (e) => {
    const val = e.target.value.toLowerCase();

    const filtered = library.filter(b => 
        b.title.toLowerCase().includes(val) || 
        b.author.toLowerCase().includes(val) ||
        b.tags.some(t => t.toLowerCase().includes(val))
    );

    renderBooks(filtered);
});

function filterByTag(tag, event) {
    document.querySelectorAll('.cat-pill')
        .forEach(b => b.classList.remove('active'));

    if (event) event.target.classList.add('active');

    if (tag === 'All') {
        renderBooks(library);
    } else {
        renderBooks(library.filter(b => b.genre === tag));
    }
}
renderBooks(library);