(function() {
  var apiUrl, demo;

  apiUrl = 'https://api.github.com/repos/yyx990803/vue/commits?per_page=5&sha=';

  demo = new Vue({
    el: '#demo',
    data: {
      branch: 'master'
    },
    created: function() {
      return this.$watch('branch', function() {
        return this.fetchData();
      });
    },
    filters: {
      truncate: function(v) {
        var newLine;
        newLine = v.indexOf('\n');
        if (newLine > -1) {
          return v.slice(0, newLine);
        } else {
          return v;
        }
      },
      formatDate: function(v) {
        return v.replace(/T|Z/g, ' ');
      }
    },
    methods: {
      fetchData: function() {
        var self, xhr;
        xhr = new XMLHttpRequest();
        self = this;
        xhr.open('GET', apiUrl + self.branch);
        xhr.onload = function() {
          return self.commits = JSON.parse(xhr.responseText);
        };
        return xhr.send();
      }
    }
  });

}).call(this);
