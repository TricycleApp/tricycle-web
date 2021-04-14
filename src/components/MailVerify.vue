<template>
        <div class="forgot-container">
            <h1 class="forgot-title">Récupération de mot de passe</h1>
            <p class="forgot-text">Vous avez rencontrée un problème avec votre mot de passe ? Pas de problème on a une solution 😉</p>
            <p class="forgot-text">Pour vérifier que c'est bien vous, renseignez l'adresse email dans le champ ci-dessous 👇</p>
            <div class="callout error" id="mail-error"></div>
            <div class="input-container input-mail">
                <input type="email" id="mail-confirm" placeholder="jacques.martin@gmail.com">
            </div>
            <button class="btn forgot-button" @click="onClk">Envoyer le mail</button>
        </div>
</template>

<script setup>
export default {
    name: "MailVerif",
    methods: {
        onClk() {
            fetch(`https://api.app-tricycle.com/user/password/reset`, {
                 method: 'POST',
                 body: {
                     email: document.querySelector('#mail-confirm').value
                 },
                 redirect: 'follow'
            })
            .then(res => {
                if (res.status === 400) throw 'wrong-mail'
                return res.json()
            })
            .then(data => {
                console.log(data)
                this.$emit('clicked', true)
            })
            .catch(err => {
                if (err === 'wrong-mail') document.querySelector('#mail-error').innerHTML = "L'adresse mail n'existe pas"
                else console.log(err);
            })
            this.$emit('clicked', true) //TODO: disable for production
        }
    }
}
</script>