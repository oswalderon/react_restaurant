const products = [
    { 
        name: "Caramel Coffee with Chocolate",
        price:1.9,
        image:"coffee_01",
        category_id:1,
        id:1
    },
    { 
        name: "Large Cold Coffee with Chocolate",
        price:2.9,
        image:"coffee_02",
        category_id:1,
        id:2
    },
    { 
        name: "Large Cold Latte with Chocolate",
        price:3.9,
        image:"coffee_03",
        category_id:1,
        id:3
    },
    { 
        name: "Large Cold Latte with Chocolate",
        price:3.9,
        image:"coffee_04",
        category_id:1,
        id:4
    },
    { 
        name: "Large Cold Milkshake with Chocolate",
        price:3.9,
        image:"coffee_05",
        category_id:1,
        id:5
    },
    { 
        name: "Small Hot Mocha Coffee",
        price:1.9,
        image:"coffee_06",
        category_id:1,
        id:6
    },
    { 
        name: "Large Hot Mocha Coffee with Chocolate",
        price:1.9,
        image:"coffee_07",
        category_id:1,
        id:7
    },
    { 
        name: "Large Hot Cappuccino Coffee",
        price:1.9,
        image:"coffee_08",
        category_id:1,
        id:8
    },
    { 
        name: "Hot Mocha Coffee Medium",
        price:2.9,
        image:"coffee_09",
        category_id:1,
        id:9
    },
    { 
        name: "Medium Cold Mocha Coffee with Caramel",
        price:2.9,
        image:"coffee_10",
        category_id:1,
        id:10
    },
    { 
        name: "Medium Cold Mocha Coffee with Chocolate",
        price:2.9,
        image:"coffee_11",
        category_id:1,
        id:11
    },
    { 
        name: "Espresso Coffee",
        price:1.9,
        image:"coffee_12",
        category_id:1,
        id:12
    },
    { 
        name: "Large Cappuccino Coffee with Caramel",
        price:1.9,
        image:"coffee_13",
        category_id:1,
        id:13
    },
    { 
        name: "Large Caramel Coffee",
        price:1.9,
        image:"coffee_14",
        category_id:1,
        id:14
    },
    { 
        name: "Chocolate Donuts 3 Pack",
        price:2.9,
        image:"donut_01",
        category_id:4,
        id:15
    },
    { 
        name: "Glazed Donuts 3 Pack",
        price:2.9,
        image:"donut_02",
        category_id:4,
        id:16
    },
    { 
        name: "Strawberry Donut",
        price:0.9,
        image:"donut_03",
        category_id:4,
        id:17
    },
    { 
        name: "Donut with Chocolate Cookie",
        price:0.9,
        image:"donut_04",
        category_id:4,
        id:18
    },
    { 
        name: "Glazed Donut with Strawberry Chips",
        price:0.9,
        image:"donut_05",
        category_id:4,
        id:19
    },
    { 
        name: "Glazed Donut with Chocolate",
        price:0.9,
        image:"donut_06",
        category_id:4,
        id:20
    },
    { 
        name: "Chocolate Donut with MORE Chocolate",
        price:0.9,
        image:"donut_07",
        category_id:4,
        id:21
    },
    { 
        name: "Chocolate Donut 3 Pack",
        price:1.9,
        image:"donut_08",
        category_id:4,
        id:22
    },
    { 
        name: "Vanilla and Chocolate Donut 3 Pack",
        price:1.9,
        image:"donut_09",
        category_id:4,
        id:23
    },
    { 
        name: "Donuts 6 Pack",
        price:3.9,
        image:"donut_10",
        category_id:4,
        id:24
    },
    { 
        name: "Mixed 3 Pack",
        price:1.9,
        image:"donut_11",
        category_id:4,
        id:25
    },
    { 
        name: "Natural Donut with Chocolate",
        price:0.9,
        image:"donut_12",
        category_id:4,
        id:26
    },
    { 
        name: "Chocolate Donuts with Chips 3 Pack",
        price:1.9,
        image:"donut_13",
        category_id:4,
        id:27
    },
    { 
        name: "Chocolate and Coconut Donut",
        price:0.9,
        image:"donut_14",
        category_id:4,
        id:28
    },
    { 
        name: "Chocolate Cookies Pack",
        price:1.9,
        image:"cookie_01",
        category_id:6,
        id:29
    },
    { 
        name: "Chocolate and Oatmeal Cookies Pack",
        price:1.9,
        image:"cookie_02",
        category_id:6,
        id:30
    },
    { 
        name: "Vanilla Muffins Pack",
        price:1.9,
        image:"cookie_03",
        category_id:6,
        id:31
    },
    { 
        name: "Oatmeal Cookies 4 Pack",
        price:2.9,
        image:"cookie_04",
        category_id:6,
        id:32
    },
    { 
        name: "Mixed Butter Cookies",
        price:1.9,
        image:"cookie_05",
        category_id:6,
        id:33
    },
    { 
        name: "Fruity Flavors Cookies",
        price:1.9,
        image:"cookie_06",
        category_id:6,
        id:34
    },
    { 
        name: "Basic Hamburguer",
        price:4.9,
        image:"hamburguer_01",
        category_id:2,
        id:35
    },
    { 
        name: "Chicken Hamburguer",
        price:4.9,
        image:"hamburguer_02",
        category_id:2,
        id:36
    },
    { 
        name: "Chicken and Chili Hamburguer",
        price:4.9,
        image:"hamburguer_03",
        category_id:2,
        id:37
    },
    { 
        name: "Cheese and Pickles Hamburguer",
        price:4.9,
        image:"hamburguer_04",
        category_id:2,
        id:38
    },
    { 
        name: "Quarter Pound Hamburguer",
        price:5.9,
        image:"hamburguer_05",
        category_id:2,
        id:39
    },
    { 
        name: "Double Cheese Hamburguer",
        price:5.9,
        image:"hamburguer_06",
        category_id:2,
        id:40
    },
    { 
        name: "Special Hot Dog",
        price:2.9,
        image:"hamburguer_07",
        category_id:2,
        id:41
    },
    { 
        name: "Hot Dogs 2 Pack",
        price:4.9,
        image:"hamburguer_08",
        category_id:2,
        id:42
    },
    { 
        name: "4 Slices of Cheesecake",
        price:4.9,
        image:"cake_01",
        category_id:5,
        id:43
    },
    { 
        name: "Special Waffle",
        price:2.9,
        image:"cake_02",
        category_id:5,
        id:44
    },
    { 
        name: "House Special Croissant",
        price:2.9,
        image:"cake_03",
        category_id:5,
        id:45
    },
    { 
        name: "Cheesecake",
        price:1.9,
        image:"cake_04",
        category_id:5,
        id:46
    },
    { 
        name: "Chocolate Cake",
        price:11.9,
        image:"cake_05",
        category_id:5,
        id:47
    },
    { 
        name: "Chocolate Cake Slice",
        price:1.9,
        image:"cake_06",
        category_id:5,
        id:48
    },
    { 
        name: "Spicy Pizza with Double Cheese",
        price:7.9,
        image:"pizza_01",
        category_id:3,
        id:49
    },
    { 
        name: "Jam and Cheese Pizza",
        price:7.9,
        image:"pizza_02",
        category_id:3,
        id:50
    },
    { 
        name: "Double Cheese Pizza",
        price:8.9,
        image:"pizza_03",
        category_id:3,
        id:51
    },
    { 
        name: "House Special Pizza",
        price:8.9,
        image:"pizza_04",
        category_id:3,
        id:52
    },
    { 
        name: "Sausage Pizza",
        price:8.9,
        image:"pizza_05",
        category_id:3,
        id:53
    },
    { 
        name: "Hawaiian Pizza",
        price:8.9,
        image:"pizza_06",
        category_id:3,
        id:54
    },
    { 
        name: "Bacon Pizza",
        price:8.9,
        image:"pizza_07",
        category_id:3,
        id:55
    },
    { 
        name: "Vegetables and Cheese Pizza",
        price:7.9,
        image:"pizza_08",
        category_id:3,
        id:56
    },
    { 
        name: "Pepperoni and Cheese Pizza",
        price:7.9,
        image:"pizza_09",
        category_id:3,
        id:57
    },
    { 
        name: "Olives and Cheese Pizza",
        price:7.9,
        image:"pizza_10",
        category_id:3,
        id:58
    },
    { 
        name: "Jam and Mushrooms Cheese Pizza",
        price:7.9,
        image:"pizza_11",
        category_id:3,
        id:59
    }
]
export {
    products
}
