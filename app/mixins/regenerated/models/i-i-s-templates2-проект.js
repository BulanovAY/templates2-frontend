import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  участникПроекта: DS.hasMany('i-i-s-templates2-участник-проекта', { inverse: 'проект', async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-templates2-проект.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  участникПроекта: {
    descriptionKey: 'models.i-i-s-templates2-проект.validations.участникПроекта.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПроектE', 'i-i-s-templates2-проект', {
    наименование: attr('Наименование', { index: 0 }),
    участникПроекта: hasMany('i-i-s-templates2-участник-проекта', 'Участник проекта', {
      сотрудник: belongsTo('i-i-s-templates2-сотрудник', 'Сотрудник', {
        фИО: attr('ФИО', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'фИО' })
    })
  });

  modelClass.defineProjection('ПроектL', 'i-i-s-templates2-проект', {
    наименование: attr('Наименование', { index: 0 })
  });
};
