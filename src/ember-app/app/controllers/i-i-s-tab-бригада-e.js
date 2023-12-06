import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-tab-бригада-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-tab-состав+сотрудник':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фамилия',
            required: true,
            relationName: 'сотрудник',
            projection: 'СотрудникL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-tab-состав+должность':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'код',
            required: true,
            relationName: 'должность',
            projection: 'ДолжностьL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
