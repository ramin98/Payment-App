function lay_1_add() {
    $('#lay-1').css({"display": "none"})
    $('#lay-2').css({"display": "flex"})
}

function lay_2_button() {
    $('#lay-1').css({"display": "flex"})
    $('#lay-2').css({"display": "none"})
    $('.product-1-main').css({"display": "none"})
    $('.layout-1-scroll').css({"display": "flex"})
}

function radio_1() {
    $('.product-5').css({"display": "flex"})
    $('.product-4').css({"display": "flex"})
    $('.product-3').css({"display": "flex"})
    $('.product-2').css({"display": "flex"})
    $('.product-1').css({"display": "flex"})
    $('.layout-1-button-text').replaceWith('<p class="layout-1-button-text">Submit and Pay 80 USD</p>')
}

function radio_2() {
    $('.product-4').css({"display": "flex"})
    $('.product-3').css({"display": "flex"})
    $('.product-2').css({"display": "flex"})
    $('.product-1').css({"display": "flex"})
    $('.product-5').css({"display": "none"})
    $('.layout-1-button-text').replaceWith('<p class="layout-1-button-text">Submit and Pay 72 USD</p>')
}

function radio_3() {
    $('.product-3').css({"display": "flex"})
    $('.product-2').css({"display": "flex"})
    $('.product-1').css({"display": "flex"})
    $('.product-5').css({"display": "none"})
    $('.product-4').css({"display": "none"})
    $('.layout-1-button-text').replaceWith('<p class="layout-1-button-text">Submit and Pay 60 USD</p>')
}

function radio_4() {
    $('.product-2').css({"display": "flex"})
    $('.product-1').css({"display": "flex"})
    $('.product-5').css({"display": "none"})
    $('.product-4').css({"display": "none"})
    $('.product-3').css({"display": "none"})
    $('.layout-1-button-text').replaceWith('<p class="layout-1-button-text">Submit and Pay 44 USD</p>')
}
function radio_5() {
    $('.product-1').css({"display": "flex"})
    $('.product-5').css({"display": "none"})
    $('.product-4').css({"display": "none"})
    $('.product-3').css({"display": "none"})
    $('.product-2').css({"display": "none"})
    $('.ayout-1-scroll').css({"display": "none"})
    $('.layout-1-button-text').replaceWith('<p class="layout-1-button-text">Submit and Pay 24.99 USD</p>')
}

function delete_product_1() {
    $('.product-1').css({"display": "none"})
}

function delete_product_2() {
    $('.product-2').css({"display": "none"})
}

function delete_product_3() {
    $('.product-3').css({"display": "none"})
}

function delete_product_4() {
    $('.product-4').css({"display": "none"})
}

function delete_product_5() {
    $('.product-5').css({"display": "none"})
}

function lay_1_button() {
    $('#lay-1').css({"display": "none"})
    var lays = Math.floor(Math.random() * 2) 
    if(lays == 0){$('.layout-4').css({"display": "flex"})}
    else if(lays == 1){$('.layout-3').css({"display": "flex"}) }
}

function lay_3_button() {
    $('.layout-3').css({"display": "none"})
    $('#lay-1').css({"display": "flex"})
}

function lay_4_button() {
    $('.layout-4').css({"display": "none"})
    $('#lay-1').css({"display": "flex"})
}