window.onload = () => {
    let lobbya = document.getElementById('membros');
    let lobbyb = document.getElementById('juntarse')
    console.log(lobbyb)
    lobbyb.onclick = () => {
        lobbya.innerHTML += `
        <section class="news -split" style="margin-top: 10px; margin-bottom: 20px;">
    <div class="imagem -media">
      <a href="/profile.html"><img src="../imagens/Site/avatar.png" alt="news" class="nimage"></a>
    </div>
    <div class="ntexto -prose">
      <a href="profile.html" class="nprofile"><h1 class="texto">Pedro</h1></a>
      <p class="escrita">Biografia</p>
      <h3 style="color: #ecc545;">elo</h3 style="color: ;#ecc545">
    </div>
  </section>
  `
    }
}  