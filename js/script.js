
// NavBar code
const nav = document.querySelector(".navBar");
window.onscroll = function () {
  if (window.scrollY >= 200) {
      nav.style.cssText = "box-shadow: 0px 0px 10px rgba(0, 0, 0, 100)" ;
      nav.style.maxHeight = "7rem";
      nav.style.width = "100%";
  } else {
      nav.style.cssText = "box-shadow: 0px 0px 0px #fff";
  }
}


// Date Code
window.onload = () => {
    const dateSpan = document.getElementById('date-span');
    const currentDate = new Date();

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    dateSpan.textContent = `${month} ${day} ${year}`;
};


  // Fetch data from API
async function blogifyApi() {
  const url = 'https://saurav.tech/NewsAPI/top-headlines/category/general/in.json';
    const blogApi = await fetch(url);
    const data = await blogApi.json();
    const articles = data.articles.slice(0, 6);
    const container = document.querySelector('.blog-container');

    container.innerHTML = '';

    articles.map(article => {
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');
        blogCard.innerHTML = 
        `<div class="image"><img src="${article.urlToImage}" alt=""></div>       
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
}); }
blogifyApi();


// Contact Local Storage
let name = document.querySelector(".form-box #name");
let email = document.querySelector(".form-box #email");
let subject = document.querySelector(".form-box #subject");
let message = document.querySelector(".form-box #message");

function loadFormData() {
  if (localStorage.getItem("name")) {
    name.value = localStorage.getItem("name");
  }
  if (localStorage.getItem("email")) {
    email.value = localStorage.getItem("email");
  }
  if (localStorage.getItem("subject")) {
    subject.value = localStorage.getItem("subject");
  }
  if (localStorage.getItem("message")) {
    message.value = localStorage.getItem("message");
  }
}

// Contact Us Alert
function submitBtn() {
    if (name.value && email.value && subject.value && message.value !== "") {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: `Thanks ${name.value} , We will send you`,
        showConfirmButton: false,
        timer: 2500,
      });
  
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
      localStorage.setItem("subject", subject.value);
      localStorage.setItem("message", message.value);
  
      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
    } else {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: `Please fill all empty fields`,
        showConfirmButton: false,
        timer: 2500,
      });
    }
  }

  
  // Back To Top button
const backToTop = document.querySelector(".topBtn");
backToTop.onclick = () => {
    window.scrollTo(
        { top: 0, behavior: "smooth" }
    );
};


// NavBar Menu
const sideMenu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navlinks');
navbar.setAttribute('id', 'navMenu');
sideMenu.onclick = () => {
  sideMenu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}
    


  
