const colors = ["#00C2FF", "#0072FF", "#FF0063", "#FFBB00", "#FF5733", "#00FFAA"];

let animateCloudBallFragment = document.createDocumentFragment();

function animateCloudBall(event) {
  let cloudBall = document.createElement("div");
  cloudBall.classList = "cloud-ball";
  animateCloudBallFragment.appendChild(cloudBall);
  document.body.appendChild(animateCloudBallFragment);

  let color = colors[Math.floor(Math.random() * colors.length)];
  cloudBall.style.background = `radial-gradient(circle, ${color}, #EAF6F6)`;

  if (event.type === "mousemove") {
    cloudBall.style.left = event.clientX - 10 + "px";
    cloudBall.style.top = event.clientY - 10 + "px";
  } else if (event.type === "touchmove" || event.type === "scroll") {
    let touchX = event.clientX || event.touches[0].clientX;
    let touchY = event.clientY || event.touches[0].clientY;
    cloudBall.style.left = touchX - 10 + "px";
    cloudBall.style.top = touchY - 10 + "px";
  }

  setTimeout(() => {
    cloudBall.style.opacity = 0;
    setTimeout(() => {
      document.body.removeChild(cloudBall);
    }, 200); // Time (in milliseconds) to wait before removing the element
  }, 300); // Time (in milliseconds) to wait before making the cloud ball disappear
}

document.addEventListener("mousemove", animateCloudBall);

// Touch events for mobile devices
document.addEventListener("touchmove", animateCloudBall);

// Scroll events for mobile devices
document.addEventListener("scroll", animateCloudBall);
