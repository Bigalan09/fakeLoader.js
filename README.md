# What is fakeLoader.js?

fakeLoader.js is a lightweight jQuery plugin that helps you create an animated spinner with a fullscreen loading mask to simulate the page preloading effect.

### Check out the <a href="http://joaopereirawd.github.io/fakeLoader.js/demo/demo1.html" target="_blank">Demo</a>

## Bower?
Me too :) fakeLoader.js is available as a Bower package. Just run `bower install fakeloader`

## 1. Include in HTML Document
Include in the top of your `<body>` tag
```
<div id="fakeLoader"></div>
```

## 2. Include Styles
Inside `<head>` tag
```
<link rel="stylesheet" href="yourPath/fakeLoader.css" />
```

## 3. Include Folowing Libraries
JQuery reference and the fakeLoader.js
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="../dist/js/fakeLoader.min.js"></script>
```

## 4. Basic Initialize
Include in bottom of your `<body>` tag
```
<script type="text/javascript">
    $('#fakeLoader').fakeLoader();
</script>
```

## 5. Options
```
<script type="text/javascript">
    $("#fakeLoader").fakeLoader({
        timeToHide:1200, //Time in milliseconds for fakeLoader disappear
        zIndex:999, // Default zIndex
        spinner:"spinner1",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
        bgColor:"#2ecc71", //Hex, RGB or RGBA colors
        imagePath:"yourPath/customizedImage.gif" //If you want can you insert your custom image
  });
</script>
```
