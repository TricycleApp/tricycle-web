<template>
        <div class="forgot-container">
            <h1 class="forgot-title">Récupération de mot de passe</h1>
            <p class="forgot-text">Entrez le code reçu par mail ici ! 👇</p>
            <div class="input-container input-number">
                <input type="number" v-model="code" id="code-confirm" placeholder="0000">
            </div>
            <button class="btn forgot-button" @click="onClk">Changer mon mot de passe</button>
        </div>
</template>

<script setup>
export default {
    name: "CodeVerif",
    data() {
        return {
            code: null,
        }
    },
    methods: {
        onClk() {
            fetch(`https://api.app-tricycle.com/user/password/reset/check`, {
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json'},
                 body: JSON.stringify({
                     code: this.code
                 })
            })
            .then(res => {
                if (res.status === 400) throw 'wrong-code'
                if (res.status === 404) throw 'expired-code'
                return res.json()
            })
            .then(data => {
                console.log(data);
                this.$emit('clicked', {code: this.code})
            })
            .catch(err => {
                if (err === 'wrong-code') document.querySelector('#mail-error').innerHTML = "Le code est mauvais, veuillez réessayer"
                if (err === 'expired-code') document.querySelector('#mail-error').innerHTML = "Le code à expiré, veuillez recommencer la récupération."
                else document.querySelector('#mail-error').innerHTML = "Une erreur est survenue, veuillez réesayer plus tard."
            })
        }
    }
}
</script>