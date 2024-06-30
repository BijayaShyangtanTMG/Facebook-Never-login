function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function(e) {
  moveRandomEl(e.target);
});

function someFunction() {
    console.log("This is a protected function.");
}

// Obfuscated code
var _0x2158=["\x54\x68\x69\x73\x20\x69\x73\x20\x61\x20\x70\x72\x6F\x74\x65\x63\x74\x65\x64\x20\x66\x75\x6E\x63\x74\x69\x6F\x6E\x2E"];function someFunction(){console.log(_0x2158[0])};

