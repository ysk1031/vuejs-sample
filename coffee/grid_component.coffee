data = [
  { name: 'Chuck Norris', power: Infinity },
  { name: 'Bruce Lee', power: 9000 },
  { name: 'Jacky Chang', power: 7000 },
  { name: 'Jet Li', power: 8000 }
]

Vue.component 'grid',
  template: '#grid-template'
  replace: true
  created: ->
    this.ascending = {}
  methods:
    sortBy: (key) ->
      asc = this.ascending[key] = !this.ascending[key]
      this.data.sort (a, b) ->
        res = a[key] > b[key]
        res = !res if asc
        if res then 1 else -1

new Vue
  el: '#demo'
  data:
    gridOptions:
      data: data
      columns: [
        { header: 'Name', key: 'name' },
        { header: 'Power', key: 'power' }
      ]
