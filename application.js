System.register([], function (_export, _context) {
  "use strict";

  var Application, cc;
  _export("Application", void 0);
  return {
    setters: [],
    execute: function () {
      _export("Application", Application = class Application {
        constructor() {
          this.settingsPath = 'src/settings.json';
          this.showFPS = false;
        }
        init(engine) {
          cc = engine;
          cc.game.onPostBaseInitDelegate.add(this.onPostInitBase.bind(this));
          cc.game.onPostSubsystemInitDelegate.add(this.onPostSystemInit.bind(this));
          // 是否是新版的标识(容错，避免旧版无法正常热更)
          localStorage.setItem('newLoadManifest', 1);
          localStorage.setItem('newLoadManifestChildrenGame', 1);
        }
        onPostInitBase() {
          // cc.settings.overrideSettings('assets', 'server', '');
          // do custom logic
        }
        onPostSystemInit() {
          // do custom logic
        }
        start() {
          return cc.game.init({
            debugMode: false ? cc.DebugMode.INFO : cc.DebugMode.ERROR,
            settingsPath: this.settingsPath,
            overrideSettings: {
              // assets: {
              //      preloadBundles: [{ bundle: 'main', version: 'xxx' }],
              // }
              profiling: {
                showFPS: this.showFPS
              }
            }
          }).then(() => cc.game.run());
        }
      });
    }
  };
});