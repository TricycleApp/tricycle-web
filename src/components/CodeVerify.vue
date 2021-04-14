<template>
        <div class="forgot-container">
            <h1 class="forgot-title">Récupération de mot de passe</h1>
            <p class="forgot-text">Entrez le code reçu par mail ici ! 👇</p>
            <div class="input-container input-number">
                <input type="number" id="code-confirm" placeholder="0000">
            </div>
            <button class="btn forgot-button" @click="onClk">Changer mon mot de passe</button>
        </div>
</template>

<script setup>
export default {
    name: "CodeVerif",
    methods: {
        onClk() {
            fetch(`https://api.app-tricycle.com/user/password/reset/check`, {
                 method: 'POST',
                 body: {
                     code: document.querySelector('#code-confirm').value
                 },
                 redirect: 'follow'
            })
            .then(res => {
                if (res.status === 400) throw 'wrong-code'
                return res.json()
            })
            .then(data => {
                console.log(data)
                this.$emit('clicked', true)
            })
            .catch(err => {
                if (err === 'wrong-code') document.querySelector('#mail-error').innerHTML = "Le code est mauvais, veuillez réessayer"
                else console.log(err);
            })
            this.$emit('clicked', true) //TODO: disable for production
        }
    }
}
</script>