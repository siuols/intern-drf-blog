var URL = "http://127.0.0.1:8000/api/";

var list = $("#container-postlist");
var detail = $('#container-postdetail');

var home = $("#postList");
var D = $("#postDetail");

home.on('click', function() {
  list.css('display', 'block');
  detail.css('display', 'none');
});

D.on('click', function() {
  list.css('display', 'none');
  detail.css('display', 'block');
  console.log("detail");
});

//tag list
$.get(URL + "tags/", function(data) {
  // console.log(data);
  var tags = $('#tags');
  $.each(data, function (index, value) {
    // sconsole.log(value);
    tags.append(
        '<option value="' + value.id + '" >' + value.title + '</option>'
      );
  });
});

//category list
$.get(URL + "category/", function(data) {
  var category = $('#category');
  $.each(data, function (index, value ){
    category.append(
        '<option  value="' + value.id + '">' + value.title + '</option>'
      );
  });
});

//post create
$('#submit').on('click', function (e) {
  e.preventDefault();
  $('#post-form').ajaxSubmit({
    url: URL +'post/',
    type: 'POST',
    success : function (response) {
      console.log(response);
      $("#post-form")[0].reset();
    },
    error : function (response) {
      console.log(response);
    }
  });
});


detail.hide();

//post list
$.get(URL + "post/", function(data) {
  // console.log(data);
  $.each(data, function( index, value ) {
    list.append(
      '<div class="column">' +
        '<div class="title">' +
          '<h1><img style="width: 50%"; src="' + value.banner_photo + '"</h1>' +
          '<h2>' + value.title + '<br><small>' + value.subtitle + '</small></h2>' +
        '</div>' +
        '<div class="description">' +
          '<p>' + value.body + '</p>' +
        '</div>' +
        '<button id="postD" data-id="' + value.id + '">Read more..</button>' +
      '</div>'
    );
  });
});

//post detail
$(document).on('click', 'button', function(){
   console.log('cladfasdfsafcik');
   list.hide();
   var id = $(this).data('id');
   var url = URL +'post/'+ id;
   $.get(url, function(data){
    console.log(data);

    detail.append(
      '<div class="column">' +
        '<div class="title">' +
          '<h1><img style="width: 50%"; src="' + data.banner_photo + '"</h1>' +
          '<h2>' + data.title + '<br><small>' + data.subtitle + '</small></h2>' +
        '</div>' +
        '<div class="description">' +
          '<p>' + data.body + '</p>' +
        '</div>' +
        '<button id="postD" data-id="' + data.id + '">Read more..</button>' +
      '</div>'
    );
    detail.show();
   });
});
