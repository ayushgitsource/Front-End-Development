let products = [
    { name: "Laptop", category: "electronics" },
    { name: "Mobile", category: "electronics" },
    { name: "Shirt", category: "clothing" },
    { name: "T-shirt", category: "clothing" },
    { name: "Headphones", category: "electronics" },
    { name: "Jeans", category: "clothing" },
    { name: "Camera", category: "electronics" },
    { name: "Book", category: "books" },
    { name: "Charger", category: "electronics" },
    { name: "Jacket", category: "clothing" }
];

let list = document.getElementById("list");
let allBtn = document.getElementById("allBtn");
let elecBtn = document.getElementById("elecBtn");
let clothBtn = document.getElementById("clothBtn");
let searchBox = document.getElementById("searchBox");

function showItems(arr) {
    list.innerHTML = "";
    arr.forEach(function (p) {
        let li = document.createElement("li");
        li.textContent = p.name;
        list.appendChild(li);
    });
}

showItems(products);

allBtn.onclick = function () {
    showItems(products);
};

elecBtn.onclick = function () {
    let filtered = products.filter(function (p) {
        return p.category === "electronics";
    });
    showItems(filtered);
};

clothBtn.onclick = function () {
    let filtered = products.filter(function (p) {
        return p.category === "clothing";
    });
    showItems(filtered);
};

searchBox.oninput = function () {
    let text = searchBox.value.toLowerCase();

    let filtered = products.filter(function (p) {
        return p.name.toLowerCase().includes(text);
    });

    showItems(filtered);
};
