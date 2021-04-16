<template>
        <div class="forgot-container">
            <h1 class="forgot-title">Création du nouveau mot de passe</h1>
            <p class="forgot-text">Vous pouvez maintenant changer votre mot de passe 😎</p>
            <div class="input-container input-password">
                <input type="password" v-model="password" id="new-pass" placeholder="********">
            </div>
            <button class="btn forgot-button" @click="onClk">Enregistrer le nouveau mot de passe</button>
        </div>
</template>

<script setup>
export default {
    name: "NewPsswd",
    props:  ['code'],
    data() {
        return {
            password: null
        }
    },
    methods: {
        onClk() {
            fetch(`https://api.app-tricycle.com/user/password/reset/new`, {
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json'},
                 body: JSON.stringify({
                     code: this.code,
                     password: this.password
                 })
            })
            .then(res => {
                if (res.status === 400) throw 'error-password'
                return res.json()
            })
            .then(data => {
                console.log(data)
                this.$emit('clicked', true)
            })
            .catch(err => {
                if (err === 'error-password')  document.querySelector('#mail-error').innerHTML = "Un des caractères du mot de passe est invalide, veuillez rentrer un mot passe contenant(chiffres, lettres)"
                else document.querySelector('#mail-error').innerHTML = "Une erreur est survenue, veuillez réesayer plus tard."
            })
        }
    }
}
</script>