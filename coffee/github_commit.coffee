apiUrl = 'https://api.github.com/repos/yyx990803/vue/commits?per_page=5&sha='

demo = new Vue
  el: '#demo'
  data:
    branch: 'master'
  created: ->
    this.$watch 'branch', ->
      this.fetchData()
  filters:
    truncate: (v) ->
      newLine = v.indexOf('\n')
      if newLine > -1 then v.slice(0, newLine) else v
    formatDate: (v) ->
      v.replace(/T|Z/g, ' ')
  methods:
    fetchData: ->
      xhr = new XMLHttpRequest()
      self = this
      xhr.open 'GET', apiUrl + self.branch
      xhr.onload = ->
        self.commits = JSON.parse(xhr.responseText)
      xhr.send()
