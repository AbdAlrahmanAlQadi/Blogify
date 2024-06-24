
// Fetch Data In Blogs Page
async function blogifyApi() {
    const url = 'https://saurav.tech/NewsAPI/top-headlines/category/general/in.json';
    const blogApi = await fetch(url);
    const data = await blogApi.json();
    const articles = data.articles;
    const container = document.querySelector('.blog-container');

    container.style.display = 'grid';
    container.style.gridTemplateColumns = '1fr 1fr 1fr';
    container.style.padding = '3rem 8%';

    container.innerHTML = '';

    displayArticles(articles);

    const searchButton = document.querySelector('.go-icon');
    const searchInput = document.querySelector('.search-field input');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(query));
        displayArticles(filteredArticles);
    });

    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const query = searchInput.value.toLowerCase();
            const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(query));
            displayArticles(filteredArticles);
        }
    });
}

function displayArticles(articles) {
    const container = document.querySelector('.blog-container');
    container.innerHTML = '';
    articles.map(article => {
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');
        blogCard.innerHTML = `
            <div class="image"><img src="${article.urlToImage}" alt=""></div>
            <div class="admin-date">
                <span>
                    <i class="fas fa-user-alt"></i> ${article.source.name}
                </span>
                <span>
                    <i class="fas fa-calendar"></i> ${new Date(article.publishedAt).toLocaleDateString()}
                </span>
            </div>
            <div class="artical-text">
                <div class="title-container">
                    <h3>${article.title}</h3>
                    <div class="tooltip">${article.title}</div>
                </div>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read More</a>
            </div>`;
        container.appendChild(blogCard);
        
    });
}

blogifyApi();