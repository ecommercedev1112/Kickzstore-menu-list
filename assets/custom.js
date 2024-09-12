$(document).ready(function(){

    $('.header__inline-menu').find('details').each(function(){
        var submenu_id = $(this).data('handle');
        console.log(submenu_id, "submenu_id");
        
        if ($(`#${submenu_id}`).length > 0) {
            $(this).attr('data-submenu', true);
            $(this).click(function(e){
                e.stopPropagation();
                $(`#${submenu_id}`).toggleClass('active');
            });
        }
    });

    $('.menu-drawer__submenu').each(function(){
        var $drawer_submenu = $(this);
        var link_title = $drawer_submenu.attr('id').replace('link-', '').toLowerCase().trim();
        $('.header-megamenu').each(function(){
            var $header_megamenu = $(this);
            var megamenu_title = $header_megamenu.attr('id').replace('header-megamenu--', '').toLowerCase().trim();
            if (link_title == megamenu_title) {
                $drawer_submenu.find('.menu-drawer__menu').remove();
                $drawer_submenu.find('.menu-drawer__inner-submenu').append(`<div class="menu-drawer__megamenu list-menu">${$header_megamenu.html()}<div>`);
            }
        });
    });
});

var lastScrollTop = 0;
$(window).on('load resize scroll', function(){
    var st = $(this).scrollTop();
    var isScrollUp = false;
    if (st < lastScrollTop) {
        isScrollUp = true;
    } else {
        isScrollUp = false;
    }
    var headerHeight = $('#shopify-section-header').height() + $('#shopify-section-announcement-bar').height();
    if($('.article-nav').length > 0 && !$('body').hasClass('page-all-blogs')) {
        headerHeight += $('.article-nav').height();
    }
    if($('#shopify-section-header').hasClass('shopify-section-header-hidden')){
        $('.header-megamenu').removeClass('header-megamenu-sticky');
    } else {
        $('.header-megamenu').addClass('header-megamenu-sticky');
    }

    if ($(this).scrollTop() < headerHeight && !isScrollUp) {
        $('.header-megamenu').css({'top': `${headerHeight - $(this).scrollTop()}px`});
    } else {
        $('.header-megamenu').css({'top': `${$('#shopify-section-header').height()}px`});
    }

    if($(this).scrollTop() <= 0) {
        $('.header-megamenu').removeClass('header-megamenu-sticky');
    }

    $('.size-chart-wrrap').css({
        'height': `${$('body').height()}px`,
        'top': `-${headerHeight}px`
    });
    $('.search-modal').css({'top': `-${st}px`});

    lastScrollTop = st;
});

document.querySelectorAll('.header__inline-menu li').forEach(item => {
    item.addEventListener('hover', function(){
        console.log("here")
    })
})