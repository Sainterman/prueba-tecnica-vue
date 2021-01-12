<template>
  <v-app>
    <v-main>
      <Certificado/>
    </v-main>
  </v-app>
</template>

<script>
import Certificado from './components/Certificado';

export default {
  name: 'App',

  components: {
    Certificado,
  },

  data: () => ({
    //
  }),
};
</script>
