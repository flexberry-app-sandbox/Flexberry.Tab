import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISTabБригадаLForm from './forms/i-i-s-tab-бригада-l';
import IISTabДолжностьLForm from './forms/i-i-s-tab-должность-l';
import IISTabСотрудникLForm from './forms/i-i-s-tab-сотрудник-l';
import IISTabБригадаEForm from './forms/i-i-s-tab-бригада-e';
import IISTabДолжностьEForm from './forms/i-i-s-tab-должность-e';
import IISTabСотрудникEForm from './forms/i-i-s-tab-сотрудник-e';
import IISTabБригадаModel from './models/i-i-s-tab-бригада';
import IISTabДолжностьModel from './models/i-i-s-tab-должность';
import IISTabСоставModel from './models/i-i-s-tab-состав';
import IISTabСотрудникModel from './models/i-i-s-tab-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-tab-бригада': IISTabБригадаModel,
    'i-i-s-tab-должность': IISTabДолжностьModel,
    'i-i-s-tab-состав': IISTabСоставModel,
    'i-i-s-tab-сотрудник': IISTabСотрудникModel
  },

  'application-name': 'Tab',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Tab',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tab',
          title: 'Tab'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        tab: {
          caption: 'Tab',
          title: 'Tab',
          'i-i-s-tab-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-tab-бригада-l': {
            caption: 'Бригада',
            title: ''
          },
          'i-i-s-tab-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-tab-бригада-l': IISTabБригадаLForm,
    'i-i-s-tab-должность-l': IISTabДолжностьLForm,
    'i-i-s-tab-сотрудник-l': IISTabСотрудникLForm,
    'i-i-s-tab-бригада-e': IISTabБригадаEForm,
    'i-i-s-tab-должность-e': IISTabДолжностьEForm,
    'i-i-s-tab-сотрудник-e': IISTabСотрудникEForm
  },

});

export default translations;
