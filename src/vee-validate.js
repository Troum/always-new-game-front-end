import {extend, localize} from 'vee-validate';
import {email, required, image, min, confirmed, max, size} from "vee-validate/dist/rules";
import { setInteractionMode } from 'vee-validate';
import ru from 'vee-validate/dist/locale/ru';

setInteractionMode('lazy');

extend('required', required);
extend('email', email);
extend('image', image);
extend('min', min);
extend('max', max);
extend('size', size);
extend('confirmed', confirmed);

localize('ru', ru);
