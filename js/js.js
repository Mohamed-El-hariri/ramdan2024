//start close nav & start arrow-up
let nav     = document.getElementsByClassName("nav")[0]; 
let closeNav= document.getElementsByClassName("close-nav")[0];
let span    = document.querySelectorAll(".close-nav span");
closeNav.addEventListener("click" ,() =>{
    closeNav.classList.toggle("active");
    nav.classList.toggle("move-nav");
})
//
const apiUrl = 'https://mp3quran.net/api/v3';
const language = 'ar';

async function getSuwar() {
  const surahList = document.getElementById('surah-list');
  const res = await fetch(`${apiUrl}/suwar?language=${language}`);
  const data = await res.json();

  data.suwar.forEach(suwar => {
    const option = document.createElement('option');
    option.value = suwar.number; 
    option.innerHTML = suwar.name;
    surahList.appendChild(option);
  });
}
