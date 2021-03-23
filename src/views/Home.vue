<template>
  <div class="vitrine">
    <header>
      <img class="logo" src="@/assets/logo.png">
      <ul class="menu">
        <li>
          <router-link to="/news">News</router-link>
        </li>
      </ul>
    </header>
    <main>
      <section class="flex-container6">
        <div>
          <img src="@/assets/scan.png" class="phone">
        </div>
        <div>
          <h1>TriCycle</h1>
          <h2>L'application qui vous aide à trier !</h2>
        </div>
        <div>
          <a href="https://play.google.com/store/apps/details?id=dev.tricycle&hl=fr">
            <img src="@/assets/play-button.png" alt="télécharger sur le playstore" class="play-store">
          </a>
        </div>
      </section>
      <section class="speech1">
        <h3>TriCycle est une nouvelle application qui vous propose diverses fonctionnalités, pour vous aider à mieux
          trier vos déchêts et à préserver la planète ! Cet application est réalisé par un groupe de quatres étudiants en étude supérieur
          dans le cadre d'un projet scolaire. Ce projet est à but non lucratif.</h3>
      </section>
      <section class="speech2">
        <h3>Vous n'aurez plus à vous demander où se trie tel ou tel produit, vous n'aurez qu'à le scanner avec
          TriCycle pour le savoir !</h3>
      </section>
      <section class="flex-container">
        <div class="screen1">
          <picture>
            <source srcset="@/assets/product-desktop.png" media="(min-width: 800px)">
            <img src="@/assets/product-mobile.png" alt="Capture du scan d'un produit">
          </picture>
        </div>
        <div class="scan">
          <h3>Scan de produit</h3>
          <p>La fonction principale de notre application,
            le scan vous permet de connaître les composants d'un produit en scannant son code barre. Simple et rapide !</p>
        </div>

      </section>
      <section class="flex-container2">
        <div class="history">
          <h3>Recherche</h3>
          <p>Vous pouvez également utiliser la fonction "Recherche" pour savoir où jeter tel ou tel produit sans le
            scanner. Différentes catégories sont également disponibles si vous ne connaissez pas le nom exacte.</p>
        </div>
        <div class="screen2">
          <img src="@/assets/recherche.png" />
          <img src="@/assets/search.png" alt="Capture d'écran de la fonction recherche" class="loupe">
        </div>
      </section>
      <section class="flex-container3">
        <div class="screen3">
          <picture>
            <source srcset="@/assets/profil-desktop.png" media="(min-width: 800px)">
            <img src="@/assets/profil-mobile.png" alt="Capture d'écran de la page profil">
          </picture>
        </div>
        <div class="stats">
          <h3>Profil</h3>
          <p>Le profil vous permet de voir vos statistiques et vos points. Il regroupe également tout l'aspect
            communautaire. Vous pourrez une fois connecté, ajouter des produits directement dans l'application lors d'un scan si le produit ne se trouve pas dans la base de donnée.</p>
        </div>
      </section>
      <section>
        <a href="https://play.google.com/store/apps/details?id=dev.tricycle&hl=fr">
          <button class="bouton">Télécharger</button>
        </a>
      </section>
    </main>
    <footer class="flex-container5">
      <p>Tous droits réservé</p>
      <div class="legal">
        <router-link to="/privacy" >Politique de confidentialité</router-link>
        <router-link to="/agreement" >Conditions d'utilisations</router-link>
      </div>
      <div class="flex-footer">
        <p>N'hésitez pas à nous suivre sur Twitter pour être au courant des dernières nouveautés !</p>
        <a href="https://twitter.com/TriCycle_app"><img class="twitter" src="@/assets/twitter.png"></a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
body{
    height: 100%;
    background-color: #9AC738;
    font-family: "proxima_nova";
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

.twitter{
    width: 40px;
    height: 40px;
}

h1{
    color: #F3FAE1;
    font-size: 4rem;
}
h2 {
    color: #F3FAE1;
    padding: 0 2rem;
}
.speech1 h3{
    padding: 0 .7rem;
}

.phone {
    width: 70vw;
}
section:first-of-type {
    margin: 4rem 0;
}

section:first-of-type > div {
    display: flex;
    justify-content: center;
}

section {
    display: flex;
    justify-content: space-around;
    margin-bottom: 6rem;
}

section div h3 {
    font-size: 2rem;
}
.speech1, .speech2 {
    text-align: center;
    font-size: 1.3rem;
}

.speech1{
    background-color: white;
    color: #9AC738;
    padding: 3rem 0;
    align-items: center;
}

.speech2{
    text-align: center;
    color: #F3FAE1;
    padding: 0 2rem;
}

.speech1 h3, .speech2 h3 {
    max-width: 100vw;
}


.scan, .history, .stats{
    padding: 2rem;
    color:  #F3FAE1;
}

.screen1, .screen2, .screen3{
    width: 100%;
    display: flex;
}

.screen2 {
    justify-content: center;
}
.screen3 {
    justify-content: flex-end;
}

.screen1 img, .screen3 img {
    width: 95vw;
}

.screen2 img {
    transform: rotate(-15deg);
    width: 75%;
}
a{
    text-decoration: none;
}
.bouton{
    padding: 1rem;
    width: 300px;
    max-width: 70vw;
    border-radius: 1rem;
    border: none;
    background-color: white;
    color: #9AC738;
    display: block;
    margin: auto;
    font-weight: bold;
    font-size: large;
}

.bouton:hover{
    cursor: pointer;
    background-color: rgb(228, 233, 217);
}


/*flex*/

.flex-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.flex-container2::after {
    content: '';
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50%;
    z-index: -5;
    transform: skewY(-15deg);
}

.flex-container2 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
}

.flex-container3 {
    display: flex;
    justify-content: space-around;
    align-items: center;

}


.flex-container5 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:  white;
}

.flex-container6 {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.droits {
    text-align: left;
}


.loupe {
    display: none;
}

footer {
    padding: 1rem 2rem;
    margin-top: 4rem;
}

.flex-footer {
    display: flex;
    align-items: center;
}

.flex-footer img{
    margin: 0 2rem;
}
.logo {
    display: inline-block;
    width:20rem;
    margin: 2rem;
}
.play-store {
    width: 15rem;
    height: 5rem;
}

.play-store:active, button:active {
    transform: scale(0.98);
}

button:focus {
    outline: none;
}
.flex-container6 div:last-of-type {
    justify-content: flex-start;
}
.flex-container6 div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    width: auto;
}
.legal a{
    color: #000;
    margin-right: 2rem;
}

@media screen and (max-width: 600px){
    .flex-container2{
        flex-direction: column-reverse;
    }
    .flex-container6{
        display: flex;
        justify-content:space-between;
    }
    section{
        flex-direction: column;
        
    }
    h1{
        font-size: 3rem;
        padding: 0 2rem;
    }
    header {
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
    .flex-footer img {
        margin: 0;
    }
    .speech1 {
        padding: 5rem 0;
    }
    .logo {
        width: 80vw;

    }
}

@media screen and (max-width: 400px){
    .flex-container2{
        flex-direction: column-reverse;
    }
    .flex-container6{
        display: flex;
        justify-content:space-between;
    }
    section{
        flex-direction: column;
    }
    footer {
        flex-direction: column;
    }
    footer p {
        font-size: .8rem;
    }

}





@media (min-width: 600px) {
    section {
        max-width: 100vw;
    }
    h1 {
        font-size: 6rem;
    }
    h2 {
        padding: 0;
    }
    .phone {
        width: 25vw;
    }
    .flex-container, .flex-container3 {
        width: 100%;
    }

    .flex-container3 {
        flex-direction: row-reverse;
    }
    .screen2 {
        position: relative;
    }

    .flex-container6 {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%;
    }
    .flex-container6 div:nth-of-type(1) {
        grid-row: span 2;
    }
    .flex-container6 div:nth-of-type(2) {
        display: flex;
        flex-direction: column;
        width: auto;
        grid-row: 1;
        grid-column: 2;
    }
    .screen1,
    .screen2,
    .screen3 {
        width: fit-content;
    }
    .flex-container2 {
        position: relative;
    }
    .loupe {
        height: 30rem;
        width: 30rem!important;
        position: absolute;
        left: -15rem;
        bottom: 0;
        display: block;
        z-index: -2;
    }
    .flex-container2::after {
        height: 50rem;
        transform: skewY(-20deg);
    }
    .history {
        position: relative;
        top: 12rem;
        color: #9AC738;
    }
    .scan {
        position: relative;
        top: -5rem;
    }
    .flex-container3 {
        margin-top: 20rem;
    }
    .screen2 img:first-of-type {
        transform: rotate(0);
        width: 27vw;
        position: relative;
        top: -4rem;
    }
    .history, .scan, .stats {
        display: flex;
        flex-direction: column;
    }
    .scan, .stats {
        padding: 0 10rem;
    }
    .history h3, .scan h3, .stats h3 {
        font-size: 3rem;
    }
    .history p, .scan p, .stats p {
        font-size: 1.5rem;
    }
    .history p {
        width: 35vw;
    }
}

</style>