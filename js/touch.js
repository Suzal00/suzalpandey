const colors = ["#00C2FF", "#0072FF", "#FF0063", "#FFBB00", "#FF5733", "#00FFAA"];

let animateCloudBallFragment = document.createDocumentFragment();

function animateCloudBall(event) {
  if (event.pointerType === "touch") {
    event.preventDefault(); // Prevent scrolling interference on touch devices
  }

  let cloudBall = document.createElement("div");
  cloudBall.classList = "cloud-ball";
  animateCloudBallFragment.appendChild(cloudBall);
  document.body.appendChild(animateCloudBallFragment);

  let color = colors[Math.floor(Math.random() * colors.length)];
  cloudBall.style.background = `radial-gradient(circle, ${color}, #EAF6F6)`;

  cloudBall.style.left = event.clientX - 10 + "px";
  cloudBall.style.top = event.clientY - 10 + "px";

  setTimeout(() => {
    cloudBall.style.opacity = 0;
    setTimeout(() => {
      document.body.removeChild(cloudBall);
    }, 200); // Time (in milliseconds) to wait before removing the element
  }, 300); // Time (in milliseconds) to wait before making the cloud ball disappear
}

document.addEventListener("pointermove", animateCloudBall);
