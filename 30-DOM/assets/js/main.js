
    var playList = [
      { author: "LED ZEPPELIN", song:"STAIRWAY TO HEAVEN"},
      { author: "QUEEN", song:"BOHEMIAN RHAPSODY"},
      { author: "LYNYRD SKYNYRD", song:"FREE BIRD"},
      { author: "DEEP PURPLE", song:"SMOKE ON THE WATER"},
      { author: "JIMI HENDRIX", song:"ALL ALONG THE WATCHTOWER"},
      { author: "AC/DC", song:"BACK IN BLACK"},
      { author: "QUEEN", song:"WE WILL ROCK YOU"},
      { author: "METALLICA", song:"ENTER SANDMAN"}
    ];

    let list = document.getElementById("playlist");

    playList.forEach(track => {
      let li = document.createElement("li");
      li.textContent = track.author + " - " + track.song;
      list.appendChild(li);
    });
  

  
    const modal = document.getElementById("myModal");
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");

    // Відкрити модальне вікно
    openBtn.onclick = () => modal.classList.add("show");

    // Закрити модальне вікно
    closeBtn.onclick = () => modal.classList.remove("show");

    // Закрити при кліку поза вікном
    window.onclick = (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    };
  
    const lights = document.querySelectorAll('.light');
    let current = 0;

    document.getElementById('next').addEventListener('click', () => {
      // вимкнути всі
      lights.forEach(light => light.classList.remove('active'));

      // наступний колір
      current = (current + 1) % lights.length;

      // увімкнути поточний
      lights[current].classList.add('active');
    });