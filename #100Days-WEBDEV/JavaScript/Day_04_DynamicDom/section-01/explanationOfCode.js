// 🌟 Create a new <h1> element
let h1 = document.createElement("h1");

// ✍️ Set the text inside the <h1> element
h1.textContent = "Hey Js Developer!";

// 📌 Append the <h1> to the <body> (adds it at the end of <body>)
// NOTE: If this is done after the <script> tag in the HTML,
//       the <h1> will appear below the script in the DOM
document.querySelector("body").append(h1);

// 🚀 Prepend the <h1> to the <body> (adds it at the beginning of <body>)
//       This moves the <h1> to the top, right after the opening <body> tag
document.body.prepend(h1);

// ⚠️ Since `h1` is a reference to a single DOM element,
//     it will be moved—not duplicated—when prepended.
//     So only the last action (prepend) determines its position.
