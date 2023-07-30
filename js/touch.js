const colors = ["#00C2FF", "#0072FF", "#FF0063", "#FFBB00", "#FF5733", "#00FFAA"];

let animateCloudBallFragment = document.createDocumentFragment();
let isScrolling = false;

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
  } else if (event.type === "touchmove") {
    cloudBall.style.left = event.touches[0].clientX - 10 + "px";
    cloudBall.style.top = event.touches[0].clientY - 10 + "px";
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
document.addEventListener("touchmove", (event) => {
  animateCloudBall(event);
});

// Scroll events for mobile devices
window.addEventListener("scroll", () => {
  isScrolling = true;
  setTimeout(() => {
    isScrolling = false;
  }, 100); // Adjust this delay as needed based on your preference
});
