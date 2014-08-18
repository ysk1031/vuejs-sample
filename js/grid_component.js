(function() {
  var data;

  data = [
    {
      name: 'Chuck Norris',
      power: Infinity
    }, {
      name: 'Bruce Lee',
      power: 9000
    }, {
      name: 'Jacky Chang',
      power: 7000
    }, {
      name: 'Jet Li',
      power: 8000
    }
  ];

  Vue.component('grid', {
    template: '#grid-template',
    replace: true,
    created: function() {
      return this.ascending = {};
    },
    methods: {
      sortBy: function(key) {
        var asc;
        asc = this.ascending[key] = !this.ascending[key];
        return this.data.sort(function(a, b) {
          var res;
          res = a[key] > b[key];
          if (asc) {
            res = !res;
          }
          if (res) {
            return 1;
          } else {
            return -1;
          }
        });
      }
    }
  });

  new Vue({
    el: '#demo',
    data: {
      gridOptions: {
        data: data,
        columns: [
          {
            header: 'Name',
            key: 'name'
          }, {
            header: 'Power',
            key: 'power'
          }
        ]
      }
    }
  });

}).call(this);
