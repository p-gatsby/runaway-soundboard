function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(
    navigator.userAgent
  );
}
let isMobileDevice = isMobile();

let samples = [
  "piano1.mp3",
  "piano2.mp3",
  "piano3.mp3",
  "piano4.mp3",
  "piano5.mp3",
  "piano6.mp3",
  "piano7.mp3",
  "piano8.mp3",
  "Beat.mp3",
  "BeautifulStars.mp3",
  "Hey!.mp3",
  "Instrumental-loop.c.mp3",
  "LadiesNGentlemen.mp3",
  "LookAtCha.mp3",
];

samples = samples.map((sample) => {
  let s = document.createElement("audio");
  s.src = `./assets/samples/${sample}`;
  s.preload = "auto";
  return s;
});

let boxes = Array.from(document.getElementsByClassName("box"));
let info = document.getElementsByClassName("info")[0];
let isOverlay = false;

function play(key) {
  if (key == "a" || key == "A") {
    boxes[0].classList.add("active");
    samples[0].load();
    samples[0].play();
    setTimeout(() => {
      boxes[0].classList.remove("active");
    }, 200);
  }
  if (key == "s" || key == "S") {
    boxes[1].classList.add("active");
    samples[1].load();
    samples[1].play();
    setTimeout(() => {
      boxes[1].classList.remove("active");
    }, 200);
  }
  if (key == "d" || key == "D") {
    boxes[2].classList.add("active");
    samples[2].load();
    samples[2].play();
    setTimeout(() => {
      boxes[2].classList.remove("active");
    }, 200);
  }
  if (key == "f" || key == "A") {
    boxes[3].classList.add("active");
    samples[3].load();
    samples[3].play();
    setTimeout(() => {
      boxes[3].classList.remove("active");
    }, 200);
  }
  if (key == "g" || key == "G") {
    boxes[4].classList.add("active");
    samples[4].load();
    samples[4].play();
    setTimeout(() => {
      boxes[4].classList.remove("active");
    }, 200);
  }
  if (key == "h" || key == "H") {
    boxes[5].classList.add("active");
    samples[5].load();
    samples[5].play();
    setTimeout(() => {
      boxes[5].classList.remove("active");
    }, 200);
  }
  if (key == "j" || key == "J") {
    boxes[6].classList.add("active");
    samples[6].load();
    samples[6].play();
    setTimeout(() => {
      boxes[6].classList.remove("active");
    }, 200);
  }
  if (key == "k" || key == "K") {
    boxes[7].classList.add("active");
    samples[7].load();
    samples[7].play();
    setTimeout(() => {
      boxes[7].classList.remove("active");
    }, 200);
  }
  if (key == "z" || key == "Z") {
    boxes[8].classList.add("active");
    samples[8].load();
    samples[8].play();
    setTimeout(() => {
      boxes[8].classList.remove("active");
    }, 200);
  }
  if (key == "x" || key == "X") {
    boxes[9].classList.add("active");
    samples[9].load();
    samples[9].play();
    setTimeout(() => {
      boxes[9].classList.remove("active");
    }, 200);
  }
  if (key == "c" || key == "C") {
    boxes[10].classList.add("active");
    samples[10].load();
    samples[10].play();
    setTimeout(() => {
      boxes[10].classList.remove("active");
    }, 200);
  }
  if (key == "v" || key == "V") {
    boxes[11].classList.add("active");
    samples[11].loop = true;
    samples[11].load();
    samples[11].play();
    setTimeout(() => {
      boxes[11].classList.remove("active");
    }, 200);
  }
  if (key == "b" || key == "B") {
    boxes[12].classList.add("active");
    samples[12].load();
    samples[12].play();
    setTimeout(() => {
      boxes[12].classList.remove("active");
    }, 200);
  }
  if (key == "n" || key == "N") {
    boxes[13].classList.add("active");
    samples[13].load();
    samples[13].play();
    setTimeout(() => {
      boxes[13].classList.remove("active");
    }, 200);
  }
  if (key == "m" || key == "M") {
    boxes[14].classList.add("active");
    samples.forEach((s) => {
      s.pause();
    });
    setTimeout(() => {
      boxes[14].classList.remove("active");
    }, 200);
  }
}

document.addEventListener("keyup", (e) => {
  if (e.key == "Escape") {
    info.classList.remove("active");
    if (isOverlay) {
      isOverlay = false;
    }
  }
  if (e.key == "?") {
    info.classList.toggle("active");
    isOverlay = !isOverlay;
  }
  if (!isOverlay) {
    play(e.key);
  }
});

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    let key = e.target.closest(".box").getAttribute("data-key");
    if (key == "?") {
      info.classList.add("active");
      isOverlay = true;
    }
    play(key);
  });
});

let yearText = document.getElementById("year");
let year = new Date().getFullYear();

yearText.innerText = year;

if (isMobileDevice) {
  info.addEventListener("click", (e) => {
    info.classList.remove("active");
    isOverlay = false;
  });
}
