<template>
  <div class="vitrine">
    <header>
      <img class="logo" src="img/logo.png">
    </header>
    <main>
      <section class="flex-container6">
        <div>
          <img src="img/scan.png" class="phone">
        </div>
        <div>
          <h1>TriCycle</h1>
          <h2>L'application qui vous aide à trier !</h2>
        </div>
        <div>
          <a href="https://play.google.com/store/apps/details?id=dev.tricycle&hl=fr">
            <img src="img/play-button.png" alt="télécharger sur le playstore" class="play-store">
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
            <source srcset="img/product-desktop.png" media="(min-width: 800px)">
            <img src="img/product-mobile.png" alt="Capture du scan d'un produit">
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
          <img src="img/recherche.png" />
          <img src="img/search.png" alt="Capture d'écran de la fonction recherche" class="loupe">
        </div>
      </section>
      <section class="flex-container3">
        <div class="screen3">
          <picture>
            <source srcset="img/profil-desktop.png" media="(min-width: 800px)">
            <img src="img/profil-mobile.png" alt="Capture d'écran de la page profil">
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
        <a href="legal/privacy-policy.html" aria-label="">Politique de confidentialité</a>
        <a href="legal/user-agreement.html" aria-label="">Conditions d'utilisations</a>
      </div>
      <div class="flex-footer">
        <p>N'hésitez pas à nous suivre sur Twitter pour être au courant des dernières nouveautés !</p>
        <a href="https://twitter.com/TriCycle_app"><img class="twitter" src="img\twitter.png"></a>
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
