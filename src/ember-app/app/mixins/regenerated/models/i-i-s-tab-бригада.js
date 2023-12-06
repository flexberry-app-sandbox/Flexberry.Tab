import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  конбр: DS.attr('string'),
  назначение: DS.attr('string'),
  начбр: DS.attr('string'),
  состав: DS.hasMany('i-i-s-tab-состав', { inverse: 'бригада', async: false })
});

export let ValidationRules = {
  конбр: {
    descriptionKey: 'models.i-i-s-tab-бригада.validations.конбр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  назначение: {
    descriptionKey: 'models.i-i-s-tab-бригада.validations.назначение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  начбр: {
    descriptionKey: 'models.i-i-s-tab-бригада.validations.начбр.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состав: {
    descriptionKey: 'models.i-i-s-tab-бригада.validations.состав.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БригадаE', 'i-i-s-tab-бригада', {
    начбр: attr('Начбр', { index: 0 }),
    конбр: attr('Конбр', { index: 1 }),
    назначение: attr('Назначение', { index: 2 }),
    состав: hasMany('i-i-s-tab-состав', 'Состав', {
      сотрудник: belongsTo('i-i-s-tab-сотрудник', 'Сотрудник', {
        фамилия: attr('Фамилия', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'фамилия' }),
      должность: belongsTo('i-i-s-tab-должность', 'Должность', {
        код: attr('Код', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'код' })
    })
  });

  modelClass.defineProjection('БригадаL', 'i-i-s-tab-бригада', {
    начбр: attr('Начбр', { index: 0 }),
    конбр: attr('Конбр', { index: 1 }),
    назначение: attr('Назначение', { index: 2 })
  });
};
