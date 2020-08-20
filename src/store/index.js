import Vue from 'vue'
import Vuex from 'vuex'
import * as goods from '@/static/goods.json';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    alert: {
      status: false,
      data: {}
    },
    goods: goods.goods,
    counts: [
      {
        text: '4шт',
        value: '4шт'
      },
      {
        text: '6шт',
        value: '6шт'
      },
      {
        text: '8шт',
        value: '8шт'
      },
      {
        text: '12шт',
        value: '12шт'
      }
    ],
    mobile: {
      prefixes: [
        {
          text: '25',
          value: 25
        },
        {
          text: '29',
          value: 29
        },
        {
          text: '33',
          value: 33
        },
        {
          text: '44',
          value: 44
        }
      ],
      operators: [
        {
          text: 'МТС',
          value: 'МТС'
        },
        {
          text: 'A1',
          value: 'А1'
        },
        {
          text: 'Life',
          value: 'Life'
        }
      ],
    },
    shops: [
      { text: 'Остров чистоты и вкуса',
        value: 'Остров чистоты и вкуса'},
      { text: 'Евроопт',
        value: 'Евроопт'},
      { text: 'Хит!',
        value: 'Хит!'},
      { text: 'Грошык',
        value: 'Грошык'},
      { text: 'Копеечка',
        value: 'Копеечка'},
      { text: 'Доброном',
        value: 'Доброном'},
      { text: 'Мила',
        value: 'Мила'},
      { text: 'Корона',
        value: 'Корона'},
      { text: 'Грин',
        value: 'Грин'},
      { text: 'Гиппо',
        value: 'Гиппо'},
      { text: 'БелМаркет',
        value: 'БелМаркет'},
      { text: 'Простор',
        value: 'Простор'},
      { text: 'Бигзз',
        value: 'Бигзз'},
      { text: 'Копилка',
        value: 'Копилка'},
      { text: 'Виталюр',
        value: 'Виталюр'},
      { text: 'Рублёвский',
        value: 'Рублёвский'},
      { text: 'Санта',
        value: 'Санта'},
      { text: 'Соседи',
        value: 'Соседи'},
      { text: 'Алми',
        value: 'Алми'},
      { text: 'Спар',
        value: 'Спар'},
      { text: 'Онлайн-доставка (любая)',
        value: 'Онлайн-доставка (любая)'},
      { text: 'Другие',
        value: 'Другие'},
    ],
    months: [
      {
        text: 'январь',
        value: 1,
      },
      {
        text: 'февраль',
        value: 2,
      },
      {
        text: 'март',
        value: 3,
      },
      {
        text: 'апрель',
        value: 4,
      },
      {
        text: 'май',
        value: 5,
      },
      {
        text: 'июнь',
        value: 6,
      },
      {
        text: 'июль',
        value: 7,
      },
      {
        text: 'август',
        value: 8,
      },
      {
        text: 'сентябрь',
        value: 9,
      },
      {
        text: 'октябрь',
        value: 10,
      },
      {
        text: 'ноябрь',
        value: 11,
      },
      {
        text: 'декабрь',
        value: 12,
      }],
    days: [
      {
        text: '1',
        value: 1,
      },
      {
        text: '2',
        value: 2,
      },
      {
        text: '3',
        value: 3,
      },
      {
        text: '4',
        value: 4,
      },
      {
        text: '5',
        value: 5,
      },
      {
        text: '6',
        value: 6,
      },
      {
        text: '7',
        value: 7,
      },
      {
        text: '8',
        value: 8,
      },
      {
        text: '9',
        value: 9,
      },
      {
        text: '10',
        value: 10,
      },
      {
        text: '11',
        value: 11,
      },
      {
        text: '12',
        value: 12,
      },
      {
        text: '13',
        value: 13,
      },
      {
        text: '14',
        value: 14,
      },
      {
        text: '15',
        value: 15,
      },
      {
        text: '16',
        value: 16,
      },
      {
        text: '17',
        value: 17,
      },
      {
        text: '18',
        value: 18,
      },
      {
        text: '19',
        value: 19,
      },
      {
        text: '20',
        value: 20,
      },
      {
        text: '21',
        value: 21,
      },
      {
        text: '22',
        value: 22,
      },
      {
        text: '23',
        value: 23,
      },
      {
        text: '24',
        value: 24,
      },
      {
        text: '25',
        value: 25,
      },
      {
        text: '26',
        value: 26,
      },
      {
        text: '27',
        value: 27,
      },
      {
        text: '28',
        value: 28,
      },
      {
        text: '29',
        value: 29,
      },
      {
        text: '30',
        value: 30,
      },
      {
        text: '31',
        value: 31,
      }
      ],
  },
  mutations: {
    alert(state, data) {
      state.alert.status = true;
      state.alert.data = data;
    },
    close(state) {
      state.alert.status = false;
    }
  },
  getters: {
    mobile(state) {
      return state.mobile;
    },
    shops(state) {
      return state.shops;
    },
    months(state) {
      return state.months;
    },
    days(state) {
      return state.days;
    },
    tooltip(state) {
      return state.tooltip;
    },
    goods(state) {
      return state.goods;
    },
    counts(state) {
      return state.counts;
    },
    alert(state) {
      return state.alert;
    }
  }
})
