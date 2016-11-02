;
(function($, window, document, undefined) {

    "use strict";

    var pluginName = "fakeLoader",
        defaults = {
            timeToHide: 1200,
            manual: false,
            pos: 'fixed',
            top: '0px',
            left: '0px',
            width: '100%',
            height: '100%',
            zIndex: '999',
            bgColor: '#2ecc71',
            spinner: 'spinner7',
            imagePath: ''
        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
        return this;
    }

    $.extend(Plugin.prototype, {
        init: function() {
            var vm = this;

            var initStyles = {
                'position': vm.settings.pos,
                'width': vm.settings.width,
                'height': vm.settings.height,
                'top': vm.settings.top,
                'left': vm.settings.left,
                'backgroundColor': vm.settings.bgColor,
                'zIndex': vm.settings.zIndex
            };

            var el = $(vm.element);

            //Customized Spinners
            var spinner01 = '<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>';
            var spinner02 = '<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';
            var spinner03 = '<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>';
            var spinner04 = '<div class="fl spinner4"></div>';
            var spinner05 = '<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>';
            var spinner06 = '<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>';
            var spinner07 = '<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>';

            //Apply styles
            el.css(initStyles).hide();

            el.each(function() {
                var a = vm.settings.spinner;
                switch (a) {
                    case 'spinner1':
                        el.html(spinner01);
                        break;
                    case 'spinner2':
                        el.html(spinner02);
                        break;
                    case 'spinner3':
                        el.html(spinner03);
                        break;
                    case 'spinner4':
                        el.html(spinner04);
                        break;
                    case 'spinner5':
                        el.html(spinner05);
                        break;
                    case 'spinner6':
                        el.html(spinner06);
                        break;
                    case 'spinner7':
                        el.html(spinner07);
                        break;
                    default:
                        el.html(spinner01);
                }

                //Add customized loader image

                if (vm.settings.imagePath != '') {
                    el.html('<div class="fl"><img src="' + vm.settings.imagePath + '"></div>');
                }
                centerLoader();
            });

            if (!vm.settings.manual) {
                vm.start();
                if (vm.settings.timeToHide !== false) {
                    setTimeout(function() {
                        vm.stop();
                    }, vm.settings.timeToHide);
                }
            }
        },
        start: function() {
            $(this.element).show();
        },
        stop: function() {
            $(this.element).fadeOut('slow');
        }
    });

    $.fn[pluginName] = function(options) {
        var result,
            restArgs = Array.prototype.slice.call(arguments, 1);

        this.each(function() {
            var instance = $.data(this, "plugin_" + pluginName);
            if (!instance) {
                instance = new Plugin(this, options);
                $.data(this, "plugin_" + pluginName, instance);

                // When the first argument matches the name of a method
            } else if (typeof options === "string" && // method name
                options[0] !== "_" && // protect private methods
                typeof instance[options] === "function") {

                // invoke the method with the rest arguments
                result = instance[options].apply(instance, restArgs);
                if (result !== undefined) {
                    return false; // break the $.fn.each() iteration
                }
                return result;
            }
        });

        this.start = function() {
            this.each(function(a, b) {
                $(b).data("plugin_" + pluginName).start();
            });
        };

        this.stop = function() {
            this.each(function(a, b) {
                $(b).data("plugin_" + pluginName).stop();
            });
        };

        return result !== undefined ? result : this;
    };

    //Center Spinner
    function centerLoader() {

        var winW = $(window).width();
        var winH = $(window).height();

        var spinnerW = $('.fl').outerWidth();
        var spinnerH = $('.fl').outerHeight();

        $('.fl').css({
            'position': 'absolute',
            'left': (winW / 2) - (spinnerW / 2),
            'top': (winH / 2) - (spinnerH / 2)
        });

    }

    $(window).load(function() {
        centerLoader();
        $(window).resize(function() {
            centerLoader();
        });
    });
})(jQuery, window, document);
