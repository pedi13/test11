
function loadjscssfile(filename, filetype) {

    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';
    head.appendChild(script);

}

if (ej.isAndroid())
    loadjscssfile("build/platforms/android/assets/www/cordova.js", "js");
else if (ej.isWindows())
    loadjscssfile("build/platforms/wp8/www/cordova.js", "js");
else
    loadjscssfile("build/platforms/ios/www/cordova.js", "js");