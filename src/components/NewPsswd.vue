<template>
        <div class="forgot-container">
            <h1 class="forgot-title">Création du nouveau mot de passe</h1>
            <p class="forgot-text">Vous pouvez maintenant changer votre mot de passe 😎</p>
            <div class="input-container input-password">
                <input type="password" id="new-pass" placeholder="********">
            </div>
            <button class="btn forgot-button" @click="onClk">Enregistrer le nouveau mot de passe</button>
        </div>
</template>

<script setup>
export default {
    name: "NewPsswd",
    props:  ['code'],
    methods: {
        onClk() {
            fetch(`https://api.app-tricycle.com/user/password/reset/new`, {
                 method: 'POST',
                 body: {
                     code: this.code,
                     password: document.querySelector('#new-pass').value
                 },
                 redirect: 'follow'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.$emit('clicked', true)
            })
            .catch(err => {
                console.log(err);
            })
            this.$emit('clicked', true) //TODO: disable for production
        }
    }
}
</script>