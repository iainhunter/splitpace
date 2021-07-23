
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-wheel-selector-plugin.plugin",
          "file": "plugins/cordova-wheel-selector-plugin/www/selectorplugin.js",
          "pluginId": "cordova-wheel-selector-plugin",
        "clobbers": [
          "SelectorCordovaPlugin"
        ],
        "runs": true
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-wheel-selector-plugin": "1.0.0"
    };
    // BOTTOM OF METADATA
    });
    