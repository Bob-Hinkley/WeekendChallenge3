$(function() {

  $('button').on('#clear').click(calc);
  $('#clear').click(clear);

});

function calc () {
  event.preventDefault ();

  var total = {};
  total.firstNum = $('input[name=firstNum]').val();
  total.secNum = $('input[name=secNum]').val();
  total.operator = $(this).data('operator');
  console.log(total);

  switch (total.operator) {
    case 'add':
    $.ajax({
      url: '/add',
      type: 'POST',
      data: total,
      success: updateDom,
    });
    console.log(add);
    break;

    case 'sub':
    $.ajax({
      url: '/sub',
      type: 'POST',
      data: total,
      success: updateDom,
    });
    break;

    case 'mul':
    $.ajax({
      url: '/mul',
      type: 'POST',
      data: total,
      success: updateDom,
    });
    break;

    case 'div':
    $.ajax({
      url: '/div',
      type: 'POST',
      data: total,
      success: updateDom,
    });
    break;
  };
};

function updateDom(data) {
  $('#result').append('<span>' + data.num + '</span>');
  console.log(data);
};

function clear () {
  $('form').find('input[type=number]').val('');
  $('span').empty();
};
