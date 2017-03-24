(function ($) {
  Drupal.behaviors.carlosForm = {
    attach: function (context, settings) {
      // $('.alert-block').delay(500).fadeOut(1000)

      $('.edit-alt').click(function(e) {   // en objeto jquery ponermos una clase
        e.preventDefault()
        var $this = $(this)
        var id = $this.attr('data-id') // attr obtiene el primer elemento en el set de elementos elegidos/ por q este elemento es un simple string y entiende que el id 
        $.ajax({
          url: '/carlos/edit/' + id,
          method: 'GET'
        }).then(function (data) {
          $('#edit-updatealt').show()
          $('#edit-create').hide()
          $('.table-responsive').hide()
          $('#ide').val(id)
          $('#edit-name').val(data.name)
          $('#edit-lastname').val(data.lastname)
          $('#edit-tel').val(data.tel)
          $('#edit-age').val(data.age)
          $('#edit-opsex').val(data.opsex)
          console.log(data)
        })
      });

      $('#edit-updatealt').click(function(e) {
        e.preventDefault()
        const data = {
          userid: $('#ide').val(),
          name: $('#edit-name').val(),
          lastname: $('#edit-lastname').val(),
          tel: $('#edit-tel').val(),
          age: $('#edit-age').val(),
          opsex: $('#edit-opsex').val()
        }
        console.log(data)

        $.ajax({
          type: "POST",
          url: '/carlos/newedit',
          data: data,
        }).then(function(response) {
          console.log(response)
          if (response.code == 401) {
            $('.table-responsive').show()

            // Regenerar tabla
            var row = $('#row-user-' + response.user.id)
            row.each(function() {
              const lasttd = $(this).find(':last-child').prop('outerHTML')
              row.empty().html(
                '<td>'+response.user.id+'</td>'+
                '<td>'+response.user.name+'</td>'+
                '<td>'+response.user.lastname+'</td>'+
                '<td>'+response.user.tel+'</td>'+
                '<td>'+response.user.age+'</td>'+
                '<td>'+response.user.opsex+'</td>'+
                lasttd
              )
            });
            // $('#row-user-' + response.userid).empty()

          }
        })
      });
    }
  };
}(jQuery));

function CarlosMatallana () {
  return {
    name: 'Carlos',
    lastname: 'Matallana'
  }
}

(function (cm) {
  console.log(cm)
})(CarlosMatallana);
