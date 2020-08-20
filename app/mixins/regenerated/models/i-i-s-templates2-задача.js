import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  наименование: DS.attr('string'),
  срок: DS.attr('date'),
  проект: DS.belongsTo('i-i-s-templates2-проект', { inverse: null, async: false }),
  исполнитель: DS.belongsTo('i-i-s-templates2-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-templates2-задача.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-templates2-задача.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  срок: {
    descriptionKey: 'models.i-i-s-templates2-задача.validations.срок.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  проект: {
    descriptionKey: 'models.i-i-s-templates2-задача.validations.проект.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  исполнитель: {
    descriptionKey: 'models.i-i-s-templates2-задача.validations.исполнитель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗадачаE', 'i-i-s-templates2-задача', {
    номер: attr('Номер', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    срок: attr('Срок', { index: 2 }),
    проект: belongsTo('i-i-s-templates2-проект', 'Проект', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: 3 }),
    исполнитель: belongsTo('i-i-s-templates2-сотрудник', 'Исполнитель', {
      фИО: attr('ФИО', { index: 6 })
    }, { index: 5 })
  });

  modelClass.defineProjection('ЗадачаL', 'i-i-s-templates2-задача', {
    номер: attr('Номер', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    срок: attr('Срок', { index: 2 }),
    проект: belongsTo('i-i-s-templates2-проект', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true }),
    исполнитель: belongsTo('i-i-s-templates2-сотрудник', 'ФИО', {
      фИО: attr('ФИО', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
