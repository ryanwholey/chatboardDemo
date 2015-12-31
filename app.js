// var url = 'http://127.0.0.1:7000/messages'
var url = 'http://10.8.4.153:7000/messages'

function handleClick() {
  var text = document.getElementById('message');
  $.ajax({
    type: "POST",
    url: url,
    data: {text:text.value},
    success: function(){
      getData();
    },
    dataType: 'text'
  });
  text.value = ''
};

function getData(data){
  $.ajax({
    type:'GET',
    url: url,
    success: function(data){
      $('#messages').empty();
      var lis = data.map(function(text){
        return '<li>'+text+'</li>';
      });
      $(messages).append(['<div>' + url + '</div>'].concat(lis.reverse()));

    }
  })
};

