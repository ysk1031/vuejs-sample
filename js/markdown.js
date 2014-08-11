(function() {
  var editor;

  editor = new Vue({
    el: '#editor',
    data: {
      input: '# hello'
    },
    filters: {
      marked: marked
    }
  });

}).call(this);
