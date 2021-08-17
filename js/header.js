$('.header_sp__btn').on('click', function () {
    $(this).parent().parent().toggleClass("header_sp_active");
    $(this).toggleClass("header_sp__btn_active");
});