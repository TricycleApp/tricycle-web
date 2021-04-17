<template>
        <div class="forgot-container">
            <h1 class="forgot-title">Récupération de mot de passe</h1>
            <p class="forgot-text">Vous avez rencontrée un problème avec votre mot de passe ? Pas de problème on a une solution 😉</p>
            <p class="forgot-text">Pour vérifier que c'est bien vous, renseignez l'adresse email dans le champ ci-dessous 👇</p>
            <div class="callout-container">
                <div class="callout error" id="mail-error"></div>
            </div>
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
            .then(res => res.json().then(data => ({ status: res.status, body: data })))
            .then(data => {
                if (data.status === 400) throw { status: 400, message: data.body.message };
                else if (data.status === 404) throw {status: 404, message: data.body.message };
                else this.$emit('clicked', data.body.message);
            })
            .catch(err => {
                if (err.status === 400 || err.status === 404) document.querySelector('#mail-error').innerHTML = err.message;
                else document.querySelector('#mail-error').innerHTML = "Une erreur est survenue, veuillez réesayer plus tard."
            })
        }
    }
}
</script>