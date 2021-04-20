<template>
	<div id="app">
		<Header />
		<router-view />
		<Footer />
	</div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
	components: {
		Header,
		Footer
	},
	created() {
        if(location.pathname.includes('article')) document.documentElement.classList.add('scroll-no-smooth');
		else  document.documentElement.classList.remove('scroll-no-smooth');
	}
}
</script>