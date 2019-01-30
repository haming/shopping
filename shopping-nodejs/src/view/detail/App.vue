<template>
    <div id="app">
        <banner/>
        <tabChoose/>
        <div style="clear: both"></div>
    </div>
</template>

<script>
    import banner from './banner/banner'
    import tabChoose from './tabChoose/tabChoose'

    export default {
        name: 'App',
        components: {
            banner,
            // tabChoose,
            tabChoose,
            // tabOne,
            // tabTwo
            // tabThree
        }
    }
</script>

<style>
</style>
