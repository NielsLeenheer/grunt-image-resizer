# grunt-image-resizer

> Grunt plugin for generating images in multiple sizes from a template

### Grunt
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-image-resizer --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-image-resizer');
```


## The "resize" task

### Overview
In your project's Gruntfile, add a section named `resize` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    resize: {
        ios_icons: {
            options: {
                src: 'template/icon.png'
            },
            files: [
                { width: 60, height: 60, dest: 'output/Icon-60.png' }
                { width: 120, height: 120, dest: 'output/Icon-60@2x.png' },
                { width: 180, height: 180, dest: 'output/Icon-60@3x.png' },
                { width: 76, height: 76, dest: 'output/Icon-76.png' },
                { width: 152, height: 152, dest: 'output/Icon-76@2x.png' },
                { width: 167, height: 167, dest: 'output/Icon-83.5@2x.png' },
                { width: 1024, height: 1024, dest: 'output/iTunesArtwork@2x.png' },
            ]
        },

        ios_splash: {
            options: {
                src: 'template/splash.png'
            },
            files: [
                { width: 1334, height: 750, dest: 'output/Default@2x~universal~comcom.png' },
                { width: 2732, height: 2732, dest: 'output/Default@2x~universal~anyany.png' },
                { width: 1278, height: 2732, dest: 'output/Default@2x~universal~comany.png' }
            ]
        }
    }
})
```

A common usage for this plugin is to generate icons and splashscreens for iOS and Android apps. Either for native apps, web apps or Cordova based apps.

You can use a large version of the icon and generate all the smaller sizes automatically. A good size to create your template in is 1024 x 1024, as it is largest variant of an icon that you are required to submit to Apple for use in the App Store. All the other icons can be automatically downsized from here.

In case of Android you can use the plugins for regular icons, but also the newer adaptive icons. Just be aware that you must resize the regular icon, and background and foreground portion seperately. 

There is also different grunt plugin for creating a pre-rendered backwards compatible version of the adaptive icon called `grunt-render-adaptive-icon`

This plugin can also be used for generating different sizes of splash screens. Best would be to use an template image with a width and height of 2732 x 2732 pixels. Take into account that the rendered slashscreen may not use to same aspect-ratio and may be cropped. A good rule of thumb would be to place your artwork in the middle of the image, with a safe area of 1024 x 1280. Everything placed in the safe area will be shown appropriately in both landscape and portrait oriented splash screens.



### Options

#### options.src
Type: `String`

The source file for the a particular set of outputs. For example, a large version of an icon that can be resized down to various smaller sizes. 


### Files

A set of output file that will be generated from the source file. 
For each file the following settings can be defined:

#### file.width
Type `Number`

The width of the output image. Must be lower than width of the source image. 

#### file.height
Type `Number`

The height of the output image. Must be lower than height of the source image. 

#### file.dest
Type: `String`

The path and name of the output file for that will be generated for this particular size.

