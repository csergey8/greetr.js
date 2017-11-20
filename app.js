var g = G$('John', 'You');
g.greet().setLang('es').greet(true).log();

$('#login').click(function() {

    var loginGrtn = G$('John', 'Doe');

    $('#logindiv').hide();
    
    loginGrtn.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})