import Vue from "vue";
import {ValidationObserver, ValidationProvider} from "vee-validate";
import AlertComponent from "../components/AlertComponent";

Vue.component('validation-observer', ValidationObserver);
Vue.component('validation-provider', ValidationProvider);
Vue.component('alert-component', AlertComponent);
