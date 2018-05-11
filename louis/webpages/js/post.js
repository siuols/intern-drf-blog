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
