import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('string'),
  наименов: DS.attr('string')
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-tab-должность.validations.код.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименов: {
    descriptionKey: 'models.i-i-s-tab-должность.validations.наименов.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностьE', 'i-i-s-tab-должность', {
    код: attr('Код', { index: 0 }),
    наименов: attr('Наименов', { index: 1 })
  });

  modelClass.defineProjection('ДолжностьL', 'i-i-s-tab-должность', {
    код: attr('Код', { index: 0 }),
    наименов: attr('Наименов', { index: 1 })
  });
};
