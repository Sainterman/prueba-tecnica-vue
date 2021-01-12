<template>
  <v-container>
    <v-card elevation="2" outlined tile>
      <br />
      <v-row class="text-center">
        <v-col>
          <p class="title text-center">
            ¿Nos autorizas a pedir tu certificado de liquidación?
          </p>
          <v-card-subtitle class="subtitle">
            Puedes atuorizar en linea con:
          </v-card-subtitle>
          <v-row class="mb-2">
            <v-col class="text-right">
              <v-card-text> <v-icon>mdi-key</v-icon> ClaveÚnica </v-card-text>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col class="text-left">
              <v-card-text>
                <p>Desafio de preguntas</p>
              </v-card-text>
            </v-col>
          </v-row>
          <v-btn elevation="2" color="#93bb3b" x-large>
            Autorizar en linea
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <v-card-text>
            Para autorizar seras redirigido al sitio de Mobisigner.
          </v-card-text>
          <div>ó</div>
          <v-card-text>
            Prefiero entregar la autorizacion en una sucursal de Consorcio
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
    <v-spacer></v-spacer>
    <br />
    <br />
    <v-card elevation="2" outlined tile>
      <br />
      <v-row class="text-center">
        <v-col class="text-right">
          <v-card-subtitle>¿Necesitas ayuda para continuar?</v-card-subtitle>
        </v-col>
        <v-col class="text-center">
          <v-dialog
            v-model="dialog"
            persistent
            max-width="720"
            class="text-center"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="#264477" dark v-bind="attrs" v-on="on">
                <v-icon>mdi-cellphone</v-icon> Te llamamos gratis
              </v-btn>
            </template>
            <v-card class="text-center">
              <v-card-title primary-title class="justify-center">
                ¿Tienes dudas? Te llamamos gratis
              </v-card-title>
              <v-card-text>
                Dejanos tus datos de contacto y te llamaremos de inmediato.
              </v-card-text>
              <v-card-text
                >Te llamaremos de Lunes a Viernes de 8:00 a 10:00
                hrs.</v-card-text
              >
              <v-card-text
                >Fuera de estos horarios, sera durante el dia habil
                siguiente.</v-card-text
              >
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-card-text>
                  <v-col>
                    <label>
                      <h2>Llamaremos a</h2>
                    </label>
                    <br>
                    <v-text-field
                      v-model="name"
                      :rules="nameRules"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-card-text>
                <v-divider></v-divider>
                <br />
                <v-card-text>
                  <v-col>
                    <label><h2>¿Cúal es tu télefono móvil?</h2></label>
                    <br />
                    <vue-tel-input-vuetify
                      v-model="phone"
                      placeholder="Ingresa tu telefono"
                      label=""
                      outlined
                    ></vue-tel-input-vuetify>
                    <label><h2>¿Cúal es tu correo electrónico?</h2></label>
                    <br>
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-card-text>

                <v-card-actions>
                  <v-btn @click="close">Cerrar</v-btn>
                  <v-spacer> </v-spacer>
                  <v-btn color="green darken-1" @click="submit">
                    Llamenme
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <v-card-text>
            <p>Te llamaremos de Lunes a Viernes de 8:00 a 18:00hrs.</p>
            <p>Fuera de estos horarios, sera durante el dia habil siguiente.</p>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<style>
.subtitle {
  padding: 0px;
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      valid: true,
      phone: "",
      name: "",
      nameRules: [
        v => !!v || 'Nombre requerido',
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail requerido",
        (v) => /.+@.+/.test(v) || "E-mail debe ser una direccion valida",
      ],
      dialog: false,
    };
  },
  methods: {
    submit() {
      if(this.$refs.form.validate())
      {
        console.log(this.name);
        console.log(this.email);
        console.log(this.phone);
        axios
          .get(`http://jsonplaceholder.typicode.com/todos`)
          .then((response) => {
            this.todos = response.data;
            console.log(this.todos);
          })
          .catch((e) => {
            this.errors.push(e);
          });
        this.dialog = false;
      }
    },
    close() {
      this.dialog=false;
    }
  },
};
</script>
