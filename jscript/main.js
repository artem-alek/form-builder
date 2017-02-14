function getData (callback) {
  $.ajax({
    url: 'http://json-data.herokuapp.com/forms',
    dataType: 'json',
    success: callback
  })
}

function formTemplate (info, i) {
  return `
      <i class='fa ${info[i].icon}' aria-hidden='true'></i>
      <input type='${info[i].type}' id='${info[i].id}' placeholder='${info[i].label}'>
  `
}

function updateInputs (data) {
  console.log(data);
  for (var i = 0; i < data.length; i++){
    if (data[i].type === 'select') {
      var info2 = data.info[i];
      console.log(info2);
      lanuage(info2);
    }
    var formHtml = formTemplate(data, i);
    $('.form-inputs').append(formHtml);
  }
}

function language (info2) {
  return `
    <select type='${info2.type}' id='${info2.id}' placeholder='${info2.label}'>
      <option>${function (info2) { info2.option.label }}</option>
  `
}

getData(updateInputs);
