<template>
    <main class="forgot">
        <MailVerif @clicked="onMail" v-if="mail"/>
        <CodeVerif @clicked="onCode" v-if="code"/>
        <NewPsswd @clicked="onPass" :code="codeNumber" v-if="pass"/>
        <FinalForgot @clicked="onPass" v-if="final"/>
    </main>
</template>

<script>
import MailVerif from "../components/MailVerify";
import CodeVerif from "../components/CodeVerify";
import NewPsswd from "../components/NewPsswd";
import FinalForgot from "../components/FinalForgot";

export default {
	name: "Forgot",
    components: {
        MailVerif,
        CodeVerif,
        NewPsswd,
        FinalForgot
    },
	data() {
		return {
            mail: true,
            code: false,
            pass: false,
            final: false,
            codeNumber: 0
		};
	},
    methods: {
        onMail(value) {
            if (value) {
                this.mail = false;
                this.code = true;
            }
        },
        onCode(value) {
            console.log('code value');
            console.log(value);
            if (value.status === 200) {
                this.code = false;
                this.pass = true;
                this.codeNumber = value.code;
            }
        },
        onPass(value) {
            if (value) {
                this.pass = false;
                this.final = true
            }
        }
    }
};
</script>

<style lang="scss">
.forgot {
    margin-top: 6rem;
    padding: 0 22px;
    min-height: calc(100vh - 28rem);
	&-container {
		margin: 0 auto;
		max-width: 800px;
        display: flex;
        flex-direction: column;
	}
    &-title {
        // margin-bottom: 2rem;
    }
    &-text {
        margin-top: 2rem;
    }
    .input-container {
        margin-top: 1rem;
    }
    &-button {
        margin: 0 auto;
        margin-top: 2rem;
    }
}
</style>
