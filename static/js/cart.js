
var updateBtn = document.getElementsByClassName("update-cart");


for(var i=0; i<updateBtn.length; i++){
    updateBtn[i].addEventListener('click',function(){
        var productId = this.dataset.product 
        var action = this.dataset.action 
        console.log(productId,action,user)
        if(user=="AnonymousUser"){
            addCookieItem(productId,action)
        }else{
            updateUserOrder(productId,action)
        }
    })
}

function addCookieItem(productId, action){
    console.log("not log..")

    if(action == 'add'){
        if(cart[productId] === undefined){
            cart[productId] = {'quantity':1}
        }else{
            cart[productId]['quantity'] += 1
        }
    }

    if(action == 'remove'){
        cart[productId]['quantity'] -= 1
        if(cart[productId]['quantity'] <= 1){
            console.log("remove item")
            delete cart[productId]
        }
    }

    console.log('Cart', cart)
    document.cookie = 'cart=' + JSON.stringify(cart) + ";domain=;path=/"
    location.reload()
}

function updateUserOrder(productId, action){
    console.log("log")

    var url = `/update_item/`

    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':csrftoken,
        },
        body:JSON.stringify({'productId':productId, 'action':action})
    })
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log('data',data)
        location.reload()
    })
}