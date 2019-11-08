var app = new Vue({
    el: '#app',
    data: {
        mobile: 'Samsung S12+',
        photo: 'assets/phone1.jpg',
        isStock: true,
        details: ["Asus Zenfone M2", "Samsung Galaxy S15", "iPhone 11s Plus"],
        brands: [
            {
                productId: '111',
                productName: 'Asus Zenfone M2 Pro'
            },
            {
                productId: '222',
                productName: 'Samsung Galaxy S15'
            },
            {
                productId: '333',
                productName: 'iPhone 15s Plus'
            },
        ]
    }
})