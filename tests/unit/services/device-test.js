import { moduleFor, test } from 'ember-qunit';

moduleFor('service:device', 'Unit | Service | device', {

});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);

  assert.ok(service.isInternetExplorer !== true);
});
