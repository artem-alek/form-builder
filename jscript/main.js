function getData (callback) {
  $.ajax({
    url: 'https://json-data.herokuapp.com/forms',
    dataType: 'json',
    success: callback
  })
}

function formTemplate (info) {
  return `
      <i class='fa ${info.icon}' aria-hidden='true'></i>
      <input type='${info.type}' id='${info.id}' placeholder='${info.label}'>
  `
}

function updateInputs (data) {
  for (var i = 0; i < data.length; i++){
    var info = data[i];
    if (info.type === 'select') {
      $('.form-inputs').append(language(info));
    } else if (info.type === 'textarea') {
        $('.form-inputs').append(textBox(info));
    } else {
        var formHtml = formTemplate(info);
        $('.form-inputs').append(formHtml);
      }
  }
}

function language (info) {

  return `
    <select class="selection" type='${info.type}' id='${info.id}'>
      <option>${info.label}...</option>
      ${getOptions(info.options)}
    </select>
  `
}

function getOptions (option) {
  return option.map(function (x) { return `<option>${x.label}</option>` }).join("");
}

function textBox (text) {
  return `
    <i class='fa ${text.icon}' aria-hidden='true'></i>
    <textarea type='${text.type}' id='${text.id}' placeholder='${text.label}'></textarea>
  `
}
  // var html = "";
  // for (var i=0; i < option.length; i++) {
  //   html += `<option>${option[i].label}</option>`
  // }
  // return html;

getData(updateInputs);
