/*--------------------------------------------------------------------------*
 *
 *  UA
 *
 *--------------------------------------------------------------------------*/

;(function ($) {
  var agent = navigator.userAgent
  var agent2 = window.navigator.userAgent.toLowerCase()

  if (agent.search(/iPhone/) != -1) {
    $('meta[name=viewport]').attr(
      'content',
      'width=device-width,initial-scale=1,user-scalable=no',
    )
  }

  if (
    navigator.userAgent.match(/MSIE 10/i) ||
    navigator.userAgent.match(/Trident\/7\./) ||
    navigator.userAgent.match(/Edge\/12\./)
  ) {
    $('body').on('mousewheel', function () {
      event.preventDefault()
      var wd = event.wheelDelta
      var csp = window.pageYOffset
      window.scrollTo(0, csp - wd)
    })
  }
})(jQuery)

/*--------------------------------------------------------------------------*
 *
 *  inview
 *
 *--------------------------------------------------------------------------*/
;(function ($) {
  var windowWidthInview = $(window).width()
  var windowSmInview = 1100
  if (windowWidthInview <= windowSmInview) {
    var topNum01 = 100
    var topNum02 = 100
  } else {
    var topNum01 = 12
    var topNum02 = 6
  }

  $(window).scroll(function () {
    $('.inviewTrigger01').each(function () {
      var imgPos = $(this).offset().top
      var scroll = $(window).scrollTop()
      var windowHeight = $(window).height()
      if (scroll > imgPos - windowHeight + windowHeight / topNum01) {
        $(this).addClass('inviewOn')
      }
    })
  })

  jQuery(window).scroll()
})(jQuery)

/*--------------------------------------------------------------------------*
 *
 *  page scroll
 *
 *--------------------------------------------------------------------------*/
; (function ($) {
  var windowSm = 768;
  
  $('a[href^="#"]').click(function () {
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);

    var windowWidth = $(window).width();
    var offset = 105;

    if (windowWidth <= windowSm) {
      offset = 65;
    }

    if (target.hasClass('structureCommon02Box')) {
      var position = target.offset().top;
      $('html, body').animate({ scrollTop: position }, 550, 'swing');
    } else if (target.hasClass('effectCommon02')) {
      var position = target.offset().top;
      if (target.hasClass('inviewOn')) {
        $('html, body').animate({ scrollTop: position - offset }, 550, 'swing');
      } else {
        $('html, body').animate({ scrollTop: position - offset - 30 }, 550, 'swing');
      }
    } else {
      var position = target.offset().top - offset;
      $('html, body').animate({ scrollTop: position }, 550, 'swing');
    }

    return false;
  });
})(jQuery);

/*--------------------------------------------------------------------------*
 *
 *  heightLine
 *
 *--------------------------------------------------------------------------*/
;(function ($) {
  setTimeout(function () {
    $('.heightLine01').heightLine({})
    $('.heightLine02').heightLine({})
    $('.heightLine03').heightLine({})
    $('.heightLine04').heightLine({})
    $('.heightLine05').heightLine({})
    $('.heightLine06').heightLine({})
    $('.heightLine07').heightLine({})
    $('.heightLine08').heightLine({})
    $('.heightLinePO01').heightLine({ minWidth: 768 })
    $('.heightLinePO02').heightLine({ minWidth: 768 })
    $('.heightLinePO03').heightLine({ minWidth: 768 })
    $('.heightLinePO04').heightLine({ minWidth: 768 })
    $('.heightLinePO05').heightLine({ minWidth: 768 })
    $('.heightLinePO06').heightLine({ minWidth: 768 })
    $('.heightLinePO07').heightLine({ minWidth: 768 })
    $('.heightLinePO08').heightLine({ minWidth: 768 })
    $('.heightLinePO09').heightLine({ minWidth: 768 })
    $('.heightLinePO10').heightLine({ minWidth: 768 })
    $('.heightLinePO11').heightLine({ minWidth: 768 })
    $('.heightLinePO12').heightLine({ minWidth: 768 })
    $('.heightLinePO13').heightLine({ minWidth: 768 })
    $('.heightLinePO14').heightLine({ minWidth: 768 })
    $('.heightLinePT01').heightLine({ minWidth: 768, maxWidth: 959 })
    $('.heightLinePT02').heightLine({ minWidth: 768, maxWidth: 959 })
    $('.heightLineSlick01').heightLine({})
    $('.heightLineSlick02').heightLine({})
  }, 1000)
})(jQuery)

/*--------------------------------------------------------------------------*
 *
 *  gnavi
 *
 *--------------------------------------------------------------------------*/
;(function ($) {
  $(window).on({
    scroll: function () {
      abi = $(window).scrollTop()
    },
  })

  $(window).scroll(function () {
    if ($('#visual01').offset().top < abi) {
      $('body').addClass('activeFix')
    } else {
      $('body').removeClass('activeFix')
    }
  })

  $(window).scroll(function () {
    if ($('#visual01').offset().top < abi) {
      $('body').addClass('activeFix02')
    } else {
      $('body').removeClass('activeFix02')
    }
  })

  jQuery(window).scroll()

  $('.naviBase01').clone().appendTo('.naviSP')
  // $('.navi01').clone().appendTo('.fixNavi01')
})(jQuery)

/*--------------------------------------------------------------------------*
 *
 *  loading
 *
 *--------------------------------------------------------------------------*/
;(function ($) {
  function loadingBasic01() {
    $('.loader01').fadeOut(400)
    setTimeout(function () {
      $('body').addClass('loading01Done')
    }, 100)
    setTimeout(function () {
      $('.loading01Parts02').fadeOut(200)
    }, 100)
    setTimeout(function () {
      $('body').addClass('loading01Out')
    }, 600)
    setTimeout(function () {
      $('.loading01Parts01').fadeOut(0)
    }, 3000)
  }

  $(window).load(function () {
    loadingBasic01()
  })

  setTimeout(loadingBasic01, 100000)
})(jQuery)

/*--------------------------------------------------------------------------*
 *
 *  account table
 *
 *--------------------------------------------------------------------------*/
;(function ($) {
  $('.tableCellHover01').mouseover(function (e) {
    $('.tableCellHover01').addClass('hover01')
  })
  $('.tableCellHover01').mouseout(function (e) {
    $('.tableCellHover01').removeClass('hover01')
  })
  $('.tableCellHover02').mouseover(function (e) {
    $('.tableCellHover02').addClass('hover01')
  })
  $('.tableCellHover02').mouseout(function (e) {
    $('.tableCellHover02').removeClass('hover01')
  })
  $('.tableCellHover03').mouseover(function (e) {
    $('.tableCellHover03').addClass('hover01')
  })
  $('.tableCellHover03').mouseout(function (e) {
    $('.tableCellHover03').removeClass('hover01')
  })
  $('.tableCellHover04').mouseover(function (e) {
    $('.tableCellHover04').addClass('hover01')
  })
  $('.tableCellHover04').mouseout(function (e) {
    $('.tableCellHover04').removeClass('hover01')
  })
})(jQuery)

/*--------------------------------------------------------------------------*
 *
 *  toggle
 *
 *--------------------------------------------------------------------------*/
;(function ($) {
  var flg = 'close'
  $('.toggleCommon01Btn').click(function () {
    $(this)
      .closest('.toggleCommon01Wrap')
      .children('.toggleCommon01Contents')
      .slideToggle(200)
    $(this).toggleClass('active')
    $(this).closest('.toggleCommon01Wrap').toggleClass('active')
    if (flg == 'close') {
      flg = 'open'
    } else {
      flg = 'close'
    }
  })
})(jQuery)
;(function ($) {
  var $btn = $('.toggleCommon02Btn')
  var windowWidth = $(window).width()
  var windowSm = 767

  $btn.click(function () {
    var index = $(this).closest('li').index()
    if ($(this).hasClass('active')) {
    } else {
      $(this)
        .parents('.toggleCommon02Wrap')
        .find('.toggleCommon02Btn')
        .removeClass('active')
      $(this).addClass('active')
      $(this)
        .parents('.toggleCommon02Main')
        .children('li')
        .find('.toggleCommon02Contents')
        .slideUp(100)
      $(this)
        .parents('.toggleCommon02Main')
        .children('li')
        .eq(index)
        .find('.toggleCommon02Contents')
        .slideDown(100)
      $(this)
        .parents('.toggleCommon02Wrap')
        .find('.toggleCommon02Sub')
        .children('li')
        .slideUp(0)
        .eq(index)
        .slideDown(100)
      setTimeout(
        $.proxy(function () {
          if (windowWidth <= windowSm) {
            var offset = $(this).offset().top - 55
            $('html,body').animate({ scrollTop: offset }, 300, 'swing')
          }
        }, this),
        100,
      )
    }
  })
})(jQuery)
;(function ($) {
  var windowWidth = $(window).width()
  var windowSm = 767

  var flg = 'close'
  $('.toggleCommon03Btn').click(function () {
    $(this)
      .closest('.toggleCommon03Wrap')
      .children('.toggleCommon03Contents')
      .toggleClass('active')
    $(this).toggleClass('active')
    $(this).closest('.toggleCommon03Wrap').toggleClass('active')
    if (flg == 'close') {
      flg = 'open'
    } else {
      flg = 'close'
      setTimeout(
        $.proxy(function () {
          if (windowWidth <= windowSm) {
            var offset = $(this).offset().top - 405
            $('html,body').animate({ scrollTop: offset }, 300, 'swing')
          }
        }, this),
        50,
      )
    }
  })
})(jQuery)

/*--------------------------------------------------------------------------*
 *
 *  tab
 *
 *--------------------------------------------------------------------------*/

// PC・スマホタブのみSP時切り替え
$(function () {
  if(window.matchMedia("(max-width: 768px)").matches){

     if($('.tabCommon01Btn01.is-switch > li').hasClass('current')) {
      $('.tabCommon01Btn01.is-switch > li:first-child').removeClass('current');
      $('.tabCommon01Contents01.is-switch > li:first-child').removeClass('current').hide();

      $('.tabCommon01Btn01.is-switch > li:last-child').addClass('current');
      $('.tabCommon01Contents01.is-switch > li:last-child').fadeIn(0).addClass('current');
    } 

}
});

;(function ($) {
  var $btn = $('.tabCommon01Btn01 > li')

  $btn.click(function () {
    var index = $(this)
      .parents('.tabCommon01Wrap01')
      .find('.tabCommon01Btn01')
      .children('li')
      .index(this)
    if ($(this).hasClass('current')) {
    } else {
      $(this)
        .parents('.tabCommon01Wrap01')
        .find('.tabCommon01Btn01')
        .children('li')
        .removeClass('current')
      $(this).addClass('current')
      $(this)
        .parents('.tabCommon01Wrap01')
        .find('.tabCommon01Contents01')
        .children('li')
        .removeClass('current')
        .hide()
        .eq(index)
        .fadeIn(0)
        .addClass('current')
    }
  })
})(jQuery)

/*--------------------------------------------------------------------------*
 *
 *  タブ切り替え
 *
 *--------------------------------------------------------------------------*/
;(function ($) {
  $('.tabSwitchBtn li').click(function () {
    var index = $('.tabSwitchBtn li').index(this)
    $('.tabSwitchBtn li').removeClass('current')
    $('.tabSwitchBtn li').eq(index).addClass('current')

    $.when($('.tabSwitchTgt').removeClass('current')).done(function () {
      $('.tabSwitchTgt').eq(index).addClass('current')
    })
  })
})(jQuery)

/*--------------------------------------------------------------------------*
 *
 *  toggleBtnTable
 *
 *--------------------------------------------------------------------------*/
;(function ($) {
  $('.toggleBtnTable').on('click', function () {
    $(this)
      .prev('.toggleTgtTable')
      .each(function (i) {
        $(this).fadeToggle(240)
      })
    $(this).toggleClass('is-opened')
  })
})(jQuery)

/*--------------------------------------------------------------------------*
 *
 *  mobile menu accordion
 *
 *--------------------------------------------------------------------------*/

$('.navi01List03-item-hasinner').click(function () {
  $(this).next('.navi-inner-list01').slideToggle(200)
  $(this).toggleClass('is-open')
})

/*--------------------------------------------------------------------------*
 *
 *  scroll
 *
 *--------------------------------------------------------------------------*/

$(function () {
  // スクロールのドラッグ有効化
  jQuery.prototype.mousedragscrollable = function () {
    let target
    $(this).each(function (i, e) {
      $(e).mousedown(function (event) {
        event.preventDefault()
        target = $(e)
        $(e).data({
          down: true,
          move: false,
          x: event.clientX,
          y: event.clientY,
          scrollleft: $(e).scrollLeft(),
          scrolltop: $(e).scrollTop(),
        })
        return false
      })
      $(e).click(function (event) {
        if ($(e).data('move')) {
          return false
        }
      })
    })
    $(document)
      .mousemove(function (event) {
        if ($(target).data('down')) {
          event.preventDefault()
          let move_x = $(target).data('x') - event.clientX
          let move_y = $(target).data('y') - event.clientY
          if (move_x !== 0 || move_y !== 0) {
            $(target).data('move', true)
          } else {
            return
          }
          $(target).scrollLeft($(target).data('scrollleft') + move_x)
          $(target).scrollTop($(target).data('scrolltop') + move_y)
          return false
        }
      })
      .mouseup(function (event) {
        $(target).data('down', false)
        return false
      })
  }

  $('[data-scroll="drag"]').mousedragscrollable()
})

/*--------------------------------------------------------------------------*
 *
 *  日付取得
 *
 *--------------------------------------------------------------------------*/
window.addEventListener('load', function () {
  let today = new Date()
  let year = today.getFullYear()
  let month = today.getMonth() + 1
  let target = document.querySelectorAll('[data-date="today"]')

  for (var i = 0; i < target.length; i++) {
    target[i].innerHTML = year + '年' + month + '月'
  }
})

/*--------------------------------------------------------------------------*
 *
 *  日付取得_en
 *
 *--------------------------------------------------------------------------*/
window.addEventListener('load', function () {
 const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
 let today = new Date();
 let year = today.getFullYear()
 let month_name = months[today.getMonth()]
 let day = new Date(today.getFullYear(), today.getMonth() + 1, 0) 
 day = `${day.getDate().toString().padStart(2, '0')}`.replace(/\n|\r/g, '');

 let target = document.querySelectorAll('[data-date_en="today"]')

  for (var i = 0; i < target.length; i++) {
    target[i].innerHTML =  month_name + ' ' + day + ',' + ' ' + year + '.'
  }
})

/*--------------------------------------------------------------------------*
 *
 *  cookie
 *
 *--------------------------------------------------------------------------*/
/**
 * cookieconsentが有効な場合はクッキー同意の画面を非表示とする
 */
$(document).ready(function () {
  var consent_flag = false;
  var cookies = document.cookie; //全てのcookieを取り出して
  var cookiesArray = cookies.split(';'); // ;で分割し配列に

  for (var c of cookiesArray) {
    //一つ一つ取り出して
    var cArray = c.split('='); //さらに=で分割して配列に
    if (cArray[0].match(/cookieconsent/)) {
      // 取り出したいkeyと合致したら。空白が入ることがあるので正規表現
      //console.log(cArray);  // [key,value]
      consent_flag = true;
    }
  }

  if (consent_flag) {
    $('.cookieMenu').hide();
  } else {
    $('.cookieMenu').show();
  }
});

/**
 * クッキー利用に同意するボタンが押されたときにcookieconsentをセットする
 */
$('.cookieMenuInner')
  .find('.cookieMenuBtn')
  .click(function (event) {
    var btn = $(event.currentTarget); // 呼び出すときに使われたボタンを取得
    var data = btn.data('cookie'); //data-cookie
    if (data == 'btn') {
      // クッキー利用に同意するボタンが押された
      document.cookie = 'cookieconsent=true; max-age=7776000; path=/;'; // クッキーをセット。有効期限90日=60*60*24*90
    }
    //console.log(data);
});

/*--------------------------------------------------------------------------*
 *
 *  cookieBtn
 *
 *--------------------------------------------------------------------------*/
// ボタンクリック時 非表示
$(function () {
  $('[data-cookie="btn"]').click(function () {
    $('[data-cookie="box"]').addClass("is-active");
  });
});

/*--------------------------------------------------------------------------*
 *
 *  accordion 汎用
 *
 *--------------------------------------------------------------------------*/
$(function () {
  $(document).on('click', '[data-toggle="buttonA"]', function (event) {
    $(this).closest('[data-toggle="boxA"]').find('[data-toggle="targetA"]').slideToggle();
    $(this).closest('[data-toggle="boxA"]').find('[data-toggle="arrowA"]').toggleClass('is-open');
  });
});

/*--------------------------------------------------------------------------*
 *
 *  modal (画像タップで拡大表示)
 *
 *--------------------------------------------------------------------------*/
$(function () {
  $('.modalViewerImg').click(function () {
    $('.modalViewerItem').html($(this).prop('outerHTML'));
    $('.modalCommonBg,.modalViewerInner').fadeIn(200);
  });
  $('.modalViewerClose').click(function () {
    $('.modalCommonBg,.modalViewerInner').fadeOut(200);
  });
});

/*--------------------------------------------------------------------------*
 *
 *  modal (MobileSide)
 *
 *--------------------------------------------------------------------------*/
$(function () {
  $('.modalViewerMobileSideImg').click(function () {
    $('.modalViewerItem').html($(this).prop('outerHTML'));
    $('.modalViewerInner').addClass('typeMobileSide');
    $('.modalCommonBg,.modalViewerInner').fadeIn(200);
  });
  $('.modalViewerClose').click(function () {
    $('.modalCommonBg,.modalViewerInner').fadeOut(200, function () {
        $('.modalCommonInner,.modalViewerInner').removeClass('typeMobileSide');
      });
  });
});

/*--------------------------------------------------------------------------*
 *
 *  modal (tablet)
 *
 *--------------------------------------------------------------------------*/
$(document).ready(function () {
  if (window.matchMedia('(min-width: 769px)').matches) {
    $('.modalViewerTabletImg').click(function () {
      $('.modalViewerItem').html($(this).prop('outerHTML'));
      $('.modalViewerInner').addClass('typeTablet');
      $('.modalCommonBg,.modalViewerInner').fadeIn(200);
    });
    $('.modalViewerClose').click(function () {
      $('.modalCommonBg,.modalViewerInner').fadeOut(200, function () {
        $('.modalCommonInner,.modalViewerInner').removeClass('typeTablet');
      });
      return false;
    });
  }
});

/*--------------------------------------------------------------------------*
 *
 *  toggleListBox もっと見るボタン
 *
 *--------------------------------------------------------------------------*/
$(function () {
  $('[data-switch="button"]').on('click', function (event) {
    $(this).closest('[data-switch="box"]').find('[data-switch="target"]').toggleClass('active');

    if ($(this).text() === '閉じる') {
      $(this).text('もっと見る');
    } else {
      $(this).text('閉じる');
    }
  });
});

/*--------------------------------------------------------------------------*
 *
 *  loading修正
 *
 *--------------------------------------------------------------------------*/
$(window).on('load',function(){
  $(".loading").addClass("is-loaded");
  $("body").addClass("is-loaded");
});
$(function() {
  setTimeout('stopload()', 10000);
});
function stopload() {
  $(".loading").addClass("is-loaded");
  $("body").addClass("is-loaded");
}

/*--------------------------------------------------------------------------*
 *
 *  アンカーリンク遷移調整
 *
 *--------------------------------------------------------------------------*/
$(window).on('load', function () {
  var lochref = window.location.href;
  if (lochref.indexOf('#') > -1) {
    var anchor = lochref.slice(lochref.indexOf('#'));
    var targetElement = $(anchor);

    if (targetElement.length && targetElement.hasClass('structureCommon02Box')) {
      window.setTimeout(function () {
        $('html, body').animate({ scrollTop: targetElement.offset().top }, 300);
      }, 300)
    } else {
      if (window.matchMedia('(max-width: 767px)').matches){
        window.setTimeout(function () {
        $('html, body').animate({ scrollTop: targetElement.offset().top - 85 }, 300);
      }, 300)
      } else if (window.matchMedia('(min-width:768px)').matches){
        window.setTimeout(function () {
        $('html, body').animate({ scrollTop: targetElement.offset().top - 130 }, 300);
      }, 300)
      }
    }
  }
});

/*--------------------------------------------------------------------------*
 *
 *  MT4/MT5ご利用ガイド SP版タブ
 *
 *--------------------------------------------------------------------------*/
$(function () {
  $('[data-guide="btn"]').click(function () {
    var num = $('[data-guide="btn"]').index(this);
    $(this).closest('[data-guide="btn_box"]').next('[data-guide="contents"]').find('[data-guide="tgt"]').removeClass('is-show');
    $('[data-guide="tgt"]').eq(num).addClass('is-show');
  });
});

/*--------------------------------------------------------------------------*
 *
 *  検索窓ボタン
 *
 *--------------------------------------------------------------------------*/
$(function () {
  $(document).on('click', '[data-toggle="search_button_wrap"]', function (event) {
      $(this).closest('[data-toggle="search_box"]').toggleClass('is-dark');
      $(this).closest('[data-toggle="search_box"]').find('[data-toggle="search_target"]').slideToggle(180);
      $(this).closest('[data-toggle="search_box"]').find('[data-toggle="search_target"]').toggleClass('is-open');
      $(this).closest('[data-toggle="search_box"]').find('[data-toggle="search_button"]').toggleClass('is-open');
      $(this).closest('[data-toggle="search_box"]').find('[data-toggle="search_button_wrap"]').toggleClass('is-open');
      $(this).closest('[data-toggle="search_box"]').find('[data-toggle="search_icon"]').toggleClass('is-open');
    return false;
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest('[data-toggle="search_target"]').length) {
      $('[data-toggle="search_box"]').removeClass('is-dark');
      $('[data-toggle="search_box"]').find('[data-toggle="search_target"]').slideUp(180);
      $('[data-toggle="search_box"]').find('[data-toggle="search_button"]').removeClass('is-open');
      $('[data-toggle="search_box"]').find('[data-toggle="search_button_wrap"]').removeClass('is-open');
      $('[data-toggle="search_box"]').find('[data-toggle="search_icon"]').addClass('is-open');
    }
  });

  $('[data-toggle="search_hover"]').hover(
    function(){
      $('[data-toggle="search_box"]').removeClass('is-dark');
      $('[data-toggle="search_box"]').find('[data-toggle="search_target"]').slideUp(180);
      $('[data-toggle="search_box"]').find('[data-toggle="search_button"]').removeClass('is-open');
      $('[data-toggle="search_box"]').find('[data-toggle="search_button_wrap"]').removeClass('is-open');
      $('[data-toggle="search_box"]').find('[data-toggle="search_icon"]').addClass('is-open');
    },
    function(){
    }
  );
});

/*--------------------------------------------------------------------------*
 *
 *  img scale for retina size
 *
 *--------------------------------------------------------------------------*/
// This script is designed for resizing images to support Retina displays.
// It dynamically adjusts the sizes of images tagged with a specific data attribute (data-img="scale")
// to ensure that images look sharp and clear on high-resolution screens.

window.onload = function () {
  // Select all images with the data-img="scale" attribute
  const images = document.querySelectorAll('img[data-img="scale"]');

  images.forEach((image) => {
    // Ensure the image has been fully loaded before resizing
    if (image.complete) {
      resizeImage(image);
    } else {
      // If the image is not yet loaded, wait for it to load completely before resizing
      image.onload = () => {
        resizeImage(image);
      };
    }
  });

  // Function to resize the image to half its original width and height
  function resizeImage(image) {
    // Retrieve the original size of the image
    const originalWidth = image.naturalWidth;
    const originalHeight = image.naturalHeight;

    // Set the new size to half of the original, adjusting for Retina displays
    image.width = originalWidth / 2;
    image.height = originalHeight / 2;
  }
};

/*--------------------------------------------------------------------------*
 *
 *  取引実績タブ data-table
 *
 *--------------------------------------------------------------------------*/
$(window).on('load', function () {
  if ($('[data-table="wrapper"]').length) {
    $('[data-table="button"]').on('click', function () {
      var buttons = $(this).closest('[data-table="wrapper"]').find('[data-table="button"]');
      var boxes = $(this).closest('[data-table="wrapper"]').find('[data-table="container"]').find('[data-table="box"]');
      var index = $(this).closest('[data-table="wrapper"]').find('[data-table="button"]').index(this);

      buttons.removeClass('is-active');
      $(this).addClass('is-active');
      boxes.hide();
      boxes.eq(index).fadeIn(0);
      boxes.removeClass('is-active');
      boxes.eq(index).addClass('is-active');
    });
  }
});
/*--------------------------------------------------------------------------*
 *
 *  取引実績棒グラフ data-chart
 *
 *--------------------------------------------------------------------------*/
$('[data-chart-dollar="button"]').on("click", function () {
  $('[data-chart-dollar="button"]').toggleClass("is-active");
  if (!$('[data-chart-dollar="input"]').prop("is-active")) {
    $('[data-chart-dollar="button"] [data-chart-dollar="input"]').prop("is-active", true);
  } else {
    $('[data-chart-dollar="button"] [data-chart-dollar="input"]').prop("is-active", false);
  }
});

$('[data-chart-lb="button"]').on("click", function () {
  $('[data-chart-lb="button"]').toggleClass("is-active");
  if (!$('[data-chart-lb="input"]').prop("is-active")) {
    $('[data-chart-lb="button"] [data-chart-lb="input"]').prop("is-active", true);
  } else {
    $('[data-chart-lb="button"] [data-chart-lb="input"]').prop("is-active", false);
  }
});

$('[data-chart-gold="button"]').on("click", function () {
  $('[data-chart-gold="button"]').toggleClass("is-active");
  if (!$('[data-chart-gold="input"]').prop("is-active")) {
    $('[data-chart-gold="button"] [data-chart-gold="input"]').prop("is-active", true);
  } else {
    $('[data-chart-gold="button"] [data-chart-gold="input"]').prop("is-active", false);
  }
});
/*--------------------------------------------------------------------------*
 *
 *  目次下線処理
 *
 *--------------------------------------------------------------------------*/
$(document).ready(function(){
    var parent = $('.linkCommonChildWrap').closest('.agenda01Contents01');
    
    if (parent.find('.linkCommonChildWrap').length > 0) {
        parent.addClass('addBorder');
    }
});