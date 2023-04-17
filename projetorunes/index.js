function desabilitarOpcao(select, valor) {
  var options = select.options;
  for (var i = 0; i < options.length; i++) {
    if (options[i].value == valor) {
      options[i].disabled = true;
      break;
    }
  }
}

function habilitarOpcoes(selects) {
  for (var i = 0; i < selects.length; i++) {
    var options = selects[i].options;
    for (var j = 0; j < options.length; j++) {
      if (options[j].value == "") {
        options[j].disabled = false;
        break;
      }
    }
  }
}

function desabilitarOpcaoImpar(select, valor) {
  var options = select.options;
  for (var i = 0; i < options.length; i++) {
    if (options[i].value == valor) {
      options[i].disabled = true;
      break;
    }
  }
  if (valor == "1" || valor == "3" || valor == "5") {
    var opcoesIndesejadas = ["HP%", "RES", "DEF%", "ATQ%", "ACC", "SPD"];
    for (var i = 0; i < options.length; i++) {
      if (opcoesIndesejadas.includes(options[i].value)) {
        options[i].disabled = true;
      }
    }
  }
  else {
    var opcoesIndesejadas = ["HP%", "RES", "DEF%", "ATQ%", "ACC", "SPD"];
    for (var i = 0; i < options.length; i++) {
      if (opcoesIndesejadas.includes(options[i].value)) {
        options[i].disabled = false;
      }
    }
  }
}


window.onload = function() {
  var selects = document.getElementsByClassName('select');
  for (var i = 0; i < selects.length; i++) {
    selects[i].addEventListener('change', function() {
      var valorSelecionado = this.value;
      for (var j = 0; j < selects.length; j++) {
        if (selects[j] != this) {
          desabilitarOpcao(selects[j], valorSelecionado);
        }
      }
      habilitarOpcoes(selects);
      for (var j = 0; j < selects.length; j++) {
        var selecionado = selects[j].value;
        if (selecionado != "" && selecionado != valorSelecionado) {
          desabilitarOpcao(selects[j], selecionado);
        }
      }
    });
    
    var needsUpdate = true;
    selects[i].addEventListener('keydown', function() {
      if (needsUpdate) {
        habilitarOpcoes(selects);
        for (var j = 0; j < selects.length; j++) {
          var selecionado = selects[j].value;
          if (selecionado != "") {
            desabilitarOpcao(selects[j], selecionado);
          }
        }
        needsUpdate = false;
      }
    });
    
    selects[i].addEventListener('blur', function() {
      var options = this.options;
      for (var j = 0; j < options.length; j++) {
        var selecionado = false;
        for (var k = 0; k < selects.length; k++) {
          if (selects[k] != this && selects[k].value == options[j].value) {
            selecionado = true;
            break;
          }
        }
        if (!selecionado) {
          options[j].disabled = false;
        }
