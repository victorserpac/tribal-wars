console.log('loaded');

window.addEventListener( 'load', function() {
    document.querySelector( '#select_all' ).click();
    document.querySelector('#incomings_table input[type=submit]').click();
});

// (function(d, script) {
//     script = d.createElement('script');
//     script.type = 'text/javascript';
//     script.async = true;
//     script.onload = function(){
//         // remote script has loaded
//     };
//     script.src = 'https://victorserpac.github.io/Tribal-Wars/monitorar_ataques_chegando.js';
//     d.getElementsByTagName('head')[0].appendChild(script);
// }(document));