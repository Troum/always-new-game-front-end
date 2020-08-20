import Vue from "vue";
import HttpService from "../plugins/http.service";
import FormDataService from "../plugins/form-data.service";
const VueInputMask = require('vue-inputmask').default;

Vue.use(VueInputMask);
Vue.use(HttpService);
Vue.use(FormDataService);
