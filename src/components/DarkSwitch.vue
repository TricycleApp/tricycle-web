<template>
<div class="dark-toggle">
    <p>Changer de thème</p>
    <button class="toggle-theme">
      <svg xmlns="http://www.w3.org/2000/svg" width="31.184" height="31.054" viewBox="0 0 31.184 31.054"><path d="M30.425,18.348a1.1,1.1,0,0,0-.917.2,11.7,11.7,0,0,1-3.549,2.074,11.114,11.114,0,0,1-4.027.718A11.708,11.708,0,0,1,10.208,9.615a12.289,12.289,0,0,1,.638-3.868A10.707,10.707,0,0,1,12.76,2.318,1.018,1.018,0,0,0,12.6.882a1.1,1.1,0,0,0-.917-.2A16.091,16.091,0,0,0,3.23,6.345,15.788,15.788,0,1,0,31.143,19.584.967.967,0,0,0,30.425,18.348Z" transform="translate(0 -0.652)" fill="#fff"/></svg>  
    </button>
</div>
</template>

<script>
export default {
	name: "DarkSwitch",
    created(){
        if (localStorage.getItem('dark') === 'true') document.documentElement.classList.add('dark');
    },
    mounted() {
        document.querySelector('.toggle-theme').addEventListener('click', ()=> {
            document.documentElement.classList.toggle('dark');
            if (document.documentElement.classList.contains('dark')) localStorage.setItem('dark', true);
            else localStorage.setItem('dark', false);
        });
    }
};
</script>

<style lang="scss" scoped>
.dark-toggle {
    display: flex;
    align-items: center;
    position: relative;
    top: -0.5rem;
}
.toggle-theme {
    background-color: var(--main-clr);
    min-width: 2rem;
    min-height: 2rem;
    border-radius: 0.3rem;
    margin-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    svg {
        width: 1.2rem;
        height: 1.2rem;
    }
}
.dark .toggle-theme svg {
    filter: invert(74%) sepia(17%) saturate(832%) hue-rotate(155deg) brightness(50%) contrast(86%);
}
</style>