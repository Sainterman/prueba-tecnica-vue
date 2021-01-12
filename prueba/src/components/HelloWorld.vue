<template>
  <v-container>
    <v-card elevation="2" outlined tile>
      <br>
      <v-row class="text-center">
        <v-col>
          <p class="title text-center">
            ¿Nos autorizas a pedir tu certificado de liquidación?
          </p>
          <v-card-subtitle> Puedes atuorizar en linea con: </v-card-subtitle>
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
          <v-btn elevation="2" color="green" large> Autorizar en linea </v-btn>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
      <p>Para autorizar seras redirigido al sitio de Mobisigner.</p>
      <br>
      <div>O</div>
      <br>
      <p>Prefiero entregar la autorizacion en una sucursal de Consorcio</p>
      </v-col>
      </v-row>
    </v-card>
    <v-spacer></v-spacer>
    <br>
    <br>
    <v-card elevation="2" outlined tile>
      <br>
      <v-row class="text-center">
        <v-col class="text-right">
          <v-card-subtitle> Necesitas ayuda para continuar? </v-card-subtitle>
        </v-col>
        <v-col class="text-left">
          <v-dialog v-model="dialog" persistent max-width="720" class="text-center">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                Te llamamos gratis
              </v-btn>
            </template>
            <v-card class="text-center">
              <v-card-title class="headline">
                ¿Tienes dudas? Te llamamos gratis
              </v-card-title>
              <v-card-text>
                Dejanos tus datos de contacto y te llamaremos de inmediato.
              </v-card-text>
              <v-card-text>Te llamaremos de Lunes a Viernes de 8:00 a 10:00 hrs.</v-card-text>
              <v-card-text>Fuera de estos horarios, sera durante el dia habil siguiente.</v-card-text>
              <v-col
                cols="12"
                sm="6"
                md="4"
                align-self="center"
              >

              <v-text-field
                required
                solo

              ></v-text-field>
              <br>
              <v-text-field
                required
                solo
              ></v-text-field>
              </v-col>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialog = false">
                  Agree
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>

      </v-row>
      <v-row class="text-center">
        <v-col>

        <p>Te llamaremos de Lunes a Viernes de 8:00 a 18:00hrs.</p>
        <p>Fuera de estos horarios, sera durante el dia habil siguiente.</p>
        </v-col>

      </v-row>
    </v-card>
  </v-container>
</template>
<style>
</style>
<script>
//import i18n from '@/plugins/i18n';

export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
