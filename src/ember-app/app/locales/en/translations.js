import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Tab',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tab',
          title: 'Tab'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
