
  $(document).ready(function() {

    var color = 'white';
    var colors = 'white green red blue yellow'

    $('#red').on('click', function() {
      color = 'red';
    });

    $('#blue').on('click', function() {
      color = 'blue';
    });

    $('#green').on('click', function() {
      color = 'green';
    });

    $('#yellow').on('click', function() {
      color = 'yellow';
    });

    $('#white').on('click', function() {
      color = 'white';
    });


    $('.box').on('mousedown', function() {
      $('.box').on('mouseenter', function () {
        $(this).addClass(color);
      })
    });

    $('.box').on('mouseup', function() {
      $('.box').off('mouseenter');
    });

    $('.box').on('dblclick', function() {
      $(this).removeClass(colors);
    });

    $('#reset').on('click', function() {
      $('.box').removeClass(colors);
    });



  })
