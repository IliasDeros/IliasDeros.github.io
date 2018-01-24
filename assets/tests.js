'use strict';

define('redbull-demo-portal/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('pods/application/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/application/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/canvases/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/canvases/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/groups/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/groups/index/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/groups/redbull/germany/berlin/east/knox/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/groups/redbull/germany/berlin/east/knox/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/groups/redbull/germany/berlin/west/griffin/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/groups/redbull/germany/berlin/west/griffin/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/groups/redbull/germany/berlin/west/knox/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/groups/redbull/germany/berlin/west/knox/controller.js should pass ESLint\n\n');
  });

  QUnit.test('pods/groups/redbull/germany/berlin/west/knox/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/groups/redbull/germany/berlin/west/knox/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/groups/redbull/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/groups/redbull/index/controller.js should pass ESLint\n\n');
  });

  QUnit.test('pods/groups/redbull/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/groups/redbull/index/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/groups/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/groups/route.js should pass ESLint\n\n');
  });

  QUnit.test('pods/users/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/users/route.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define('redbull-demo-portal/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('redbull-demo-portal/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'redbull-demo-portal/tests/helpers/start-app', 'redbull-demo-portal/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('redbull-demo-portal/tests/helpers/resolver', ['exports', 'redbull-demo-portal/resolver', 'redbull-demo-portal/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('redbull-demo-portal/tests/helpers/start-app', ['exports', 'redbull-demo-portal/app', 'redbull-demo-portal/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('redbull-demo-portal/tests/test-helper', ['redbull-demo-portal/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('redbull-demo-portal/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/application/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/application/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/assets/berlin/index/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/assets/berlin/index/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/assets/image/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/assets/image/controller-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/assets/image/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/assets/image/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/assets/index/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/assets/index/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/assets/playlist/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/assets/playlist/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/assets/redbull/berlin/east/index/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/assets/redbull/berlin/east/index/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/assets/redbull/berlin/east/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/assets/redbull/berlin/east/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/assets/redbull/berlin/index/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/assets/redbull/berlin/index/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/assets/redbull/berlin/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/assets/redbull/berlin/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/assets/redbull/berlin/west/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/assets/redbull/berlin/west/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/assets/redbull/index/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/assets/redbull/index/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/assets/redbull/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/assets/redbull/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/canvases/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/canvases/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/groups/index/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/groups/index/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/groups/redbull/germany/berlin/east/knox/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/groups/redbull/germany/berlin/east/knox/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/groups/redbull/germany/berlin/west/knox/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/groups/redbull/germany/berlin/west/knox/controller-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/groups/redbull/germany/berlin/west/knox/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/groups/redbull/germany/berlin/west/knox/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/groups/redbull/index/controller-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/groups/redbull/index/controller-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/groups/redbull/index/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/groups/redbull/index/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/groups/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/groups/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/projects/redbull/germany/berlin/west/griffin/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/projects/redbull/germany/berlin/west/griffin/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/projects/redbull/germany/berlin/west/knox/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/projects/redbull/germany/berlin/west/knox/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/projects/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/projects/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/pods/users/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/users/route-test.js should pass ESLint\n\n');
  });
});
define('redbull-demo-portal/tests/unit/pods/application/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('redbull-demo-portal/tests/unit/pods/assets/berlin/index/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:assets/berlin/index', 'Unit | Route | assets/berlin/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('redbull-demo-portal/tests/unit/pods/assets/image/controller-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:assets/image', 'Unit | Controller | assets/image', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('redbull-demo-portal/tests/unit/pods/assets/image/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:assets/image', 'Unit | Route | assets/image', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('redbull-demo-portal/tests/unit/pods/assets/index/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:assets/index', 'Unit | Route | assets/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('redbull-demo-portal/tests/unit/pods/assets/playlist/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:assets/playlist', 'Unit | Route | assets/playlist', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('redbull-demo-portal/tests/unit/pods/assets/redbull/berlin/east/index/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:assets/redbull/berlin/east/index', 'Unit | Route | assets/redbull/berlin/east/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('redbull-demo-portal/tests/unit/pods/assets/redbull/berlin/east/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:assets/redbull/berlin/east', 'Unit | Route | assets/redbull/berlin/east', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('redbull-demo-portal/tests/unit/pods/assets/redbull/berlin/index/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:assets/redbull/berlin/index', 'Unit | Route | assets/redbull/berlin/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('redbull-demo-portal/tests/unit/pods/assets/redbull/berlin/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:assets/redbull/berlin', 'Unit | Route | assets/redbull/berlin', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('redbull-demo-portal/tests/unit/pods/assets/redbull/berlin/west/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:assets/redbull/berlin/west', 'Unit | Route | assets/redbull/berlin/west', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('redbull-demo-portal/tests/unit/pods/assets/redbull/index/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:assets/redbull/index', 'Unit | Route | assets/redbull/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('redbull-demo-portal/tests/unit/pods/assets/redbull/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:assets/redbull', 'Unit | Route | assets/redbull', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('redbull-demo-portal/tests/unit/pods/canvases/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:canvases', 'Unit | Route | canvases', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('redbull-demo-portal/tests/unit/pods/groups/index/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:groups/index', 'Unit | Route | groups/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('redbull-demo-portal/tests/unit/pods/groups/redbull/germany/berlin/east/knox/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:groups/redbull/germany/berlin/east/knox', 'Unit | Route | groups/redbull/germany/berlin/east/knox', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('redbull-demo-portal/tests/unit/pods/groups/redbull/germany/berlin/west/knox/controller-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:groups/redbull/germany/berlin/west/knox', 'Unit | Controller | groups/redbull/germany/berlin/west/knox', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('redbull-demo-portal/tests/unit/pods/groups/redbull/germany/berlin/west/knox/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:groups/redbull/germany/berlin/west/knox', 'Unit | Route | groups/redbull/germany/berlin/west/knox', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('redbull-demo-portal/tests/unit/pods/groups/redbull/index/controller-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:groups/redbull/index', 'Unit | Controller | groups/redbull/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('redbull-demo-portal/tests/unit/pods/groups/redbull/index/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:groups/redbull/index', 'Unit | Route | groups/redbull/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('redbull-demo-portal/tests/unit/pods/groups/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:groups', 'Unit | Route | groups', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('redbull-demo-portal/tests/unit/pods/projects/redbull/germany/berlin/west/griffin/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:projects/redbull/germany/berlin/west/griffin', 'Unit | Route | projects/redbull/germany/berlin/west/griffin', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('redbull-demo-portal/tests/unit/pods/projects/redbull/germany/berlin/west/knox/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:projects/redbull/germany/berlin/west/knox', 'Unit | Route | projects/redbull/germany/berlin/west/knox', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('redbull-demo-portal/tests/unit/pods/projects/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:projects', 'Unit | Route | projects', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('redbull-demo-portal/tests/unit/pods/users/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:users', 'Unit | Route | users', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('redbull-demo-portal/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
