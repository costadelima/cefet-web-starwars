// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado
function chama_episodio(e){
  
}
$.ajax({
  url: 'https://swapi.co/api/films/',
  dataType: 'json',
  success: function(resposta) {
    // escreve a resposta no console (para ver o que foi recebido)
    console.log(resposta);
    let filme = resposta.results;

    // console.log(filme[0].title);

    resposta.results.forEach(adiciona);

    function adiciona(filme){
        console.log(filme.title);

        let $li = $('<li></li>')
        $li.html('Episódio ' + filme.episode_id + ': ' + filme.title);
        $li.appendTo('#movies ul');
        $li.data("data-episode-url", 'http://swapi.co/api/films/' + filme.episode_id);

        $li.click(chama_episodio);
    }
  }
});
