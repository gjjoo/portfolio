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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyIsInBhcnRpYWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdTdGFydCBzY3JpcHQuanMhJyk7IiwiLyoqXHJcbiAqIEBhdXRob3IgSk9PXHJcbiAqL1xyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgXHJcbiAgdmFyIGNtdFBvc3QgPSAkKCcuY210X3Bvc3QnKS5jbG9uZSgpO1xyXG4gIHZhciBwb3N0ID0gJzx1bCBjbGFzcz1cInBvc3RcIj48bGk+PGRpdiBjbGFzcz1cImNtdF9wb3N0XCI+PHNwYW4gY2xhc3M9XCJzcCBibG9ja1wiPjwvc3Bhbj4nK2NtdFBvc3QuaHRtbCgpKyc8L2Rpdj48L2xpPjwvdWw+JztcclxuXHJcbiAgdmFyIHJlcGx5ID0gJCgnLnJlcGx5Jyk7XHJcbiAgcmVwbHkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICBpZiAoICEkdGhpcy5oYXNDbGFzcygnb24nKSApIHtcclxuICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICR0aGlzLnRleHQoJ+y3qOyGjCcpO1xyXG4gICAgICAkdGhpcy5wYXJlbnQoKS5hZnRlcihwb3N0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAkdGhpcy50ZXh0KCfri7XquIAnKTtcclxuICAgICAgJHRoaXMucGFyZW50KCkucGFyZW50KCkuZmluZCgnLnBvc3QnKS5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbn0pO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
