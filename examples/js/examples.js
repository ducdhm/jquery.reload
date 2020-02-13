function reloadFrom(url) {
    var targetIds = [];

    if ($('#element-1-chk').is(':checked')) {
        targetIds.push('#element-1');
    }

    if ($('#element-2-chk').is(':checked')) {
        targetIds.push('#element-2');
    }

    if ($('#element-3-chk').is(':checked')) {
        targetIds.push('#element-3');
    }

    $(targetIds.join(', ')).reload({
        url: url,
    });
}

$(function () {
    $('#page-1').on('click', function (e) {
        e.preventDefault();

        reloadFrom('./html/page-1.html');
    });

    $('#page-2').on('click', function (e) {
        e.preventDefault();

        reloadFrom('./html/page-2.html');
    });

    $('#page-3').on('click', function (e) {
        e.preventDefault();

        reloadFrom('./html/page-3.html');
    });
});
