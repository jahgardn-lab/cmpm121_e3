const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute("aria-label", "A lesbian face with a beautiful nose");

const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
const gradient = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "linearGradient",
);
gradient.setAttribute("id", "face-gradient");
gradient.setAttribute("x1", "00%");
gradient.setAttribute("y1", "0%");
gradient.setAttribute("x2", "100%");
gradient.setAttribute("y2", "100%");

const firstStop = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "stop",
);
firstStop.setAttribute("offset", "0%");
firstStop.setAttribute("stop-color", "#e05017");
gradient.append(firstStop);

const secondStop = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "stop",
);
secondStop.setAttribute("offset", "25%");
secondStop.setAttribute("stop-color", "#ef5180");
gradient.append(secondStop);

const thirdStop = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "stop",
);
thirdStop.setAttribute("offset", "50%");
thirdStop.setAttribute("stop-color", "#faf4f7");
gradient.append(thirdStop);

const fourthStop = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "stop",
);
fourthStop.setAttribute("offset", "100%");
fourthStop.setAttribute("stop-color", "#c80972");
gradient.append(fourthStop);

defs.append(gradient);
face.append(defs);

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "url(#face-gradient");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

const leftEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
leftEye.setAttribute("cx", "72");
leftEye.setAttribute("cy", "82");
leftEye.setAttribute("rx", "6");
leftEye.setAttribute("ry", "9");
leftEye.setAttribute("fill", "#302c29");
face.append(leftEye);

const rightEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
rightEye.setAttribute("cx", "128");
rightEye.setAttribute("cy", "82");
rightEye.setAttribute("rx", "6");
rightEye.setAttribute("ry", "9");
rightEye.setAttribute("fill", "#302c29");
face.append(rightEye);

const spiralNose = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path",
);
spiralNose.setAttribute("d", "M 130 106 Q 65 105 110 115");
spiralNose.setAttribute("fill", "none");
spiralNose.setAttribute("stroke", "#d66b0d");
spiralNose.setAttribute("stroke-width", "4");
face.append(spiralNose);

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "line");
mouth.setAttribute("x1", "75");
mouth.setAttribute("y1", "137");
mouth.setAttribute("x2", "125");
mouth.setAttribute("y2", "137");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
