var app = new Vue({
    el: '#app',
    data: {
        product: 'ถุงเท้า',
        photo: 'assets/vmSocks-green.jpg',
        inStock: true,
        details: ["80% ค็อตตอน","20% โพลีเอสเตอร์","ใส่ได้ทุกเพศ ทุกวัย"],
        specs: [
            {
                productId: '1001',
                productColor: 'สีเขียว',
                productImage: 'assets/vmSocks-green.jpg'
            },
            {
                productId: '1002',
                productColor: 'สีน้ำเงิน',
                productImage: 'assets/vmSocks-blue.jpg'
            },
        ],
        cart: 0,
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        removeFromCart(){
            this.cart -= 1
        },
        updateColor(productImage){
            this.photo = productImage
        }
    }   
})