<template>
    <v-row class="pa-0 ma-0 d-flex flex-row justify-center " style="z-index: 10">
      <v-col cols="12" sm="10" md="10" lg="11" xl="10" class="regform" >
        <v-card flat dark="" color="transparent" >
          <h1 class="d-flex d-sm-none h1-mob">Регистрация</h1>
          <validation-observer ref="observer" v-slot="{ passes }">
            <v-form @submit.prevent="passes( submit )" >
              <v-row>
                <v-col cols="12" lg="4">
                  <validation-provider name="Фамилия" rules="required" v-slot="{ errors }">
                    <v-text-field   autocomplete="off" :error-messages="errors"
                                    v-model="form.name"
                                    label="Фамилия*" dense outlined type="text"></v-text-field>
                  </validation-provider>
                  <validation-provider name="Имя" rules="required" v-slot="{ errors }">
                    <v-text-field autocomplete="off" :error-messages="errors"
                                  v-model="form.surname"
                                  label="Имя*" dense outlined type="text"></v-text-field>
                  </validation-provider>
                  <v-text-field autocomplete="off"
                                v-model="form.secondName"
                                label="Отчество" dense outlined type="text"></v-text-field>
                </v-col>
                <v-col cols="12" lg="4">
                  <v-row class="ma-0 pa-0">
                    <v-col class="pa-0" cols="2">
                      <validation-provider rules="required" v-slot="{ errors }">
                        <v-text-field autocomplete="off" :error-messages="errors"  v-model="form.phoneCode"
                                      readonly outlined dense type="text"></v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col class="pa-0" cols="3">
                      <validation-provider name="Код оператора" rules="required" v-slot="{ errors }">
                        <v-select v-model="form.phonePrefix"
                                  label="Код"
                                  :error-messages="errors"
                                  outlined dense :items="$store.getters.mobile.prefixes"></v-select>
                      </validation-provider>
                    </v-col>
                    <v-col class="pa-0" cols="4">
                      <validation-provider name="Номер телефона" rules="required" v-slot="{ errors }">
                        <v-text-field autocomplete="off" :error-messages="errors"  v-model="form.phoneNumber"
                                      data-phone
                                      @keypress="integer"
                                      @input="formatPhone"
                                      placeholder="XXX-XX-XX*"
                                      outlined dense type="text"></v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col class="pa-0" cols="3">
                      <validation-provider name="Наименование оператора" rules="required" v-slot="{ errors }">
                        <v-select v-model="form.phoneOperator"
                                  label="Оп-тор"
                                  :error-messages="errors"
                                  outlined dense :items="$store.getters.mobile.operators"></v-select>
                      </validation-provider>
                    </v-col>
                  </v-row>
                  <validation-provider name="Адрес E-mail" rules="required|email" v-slot="{ errors }">
                    <v-text-field autocomplete="off" :error-messages="errors"
                                  v-model="form.email"
                                  label="E-mail*" dense outlined type="email"></v-text-field>
                  </validation-provider>
                  <validation-provider name="Почтовый адрес" rules="required" v-slot="{ errors }">
                    <v-text-field autocomplete="off" :error-messages="errors"
                                  v-model="form.address"
                                  label="Почтовый адрес*" dense outlined type="text"></v-text-field>
                  </validation-provider>
                </v-col>
                <v-col class="mb-0 pb-0" cols="12" lg="4">
                  <v-row class="ma-0 pa-0">
                    <v-col class="ma-0 pa-0 mt-n6" cols="12">
                      <small>Дата совершения покупки*</small>
                    </v-col>
                    <v-col class="ma-0 pa-0" cols="12">
                      <v-row class="ma-0 pa-0">
                        <v-col class="pa-0" cols="4">
                          <validation-provider name="День покупки" rules="required" v-slot="{ errors }">
                            <v-select outlined dense :error-messages="errors"
                                      v-model="form.dayBuy"
                                      :items="$store.getters.days"></v-select></validation-provider>
                        </v-col>
                        <v-col class="pa-0" cols="5">
                          <validation-provider name="Месяц покупки" rules="required" v-slot="{ errors }">
                            <v-select outlined dense :error-messages="errors"
                                      v-model="form.monthBuy"
                                      :items="$store.getters.months"></v-select></validation-provider>
                        </v-col>
                        <v-col class="pa-0" cols="3">
                          <validation-provider name="Год покупки" rules="required" v-slot="{ errors }">
                            <v-text-field autocomplete="off" :error-messages="errors"  v-model="form.year"
                                          readonly outlined dense type="text"></v-text-field>
                          </validation-provider>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <validation-provider name="Номер чека" rules="required" v-slot="{ errors }">
                    <v-text-field autocomplete="off" :error-messages="errors"
                                  label="Номер чека*"
                                  v-model="form.checkNumber"
                                  dense outlined type="text"></v-text-field>
                  </validation-provider>
                  <validation-provider name="Фото чека" rules="required|size:1000" v-slot="{ errors }">
                    <div style="position: relative" class="d-flex align-center ma-0 pa-0">
                      <div v-if="!form.file" style="position: absolute;color: #c0c0d8" class="mt-n3 ml-3">
                        <span style="z-index: 0">Загрузить фото чека</span>
                        <v-icon class="ml-2 question" style="z-index: 2"  @mouseenter.native="tooltipOpen"
                                @mouseleave.native="tooltipOpen" small>mdi-help-circle-outline</v-icon>
                        <v-tooltip v-model="tooltip" top>
                          <template v-slot:activator="{ on, attrs }">
                            <span v-bind="attrs" v-on="on"></span>
                          </template>
                          <div style="max-width: 300px">
                            <small v-html="hint"></small>
                          </div>
                        </v-tooltip>
                      </div>
                      <v-file-input
                          style="z-index: 1"
                          :error-messages="errors"
                          dense outlined
                          v-model="form.file"
                          chips
                          show-size
                          accept="image/png, image/jpeg, image/bmp"
                          prepend-icon=""
                          append-icon="mdi-plus"
                      >
                        <template v-slot:label>
                        </template>
                      </v-file-input>
                    </div>
                  </validation-provider>
                </v-col>
                <template v-for="(item, i) in form.good">
                  <v-col :key="i"
                         class="pt-0 mt-n3" cols="12" lg="8">
                    <v-row class="ma-0 pa-0">
                      <v-col cols="12" class="ma-0 pa-0 mt-n2">
                        <small>Акционный товар</small>
                      </v-col>
                    </v-row>
                    <v-row class="ma-0 pa-0">
                      <v-col class="pa-0" cols="12" sm="10">
                        <validation-provider name="Наименование акционного товара" rules="required" v-slot="{ errors }">
                          <v-select outlined dense :error-messages="errors"
                                    item-value="text"
                                    v-model="item.text"
                                    :items="$store.getters.goods"></v-select>
                        </validation-provider>
                      </v-col>
                      <v-col class="pa-0" cols="12" sm="2">
                        <v-row class="ma-0 pa-0">
                          <v-col cols="12" class="ma-0 pa-0 mt-n6">
                            <small>Количество(шт)*</small>
                          </v-col>
                        </v-row>
                        <validation-provider name="Количество акционного товара" rules="required" v-slot="{ errors }">
                          <v-select outlined dense :error-messages="errors"
                                    item-value="text"
                                    v-model="item.count"
                                    :items="$store.getters.counts"></v-select>
                        </validation-provider>
                      </v-col>
                    </v-row>
                  </v-col>
                </template>
                <v-col class="pt-0 mt-n3" cols="12" lg="4">
                  <v-btn block color="primary" @click="addGood">
                    <span>Добавить еще один товар</span>
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="agree-mob mx-auto d-flex justify-center flex-column">
                  <v-checkbox v-model="form.agreementOne" class="mx-auto">
                    <template v-slot:label>
                      <span class="d-block mx-auto">*Регистрируясь, Вы подтверждаете свое согласия на участие в акции.</span>
                    </template>
                  </v-checkbox>
                  <v-checkbox v-model="form.agreementTwo" class="mx-auto">
                    <template v-slot:label>
                      <span class="d-block mx-auto">
                        *Регистрируясь, Вы подтверждаете, что изучили и согласны с <span style="z-index:9;"><a id="rules" href="rulles.pdf" target="_blank">правилами</a></span>  акции.
                      </span>
                    </template>
                  </v-checkbox>
                </v-col>
                <v-col cols="12" class="mx-auto text-center">
                  <v-btn :disabled="!form.agreementOne || !form.agreementTwo"
                         :loading="loading"
                         class="reg-btn"



                        type="submit">
                    <span class="white--text">Зарегистрироваться</span>
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </validation-observer>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
  import Cleave from 'cleave.js';
  export default {
    name: 'Home',
    data() {
      return {
        quantity: [Math.random()],
        goods: [],
        counts: [],
        actionGood: null,
        actionCount: null,
        mMenu: false,
        loading: false,
        tooltip: false,
        hint: 'Тип файла: JPEG, JPG, размер не более 1 Мб. Не допускаются изображения, не являющиеся фотографиями (скриншоты, оттиски, картинки, компьютерная графика, фотомонтаж. Чек должен быть сфотографирован полностью, включая верхний и нижний край чека, изображение чека должна быть строго вертикально ориентированным и хорошо читаться. Фотографировать чек необходимо под прямым углом. Загруженные чеки проходят проверку на соответствие условиям Акции (модерацию) в течение 72 часов с момента их загрузки.',
        form: {
          name: null,
          surname: null,
          secondName: null,
          address: null,
          email: null,
          phoneCode: '+375',
          phonePrefix: null,
          phoneNumber: null,
          phoneOperator: null,
          year: 2020,
          monthBuy: Number(new Date().toLocaleDateString('ru', {month: 'numeric'})),
          dayBuy: Number(new Date().toLocaleString('ru', { day: 'numeric' })),
          file: null,
          checkNumber: null,
          good: [
            {
              text: null,
              count: null,
              code: '000'
            }
          ],
          agreementOne: false,
          agreementTwo: false,
        }
      }
    },
    mounted() {
      document.getElementById('rules').addEventListener('click', (event) => {
        window.open(event.target.href, '_blank');
      })
    },
    methods: {
      tooltipOpen() {
        this.tooltip = !this.tooltip;
        return;
      },
      openFileInput() {
        this.$refs.fileInput.$el.click();
      },
      mobMenuToogle(){
        this.mMenu = !this.mMenu;
      },
      addGood() {
        this.form.good.push({
          text: null,
          count: null,
          code: '0000'
        });
      },
      submit(){
        this.loading = true;
        this.$httpService.post('api/participate', this.$fdService.fill(this.form))
                .then(response => {
                  this.$refs.observer.reset();
                  this.$store.commit('alert', {message: response.data.success, });
                  this.$fdService.reset(this.form);
                  this.form.year = 2020;
                  this.form.phoneCode = '+375';
                  this.form.good = [
                    {
                      text: null,
                      count: null,
                      code: '000'
                    }
                  ];
                  this.$refs.observer.reset()
                })
                .finally(() => {
                  this.loading = false
                })
      },
      integer(event) {
        event = (event) ? event : window.event;
        let charCode = (event.which) ? event.which : event.keyCode;
        if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
          event.preventDefault();
        } else {
          return true;
        }
      },
      formatPhone() {
        new Cleave('[data-phone]', {
          delimiter: '-',
          blocks: [3, 2, 2]
        })
      }
    }
  }
</script>

<style>

    .reg-btn, .reg-btn:hover {
        background-image: url('../assets/botton.svg');
        background-color: transparent!important;
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center center;
        height: 2.6rem!important;
    }
    .theme--dark.v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
        background-color: rgba(255, 0, 0, 0)!important;
    }
    .v-btn--contained {
        box-shadow: none;
    }
    .reg-btn:before {
        background-color: transparent!important;

    }
    .regform {
      /* background-color: red;
      max-width: 50rem!important; */
      /* margin-top: 40rem; */
      /* max-width: 90rem; */
      height: 70rem;
      padding-top: 30rem;
    }
    @media screen and (max-width: 700px) {
      .regform {
      padding-top: 10rem;
      }
    }
    .h1-mob {
      text-transform: uppercase;
      text-align: center;
      font-size: 2.4rem;
    }
</style>
