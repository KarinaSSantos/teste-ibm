<template>
  <div class="sample">
    <template slot="app"></template>

 
    <router-view />
  </div>
</template>

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