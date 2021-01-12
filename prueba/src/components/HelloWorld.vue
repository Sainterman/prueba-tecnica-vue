<template>
  <v-container>
    
    <v-card
    elevation="2"
    outlined
    tile
    > 
      <v-row class="text-center">
      <v-col>
          <p class="title text-center">
            ¿Nos autorizas a pedir tu certificado de liquidación?
          </p>
        <v-card-subtitle>
          Puedes atuorizar en linea con:
        </v-card-subtitle>
        <v-row class="mb-2">
          <v-col>
          <v-card-text>
          <p>ClaveÚnica</p>
          </v-card-text> 
          </v-col>
          <v-col>
            <v-card-text>
            <p>Desafio de preguntas</p>
            </v-card-text>
          </v-col>
        </v-row>
      <v-btn
        elevation="2"
        color="green"
        large
      >
      Autorizar en linea
      </v-btn>  
      </v-col>
      </v-row>
        <p>Para autorizar seras redirigido al sitio de Mobisigner.</p>

        <v-divider inset></v-divider>
        <div>O</div>
    </v-card>  
    
    <v-card
    elevation="2"
    outlined
    tile
    > 
      <v-row class="text-center">
        <v-col>
          <v-card-subtitle>
          Necesitas ayuda para continuar?
          </v-card-subtitle>
        </v-col>
        <v-col>
          <v-btn
          elevation="2"
          color="secondary"
          large
          >
          Te llamamos gratis
          </v-btn>  
        </v-col>   
        <p>Te llamaremos de Lunes a Viernes de 8:00 a 18:00hrs.</p>
        <p>Fuera de estos horarios, sera durante el dia habil siguiente.</p>
      </v-row>
    </v-card>
  </v-container>
</template>
<style>

</style>
<script>
  //import i18n from '@/plugins/i18n';

  export default {
    name: 'HelloWorld',
    // methods: { switchLocale () { if (this.$i18n.locale === 'en') { this.$i18n.locale = 'es' } else { this.$i18n.locale = 'en' } } },
    // computed: { displayLocale ()
    //  { 
    //   let other = 'EN';
    //   if (this.$i18n.locale === 'en')
    //   { other = 'ES' }
    //    return other }
    //  },
    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  };
</script>
