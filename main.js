var products =[];
var productsContainer = document.getElementById("product-table-container");
var tableBody = document.getElementById("table-body");
var warningmessage=document.getElementById("warningmsg");
var pname= document.getElementById("prodName");
var pcat= document.getElementById("prodCat");
var pprice= document.getElementById("prodPrice");
var pdesc= document.getElementById("prodDesc");
var btn= document.getElementById("bt1");
var i;
function handle(){
    if(products && products.length !== 0){
        console.log("Products are available");
        productsContainer.classList.remove("d-none");
        productsContainer.classList.add("d-block");
        warningmessage.classList.add("d-none");
        warningmessage.classList.remove("d-block");
        var rows="";
        for (let i = 0; i < products.length; i++) {
            rows+=`
            <tr>
                <th>${i + 1}</th>
                <td>${products[i].name}</td>
                <td>${products[i].cat}</td>
                <td>${products[i].price}</td>
                <td>${products[i].dec}</td>
                <td>
                    <button class="btn btn-outline-success " onclick="updaterow(${i})">
                    <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-outline-danger" onclick="deleterow(${i})">
                    <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
            `;
        }
        tableBody.innerHTML=rows;
    }else {
            console.log("Products arenot available");

    warningmessage.classList.remove("d-none");
    warningmessage.classList.add("d-block");
    productsContainer.classList.add("d-none");
    productsContainer.classList.remove("d-block");
    }
}
handle();

function addproduct(){
    if (pname.value ==="" || pcat.value ===""||pprice.value===""||pdesc.value==="") {
        alert("Please fill out all required fields before adding a product.");
        return; 
    }
    if(btn.innerHTML==="add product")
    {
        if (!products) {
        products = [];
        }
        var product = {
            name: pname.value,
            cat: pcat.value,
            price: Number(pprice.value),
            dec: pdesc.value,
        };
        products.push(product);
    }
    else{
        products[i].name=pname.value;
        products[i].cat=pcat.value;
        products[i].price=pprice.value;
        products[i].dec=pdesc.value;
        btn.innerHTML="add product";
    }
    clearboxes();
    handle();
}

function updaterow(index){
    console.log("updaterow");
    pname.value=products[index].name;
    pcat.value=products[index].cat;
    pdesc.value=products[index].dec;
    pprice.value=products[index].price;
    btn.innerHTML="update";
    console.log("Element updated successfully:", products);
    i=index;
    handle();
}
function deleterow(index){
    var conf= confirm('Are you sure you want to delete this item?');
    if(conf)
    {
        console.log("deleterow");
        products.splice(index, 1);
        console.log("Element deleted successfully:", products);
    }

    handle();

}
function clearboxes(){
    pname.value="";
    pprice.value="";
    pdesc.value="";
    pcat.value="";
}