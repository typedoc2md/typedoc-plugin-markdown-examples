// 在 main.js 的开头添加如下代码
(function () {
    if (typeof window.jsb === 'object') {
        var hotUpdateSearchPaths = localStorage.getItem('HotUpdateSearchPaths');
        if (hotUpdateSearchPaths) {
            var paths = JSON.parse(hotUpdateSearchPaths);
            jsb.fileUtils.setSearchPaths(paths);

            var fileList = [];
            var storagePath = paths[0] || '';
            var tempPath = storagePath + '_temp/';
            var baseOffset = tempPath.length;

            if (jsb.fileUtils.isDirectoryExist(tempPath) && !jsb.fileUtils.isFileExist(tempPath + 'project.manifest.temp')) {
                jsb.fileUtils.listFilesRecursively(tempPath, fileList);
                fileList.forEach(srcPath => {
                    var relativePath = srcPath.substr(baseOffset);
                    var dstPath = storagePath + relativePath;

                    if (srcPath[srcPath.length] == '/') {
                        jsb.fileUtils.createDirectory(dstPath)
                    }
                    else {
                        if (jsb.fileUtils.isFileExist(dstPath)) {
                            jsb.fileUtils.removeFile(dstPath)
                        }
                        jsb.fileUtils.renameFile(srcPath, dstPath);
                    }
                })
                jsb.fileUtils.removeDirectory(tempPath);
            }
        }
    }
})();
// SystemJS support.
window.self = window;
require("src/system.bundle.js");

const importMapJson = jsb.fileUtils.getStringFromFile("src/import-map.json");
const importMap = JSON.parse(importMapJson);
System.warmup({
    importMap,
    importMapUrl: 'src/import-map.json',
    defaultHandler: (urlNoSchema) => {
        require(urlNoSchema.startsWith('/') ? urlNoSchema.substr(1) : urlNoSchema);
    },
});

System.import('./application.js')
.then(({ Application }) => {
    return new Application();
}).then((application) => {
    return System.import('cc').then((cc) => {
        require('jsb-adapter/engine-adapter.js');
        return application.init(cc);
    }).then(() => {
        return application.start();
    });
}).catch((err) => {
    console.error(err.toString() + ', stack: ' + err.stack);
});
