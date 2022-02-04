/* eslint-disable */
/* prettier-ignore */

/*pr
/*
 * hnt_ui : PC
 * <UPLEAT> UI Dev Team
 * {Oh Young Ju}, {An Se Jung}, {Lee Yun Hee}, Hwang Mi Ae, Kim So Young, Cho Han Sol, {Kang Young Sun}
 * commnet : pc com
 */
(function ($) {
	if (typeof this.hntUI !== 'undefined') return
	
	var Class = {
		$dom: undefined,
		scrollTop: undefined,
		scrollTracking: false,
		docWidth: 0,
		docHeight: 0,
		winHeight: 0,
		winWidth: 0,
		nojq: 'nojq', //해당 클래스 명이 있는 element는 jquery 이벤트를 실행하지 않습니다 //2019.12.12 HC326
		popZIndex: 5000,
		updateJqDom: function () {
			/*dom 업데이트*/
			//console.log('!!!!! updateJqDom');
			var _ = {
				$html: $('html'),
				$wrap: $('#wrap'),
				$quickMenu: $('.right_fixed'),
				$contents: $('.contents'),
				$footer: $('#footer'),
				$popup: $('.lypop_container')
			}

			_.$headerElms = {
				wrap: _.$wrap.find('.gnb_wrap').parent('div')
			}

			_.$stickyElms = {
				tab: _.$contents.find('.js_sticky'), 	//tab menu
				acc: _.$contents.find('.js_acc'), 		//acc menu
				filter: _.$contents.find('.filter_sticky')
			}

			hntUI.$dom = _
		},
    /* 브라우저 체크 */ initBrowserOnce: function initBrowserOnce(a, z) {
			a = navigator.userAgent
			var u = 'unknown',
				x = 'X',
				m = function (r, h) {
					for (var i = 0; i < h.length; i = i + 1) {
						r = r.replace(h[i][0], h[i][1])
					}
					return r
				},
				c = function (i, a, b, c) {
					var r = {
						name: m((a.exec(i) || [u, u])[1], b)
					}
					r[r.name] = true
					r.version = (c.exec(i) || [x, x, x, x])[3]
					if (r.name.match(/safari/) && r.version > 400) {
						r.version = '2.0'
					}
					if (r.name === 'presto') {
						r.version = $.browser.version > 9.27 ? 'futhark' : 'linear_b'
					}
					r.versionNumber = parseFloat(r.version) || 0
					r.versionX = r.version !== x ? (r.version + '').substr(0, 1) : x
					r.className = r.name + r.versionX
					return r
				}
			a = (a.match(/Opera|Navigator|Minefield|KHTML|Chrome/)
				? m(a, [
					[/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/, ''],
					['Chrome Safari', 'Chrome'],
					['KHTML', 'Konqueror'],
					['Minefield', 'Firefox'],
					['Navigator', 'Netscape']
				])
				: a
			).toLowerCase()
			$.browser = $.extend(
				!z ? $.browser : {},
				c(
					a,
					/(camino|chrome|firefox|netscape|konqueror|lynx|msie|opera|safari)/,
					[],
					/(camino|chrome|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(;|dev|rel|\s|$)/
				)
			)
			$.layout = c(
				a,
				/(gecko|konqueror|msie|opera|webkit)/,
				[['konqueror', 'khtml'], ['msie', 'trident'], ['opera', 'presto']],
				/(applewebkit|rv|konqueror|msie)(:|\/|\s)([a-z0-9\.]*?)(;|\)|\s)/
			)
			$.os = {
				name: (/(win|mac|linux|sunos|solaris|iphone)/.exec(navigator.platform.toLowerCase()) || [
					u
				])[0].replace('sunos', 'solaris')
			}
			if (!z) {
				$('html').addClass(
					[$.os.name, $.browser.name, $.browser.className, $.layout.name, $.layout.className].join(
						' '
					)
				)
			}
		},
		initBodyCssOnce: function () {
			/* body에 브라우저 CSS 추가 */
			var agent = navigator.userAgent.toLowerCase()
			if (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) {
				$('body').addClass('msie ie11')
			} else if (
				(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) ||
				agent.indexOf('msie') != -1
			) {
				$('body').addClass('msie ie11').removeClass('ie11');
			}

			if (/Edge\/\d./i.test(navigator.userAgent)) {
				$('body').addClass('msEdge');
			}
		},
		initGnbMotionOnce: function () {
			/* initGnbMotionOnce */
			$(document)
				.on('mouseenter', '.local_menu_wrap .rolling_wrap', function (e) {
					$(this).addClass('on').next('.rolling_wrap_all').addClass('on');
					e.preventDefault();
				}
				)
				.on('mouseleave', '.local_menu_wrap .rolling_wrap_all.on', function (e) {
					$(this).removeClass('on').prev('.rolling_wrap').removeClass('on');
					e.preventDefault();
				})
				.on('blur', '.local_menu_wrap .rolling_wrap_all a', function (e) {
					var $obj = $('.local_menu_wrap .rolling_wrap_all a')
					setTimeout(function () {
						if ($(':focus', $obj).length < 1) {
							$obj.parent('.local_menu_wrap .rolling_wrap_all.on').trigger('mouseleave')
						}
					}, 200);
				})
				.on('mouseenter', '.private_menu>ul>li:first>a', function (e) {
					$(this).addClass('on').next('.my_menu_wrap').addClass('on');
				})
				.on('mouseleave', '.private_menu>ul>li:first', function (e) {
					$(this).find('>a').removeClass('on').next('.my_menu_wrap').removeClass('on');
				})
				.on('blur', '.private_menu>ul>li:first a', function (e) {
					var $obj = $('.private_menu>ul>li:first a')
					setTimeout(function () {
						if ($(':focus', $obj).length < 1) {
							$obj.parents('.private_menu').find('>ul>li:first').trigger('mouseleave')
						}
					}, 200);
				})
				/* .on('click', '.list_special .js_act.more', function (e) { //gnb 오른쪽 ... 더보기 버튼
					if (!$(this).parents('.list_special').next('.list_special_more').hasClass('on')) {
						$(this).parents('.list_special').next('.list_special_more').addClass('on');
					} else {
						$(this).parent('.list_special').next('.list_special_more').removeClass('on');
					}
				})
				.on('click', '.list_special_more .js_act.cls', function (e) { //더보기 창 내 닫기버튼
					if (!$(this).parents('.list_special_more').hasClass('on')) {
						$(this).parents('.list_special_more').addClass('on');
					} else {
						$(this).parent('.list_special_more').removeClass('on');
					}
				}) */
				.on('click', '.gnb_menu_wrap .js_act.btn_menu_all', function (e) {
					if (!$(this).hasClass('on')) {
						$(this).addClass('on').next('.list_total_menu').addClass('on');
						if ($('.list_special_more').hasClass('on')) $('.list_special_more').removeClass('on');
					} else {
						$(this).removeClass('on').next('.list_total_menu').removeClass('on');
					}
					e.preventDefault()
				})
				.on('click', '.list_total_menu.on .js_act.btn_cls', function (e) {
					$(this).parents('.list_total_menu').removeClass('on').prev('.btn_menu_all').removeClass('on');
					e.preventDefault();
				})
				.on('click', '.gnb_menu_wrap .list_total_menu .ly_wrap a', function (e) {
					$(this).parents('.list_total_menu').removeClass('on').prev('.btn_menu_all').removeClass('on');
					e.preventDefault();
				})
		},
		initGnbMenuOnce: function () {
			/* gnb menu */
			$(document)
				.on('mouseenter', '.list_gnb_menu > li', function (e) {
					var target = $(e.currentTarget);
					var oneDepth = target.closest('.list_gnb_menu');
					var twoDepth = target.find('.list_depth2_wrap');
					var space = parseInt(oneDepth.find('> li:first').css('padding-left')) || 0; //라인에서 첫번째 메뉴 간격
					var leftPos = oneDepth.offset().left;
					var $left = parseInt((Class.winWidth - 1200) / 2);

					oneDepth.find('li').removeClass('on');
					target.addClass('on');
					twoDepth.css('opacity', ''); //아래 :hidden 체크 값 해제
					//twoDepth.css({left:-($left+138), right:-($left+417), paddingLeft:($left+138)});

					var isAliveTwoDepth = twoDepth.find('> ul > li').not(':hidden').length > 0

					twoDepth.css({
						width: Class.winWidth > 1200 ? Class.winWidth : Class.docWidth,
						left: -leftPos,
						right: -($left + 417),
						paddingLeft: leftPos - space,
						opacity: isAliveTwoDepth ? 1 : 0 //퍼블과 달리 2뎁스 ul 전부 그려지므로, 라인 숨김 위한
					});

					$('html').toggleClass('menu_2dep', isAliveTwoDepth);
					/* if(target.find('ul').length>0) {
						$('html').addClass('menu_2dep');
          } else {
						$('html').removeClass('menu_2dep');
					} */
				})
				/*.on('blur', '.list_gnb_menu>li > a', function (e) { //1뎁스 후 2뎁스 클릭 시(ex 호텔 > 테마여행 - 성지순례) 닫혀버리므로 삭제 // HC326  2020-05-06
					var $obj = $('.list_gnb_menu>li>a'); 
					setTimeout(function () {
						if ($(':focus', $obj).length < 1) {
							$obj.parents('.list_gnb_menu').trigger('mouseleave')
						}
					}, 0);
				})*/
				.on('mouseleave', '.list_gnb_menu', function (e) {
					$('.list_gnb_menu').find('li').removeClass('on');
					$('html').removeClass('menu_2dep');
				})
				.on('mouseenter', '.list_depth2 > li', function (e) {
					//console.log(Class.winWidth);
					$(this).parent('.list_depth2').find('li').removeClass('on');
					if (Class.winWidth <= 1200) {
						$(this).addClass('on').find('.list_depth3_wrap').css('width', '').find('> ul').css('margin-left', 0)
					} else {
						$(this).addClass('on').find('.list_depth3_wrap').css({
							width: Class.winWidth
						}).find('> ul').css('margin-left', '')
					}
					$('html').addClass('menu_3dep');
				})
				/*.on('blur', '.list_depth2 > li > a', function (e) { //2뎁스간(ex 테마여행 - 허니문 > 골프) 이동 시 닫혀버리므로 삭제 // HC326  2020-05-06
					var $obj = $('.list_depth2 > li > a');
					setTimeout(function () {
						if ($(':focus', $obj).length < 1) {
							$obj.parents('.list_depth2').trigger('mouseleave')
						}
					}, 0); 
				})*/
				.on('mouseleave', '.list_depth2', function (e) {
					$('html').removeClass('menu_3dep')
				})
				.on('mouseenter', '.zeus .gnb_menu_wrap > ul > li', function (e) {
					if (Class.winWidth <= 1200) {
						$(this).addClass('on').siblings().removeClass('on');
					} else {
						var $left = parseInt((Class.winWidth - 1200) / 2);
						$(this).addClass('on').siblings().removeClass('on');
						$(this).find('.list_depth_wrap').css({ left: -($left + 454), right: -$left });
					}

					if ($(this).find('ul').length > 0) {
						$('html').addClass('zeus_menu_2dep');
					} else {
						$('html').removeClass('zeus_menu_2dep');
					}
				})
				/* .on('blur', '.zeus .gnb_menu_wrap > ul a', function (e) { //1뎁스 후 2뎁스 클릭 시 닫혀버리므로 삭제 // HC326  2020-05-06
					var $obj = $('.zeus .gnb_menu_wrap>ul a');
					setTimeout(function () {
						if ($(':focus', $obj).length < 1) {
							$obj.parents('.gnb_menu_wrap').find('>ul').trigger('mouseleave')
						}
					}, 0)
				}) */
				.on('mouseleave', '.zeus .gnb_menu_wrap > ul', function (e) {
					$('.zeus .gnb_menu_wrap>ul').find('li').removeClass('on');
					$('html').removeClass('zeus_menu_2dep');
				});
		},
		initLnbMenuOnce: function () {
			/* lnb menu */
			var $listLnb = $('.lnb .list_lnb')
			$(document).on('click', '.lnb .list_lnb li a', function (e) {
				var $obj = $(this);

				$listLnb.find('li').removeClass('on');
				if (!$obj.parent('li').hasClass('on')) {
					if (!$obj.closest('ul').hasClass('list_lnb')) {
						$obj.parents('li').addClass('on');
						$obj.parent('li').addClass('on').siblings('li').removeClass('on');
					} else {
						$obj.parent('li').addClass('on').siblings('li').removeClass('on');
						$obj.parent('li').siblings('li').find('ul').slideUp(0);
						$obj.siblings('ul').slideDown(0);
					}
				}
				e.preventDefault()
			})
		},
		initStepOnce: function () {
			/* initStepOnce */
			var $stepWrap = $('.js_step_wrap')
			for (var i = 0; i < $stepWrap.length; i++) {
				var $num = $($stepWrap[i]).find('.step>li').length
				$($stepWrap[i]).find('>.step>li').css({ width: 100 / $num + '%' });
			}
		},
		initSortOnce: function () {
			/* filter, sort */
			$(document).on('click', '.list_sort.js_act>a, .list_sort.js_act>li', function (e) {
				var $obj = $(this)
				if (!$obj.hasClass('on')) {
					$obj.addClass('on').siblings().removeClass('on');
				}
				e.preventDefault();
			}).on('click', '.search_field_wrap .btn_cls', function (e) {
				var $obj = $(this)
				if (!$obj.closest('.search_field_wrap').hasClass('on')) {
					$obj.find('span').text('필터 닫기')
					$obj.closest('.search_field_wrap').addClass('on').find('.filter_option').slideDown(0);
				} else {
					$obj.find('span').text('필터 열기')
					$obj.closest('.search_field_wrap').removeClass('on').find('.filter_option').slideUp(0);
				}
				e.preventDefault();
			})
		},
		initTabsCtrlOnce: function () {
			/* tabsCtrl */
			var $tabWrap = $('.js_tabs:not(.v-tabs)')
			var $tabIndex = 1000;
			for (var i = 0; i < $tabWrap.length; i++) {
				$($tabWrap[i]).data('order', $tabIndex++);

				if ($($tabWrap[i]).hasClass('scroll')) {
					var $num = $($tabWrap[i]).find('.tabs>li').length;
					$($tabWrap[i]).children('ul, a').wrapAll('<div class="scroll_wrap"></div>');
				} else {
					$num = $($tabWrap[i]).find('>.tabs>li').length;
				}
				if (!$($tabWrap[i]).hasClass('swiper-container') && !$($tabWrap[i]).hasClass('no_division') && !$($tabWrap[i]).hasClass('place_list')) {
					//$($tabWrap[i]).find('>ul').wrap('<div class="scroll_wrap"></div>');
					//$($tabWrap[i]).append('<a class="prev"></a><a class="next"></a>')
					if ($num == 1) {
						$($tabWrap[i]).addClass('alone');
					} else if ($num > 1) {
						$($tabWrap[i]).find('>.tabs>li').css({ 'width': 100 / $num + '%' });
						if ($($tabWrap[i]).hasClass('scroll')) $($tabWrap[i]).find('.tabs>li').css({ 'width': 100 / $num + '%' });
					}
				}
			}

			$(document).on('click', '.js_tabs:not(.link) .tabs li', function (e) {
				//일반 탭
				var target = $(e.currentTarget);

				if (isNoJQuery(target, '.js_tabs')) return

				var idx = target.index();
				var contentContainer = target.parent().siblings('.panels').length > 0 ? target.parent().siblings('.panels') : target.parents('.scroll_wrap').siblings('.panels');
				var content = contentContainer.find('> .panel:eq(' + idx + ')');

				if (!target.hasClass('disabled')) {
					target.addClass('selected').find('> a').attr('title', '현재 페이지');
					target.siblings().removeClass('selected').find('> a').removeAttr('title');

					content.addClass('selected').siblings().removeClass('selected');

					var stickyTabContainer = target.closest('.js_tabs');
					if (stickyTabContainer.length > 0 && stickyTabContainer.hasClass('js_sticky') && stickyTabContainer.hasClass('fixed')) {
						//$( 'html, body' ).stop().animate({scrollTop:content.offset().top},400);

						if (window.$nuxt !== undefined && window.$nuxt.$fx !== undefined) {
							var thresholdTarget = stickyTabContainer.prev();
							if (thresholdTarget.length > 0)
								window.$nuxt.$fx.scrollTo($('body').get(0), getThresholdPosition(thresholdTarget) - 30, 200)
						}
					}
					
					e.preventDefault();
					e.stopPropagation();
				}
			})
		},
		initShowHideOnce: function () {
			/* showHide */
			$(document).on('click', '.js_show', function (e) {
				var $obj = $(this)
				var $objTagName = $obj.prop('tagName')
				var target = ''
				if ($objTagName == 'A') {
					target = $obj.attr('href')
				} else {
					target = $obj.data('target')
				}
				var $target = null
				//$obj.addClass('on');
				if (typeof target === 'undefined') {
					//$target = $obj
				} else {
					$target = $(target)
					$target.addClass('on')
				}
				e.preventDefault()
			}).on('click', '.js_cls', function (e) {
				$(this).parents('.js_show_wrap').removeClass('on');
				e.preventDefault();
			})
				.on('mouseup', function (e) {
					var container = $('.js_show_wrap.lypop_calendar, .js_show_wrap.lypop_selectPerson')

					if ($(e.target).closest('.q-dialog').length > 0) return; //HC326 20.03.03 항공메인 > 다구간 > 인원선택 팝업 > 경고창 상황에 mouseup 발생 시 닫지 않음

					if (!container.is(e.target) && container.has(e.target).length === 0) {
						//console.log(e.target.className);
						$('.js_show_wrap.lypop_calendar.on, .js_show_wrap.lypop_selectPerson.on').removeClass('on')
					}
				})
		},
		initToggleOnce: function () {
			/* on 토글 */
			$(document).on('click', 'a.js_toggle', function (e) {
				var $anchor = $(this)
				var target = $anchor.attr('href')
				var $target = null
				if (typeof target === 'undefined') {
					//$target = $anchor
				} else {
					$target = $(target)
					if (!$anchor.hasClass('on')) {
						$anchor.addClass('on')
						$target.addClass('on')
					} else {
						$anchor.removeClass('on')
						$target.removeClass('on')
					}
				}
				e.preventDefault()
			}).on('click', '.flight_price .price_tit .btn_open', function (e) {
				$(this)
					.parents('.flight_price')
					.toggleClass('open')
			})
		},
		initSelectBoxOnce: function () {
			/* select_box */
			var $select = $('select.has_sb'); //정대규: 선택자에 .has_sb를 추가함. 웹투어/여행정보에 영향도를 없애기 위함
			$select.each(function () {
				var $obj = $(this);
				if (!$obj.parent().hasClass('iconType')) {
					$obj.sb({ ddCtx: function () { return $(this).closest(".select_item"); } });
				} else {
					$obj.sb({ ddCtx: function () { return $(this).closest(".select_item"); }, optionFormat: function () { return $(this).attr("alt"); } });
				}
			});
		},
		initAccordionOnce: function () {
			/* accordion */
			$(document).on('showAcc', '.js_acc .view', function (e) {
				$(this).closest('.js_acc').find('.view').slideUp(0);
				$(this).slideDown(0);

				var $popObj = $(this).parents('.lypop_wrap');
				if ($popObj.length > 0) {
					setTimeout(function () {
						Class.repositionPopup.call($popObj);
					}, 250);
				}

				e.preventDefault();
				e.stopPropagation();
			}).on('hideAcc', '.js_acc .view', function (e) {
				$(this).closest('.js_acc').find('.view').slideUp(0);

				var $popObj = $(this).parents('.lypop_wrap');
				if ($popObj.length > 0) {
					setTimeout(function () {
						Class.repositionPopup.call($popObj);
					}, 250);
				}

				e.preventDefault();
				e.stopPropagation();
			}).on('showOneAcc', '.js_acc .view', function (e) {
				$(this).slideDown(0);
				if ($(this).parents('.pay_info').length && $(this).closest('.js_acc').hasClass('filter_wrap')) {
					//Class.winHeight = $(window).height();
					var $payRight = $('.pay_info .inr.right');
					var $btnH = $payRight.find('.btn_wrap').outerHeight();
					var $rh = Class.winHeight - ($btnH + 90);

					setTimeout(function () {
						var $filterWrapH = $('.pay_info .js_acc.filter_wrap').outerHeight();
						if ($filterWrapH > $rh) {
							$('.js_acc.filter_wrap').css({ 'height': $rh });
						}
					}, 250);
				}
				var $popObj = $(this).parents('.lypop_wrap');
				if ($popObj.length > 0) {
					setTimeout(function () {
						Class.repositionPopup.call($popObj);
					}, 250);
				}
				e.preventDefault();
				e.stopPropagation();
			}).on('hideOneAcc', '.js_acc .view', function (e) {
				$(this).slideUp(0);
				if ($(this).parents('.pay_info').length && $(this).closest('.js_acc').hasClass('filter_wrap') && !$(this).closest('.js_acc').find('.view.active').length) {
					$(this).closest('.js_acc.filter_wrap').removeAttr('style');
				}
				var $popObj = $(this).parents('.lypop_wrap');
				if ($popObj.length > 0) {
					setTimeout(function () {
						Class.repositionPopup.call($popObj);
					}, 250);
				}
				e.preventDefault();
				e.stopPropagation();
			}).on('click', '.js_acc:not(.multi) a.header:not(.disable)', function (e) {
				//일반 토글
				var $obj = $(this);
				var $target = $obj.attr('href').split('#')[1];

				if (isNoJQuery($obj, '.js_acc')) return

				if (!$obj.hasClass('active')) {
					if ($obj.parent().hasClass('holder')) {
						$obj.parent('.holder').parents('.js_acc').find('.holder > .header').removeClass('active');
						$obj.parent('.holder').parents('.js_acc').find('.view').removeClass('active');
						$obj.parent('.holder').addClass('active');
					} else if ($obj.parent().is('li') || $obj.parent().is('div') && !$obj.parent().hasClass('js_acc')) {
						$obj.parents('.js_acc').find('.header').removeClass('active');
						$obj.parents('.js_acc').find('.view').removeClass('active');
						$obj.closest('.js_acc').closest('.view').siblings('.header').addClass('active');
					} else {
						$obj.parent('.js_acc').find('> .header').removeClass('active');
						$obj.parent('.js_acc').find('> .view').removeClass('active');
					}
					$("#" + $target).addClass('active').trigger('showAcc'); //view transition
					$obj.addClass('active');
				} else {
					if ($obj.parent().hasClass('holder')) {
						$obj.parent('.holder').parents('.js_acc').find('.holder > .header').removeClass('active');
						$obj.parent('.holder').parents('.js_acc').find('.view').removeClass('active');
						$obj.parent('.holder').removeClass('active');
					} else if ($obj.parent().is('li') || $obj.parent().is('div')) {
						$obj.parents('.js_acc').find('.header').removeClass('active');
						$obj.parents('.js_acc').find('.view').removeClass('active');
					} else {
						$obj.parent('.js_acc').find('> .header').removeClass('active');
						$obj.parent('.js_acc').find('> .view').removeClass('active');
					}
					$("#" + $target).removeClass('active').trigger('hideAcc');
					$obj.removeClass('active');
				}
				
				e.preventDefault();
				e.stopPropagation();
			}).on('click', '.js_acc.multi a.header:not(.disable)', function (e) {
				var $obj = $(this);
				var $target = $obj.attr('href').split('#')[1];
				//console.log($target);

				if (!$obj.hasClass('active')) {
					$('#' + $target).addClass('active').trigger('showOneAcc');
					$obj.parent('.holder').addClass('active');
					$obj.addClass('active');
				} else {
					$('#' + $target).removeClass('active').trigger('hideOneAcc');
					$obj.parent('.holder').removeClass('active');
					$obj.removeClass('active');
				}
				e.preventDefault();
			});
		},
		initLayerPopupOnce: function () {
			/* 레이어 팝업 버튼 세팅 */
			$(document).on('click', 'a.js_btn_lypop', function (e) {
				//var pop_base = $(".pop_base");
				var popID = $(this).attr('rel');
				var popURL = $(this).attr('href');
				var width = popURL.match(/w=([0-9]+)/);

				if ($(this).parents().hasClass('lypop_wrap')) {
					$(this).parents('.lypop_wrap').trigger('closePopup');
				}

				if (width && width.length > 1) {
					var popWidth = width[1];
					Class.layerPopupOpen(popID, popWidth);
				}

				e.preventDefault();
				e.stopPropagation();
			}).on('click', 'input.js_btn_lypop, button.js_btn_lypop', function () {
				var chk = $(this).is(':checked');
				var popID = $(this).data('target');
				if (chk) {
					Class.layerPopupOpen(popID);
				}
				//e.preventDefault();
				//e.stopPropagation();
			}).on('click', '.lypop_wrap .js_close', function (e) {
				$(this).parents('.lypop_wrap').trigger('closePopup');
				e.preventDefault();
			}).on('closePopup', '.lypop_wrap', function (e) {
				if ($(this).hasClass('wide')) {
					$(this).removeClass('show wide').removeAttr('style');
				} else {
					$(this).removeClass('show').removeAttr('style');
				}

				$('.lypop_fade').remove();
				if ($('.lypop_wrap.show').length < 1)
					$('html').removeClass('layer_open');

				e.stopPropagation();
			})
		},
		layerPopupOpen: function (id, width) {
			/* Layer Popup 열기 */
			var $wrap = $('#wrap').length > 0 ? $('#wrap') : $('#winpop_wrap');
			var $container = $('.container')
			var $popObj = $('#' + id)

			if ($popObj.length > 0) {
				if (Number(width) > 1100) {
					$popObj
						.show()
						.addClass('wide')
						.show()
						.css({ width: Number(width) })
				} else {
					$popObj.show().css({ width: Number(width) })
				}
				var popMargTop = ($popObj.height()) / 2;
				var popMargLeft = ($popObj.width()) / 2;

				if (!$popObj.hasClass('hfix')) {
					$popObj.css({
						'margin-top': -popMargTop,
						'margin-left': -popMargLeft
					})
				}

				$container.attr('aria-hidden', true)
				$popObj.addClass('show').attr('aria-hidden', false)
				// setTimeout(function() {
				// 	$popObj.addClass('show').attr("aria-hidden", false);
				// }, 300);

				$('.lypop_fade').addClass('show')
				$('html').addClass('layer_open')

				if ($popObj.find('.lypop_body').length > 0) {
					var lypopBodyH = $popObj.find('.lypop_body').outerHeight();
					if (lypopBodyH > 614) {
						$popObj.find('.lypop_body').addClass('scroll');
					}
				}
			}

			if ($wrap.find('.lypop_fade').length < 1) {
				$wrap.append('<div class="lypop_fade fade"></div>')
			}
			$('.lypop_fade').addClass('show')
			$('html').addClass('layer_open')
		},
		repositionPopup: function () {
			/* 팝업 위치 조정 */
			var $popCont = $(this)

			if ($popCont.length > 0) {
				var $popInner = $popCont.find('.popInner')
				var popContWidth = $popInner.outerWidth() + 60
				var popContHeight = $popInner.outerHeight() + 55
				//console.log(popContHeight, Class.winHeight);
				if (popContHeight > Class.winHeight - 50) {
					popContHeight = Class.winHeight - 50
					$popCont.css({ height: popContHeight - 55, overflowY: 'scroll', paddingRight: '13px' })
				} else {
					$popCont.css({ height: popContHeight - 55, overflowY: 'hidden', paddingRight: 30 })
				}
				var left = (Class.winWidth - popContWidth) / 2
				var top = (Class.winHeight - popContHeight) / 2
				$popCont.css({ left: left, top: top })
			}
		},
		initTopButtonOnce: function () {
			/* top button */
			$(document).on('click', '.right_fixed .btn_go_top', function (e) {
				$('html, body').stop().animate({ scrollTop: 0 }, 400);
				//window.scrollTo(0, 0);
				e.preventDefault();
				//e.stopPropagation();
			});
		},
		scrollHandler: function () {
		//scroll event > scrollHandler
      Class.scrollTop = $(window).scrollTop()
		},
		setSticky: function () {
		// scroll event > setSticky
			var _ = hntUI.$dom
			var $tabSticky = _.$stickyElms.tab //.js_sticky
			var $filterSticky = _.$stickyElms.filter //.filter_sticky
			// 21.04.07 호텔리스트(CHPC0HTL0112M200) 쪽에는 삭제하고 호텔상세(CHPC0HTL0200M200)와 동일하게 body.topFixed 하나로 컨트롤

			//패키지
			if ($('html').is('.pkg')) {
				//여행일정, 호텔&관광지, 참고사항, 해외 안전정보, 상품평
				var $tabContainer = $tabSticky.filter(function () { return !$(this).parent().is('.right') })
				if ($tabContainer.length > 0) {
					var dayBtnContainer = $tabContainer.find('.schedule .tabs')
					var dayBtnSwiper = dayBtnContainer.parent('.swiper-container').get(0)
					var dayContContainer = $tabContainer.find('.schedule > .js_acc')
					var isTabOver = Class.scrollTop >= getThresholdPosition($tabContainer, '.cont_unit')
					var tabH = 59 + (!dayBtnContainer.is(':hidden') ? 48 : 0)

					$tabContainer.toggleClass('fixed', isTabOver).css('paddingTop', isTabOver ? tabH : '')

					checkScroll(dayContContainer.find('> .inr'), {
						exceptionHeight: tabH /* - 30 */,
						callback: function (idx) {
							if (idx === undefined) idx = 0
							dayBtnContainer.find('> li').removeClass('selected').eq(idx).addClass('selected')
							
							if (dayBtnSwiper && dayBtnSwiper.swiper) dayBtnSwiper.swiper.slideTo(idx, 0)
						}
					})
				}

				//keypoint
				var $keypoints = $('.keypoints')				
				if ($keypoints.length > 0) {
					var keypointBtnContainer = $keypoints.find('.tabs')
					var keypointContContainer = $keypoints.find('.cont_keypoints')
					var isPointOver = Class.scrollTop < getThresholdPosition($keypoints, '.text_wrap')
					var isPointsEnd = Class.scrollTop + keypointBtnContainer.outerHeight() > getThresholdPosition($keypoints)

					$keypoints.toggleClass('fixed', !isPointsEnd && !isPointOver)
					keypointContContainer.css('float', !isPointsEnd && !isPointOver ? 'left' : '') //.fixed 시 css 귀속 필요 //xxx
					keypointBtnContainer.css('marginTop', isPointsEnd ? $keypoints.height() - keypointBtnContainer.outerHeight() : '')

					checkScroll(keypointContContainer.find('> .item'), {
						exceptionHeight: -30,
						callback: function (idx) {
							if (idx === undefined) idx = 0;
							keypointBtnContainer.find('> li').removeClass('selected').eq(idx).addClass('selected')
						}
					})
				}//end if keypoints
			}//end if .pkg

			//hotel //호텔 상세, 리스트 상단영역, 탭 fixed
			if ($('html').is('.htl')) {
				var container = $('.contents.htl');
				var hotelInfo = container.find('.htl_info') // 호텔 상세 특정 마크업
				var hotelFilter = container.find('.result_list_fix') // 호텔 리스트 특정 마크업
				var threshold;

				if (hotelInfo.length > 0) { //(객실선택, 숙소상세정보, 이용후기) 탭
					threshold = Class.scrollTop > getThresholdPosition(hotelInfo);

					var $tabmenu = $($('div[id^="tabmenu0"]').splice(1)) // tabmenu01 제외
					if ($tabmenu.length > 0) {
						checkScroll($tabmenu, {
							exceptionHeight: 98,
							callback: function (idx) {
								if ($tabSticky.length > 0) $tabSticky.find('li').removeClass('selected').eq(idx).addClass('selected');
							}
						})
					}
				} else if (hotelFilter.length > 0) {
					threshold = Class.scrollTop > container.offset().top - 20
				}//end if 
				
				if (threshold !== undefined) $('body').toggleClass('topFixed', threshold)
			}//end if .htl

			//filter
			if ($filterSticky.length > 0) {
				var $filterTop = $('.inr.right > .filter_top')		

				$filterSticky.toggleClass('fixed', Class.scrollTop > getThresholdPosition($filterTop))
			}
		},
		setFixedArea: function () {
		// scroll event > setFixedArea
		// reisze event > setFixedArea
		//오른쪽 fixed 영역 정의 (패키지 일정표, 결제)
			var _ = hntUI.$dom
			var isPkg = _.$html.is('.pkg')
			var $contentWrap = _.$contents
			var $infoSticky = isPkg ? _.$stickyElms.tab : _.$stickyElms.acc //.js_sticky : .js_acc
			var rightSelector = isPkg ? '.prod_detail' : '.pay_info'
			var $right = $infoSticky.filter(function () { return $(this).parent('.right').parent(rightSelector).length > 0 })
			var $left = $right.parent().prev('.inr')
			var $footer = _.$footer
			var exceptionHeight = isPkg ? 0 : 25 //isStart 시점을 몇만큼 아래에서 시작할지
			var isStart

			if (!isPkg) $right = $right.parent() //패키지면 .js_sticky, 결제면 .right 를 최종 $right 로 정의
			
			if ($right.length > 0 && $footer.length > 0) {
				//초기화
				$right.removeClass('absolute fixed').css({
					height: ''
				}).find('.member_count').css({
					overflowY: '',
					minHeight: '',
					maxHeight: ''
				})
				$contentWrap.css('position', '')
				
				//fixed 되기전 기준 pos //패키지 : "인원선택" 텍스트, 그 외 페이지 타이틀
				isStart = Class.scrollTop >= (isPkg ? getThresholdPosition($right, '.text_wrap') : getThresholdPosition($contentWrap.find('> .text_wrap'))) + exceptionHeight

				//일정표가 오른쪽 영역보다 작거나, 브라우저 폭이 1200 보다 작거나 기준 pos 이전이면 상단 고정
				if ($left.outerHeight() < $right.outerHeight() || Class.winWidth <= 1200 || !isStart) {
					//top
					$right.removeClass('fixed').css({
						right: 'auto',
						left: 0
					})
				} else {
					//footer over
					var isFooterOver = Class.scrollTop + $right.outerHeight() - exceptionHeight > $footer.offset().top
					if (!$footer.is(':hidden') && isFooterOver) {
						$contentWrap.css('position', 'relative')
						$right.addClass('absolute').css({
							right: 0,
							left: 'auto'
						})
					} else {
						//fixed
						$right.addClass('fixed').css({
							right: 'auto',
							left: isPkg ? $right.parent().offset().left + 20 : '', 
							height: (Class.winHeight <= $right.outerHeight()) ? Class.winHeight : 'auto'
						}).filter(function () {
							return Class.winHeight <= $right.outerHeight()
						}).find('.member_conunt').css({
							overflowY: 'scroll',
							minHeight: 130,
							maxHeight: 150
						})
					}
				}
			}
		},
		setEvent: function () {
      $(document).on('mousewheel.fx', function (e) {
        if (typeof Class.setSticky !== 'undefined') Class.setSticky()
      })

			$(window).on('scroll.fx', function (e) {
				if (Class.scrollTop === undefined) Class.scrollTop = $(window).scrollTop() //once

				if (!Class.scrollTracking) {
          window.requestAnimationFrame(function () {
						Class.docWidth = $(document).width()
						Class.docHeight = $(document).height()
						
            if (typeof Class.scrollHandler !== 'undefined') Class.scrollHandler()
						if (typeof Class.setSticky !== 'undefined') Class.setSticky()
						if (typeof Class.setFixedArea !== 'undefined') Class.setFixedArea()
						
            Class.scrollTracking = false
          })

          Class.scrollTracking = true
        }
			}).triggerHandler('scroll.fx')

			$(window).on('resize.fx', function () {
				//console.log('!!!!! resize')
				Class.winWidth = Math.min($(window).width(), window.innerWidth)
				Class.winHeight = Math.min($(window).height(), window.innerHeight)

				if (typeof Class.setFixedArea !== 'undefined') Class.setFixedArea()
			}).triggerHandler('resize.fx')
		},
		init: function () {
			/* hntUI 초기화 */
			Class.setEvent()

			for (var func in Class) {
				if (Class.hasOwnProperty(func)) {
					if (func !== 'init' && func.indexOf('init') == 0) {
						Class[func].call(this)
					}
				}
			}
		} //end init
	}

	//대상 검색 후 페이지 상단부터 ~ 대상 높이 까지 위치 값 반환
	function getThresholdPosition(target, selector) {
		var thresholdTarget = getThresholdTarget(target, selector)
		var margin = parseInt(thresholdTarget.css('marginBottom')) || 0
		var padding = parseInt(thresholdTarget.css('paddingBottom')) || 0

		return thresholdTarget.offset().top + thresholdTarget.outerHeight() + margin + padding
	}

	//이전 형제, 부모 순으로 검색하여 selector 찾기, target 이 없으면 body, 있으면 자신 그대로 반환
	function getThresholdTarget(target, selector) {
		var thresholdTarget
		var searchSelector = selector === undefined ? ' ' : selector

		if (target.prevAll(searchSelector).length > 0) {
			thresholdTarget = target.prevAll(searchSelector).eq(0)
		} else if (target.parent(searchSelector).length > 0) {
			thresholdTarget = target.parent(searchSelector)
		} else {
			thresholdTarget = target.length === 0 ? $('body') : target
		}

		return thresholdTarget
	}

	function checkScroll(elements, options) {
		var defaults = {
			yArr: undefined,
			heightArr: undefined,
			isEnd: false,
			exceptionHeight: 0,
			threshold: undefined,
			callback: undefined
		};

		var opts = Object.assign({}, defaults, options);
		var actIdx = undefined;

		if (elements.length === 0) return;

		var startThreshold = (opts.threshold === undefined) ? elements.eq(0).offset().top : opts.threshold;

		if (startThreshold - opts.exceptionHeight < Class.scrollTop) {
			//각각
			var targetYpos, targetHeight;
			elements.each(function (idx) {
				targetYpos = (opts.yArr === undefined) ? $(this).offset().top : opts.yArr[idx];  //각각의 Y 위치
				targetHeight = (opts.heightArr === undefined) ? $(this).outerHeight() : opts.heightArr[idx]; //각각의 높이
				if (targetYpos + targetHeight - opts.exceptionHeight > Class.scrollTop) {
					actIdx = idx;
					return false;
				}
			});
		} else {
			//첫 elements 보다 작은 경우
			actIdx = undefined;
		}

		//마지막
		if (opts.isEnd && Class.scrollTop === Class.docHeight - Class.winHeight) {
			actIdx = elements.length - 1;
		}

		if (opts.callback !== undefined) opts.callback(actIdx);
	}
	
	function isNoJQuery(target, selector) {
		return target.hasClass(Class.nojq) || target.parentsUntil(selector, '.' + Class.nojq).length > 0 || target.closest(selector).hasClass(Class.nojq)
	}

	if (typeof this['hntUI'] === 'undefined') {
		this['hntUI'] = Class
	}

	$(document).ready(function () {
		//console.log('!!!!! ready')
		hntUI.updateJqDom()
		hntUI.init();
	})
})(jQuery)

//window pop
var win = null
function NewWindow(mypage, myname, w, h, scroll) {
  var winl = (screen.width - w) / 2
  var wint = (screen.height - h) / 2
  var settings = 'height=' + h + ','
  settings += 'width=' + w + ','
  settings += 'top=' + wint + ','
  settings += 'left=' + winl + ','
  settings += 'scrollbars=' + scroll + ','
  settings += 'resizable=yes'
  win = window.open(mypage, myname, settings)
  if (parseInt(navigator.appVersion) >= 4) {
    win.window.focus()
  }
}

/* Tab : next btn */
$(document).ready(function () {
  $('.js_tabs .btn_next button').on('click', panelBtnClick)
})

var panelBtnClick = function () {
  var _btn$ = $(this)
  var _tabs$ = _btn$.closest('.js_tabs')

  _tabs$.find('ul:eq(0) li').removeClass('selected').eq(1).addClass('selected').click()
}
