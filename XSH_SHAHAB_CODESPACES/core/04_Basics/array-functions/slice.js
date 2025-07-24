let arr = [1, 2, 3, 4, 5]; // Ek array banayi gayi hai jisme 1 se 5 tak ke numbers hain

let newArr = arr.slice(0, 3);
// slice method use kiya gaya hai
// slice(0, 3) ka matlab hai index 0 se leke index 3 tak ka data lena
// Lekin dhyaan rahe: slice last index ko include nahi karta
// Yani isme index 0, 1, aur 2 ke elements aayenge => [1, 2, 3]

console.log(newArr); // Output hoga: [1, 2, 3]
