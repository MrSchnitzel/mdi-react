# mdi-react [![npm package](https://img.shields.io/npm/v/mdi-react.svg?style=flat-square)](https://npmjs.org/package/mdi-react)
[Material Design Icons](https://materialdesignicons.com) for React packaged as single components

## Installation
clone and in cloned folder:
```bash
npm install
npm run build
cd publish
sudo npm link
```
in Application you want to use the icons:
 ```bash
 npm link mdi-react
 ```

*The version number of `mdi-react` is in sync with the original font.*

## Usage

Just search for an icon on [materialdesignicons.com](https://materialdesignicons.com) and look for its name.  
The name translates to PascalCase followed by the suffix `Icon` in `mdi-react`.

For example the icons named `alert` and `alert-circle`:

```javascript
import AlertIcon from 'mdi-react/AlertIcon';
import AlertCircleIcon from 'mdi-react/AlertCircleIcon';

const MyComponent = () => {
  return (
    <div>
      <AlertIcon />
      <AlertCircleIcon className="some-class" />
    </div>
  );
};
```

The icons get a class named `mdi-icon` attached for styling. You can also attach own additional classes with the `className` property.
