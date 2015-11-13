/**
 * @author JOO
 */
$(function(){
  
  // 댓글 복제
  var cmtPost = $('.cmt_post').clone();
  // 답글 클릭 시 생성할 문자열 생성
  var post = '<ul class="post"><li><div class="cmt_post clear"><span class="sp block"></span>'+cmtPost.html()+'</div></li></ul>';

  var reply = $('.reply');
  // "답글" 클릭 시
  reply.on('click', function(e) {
    // a 링크 기본 이벤트 제거
    e.preventDefault();

    var $this = $(this);
    // "답글" 클릭하면 "on" 클래스 추가
    // "on" 클래스가 존재하지 않으면
    if ( !$this.hasClass('on') ) {
      $this.addClass('on');
      $this.text('취소');
      $this.parent().after(post);

    // "on" 클래스가 존재한다면
    } else {
      $this.removeClass('on');
      $this.text('답글');
      $this.parent().parent().find('> .post').remove();
    }
  });

});
