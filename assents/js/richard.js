function myFunction() {
  var txt;
  var r = confirm(
    'Você gostaria de ser redirecionado para a página de pagamento?',
  );
  if (r == true) {
    window.location.href = 'URL_DA_PAGINA_DE_PAGAMENTO';
  } else {
    txt = 'Você pressionou Cancelar!';
  }
  document.getElementById('demo').innerHTML = txt;
}
