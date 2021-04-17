<template>
        <div class="forgot-container">
            <h1 class="forgot-title">Création du nouveau mot de passe</h1>
            <p class="forgot-text">Vous pouvez maintenant changer votre mot de passe 😎</p>
            <div class="callout-container">
                <div class="callout error" id="pass-error"></div>
                <div class="callout warning" id="pass-warn"></div>
            </div>
            <div class="input-container input-password">
                <input type="password" v-model="password" id="new-pass" placeholder="********">
            </div>
            <p class="forgot-text">Confirmez votre mot de passe, vous serez sur de ne pas vous être trompé 😁</p>
            <div class="input-container input-password">
                <input type="password" v-model="passwordcheck" id="new-pass-confirm" placeholder="********">
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
            password: null,
            passwordcheck: null
        }
    },
    methods: {
        onClk() {
            if (this.password === this.passwordcheck) {
                fetch(`https://api.app-tricycle.com/user/password/reset/new`, {
                     method: 'POST',
                     headers: { 'Content-Type': 'application/json'},
                     body: JSON.stringify({
                         code: this.code,
                         password: this.password
                     })
                })
                .then(res => res.json().then(data => ({ status: res.status, body: data })))
                .then(data => {
                    if (data.status === 400) throw { status: 400, message: data.body.message };
                    else this.$emit('clicked', data.body.message);
                })
                .catch(err => {
                    if (err.status === 400) document.querySelector('#pass-error').innerHTML = err.message;
                    else document.querySelector('#pass-error').innerHTML = "Une erreur est survenue, veuillez réesayer plus tard."
                })
            } else { 
                 document.querySelector('#pass-warn').innerHTML = "Le mot de passe doit être le même";
            }
        }
    }
}
</script>