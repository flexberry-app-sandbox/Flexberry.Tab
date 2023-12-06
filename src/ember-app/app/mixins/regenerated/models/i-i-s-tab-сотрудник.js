import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  отчество: DS.attr('string'),
  табном: DS.attr('string'),
  фамилия: DS.attr('string')
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-tab-сотрудник.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-tab-сотрудник.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  табном: {
    descriptionKey: 'models.i-i-s-tab-сотрудник.validations.табном.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-tab-сотрудник.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-tab-сотрудник', {
    фамилия: attr('Фамилия', { index: 0 }),
    отчество: attr('Отчество', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    табном: attr('Табном', { index: 3 })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-tab-сотрудник', {
    фамилия: attr('Фамилия', { index: 0 }),
    отчество: attr('Отчество', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    табном: attr('Табном', { index: 3 })
  });
};
