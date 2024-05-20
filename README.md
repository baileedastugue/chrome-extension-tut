# chrome-extension-tut

Following ye ole trusty Hello World tutorial to create a Chrome Extension

## Iterations of the manifest

### Hello world 

````
{
  "manifest_version": 3,
  "name": "Hello Extensions of the world!",
  "description": "Base Level Extension",
  "version": "1.0",
  "action": {
    "default_popup": "hello.html",
    "default_icon": "hello_extensions.png"
  },
}
````

### Reading time

````
{
  "manifest_version": 3,
  "name": "Reading time",
  "version": "1.0",
  "description": "Add the reading time to Chrome Extension documentation articles",
  "icons": {
    "16": "images/icon-16.png",
    "32": "images/icon-32.png",
    "48": "images/icon-48.png",
    "128": "images/icon-128.png"
  }
}
````

