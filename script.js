
// shop page
var shopCard = document.getElementsByClassName("shopCard");
// to get product in another page
for (let i = 0; i < 8; i++) {
    shopCard[i].onclick = () => (window.location.href = "sproduct.html");
}
// new arr
var newCard = document.getElementsByClassName("newCard");
 // to get product in another page
for (let i = 0; i < 8; i++) {
newCard[i].onclick = () => (window.location.href = "sproduct.html");
}
