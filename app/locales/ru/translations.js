import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Templates2',

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
        'application-name': 'Templates2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Templates2',
          title: 'Templates2'
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
        templates2: {
          caption: 'Templates2',
          title: 'Templates2',
          'i-i-s-templates2-проект-l': {
            caption: 'Проект',
            title: ''
          },
          'i-i-s-templates2-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-templates2-задача-l': {
            caption: 'Задача',
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
    'i-i-s-templates2-задача-l': IISTemplates2ЗадачаLForm,
    'i-i-s-templates2-проект-l': IISTemplates2ПроектLForm,
    'i-i-s-templates2-сотрудник-l': IISTemplates2СотрудникLForm,
    'i-i-s-templates2-задача-e': IISTemplates2ЗадачаEForm,
    'i-i-s-templates2-проект-e': IISTemplates2ПроектEForm,
    'i-i-s-templates2-сотрудник-e': IISTemplates2СотрудникEForm
  },

});

export default translations;
