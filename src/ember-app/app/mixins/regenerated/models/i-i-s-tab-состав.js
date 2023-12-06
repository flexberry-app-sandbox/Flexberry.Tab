import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должность: DS.belongsTo('i-i-s-tab-должность', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-tab-сотрудник', { inverse: null, async: false }),
  бригада: DS.belongsTo('i-i-s-tab-бригада', { inverse: 'состав', async: false })
});

export let ValidationRules = {
  должность: {
    descriptionKey: 'models.i-i-s-tab-состав.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-tab-состав.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  бригада: {
    descriptionKey: 'models.i-i-s-tab-состав.validations.бригада.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставE', 'i-i-s-tab-состав', {
    сотрудник: belongsTo('i-i-s-tab-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'фамилия' }),
    должность: belongsTo('i-i-s-tab-должность', 'Должность', {
      код: attr('Код', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'код' })
  });
};
