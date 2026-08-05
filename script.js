const menuButton = document.getElementById('menu_button');
const sideMenu = document.getElementById('side_menu');

const kakudai = document.getElementById("kakudai");
const kakudaiImg = document.getElementById("kakudai-img");
const kakudaiTitle = document.getElementById("kakudai-title");
const kakudaiDesc = document.getElementById("kakudai-desc");
const kakudaiTech = document.getElementById("kakudai-tech");
const closeBtn = document.querySelector(".close");

document.querySelectorAll('.sakuhin').forEach(img => {
  img.addEventListener('click', function (e) {
    e.stopPropagation();
    kakudai.classList.add('open');
    kakudaiImg.src = this.src;
    kakudaiTitle.textContent = "";
    kakudaiDesc.textContent = "";
    kakudaiTech.textContent = "";
  });
});

document.querySelectorAll('.sologo').forEach(img => {
  img.addEventListener('click', function (e) {
    e.stopPropagation();
    kakudai.classList.add('open');
    kakudaiImg.src = this.src;
    kakudaiTitle.textContent = "";
    kakudaiDesc.textContent = "";
    kakudaiTech.textContent = "";
  });
});

document.querySelectorAll('.work-item').forEach(item => {
  item.addEventListener('click', function (e) {
    e.stopPropagation();
    kakudai.classList.add('open');
    kakudaiImg.src = this.dataset.full;
    kakudaiTitle.textContent = this.dataset.title;
    kakudaiDesc.textContent = this.dataset.desc;
    kakudaiTech.textContent = "使用技術: " + this.dataset.tech;
  });
});

closeBtn.addEventListener('click', function () {
  kakudai.classList.remove('open');
});

kakudai.addEventListener('click', function (e) {
  if (e.target === kakudai) {
    kakudai.classList.remove('open');
  }
});

function toggleMenu() {
  sideMenu.classList.toggle('open');
}

function closeMenu(e) {
  if (!sideMenu.contains(e.target) && !menuButton.contains(e.target)) {
    sideMenu.classList.remove('open');
  }
}

menuButton.addEventListener('click', toggleMenu);
document.addEventListener('click', closeMenu);