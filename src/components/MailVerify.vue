<template>
        <div class="forgot-container">
            <h1 class="forgot-title">Récupération de mot de passe</h1>
            <p class="forgot-text">Vous avez rencontrée un problème avec votre mot de passe ? Pas de problème on a une solution 😉</p>
            <p class="forgot-text">Pour vérifier que c'est bien vous, renseignez l'adresse email dans le champ ci-dessous 👇</p>
            <div class="callout error" id="mail-error"></div>
            <div class="input-container input-mail">
                <input type="email" v-model="email" id="mail-confirm" placeholder="jacques.martin@gmail.com">
            </div>
            <button class="btn forgot-button" @click="onClk">Envoyer le mail</button>
        </div>
</template>

<script setup>
export default {
    name: "MailVerif",
    data() {
        return {
            email: null
        }
    },
    methods: {
        onClk() {
            fetch(`https://api.app-tricycle.com/user/password/reset`, {
                 headers: {'Content-Type': 'application/json' },
                 method: 'POST',
                 body: JSON.stringify({
                     email: this.email
                 })
            })
            .then(res => {
                if (res.status === 400) throw 'wrong-mail'
                if (res.status === 404) throw 'unknown-mail'
                return res.json()
            })
            .then(data => {
                this.$emit('clicked', true);
                return data;
            })
            .catch(err => {
                if (err === 'wrong-mail') document.querySelector('#mail-error').innerHTML = "L'adresse mail est mal écrite"
                if (err === 'unknown-mail') document.querySelector('#mail-error').innerHTML = "Le compte n'existe pas"
                else document.querySelector('#mail-error').innerHTML = "Une erreur est survenue, veuillez réesayer plus tard."
            })
        }
    }
}
</script>