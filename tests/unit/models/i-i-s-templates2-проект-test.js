import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-templates2-проект', 'Unit | Model | i-i-s-templates2-проект', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
