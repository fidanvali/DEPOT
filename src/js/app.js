document.addEventListener('DOMContentLoaded',() =>{
    
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');
    
    let sliderImg = document.getElementById('sliderImg');
    let sliderContainer = document.querySelector('slider')
    let currentIndex=0;
    let images=[
         "src/images/h1-slide1-img.png",
         "src/images/h1-slide2-img1.png",
         "src/images/h1-slide2-img2.png",
         "src/images/h1-slide3-img.jpg"
    ];
    if(sliderImg){
        sliderImg.src=images[currentIndex]
    }
    
    function slide(){
        if(currentIndex < 0){
            currentIndex=images.length-1;
        }
        else if(currentIndex>=images.length){
            currentIndex=0;
        }
        sliderImg.src=images[currentIndex];
    };
       //left arrow btn
    btn1.addEventListener('click',()=>{
        currentIndex++;
        slide();
        });
        //right arrow button
    btn2.addEventListener('click',()=>{
        currentIndex++;
        slide();
        });
    btn3.addEventListener('click',()=>{
        currentIndex++;
        slide();
        });
    
    sliderContainer.addEventListener('mouseenter',()=>{
        clearInterval(autoPlayInterval);
        });  
    })
    
    const cart = [];
    
    // Sepete öğe eklemek için bir işlev tanımlayın
    function addToCart(productName, price) {
      const item = { productName, price };
      cart.push(item);
    
      // Sepeti güncelleyin
      updateCart();
    }
    
    // Sepeti güncellemek için bir işlev tanımlayın
    function updateCart() {
      const cartList = document.getElementById('shopping-cart');
      cartList.innerHTML = '';
    
      let total = 0;
    
      cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    
        total += item.price;
      });
    
      const totalItem = document.createElement('li');
      totalItem.textContent = `Toplam: $${total.toFixed(2)}`;
      cartList.appendChild(totalItem);
    }
    document.addEventListener('DOMContentLoaded', function () {
        const productList = document.querySelectorAll('product-container');
        const cart = document.getElementById('cart');
        const total = document.getElementById('total');
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        let cartItems = [];
    
        addToCartButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.dataset.id;
                const productInfo = getProductInfo(productId);
    
                if (productInfo) {
                    cartItems.push(productInfo);
                    updateCart();
                }
            });
        });
    
        function getProductInfo(productId) {
            const product = document.querySelector(`[data-id="${productId}"]`);
            if (product) {
                const productName = product.dataset.name;
                const productPrice = parseFloat(product.dataset.price);
                return { id: productId, name: productName, price: productPrice };
            }
            return null;
        }
    
        cart.addEventListener('click', (event) => {
            if (event.target.tagName === 'LI') {
                const productId = event.target.dataset.id;
                cartItems = cartItems.filter(item => item.id !== productId);
                updateCart();
            }
        });
    
        function updateCart() {
            cart.innerHTML = '';
            let cartTotal = 0;
    
            cartItems.forEach(item => {
                const li = document.createElement('li');
                li.dataset.id = item.id;
                li.textContent = `${item.name} - $${item.price}`;
                cart.appendChild(li);
                cartTotal += item.price;
            });
    
            total.textContent = `Toplam: $${cartTotal.toFixed(2)}`;
        }
    });
    
    let tabs=document.querySelectorAll(".tabs div")
    let tabContents=document.querySelectorAll(".content div")
    
      for (var tab of tabs) {
    
            tab.addEventListener("click", function () {
                let active = document.querySelector(".active");
                active.classList.remove("active")
                this.classList.add("active");
                //Showing content
                let index = this.getAttribute("data-index");
                for (let content of tabContents) {
                    if (content.getAttribute("data-index") == index) {
                        content.classList.add("show")
                    } else {
                        content.classList.remove("show")
                    }
                }
            })
        }
    
        fetch("db.json")
        .then(res => res.json())
        .then(data => {
           let html=" ";
           data.products.forEach(product => {
              html+=` <div class="col-lg-3 custom-box">
              <div class="custom-card">
                  <div class="img-div">
                      <img src="${product.image}" alt="">
                  </div>
                  <div class="content">
                      <h3 class="title">${product.name}</h3>
                      <h2 class="price">${product.price}</h2>
                  </div>
                  <div class="addbasket-btn-div">
                      <button data-price=${product.price} data-id="${product.id}" class="addbasket">Add to Basket</button>
                  </div>
              </div>
          </div>`    })
    
           })
    
           document.querySelector("#Products .container .row").innerHTML = html
           let addbasketBtns = document.querySelectorAll(".addbasket")
              
              addbasketBtns.forEach(btn=>{
                 btn.addEventListener("click", function(e){
                    if(localStorage.getItem("basket")===null){
                       localStorage.setItem("basket",JSON.stringify([]))
                    }
                    let basket = JSON.parse(localStorage.getItem("basket"))
                    let data_id = e.target.getAttribute("data-id")
                    let data_price = e.target.getAttribute("data-price")
                    if(exsist){
                       exsist.count++
                    }else{
                       basket.push({
                          id: data_id,
                          count:1,
                          price:data_price
                       })
                    }
                    let price=0;
           basket.forEach(item=>{
              price+=item.price*item.count
           })
           productprice.innerText=price.toFixed(2)
                    localStorage.setItem("basket", JSON.stringify(basket))
                    
                    
        
                 })
              })
           
    
    