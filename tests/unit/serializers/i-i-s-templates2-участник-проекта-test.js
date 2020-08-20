import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-templates2-участник-проекта', 'Unit | Serializer | i-i-s-templates2-участник-проекта', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-templates2-участник-проекта',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-templates2-задача',
    'model:i-i-s-templates2-проект',
    'model:i-i-s-templates2-сотрудник',
    'model:i-i-s-templates2-участник-проекта',
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
