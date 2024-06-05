const q = console.log;

const container = document.getElementsByClassName("main")[0];
// q(container);

async function getData(number) {
  const response = await fetch(
    `https://picsum.photos/v2/list?page=1&limit=${number}`
  );
  response.json().then((result) => {
    q(result[Math.floor(Math.random() * 100)].id);
    for (let i = 1; i <= 15; i++) {
      const newImg = document.createElement("div");
      newImg.classList.add("img");
      newImg.style = `background-image: url(https://picsum.photos/id/${
        result[Math.floor(Math.random() * 100)].id
      }/200);`;

      container.appendChild(newImg);
    }
  });
}
getData(100);

// q(container.getBoundingClientRect().width);

function loadImages(number) {
  for (let i = 1; i <= number; i++) {
    const newImg = document.createElement("div");
    newImg.src = `https://picsum.photos/id/${Math.floor(
      Math.random() * 100
    )}/200`;
    container.appendChild(newImg);
  }
}

// loadImages(15);
