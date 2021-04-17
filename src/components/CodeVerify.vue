<template>
        <div class="forgot-container">
            <h1 class="forgot-title">Récupération de mot de passe</h1>
            <p class="forgot-text">Entrez le code reçu par mail ici ! 👇</p>
            <div class="callout error" id="code-error"></div>
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
            .then(res => res.json().then(data => ({ status: res.status, body: data })))
            .then(data => {
                if (data.status === 400) throw { status: 400, message: data.body.message };
                else if (data.status === 404) throw {status: 404, message: data.body.message };
                else this.$emit('clicked', data.body.message);
            })
            .catch(err => {
                if (err.status === 400 || err.status === 404) document.querySelector('#code-error').innerHTML = err.message;
                else document.querySelector('#code-error').innerHTML = "Une erreur est survenue, veuillez réesayer plus tard."
            })
        }
    }
}
</script>