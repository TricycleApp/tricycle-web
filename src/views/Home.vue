<template>
  <div class="presentation">
    <Header/>
    <main>
        <section id="intro" class="intro">
            <div class="intro-text">
                <h1 class="intro-title">Tricycle App</h1>
                <p class="intro-subtitle">L'app qui vous aide à trier <span class="underline">facilement</span> 😎</p>
            </div>
            <div class="intro-img">
                <img src="@/assets/phone.png" alt="">
            </div>
        </section>
        section#
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
  name: 'Home',
  components: {
      Header,
      Footer
  }
}
</script>

<style lang="scss" scoped>
.presentation {
    color: var(--white-font);
    background: var(--main-clr);
}

.underline {
    display: inline-block;
    position: relative;
    &::after {
        content: '';
        display: block;
        background-color: var(--white-font);
        height: .25rem;
        width: 100%;
        position: absolute;
        bottom: -.3rem;
        left: 0;
    }
}
.intro {
    display: flex;
    align-items: center;
    justify-content: center;
    &-text {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-align: right;
    }
    &-title {
        text-transform: uppercase;   
        font-weight: 800;     
        font-size: 6rem;
        line-height: 7rem;
        width: 8ch;
    }
    &-subtitle {
        font-weight: 500;
        width: 20ch;
    }
    &-img {

    }
}
</style>