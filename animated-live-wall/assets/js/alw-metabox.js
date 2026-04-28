jQuery(document).ready(function($) {
    // Copy to clipboard
    $('.pw-copy').on('click', function() {
        var target = $(this).data('target');
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(target).val()).select();
        document.execCommand("copy");
        $temp.remove();
        $(target).select();
        $("#pw-copt-code").fadeIn();
        
        setTimeout(function() {
            $("#pw-copt-code").fadeOut();
        }, 3000);
    });

    // Initialize Settings Tabs
    function handleGalleryTabs() {
        var alw_gallery_wall = $('[name=alw_gallery_wall]:checked').val();
        $('.pw_gallery_tab .card').removeClass("tab-active");
        
        if (alw_gallery_wall == 'photo_wall') {
            $('.photo_wall').addClass("tab-active");
            $('.gallery-content-photo-wall, #image-gallery').show();
            $('.gallery-content-insta-wall, .gallery-content-flickr-wall, #instaram-gallery, #flickr-gallery, #instagram-configration').hide();
        } else if (alw_gallery_wall == 'insta_wall') {
            $('.insta_wall').addClass("tab-active");
            $('.gallery-content-insta-wall, #instaram-gallery, #instagram-configration').show();
            $('.gallery-content-photo-wall, .gallery-content-flickr-wall, #image-gallery, #flickr-gallery').hide();
        } else if (alw_gallery_wall == 'flickr_wall') {
            $('.flickr_wall').addClass("tab-active");
            $('.gallery-content-flickr-wall, #flickr-gallery').show();
            $('.gallery-content-photo-wall, .gallery-content-insta-wall, #image-gallery, #instaram-gallery, #instagram-configration').hide();
        }
    }

    function handleLayoutConfig() {
        var selectedLayout = $('[name=enable_gallery_layout]:checked').val();
        $('.gallery_layout_grid, .gallery_layout_masonry').removeClass('gallery_layout');
        
        if (selectedLayout == 'grid') {
            $('.gallery_layout_grid').addClass('gallery_layout');
            $('.pw_grid_layout_config').show();
            $('.pw_masonry_mosaic_justify_layout_config').hide();
        } else if (selectedLayout == 'masonry') {
            $('.gallery_layout_masonry').addClass('gallery_layout');
            $('.pw_grid_layout_config').hide();
            $('.pw_masonry_mosaic_justify_layout_config').show();
        }
    }

    function handleLoadMore() {
        var alw_load_more = $('[name=alw_load_more]:checked').val();
        if (alw_load_more == 'yes') {
            $('.load_limit').show();
        } else {
            $('.load_limit').hide();
        }
    }

    // Initial load
    handleGalleryTabs();
    handleLayoutConfig();
    handleLoadMore();

    // Change events
    $('input[type=radio][name=alw_gallery_wall]').on('change', handleGalleryTabs);
    $('input[type=radio][name=enable_gallery_layout]').on('change', handleLayoutConfig);
    $('input[type=radio][name=alw_load_more]').on('change', handleLoadMore);

    // Sidebar tab menu
    $("div.bhoechie-tab-menu>div.list-group>a").on('click', function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });

    // Color picker initialization
    if ($.isFunction($.fn.wpColorPicker)) {
        $('#alw_load_more_color, .ig-color-picker').wpColorPicker();
    }
});
