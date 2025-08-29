$(window).on('load', function () {

    $('.scroll').hide();

    const ASK_BID_LIST = [
        '#xem-std-EURUSD-Ask', '#xem-std-EURUSD-Bid',
        '#xem-std-USDJPY-Ask', '#xem-std-USDJPY-Bid',
        '#xem-std-EURJPY-Ask', '#xem-std-EURJPY-Bid',
        '#xem-std-EURGBP-Ask', '#xem-std-EURGBP-Bid',
        '#xem-std-GBPJPY-Ask', '#xem-std-GBPJPY-Bid',
        '#xem-zero-EURUSD-Ask', '#xem-zero-EURUSD-Bid',
        '#xem-zero-USDJPY-Ask', '#xem-zero-USDJPY-Bid',
        '#xem-zero-EURJPY-Ask', '#xem-zero-EURJPY-Bid',
        '#xem-zero-EURGBP-Ask', '#xem-zero-EURGBP-Bid',
        '#xem-zero-GBPJPY-Ask', '#xem-zero-GBPJPY-Bid',
        '#xem-kiwami-EURUSD-Ask', '#xem-kiwami-EURUSD-Bid',
        '#xem-kiwami-USDJPY-Ask', '#xem-kiwami-USDJPY-Bid',
        '#xem-kiwami-EURJPY-Ask', '#xem-kiwami-EURJPY-Bid',
        '#xem-kiwami-EURGBP-Ask', '#xem-kiwami-EURGBP-Bid',
        '#xem-kiwami-GBPJPY-Ask', '#xem-kiwami-GBPJPY-Bid',
    ];
    const SPREAD_LIST = [
        '#xem-std-EURUSD-Spread', '#xem-std-USDJPY-Spread', '#xem-std-EURJPY-Spread', '#xem-std-EURGBP-Spread', '#xem-std-GBPJPY-Spread',
        '#xem-zero-EURUSD-Spread', '#xem-zero-USDJPY-Spread', '#xem-zero-EURJPY-Spread', '#xem-zero-EURGBP-Spread', '#xem-zero-GBPJPY-Spread',
        '#xem-kiwami-EURUSD-Spread', '#xem-kiwami-USDJPY-Spread', '#xem-kiwami-EURJPY-Spread', '#xem-kiwami-EURGBP-Spread', '#xem-kiwami-GBPJPY-Spread',
    ];

    var prev_data = {};
    var prev_class = {};

    // var socket = io("http://test.sync.fxplus.com/", { path: '/realtime/', transports: ["websocket"], query: 'broker=xem' });
    var socket = io("https://price-front.p2t.sg/", { path: '/realtime/', transports: ["websocket"], query: 'broker=xem' });

    socket.on('xem_update', (data) => {
        $('.scroll').hide();
        if (data == null) {
            return;
        }
        var ary = $.makeArray(data);
        $.each(ary[0], function (key, value) {
            let key_ary = key.split('-');
            key_ary[0] = key_ary[0].toLowerCase();
            if (key_ary[1] == 'zro') {
                key_ary[1] = 'zero';
            } else if (key_ary[1] == 'kwm') {
                key_ary[1] = 'kiwami';
            }
            let key_name = key_ary.join('-');
            if ($('#' + key_name).length) {
                reload(value, key_name);
            }
        });
    });

    socket.on('xem_init', (data) => {
        $('.scroll').hide();
        if (data == null) {
            return;
        }
        var ary = $.makeArray(data);
        $.each(ary[0], function (key, value) {
            let key_ary = key.split('-');
            key_ary[0] = key_ary[0].toLowerCase();
            if (key_ary[1] == 'zro') {
                key_ary[1] = 'zero';
            } else if (key_ary[1] == 'kwm') {
                key_ary[1] = 'kiwami';
            }
            let key_name = key_ary.join('-');
            if ($('#' + key_name).length) {
                reload(value, key_name);
            }
        });
        if (data['status'] == 'close') {
            close();
        }
    });

    socket.on('xem_close', (data) => {
        close();
    });

    function reload(spreadInfo, spreadItem) {
        let ask;
        let bid;
        let val;

        if (spreadInfo['ask']) {
            ask = toFixed(spreadInfo['ask'] - 0, 6);
        } else {
            ask = toFixed(0, 6);
        }
        $('#' + spreadItem + '-Ask').text(ask);
        setColor(spreadItem + '-Ask', ask);

        if (spreadInfo['bid']) {
            bid = toFixed(spreadInfo['bid'] - 0, 6);
        } else {
            bid = toFixed(0, 6);
        }
        $('#' + spreadItem + '-Bid').text(bid);
        setColor(spreadItem + '-Bid', bid);

        if (spreadInfo['val']) {
            val = spreadInfo['val'] - 0;
        } else {
            val = 0;
        }
        val = number_format(val, 1);
        $('#' + spreadItem + '-Spread').text(val);
        setSpreadColor(spreadItem + '-Spread', val);

        // if ($('.bkFlash.fcRed03').length > 0) {
        //     $('.bkFlash.fcRed03').stop();
        //     // $('.bkFlash.fcRed03').css('background-color', '#FFECEC');
        //     $('.bkFlash.fcRed03').css('background-color', 'rgba(255,38,38,0.5)');
        //     $('.bkFlash.fcRed03').animate({ 'backgroundColor': 'transparent' }, 1000);
        // }
        // if ($('.bkFlash.fcGreen01').length > 0) {
        //     $('.bkFlash.fcGreen01').stop();
        //     // $('.bkFlash.fcGreen01').css('background-color', '#E6EDFF');
        //     $('.bkFlash.fcGreen01').css('background-color', 'rgba(35,132,54,0.5)');
        //     $('.bkFlash.fcGreen01').animate({ 'backgroundColor': 'transparent' }, 1000);
        // }
    }

    // Ask/Bidの文字色／背景色の設定
    function setColor(target, value) {
        // if (prev_data[target] == null || prev_data[target] == value) {
        if (!prev_data[target]) {
            prev_data[target] = value;
            return;
        }
        if (prev_data[target] == value) {
            return;
        }
        $('#' + target).stop();
        $('#' + target).removeClass('fcRed03').removeClass('fcGreen01').removeClass('bkFlash').removeAttr('style');
        if (prev_data[target] > value) {
            $('#' + target).addClass('fcRed03 bkFlash');
            // if (prev_class[target] == null || prev_class[target] == 'fcGreen01') {
            //     $('#' + target).addClass('bkFlash');
            // }
            $('#' + target).css('background-color', 'rgba(255,38,38,0.5)');
            $('#' + target).animate({ 'backgroundColor': 'transparent' }, 1000);
            prev_class[target] = 'fcRed03';
        } else {
            $('#' + target).addClass('fcGreen01 bkFlash');
            // if (prev_class[target] == null || prev_class[target] == 'fcRed03') {
            //     $('#' + target).addClass('bkFlash');
            // }
            $('#' + target).css('background-color', 'rgba(35,132,54,0.5)');
            $('#' + target).animate({ 'backgroundColor': 'transparent' }, 1000);
            prev_class[target] = 'fcGreen01';
        }
        prev_data[target] = value;
    }

    // スプレッドの文字色／背景色の設定
    function setSpreadColor(target, value) {
        if (!prev_data[target]) {
            prev_data[target] = value;
            return;
        }
        if (prev_data[target] == value) {
            return;
        }
        $('#' + target).stop();
        $('#' + target).removeClass('fcRed03').removeClass('fcGreen01').removeClass('bkFlash').removeAttr('style');
        if (prev_data[target] > value) {
            $('#' + target).addClass('fcGreen01 bkFlash');
            $('#' + target).css('background-color', 'rgba(35,132,54,0.5)');
            $('#' + target).animate({ 'backgroundColor': 'transparent' }, 1000);
            prev_class[target] = 'fcGreen01';
        } else {
            $('#' + target).addClass('fcRed03 bkFlash');
            $('#' + target).css('background-color', 'rgba(255,38,38,0.5)');
            $('#' + target).animate({ 'backgroundColor': 'transparent' }, 1000);
            prev_class[target] = 'fcRed03';
        }
        prev_data[target] = value;
    }

    function close() {
        $('.scroll').show();
        for (const elem of ASK_BID_LIST) {
            $(elem).stop().removeClass().removeAttr('style');
        }
        for (const elem of SPREAD_LIST) {
            $(elem).stop().removeClass().removeAttr('style').text('-');
        }
    }

    function toFixed($v, $n) {
        if ($v > 1000)
            $a = 4;
        else if ($v > 100)
            $a = 3;
        else if ($v > 10)
            $a = 2;
        else
            $a = 1;
        return number_format($v, $n - $a);
    }

    function number_format(number, decimals, decPoint, thousandsSep) { // eslint-disable-line camelcase
        //  discuss at: http://locutus.io/php/number_format/
        // original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
        // improved by: Kevin van Zonneveld (http://kvz.io)
        // improved by: davook
        // improved by: Brett Zamir (http://brett-zamir.me)
        // improved by: Brett Zamir (http://brett-zamir.me)
        // improved by: Theriault (https://github.com/Theriault)
        // improved by: Kevin van Zonneveld (http://kvz.io)
        // bugfixed by: Michael White (http://getsprink.com)
        // bugfixed by: Benjamin Lupton
        // bugfixed by: Allan Jensen (http://www.winternet.no)
        // bugfixed by: Howard Yeend
        // bugfixed by: Diogo Resende
        // bugfixed by: Rival
        // bugfixed by: Brett Zamir (http://brett-zamir.me)
        //  revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
        //  revised by: Luke Smith (http://lucassmith.name)
        //    input by: Kheang Hok Chin (http://www.distantia.ca/)
        //    input by: Jay Klehr
        //    input by: Amir Habibi (http://www.residence-mixte.com/)
        //    input by: Amirouche
        //   example 1: number_format(1234.56)
        //   returns 1: '1,235'
        //   example 2: number_format(1234.56, 2, ',', ' ')
        //   returns 2: '1 234,56'
        //   example 3: number_format(1234.5678, 2, '.', '')
        //   returns 3: '1234.57'
        //   example 4: number_format(67, 2, ',', '.')
        //   returns 4: '67,00'
        //   example 5: number_format(1000)
        //   returns 5: '1,000'
        //   example 6: number_format(67.311, 2)
        //   returns 6: '67.31'
        //   example 7: number_format(1000.55, 1)
        //   returns 7: '1,000.6'
        //   example 8: number_format(67000, 5, ',', '.')
        //   returns 8: '67.000,00000'
        //   example 9: number_format(0.9, 0)
        //   returns 9: '1'
        //  example 10: number_format('1.20', 2)
        //  returns 10: '1.20'
        //  example 11: number_format('1.20', 4)
        //  returns 11: '1.2000'
        //  example 12: number_format('1.2000', 3)
        //  returns 12: '1.200'
        //  example 13: number_format('1 000,50', 2, '.', ' ')
        //  returns 13: '100 050.00'
        //  example 14: number_format(1e-8, 8, '.', '')
        //  returns 14: '0.00000001'

        number = (number + '').replace(/[^0-9+\-Ee.]/g, '')
        var n = !isFinite(+number) ? 0 : +number
        var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
        var sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
        var dec = (typeof decPoint === 'undefined') ? '.' : decPoint
        var s = ''

        var toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec)
            return '' + (Math.round(n * k) / k)
                .toFixed(prec)
        }

        // @todo: for IE parseFloat(0.55).toFixed(0) = 0;
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || ''
            s[1] += new Array(prec - s[1].length + 1).join('0')
        }

        return s.join(dec)
    }
});
