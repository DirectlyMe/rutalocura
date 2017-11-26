$('document').ready(function () {

    $('.thumbnail').click(function () {

        var image = $(this).attr('src');

        $('#mainPic').attr('src', image);
    });

    var original = 100;
    var totalPrice = original;
    var addonPrice = 0;


    changePrice(original);

    $('#options').on('change', function () {

        var value = $(this).val();
        addonPrice = parseInt(value);

        $('#quantity').val(1);

        changePrice(original + addonPrice);
    });

    $('#quantity').on('change', function () {

        var value = $(this).val();

        var quantityPrice = original * parseInt(value);
        totalPrice = (parseInt(value) * addonPrice) + quantityPrice;

        changePrice(totalPrice);
    })

    function changePrice(price) {
        $('#itemPrice').text("Price: $" + price);
    }


});