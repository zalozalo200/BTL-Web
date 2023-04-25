const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')

// thêm sự kiện click cho Hà Nội và nút close
adressbtn.addEventListener("click",function(){
    document.querySelector('.adress-form').style.display="flex";
})
adressclose.addEventListener("click",function(){
    document.querySelector('.adress-form').style.display="none";
})
// --------cart-----------------
const btnmuangay = document.querySelectorAll(".muangay")
// console.log(btnmuangay)
btnmuangay.forEach(function(button,index){
    button.addEventListener("click",function(event){{
        var btnItem = event.target
        // đặt biến để chọn ra thẻ cha
        var product = btnItem.parentElement
        // gán biến để có các giá trị của sản phẩm đó khi ấn vào button
        var productImg = product.querySelector(".product-hienthi img").src
        var productName = product.querySelector(".product-item .product-info .product-ten").innerText
        var productPrice = product.querySelector(".product-item .product-info .product-gia").innerText
        addcart(productImg,productName,productPrice)
    }})

})
// thêm sản phẩm vào giỏ hàng
function addcart(productImg,productName,productPrice){
    var addtr = document.createElement("tr")
    
    var trcontent = '<tr><td style="display:flex ;align-items: center;"><img src="'+productImg+'" alt="" style="width: 70px;">'+productName+'</td><td><p><span class="prices">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width:30px ;outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    // thêm biến addtr vào trong tbody
    cartTable.append(addtr)
    // khởi tạo hàm 
    carttotal()
    deleteCart()
}
//----------tính tổng tiền-------------
function carttotal (){
    // tạo thẻ tr
    var cartItem = document.querySelectorAll("tbody tr")
    // console.log(cartItem.length)
    var totalC = 0
    for(var i=0;i<cartItem.length;i++){
        //số lượng
        var inputValue =  cartItem[i].querySelector("input").value
        //giá
        var productPrice = cartItem[i].querySelector("span").innerHTML
        // dùng để loại bỏ dấu chấm để tính toán
        var newsProductPrice = productPrice.split('.').join('')
        totalA = inputValue*newsProductPrice
        totalC += totalA
        // trả về dấu chấm cho tổng tiền
        // totalB = totalC.toLocaleString('de-DE')
    }
    var cartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    //thay đổi số lượng tăng giá tiền
    inputchange()
     //console.log(cartTotalA)
    //  thay đổi giá trị cho giỏ hàng
    var cartPrice = document.querySelector(".moneybutton span")
    cartPrice.innerHTML = totalC.toLocaleString('de-DE')
}
//-------------Delete cart---------------------
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click",function(event){
            var cartdelete = event.target
            var cartitemR = cartdelete.parentElement.parentElement
            cartitemR.remove()
            carttotal ()
            console.log(cartitemR)
        })
    }
}
// thay đổi số lượng tiền tăng
function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal()
        })
    }
}
//----------js cho phần giỏ hàng
const cartbtn = document.querySelector("#closegiohang")
console.log(cartbtn)
const cartshow = document.querySelector(".moneybutton")
cartshow.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "0"
})
cartbtn.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "-100%"
})