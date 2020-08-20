import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сотрудник: DS.belongsTo('i-i-s-templates2-сотрудник', { inverse: null, async: false }),
  проект: DS.belongsTo('i-i-s-templates2-проект', { inverse: 'участникПроекта', async: false })
});

export let ValidationRules = {
  сотрудник: {
    descriptionKey: 'models.i-i-s-templates2-участник-проекта.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  проект: {
    descriptionKey: 'models.i-i-s-templates2-участник-проекта.validations.проект.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УчастникПроектаE', 'i-i-s-templates2-участник-проекта', {
    сотрудник: belongsTo('i-i-s-templates2-сотрудник', 'Сотрудник', {
      фИО: attr('ФИО', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' })
  });
};
