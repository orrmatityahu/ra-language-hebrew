# AOR Language Hebrew

> Hebrew translations for [admin-on-rest](https://github.com/marmelab/admin-on-rest), the frontend framework for building admin applications on top of REST services.

## Installation

#### NPM

```sh
npm install --save aor-language-hebrew
```

#### YARN

```sh
yarn add aor-language-hebrew
```

## Usage

```js
// interface translations
import { englishMessages } from 'admin-on-rest';
import hebrewMessages from 'aor-language-hebrew';

// domain translations
import * as domainMessages from './i18n';

const messages = {
    he: { ...hebrewMessages, ...domainMessages.he },
    en: { ...englishMessages, ...domainMessages.en },
};

<Admin locale="he" messages={messages}>
  ...
</Admin>
```

## License

This translation is licensed under the [MIT Licence](LICENSE).