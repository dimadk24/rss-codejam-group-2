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
        buttonShowVideo: 'Show video',
        menuHome: 'Home',
        menuAuthors: 'Authors',
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
        buttonShowVideo: 'Показать видео',
        menuHome: 'Главная',
        menuAuthors: 'Писатели',
      },
    },
    by: {
      translation: {
        portal: 'Партал',
        authorOfDay: 'Аўтар дня',
        aboutUs: 'Пра нас',
        pagesTitle: 'Культурны партал пісьменнікаў',
        lianko: 'Дзмітрый Лянько',
        krutolyanov: 'Дзмітрый Круталянаў',
        nemkevich: 'Яўген Нямкевіч',
        noWriters: 'Нету пісьменнікаў па такім запыце :(',
        foundWriters: 'Знойдзеныя пісьменнікі:',
        writersSearch: 'Пошук пісьменнікаў',
        ourWriters: 'Нашы пісьменнікі',
        birthplace: 'Горад нараджэння',
        books: 'Кнігі',
        pageTitle: 'Культурны партал пісьменнікаў',
        buttonShowVideo: 'Паказаць вiдэа',
        menuHome: 'Галоуная',
        menuAuthors: 'Пiсьменнiкi',
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
