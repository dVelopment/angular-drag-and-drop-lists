var options = {
  "version": "1.3.0",
  "packageName": "dvelopment:angular-drag-and-drop-lists",
  "where": "client"
};

Package.describe({
  name: options.packageName,
  version: options.version,
  summary: 'Angular directives for sorting nested lists using the HTML5 Drag & Drop API',
  git: 'https://github.com/marceljuenemann/angular-drag-and-drop-lists',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0', 'METEOR@1.0');
  api.use('angular:angular@1.2.0', options.where);
  api.use('stevezhu:lodash@3.10.1', options.where);
  api.addFiles('angular-drag-and-drop-lists.js', options.where);
});
