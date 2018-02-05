$.ajax({
  url: '/user.action',
  method: 'get',
  success: function(data) {
    console.log(data)
  },
  error: function(err) {
    console.log(err)
  }
})