import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tab-бригада', 'Unit | Serializer | i-i-s-tab-бригада', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-tab-бригада',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-tab-бригада',
    'model:i-i-s-tab-должность',
    'model:i-i-s-tab-состав',
    'model:i-i-s-tab-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
