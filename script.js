let currentPage = 1;

function nextPage(){
  const pages = 8;
  if(currentPage < pages){
    document.getElementById(`page${currentPage}`).classList.remove('active');
    currentPage++;
    const nextPageEl = document.getElementById(`page${currentPage}`);
    nextPageEl.classList.add('active');

    if(currentPage === pages){
      setTimeout(spawnHearts, 400);
    }
  }
}

function spawnHearts(){
  for(let i = 0; i < 40; i++){
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.innerHTML = "⭐";
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = (20 + Math.random() * 35) + "px";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }, i * 80);
  }
}

// Continuous floating icons in background
setInterval(() => {
  const icons = ["⭐", "💙", "🔥"];
  const icon = icons[Math.floor(Math.random() * icons.length)];
  const heart = document.createElement("div");
  heart.innerHTML = icon;
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (15 + Math.random() * 20) + "px";
  heart.style.opacity = "0.5";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 600);
