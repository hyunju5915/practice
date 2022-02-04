;(function () {
  // console.log('fx-jquery : jQuery 연동 보완용(?)')

  //-----------------------------------------------------------------
  // PART 1 : document 전체 delegate 이벤트 처리용
  //-----------------------------------------------------------------

  /* //2019.11.28 HC326 사용 안하여 삭제
  $(document)
    .on('customEvent', function(e, params) {
      console.log('document customEvent Received!!', e, params)
    })
    .on('click', '.fx-btn', function(e) {
      // console.log('.fx-btn clicked!!', e, e.target.innerHTML)
    })
    .on('click', '.fx-btn2', function(e) {
      // console.log('.fx-btn2 clicked!!', e, e.target.innerHTML)
      var params = { msg: 'Hello', now: new Date() }
      $(document).trigger('customEvent', [ params ])
    });
  */

  //-----------------------------------------------------------------
  // PART 2 : 화면(페이지?) 변경시 다시 한번 실행해야할 jQuery 내용
  // - Page 단위 화면의 mounted() 시 호출되도록 연결 처리!
  // - nuxt(keep-alive) 에서 새롭게 화면이 생성된 경우에만 호출됨!
  //-----------------------------------------------------------------
  window._refreshjQueryOnPageMounted_ = function () {
    // console.log('_refreshjQueryOnPageMounted_')

    // 햄버그 메뉴 초기 active 유무에 따라 toggle
    $('.js_acc .view').each(function () {
      $(this).toggle($(this).hasClass('active'))
    })
  }

  window._refreshjQueryOnPageActivated_ = function () {
    // console.log('_refreshjQueryOnPageActivated_')

    // (2019.7.26) Layout Popup 이 열린상태로 화면이동한 경우
    // Layer Dimmed 영역 제거 (뒷정리)

    $('.lypop_fade').remove()
  }

  //-----------------------------------------------------------------
  // 동적 Dialog (fx-dialog) 로 Popup 호출한 경우
  // - 별도 처리 필요한지 확인
  //-----------------------------------------------------------------
})()
