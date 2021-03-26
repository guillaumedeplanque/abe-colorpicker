# abe-colorpicker

Add a colorpicker field type to Abe CMS

![Colorpicker Abe Field](http://res.cloudinary.com/krotoku/image/upload/v1496923627/colorpicker-field-2.png)

## Installation

```shell
abe install guillaumedeplanque/abe-colorpicker
```

## Use

Use an ABE text field type and add the attribute 'colorpicker' to it :

```
{{abe type='text' key='background_color' desc='Background color' visible='false' tab='default' colorpicker='1'}}
```

And use it after in your template :

```
<section class="description" style="background: linear-gradient(#{{background_color}}, white);">
```
