function meta_create_cart_elm(parentDiv, parentId, size, input, price, startValue, inputId, srcImg) {

    let element1 = document.createElement('div');
    element1.classList.add("card");
    element1.classList.add("rounded-3");
    element1.classList.add("mb-4");
    element1.id = parentId;
    parentDiv.appendChild(element1);
    element1.appendChild(document.createTextNode(" "));
    element1.appendChild(document.createTextNode(" "));
    element1.appendChild(document.createTextNode(" "));
    element1.appendChild(document.createTextNode(" "));
    
    let element2 = document.createElement('div');
    element2.classList.add("card-body");
    element2.classList.add("p-4");
    element1.appendChild(element2);
    element2.appendChild(document.createTextNode(" "));
    element2.appendChild(document.createTextNode(" "));
    element2.appendChild(document.createTextNode(" "));
    element2.appendChild(document.createTextNode(" "));
    element2.appendChild(document.createTextNode(" "));
    element2.appendChild(document.createTextNode(" "));
    
    let element3 = document.createElement('div');
    element3.classList.add("row");
    element3.classList.add("d-flex");
    element3.classList.add("justify-content-between");
    element3.classList.add("align-items-center");
    element2.appendChild(element3);
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    
    let element4 = document.createElement('div');
    element4.classList.add("col-md-2");
    element4.classList.add("col-lg-2");
    element4.classList.add("col-xl-2");
    element4.classList.add("p-5");
    element4.classList.add("p-md-0");
    element3.appendChild(element4);
    element4.appendChild(document.createTextNode(" "));
    element4.appendChild(document.createTextNode(" "));
    element4.appendChild(document.createTextNode(" "));
    element4.appendChild(document.createTextNode(" "));
    element4.appendChild(document.createTextNode(" "));
    element4.appendChild(document.createTextNode(" "));
    element4.appendChild(document.createTextNode(" "));
    element4.appendChild(document.createTextNode(" "));
    element4.appendChild(document.createTextNode(" "));
    element4.appendChild(document.createTextNode(" "));
    
    let element5 = document.createElement('img');
    element5.classList.add("img-fluid");
    element5.classList.add("rounded-3");
    element5.src = srcImg;
    element4.appendChild(element5);
    element4.appendChild(document.createTextNode(" "));
    element4.appendChild(document.createTextNode(" "));
    element4.appendChild(document.createTextNode(" "));
    element4.appendChild(document.createTextNode(" "));
    element4.appendChild(document.createTextNode(" "));
    element4.appendChild(document.createTextNode(" "));
    element4.appendChild(document.createTextNode(" "));
    element4.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    
    let element6 = document.createElement('div');
    element6.classList.add("col-md-3");
    element6.classList.add("col-lg-3");
    element6.classList.add("col-xl-3");
    element3.appendChild(element6);
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    
    let element7 = document.createElement('p');
    element7.classList.add("lead");
    element7.classList.add("fw-normal");
    element7.classList.add("mb-2");
    element6.appendChild(element7);
    element7.appendChild(document.createTextNode("Aztec"));
    element7.appendChild(document.createTextNode(" "));
    element7.appendChild(document.createTextNode("CFexpress"));
    element7.appendChild(document.createTextNode(" "));
    element7.appendChild(document.createTextNode("2.0"));
    element7.appendChild(document.createTextNode(" "));
    element7.appendChild(document.createTextNode("Type"));
    element7.appendChild(document.createTextNode(" "));
    element7.appendChild(document.createTextNode("B"));
    element7.appendChild(document.createTextNode(" "));
    element7.appendChild(document.createTextNode("card"));
    element7.appendChild(document.createTextNode(" "));
    element7.appendChild(document.createTextNode(size));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    
    let element8 = document.createElement('p');
    element6.appendChild(element8);
    
    let element9 = document.createElement('span');
    element9.classList.add("text-muted");
    element8.appendChild(element9);
    element9.appendChild(document.createTextNode("Size"));
    element9.appendChild(document.createTextNode(":"));
    element9.appendChild(document.createTextNode(" "));
    element8.appendChild(document.createTextNode(size));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    element6.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    
    let element10 = document.createElement('div');
    element10.classList.add("col-md-3");
    element10.classList.add("col-lg-3");
    element10.classList.add("col-xl-2");
    element10.classList.add("d-flex");
    element3.appendChild(element10);
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    
    let element11 = document.createElement('button');
    element11.classList.add("btn");
    element11.classList.add("btn-link");
    element11.classList.add("px-2");
    element11.addEventListener("click", function() { this.parentNode.querySelector(input).stepDown(); updateQuantity(inputId, parentId); });
    element10.appendChild(element11);
    element11.appendChild(document.createTextNode(" "));
    element11.appendChild(document.createTextNode(" "));
    element11.appendChild(document.createTextNode(" "));
    element11.appendChild(document.createTextNode(" "));
    element11.appendChild(document.createTextNode(" "));
    element11.appendChild(document.createTextNode(" "));
    element11.appendChild(document.createTextNode(" "));
    element11.appendChild(document.createTextNode(" "));
    element11.appendChild(document.createTextNode(" "));
    element11.appendChild(document.createTextNode(" "));
    element11.appendChild(document.createTextNode(" "));
    element11.appendChild(document.createTextNode(" "));
    
    let element12 = document.createElement('i');
    element12.classList.add("fas");
    element12.classList.add("fa-minus");
    element11.appendChild(element12);
    element11.appendChild(document.createTextNode(" "));
    element11.appendChild(document.createTextNode(" "));
    element11.appendChild(document.createTextNode(" "));
    element11.appendChild(document.createTextNode(" "));
    element11.appendChild(document.createTextNode(" "));
    element11.appendChild(document.createTextNode(" "));
    element11.appendChild(document.createTextNode(" "));
    element11.appendChild(document.createTextNode(" "));
    element11.appendChild(document.createTextNode(" "));
    element11.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    
    let element13 = document.createElement('input');
    element13.classList.add("form-control");
    element13.classList.add("form-control-sm");
    element13.value = startValue;
    
    element13.id = inputId;
    element13.addEventListener("input", function() { updateQuantity(inputId, parentId);  });
    element13.setAttribute('type', "number");
    element13.min = 0;
    element10.appendChild(element13);
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    
    let element14 = document.createElement('button');
    element14.classList.add("btn");
    element14.classList.add("btn-link");
    element14.classList.add("px-2");
    element14.addEventListener("click", function() { this.parentNode.querySelector(input).stepUp(); updateQuantity(inputId, parentId); });
    element10.appendChild(element14);
    element14.appendChild(document.createTextNode(" "));
    element14.appendChild(document.createTextNode(" "));
    element14.appendChild(document.createTextNode(" "));
    element14.appendChild(document.createTextNode(" "));
    element14.appendChild(document.createTextNode(" "));
    element14.appendChild(document.createTextNode(" "));
    element14.appendChild(document.createTextNode(" "));
    element14.appendChild(document.createTextNode(" "));
    element14.appendChild(document.createTextNode(" "));
    element14.appendChild(document.createTextNode(" "));
    element14.appendChild(document.createTextNode(" "));
    element14.appendChild(document.createTextNode(" "));
    
    let element15 = document.createElement('i');
    element15.classList.add("fas");
    element15.classList.add("fa-plus");
    element14.appendChild(element15);
    element14.appendChild(document.createTextNode(" "));
    element14.appendChild(document.createTextNode(" "));
    element14.appendChild(document.createTextNode(" "));
    element14.appendChild(document.createTextNode(" "));
    element14.appendChild(document.createTextNode(" "));
    element14.appendChild(document.createTextNode(" "));
    element14.appendChild(document.createTextNode(" "));
    element14.appendChild(document.createTextNode(" "));
    element14.appendChild(document.createTextNode(" "));
    element14.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element10.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    
    let element16 = document.createElement('div');
    element16.classList.add("col-md-3");
    element16.classList.add("col-lg-2");
    element16.classList.add("col-xl-2");
    element16.classList.add("offset-lg-1");
    element16.classList.add("p-3");
    element3.appendChild(element16);
    element16.appendChild(document.createTextNode(" "));
    element16.appendChild(document.createTextNode(" "));
    element16.appendChild(document.createTextNode(" "));
    element16.appendChild(document.createTextNode(" "));
    element16.appendChild(document.createTextNode(" "));
    element16.appendChild(document.createTextNode(" "));
    element16.appendChild(document.createTextNode(" "));
    element16.appendChild(document.createTextNode(" "));
    element16.appendChild(document.createTextNode(" "));
    element16.appendChild(document.createTextNode(" "));
    
    let element17 = document.createElement('h5');
    element17.classList.add("mb-0");
    element16.appendChild(element17);
    element17.appendChild(document.createTextNode("$" + price));
    element17.id = parentId + "_price_id";
    element16.appendChild(document.createTextNode(" "));
    element16.appendChild(document.createTextNode(" "));
    element16.appendChild(document.createTextNode(" "));
    element16.appendChild(document.createTextNode(" "));
    element16.appendChild(document.createTextNode(" "));
    element16.appendChild(document.createTextNode(" "));
    element16.appendChild(document.createTextNode(" "));
    element16.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    
    let element18 = document.createElement('div');
    element18.classList.add("col-md-1");
    element18.classList.add("col-lg-1");
    element18.classList.add("col-xl-1");
    element18.classList.add("text-end");
    element3.appendChild(element18);
    element18.appendChild(document.createTextNode(" "));
    element18.appendChild(document.createTextNode(" "));
    element18.appendChild(document.createTextNode(" "));
    element18.appendChild(document.createTextNode(" "));
    element18.appendChild(document.createTextNode(" "));
    element18.appendChild(document.createTextNode(" "));
    element18.appendChild(document.createTextNode(" "));
    element18.appendChild(document.createTextNode(" "));
    element18.appendChild(document.createTextNode(" "));
    element18.appendChild(document.createTextNode(" "));
    
    let element19 = document.createElement('a');
    element19.classList.add("text-danger");
    element19.addEventListener("click", function() { deleteItem(parentId) });
    element18.appendChild(element19);
    
    let element20 = document.createElement('i');
    element20.classList.add("fas");
    element20.classList.add("fa-trash");
    element20.classList.add("fa-lg");
    element19.appendChild(element20);
    element18.appendChild(document.createTextNode(" "));
    element18.appendChild(document.createTextNode(" "));
    element18.appendChild(document.createTextNode(" "));
    element18.appendChild(document.createTextNode(" "));
    element18.appendChild(document.createTextNode(" "));
    element18.appendChild(document.createTextNode(" "));
    element18.appendChild(document.createTextNode(" "));
    element18.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element3.appendChild(document.createTextNode(" "));
    element2.appendChild(document.createTextNode(" "));
    element2.appendChild(document.createTextNode(" "));
    element2.appendChild(document.createTextNode(" "));
    element2.appendChild(document.createTextNode(" "));
    element1.appendChild(document.createTextNode(" "));
    element1.appendChild(document.createTextNode(" "));
    
    return element1;
    }
    