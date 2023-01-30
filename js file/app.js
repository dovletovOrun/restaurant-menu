//items
const menu = [
    {
        id: 1,
        title: "Grand Burger",
        category: "lunch",
        price: 15.99,
        img: "./img/item-1.jpg",
        desc: `This is the first item descriptions of Grand Burger`,
    },
    {
        id: 2,
        title: "Breakfast Energy Omlet",
        category: "breakfast",
        price: 10.99,
        img: "./img/item-2.jpeg",
        desc: `This is the first item descriptions of Breakfast Energy Omlet`,  
    },
    {
        id: 3,
        title: "Fresh Fruit Smoothie",
        category: "shakes",
        price: 9.99,
        img: "./img/item-3.png",
        desc: `This is the first item descriptions of Fresh Fruit Smoothie`,
    },
    {
        id: 4,
        title: "Bacon Omlet Breakfast",
        category: "breakfast",
        price: 11.99,
        img: "./img/item-4.jpeg",
        desc: `This is the first item descriptions of Bacon Omlet Breakfast`, 
    },
    {
        id: 5,
        title: "Frutie Cereal",
        category: "breakfast",
        price: 8.99,
        img: "./img/item-5.jpeg",
        desc: `This is the first item descriptions of Frutie Cereal`,
    },
    {
        id: 6,
        title: "Italian Pizza",
        category: "lunch",
        price: 11.99,
        img: "./img/item-6.jpg",
        desc: `This is the first item descriptions of Italian Pizza`,
    },
    {
        id: 7,
        title: "Pancakes with Strawberry",
        category: "breakfast",
        price: 7.99,
        img: "./img/item-7.jpg",
        desc: `This is the first item descriptions of Pancakes with Strawberry`, 
    },
    {
        id: 8,
        title: "Salad with Vegetables",
        category: "lunch",
        price: 9.99,
        img: "./img/item-8.jpg",
        desc: `This is the first item descriptions of Salad with Vegetables`,
    },
    {
        id: 9,
        title: "Hotdog with Vegetables and Cheese",
        category: "lunch",
        price: 10.99,
        img: "./img/item-9.jpg",
        desc: `This is the first item descriptions of Hotdog with Vegetables and Cheese`,
    },
    {
        id: 10,
        title: "Light dinner for vegans",
        category: "dinner",
        price: 11.99,
        img: "./img/item-10.jpeg",
        desc: `This is the first item descriptions of Light dinner for vegans`,
    },
    {
        id: 11,
        title: "Grand Ratatouille",
        category: "dinner",
        price: 19.99,
        img: "./img/item-11.jpg",
        desc: `This is the first item descriptions of Grand Ratatouille`,  
    },
    {
        id: 12,
        title: "Fish and Chips NEW Version",
        category: "dinner",
        price: 15.99,
        img: "./img/item-12.jpg",
        desc: `This is the first item descriptions of Fish and Chips NEW Version`,
    },
    {
        id: 13,
        title: "Orange and Strawberry Smoothies",
        category: "shakes",
        price: 10.99,
        img: "./img/item-13.jpg",
        desc: `This is the first item descriptions of Orange and Strawberry Smoothies`,
    }
];

const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll('.filter-btn');

window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
});
// filter items
filterBtns.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id
        const menuCategory = menu.filter( (menuItem) => {
            if (menuItem.category === category){
                return menuItem
            }
        })
        if(category === "all"){
            displayMenuItems(menu)
        } else {
            displayMenuItems(menuCategory)
        }
        if (category) { // changes the color of active on the buttons
            filterBtns.forEach( (btn) => {
                btn.classList.remove("active")
                e.target.classList.add("active")
            });
        }
    });
});

/*filterBtns.forEach(function(btn){
    btn.addEventListener("click", function (e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem){
            if(menuItem.category === category){
                return menuItem;
            }
            if (category === "all"){
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory)
            }
        })
    })
})
*/


// display menu on the screen
let displayMenuItems = (menuItems) => {
    let displayMenu = menuItems.map( (item) => {

        return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
            <h4 class="item-name">${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
            <p class="item-text">${item.desc}</p>
        </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
};










