console.log('Start script.js!');
/**
 * @author JOO
 */
$(function(){

  var cmtPost = $('.cmt_post').clone();
  var post = '<ul class="post"><li><div class="cmt_post"><span class="sp block"></span>'+cmtPost.html()+'</div></li></ul>';

  var reply = $('.reply');
  reply.on('click', function(e) {
    e.preventDefault();

    var $this = $(this);
    if ( !$this.hasClass('on') ) {
      $this.addClass('on');
      $this.text('취소');
      $this.parent().after(post);
    } else {
      $this.removeClass('on');
      $this.text('답글');
      $this.parent().parent().find('.post').remove();
    }
  });

});