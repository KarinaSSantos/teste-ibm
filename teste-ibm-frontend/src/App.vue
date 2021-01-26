<template>
  <div class="sample">
    <template slot="app"></template>

  <router-link to="/login">
       Ir pro login
    </router-link> 

    <router-view />
  </div>
</template>

<style>
  @import './assets/styles/styles.scss';
</style>

// <script>
//   export default {
//     name: 'HelloWorld',
//     data() {
//       return {
//         yourName: '',
//         visible: false,
//       };
//     },
//     methods: {
//       onClick() {
//         this.visible = true;
//       },
//       modalClosed() {
//         this.visible = false;
//       },
//     },
   
//   };
// </script>

<style>
  .sample {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    margin: 5% auto;
  }

  .cv-text-input {
    margin: 30px 0;
  }
</style>