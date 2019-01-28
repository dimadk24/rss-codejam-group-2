import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

i18n.use(reactI18nextModule).init({
  resources: {
    en: {
      translation: {
        portal: 'Portal',
        authorOfDay: 'Author of the Day',
        aboutUs: 'About us',
        pagesTitle: 'Writers Culture Portal',
        lianko: 'Dmitry Lianko',
        krutolyanov: 'Dmitry Krutolyanov',
        nemkevich: 'Yauheni Nemkevich',
        ourWriters: 'Our writers',
        noWriters: "We couldn't find such writers :(",
        foundWriters: 'Found writers:',
        writersSearch: 'Search of writers',
        birthplace: 'Birthplace',
        books: 'Books',
        pageTitle: 'Writers culture portal',
      },
    },
    ru: {
      translation: {
        portal: 'Портал',
        authorOfDay: 'Автор дня',
        aboutUs: 'О нас',
        pagesTitle: 'Культурный портал писателей',
        lianko: 'Дмитрий Ленько',
        krutolyanov: 'Дмитрий Крутолянов',
        nemkevich: 'Евгений Немкевич',
        noWriters: 'Нету писателей по такому запросу :(',
        foundWriters: 'Найденные писатели:',
        writersSearch: 'Поиск писателей',
        ourWriters: 'Наши писатели',
        birthplace: 'Город рождения',
        books: 'Книги',
        pageTitle: 'Культурный портал писателей',
      },
    },
  },
  lng: 'en',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;