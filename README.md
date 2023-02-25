# Magic Mirror module: Hello world

> Simple Magic Mirror module written in Javascript demonstrating use of the [core module file ](https://docs.magicmirror.builders/development/core-module-file.html#available-module-instance-properties) (frontend)
> and [node helper](https://docs.magicmirror.builders/development/node-helper.html) (backend) in addition to using the nunjuks templates for rendering data.
>
> See [Module Development Documentation](https://docs.magicmirror.builders/development/introduction.html) for more information.

## Example screenshot

![Screenshot](screenshot.png)

## Installing the module

1. Navigate to the `MagicMirror/modules` directory and execute the following command

   ```sh
   git clone https://github.com/ismarslomic/MMM-Hello-World.git
   ```

2. Change into the `MMM-Hello-World` module folder and install runtime dependencies with
   ```sh
   cd MMM-Hello-World
   npm install --omit=dev
   ```

## Using the module

To use this module, add the following configuration block to the modules array in
the `config/config.js` file:

```js
var config = {
  modules: [
    {
      module: 'MMM-Hello-World',
      config: {
        text: 'Hello world Ismar!'
      }
    }
  ]
}
```
