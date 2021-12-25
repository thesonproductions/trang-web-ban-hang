var removeButton = document.getElementsByClassName('.remove-cart')
for (var i = 0; i < removeButton.length; i++) {
    var button = removeButton[i]
    button.addEventListener('click', removeCartItem)
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
}
var addToCartButton = document.getElementsByClassName(".addcart")
for (var i = 0; i < addToCartButton.length; i++) {
    var button = addToCartButton[i]
    button.addEventListener('click', addToCartClicked)
}

function addToCartClicked(event) {

}