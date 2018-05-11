var URL = "http://127.0.0.1:8000/api/";

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

//post list
$.get(URL + "post/", function(data) {
  // console.log(data);
  $.each(data, function( index, value ) {
    list.append(

        '<div class="column">' +
          '<div class="title">' +
            '<h1><img src="' + value.banner_photo + '"</h1>' +
            '<h2>' + value.title + '<br><small>' + value.subtitle + '</small></h2>' +
          '</div>' +
          '<div class="description">' +
            '<p>' + value.body + '</p>' +
          '</div>' +
        '</div>'
    );
  });
});
