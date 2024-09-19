
let ids = ["btn-512", "btn-1TB", "btn-2TB"];
let idInfo = [{price: "199", size: "512GB"}, {price: "299", size: "1TB"}, {price: "499", size: "2TB"}];
let totalCartItems = 0;
function getTotalCartItems() {
    let elm = document.getElementById("cart-count-id");

    let total = 0;

    for(let i = 0; i < ids.length; ++i) {
        let data = parseInt(sessionStorage.getItem(ids[i]));

        if(data) {
            total += data;
        }
    }

    
    if(total > 0) {
        elm.innerHTML = total.toString();
    } else {
        elm.innerHTML = "";
    }

    totalCartItems = total;

    return total;

    
    
}
getTotalCartItems();
