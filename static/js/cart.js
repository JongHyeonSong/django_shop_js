var updateBtn = document.getElementsByClassName("update-cart");

for(var i=0; i<updateBtn.length; i++){
    updateBtn[i].addEventListener('click',function(){
        var productId = this.dataset.product 
        var action = this.dataset.action 
        console.log(productId,action,user)
        
        if(user==="AnonymousUser"){
            console.log("not log")
        }else{
            updateUserOrder(productId,action)
        }
    })
}

function updateUserOrder(productId, action){
    console.log("log")

    var url = `/update_item/`

    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({'productId':productId, 'action':action})
    })
}