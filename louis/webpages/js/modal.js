var modal = $('#display');
var postForm = $('#form-post');
var close = $('.close');

postForm.on('click', function (){
  console.log(modal);
  modal.css('display', 'block');
});

close.on('click', function () {
  modal.css('display', 'none');
});