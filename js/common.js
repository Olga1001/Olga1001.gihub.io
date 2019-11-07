$(document).ready(function () {

    $(".detailed-dropdown-item").click(function () {
        $(this).closest(".detailed-dropdown-list").find(".detailed-lv1").slideToggle(400).closest(".detailed-dropdown-list").siblings().find(".detailed-lv1").slideUp(400);
    });

    let heightHeader = $('header').height();
    $(".detailed, .recruit").css("padding-top", heightHeader);

    $( ".recruit-datepicker" ).datepicker({ dateFormat: 'dd-mm-yy'}).datepicker("setDate", new Date());

});
