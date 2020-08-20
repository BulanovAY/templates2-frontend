import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTemplates2ЗадачаLForm from './forms/i-i-s-templates2-задача-l';
import IISTemplates2ПроектLForm from './forms/i-i-s-templates2-проект-l';
import IISTemplates2СотрудникLForm from './forms/i-i-s-templates2-сотрудник-l';
import IISTemplates2ЗадачаEForm from './forms/i-i-s-templates2-задача-e';
import IISTemplates2ПроектEForm from './forms/i-i-s-templates2-проект-e';
import IISTemplates2СотрудникEForm from './forms/i-i-s-templates2-сотрудник-e';
import IISTemplates2ЗадачаModel from './models/i-i-s-templates2-задача';
import IISTemplates2ПроектModel from './models/i-i-s-templates2-проект';
import IISTemplates2СотрудникModel from './models/i-i-s-templates2-сотрудник';
import IISTemplates2УчастникПроектаModel from './models/i-i-s-templates2-участник-проекта';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-templates2-задача': IISTemplates2ЗадачаModel,
    'i-i-s-templates2-проект': IISTemplates2ПроектModel,
    'i-i-s-templates2-сотрудник': IISTemplates2СотрудникModel,
    'i-i-s-templates2-участник-проекта': IISTemplates2УчастникПроектаModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
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
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
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
        templates2: {
          caption: 'templates2',
          title: 'templates2',
          'i-i-s-templates2-проект-l': {
            caption: 'i-i-s-templates2-проект-l',
            title: 'i-i-s-templates2-проект-l'
          },
          'i-i-s-templates2-сотрудник-l': {
            caption: 'i-i-s-templates2-сотрудник-l',
            title: 'i-i-s-templates2-сотрудник-l'
          },
          'i-i-s-templates2-задача-l': {
            caption: 'i-i-s-templates2-задача-l',
            title: 'i-i-s-templates2-задача-l'
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
    'i-i-s-templates2-задача-l': IISTemplates2ЗадачаLForm,
    'i-i-s-templates2-проект-l': IISTemplates2ПроектLForm,
    'i-i-s-templates2-сотрудник-l': IISTemplates2СотрудникLForm,
    'i-i-s-templates2-задача-e': IISTemplates2ЗадачаEForm,
    'i-i-s-templates2-проект-e': IISTemplates2ПроектEForm,
    'i-i-s-templates2-сотрудник-e': IISTemplates2СотрудникEForm
  },

});

export default translations;
