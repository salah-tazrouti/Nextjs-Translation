<a name="readme-top"></a>

<div align="center">
  <br/>
  
  <h3><b>Nextjs-Translation README</b></h3>
</div>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
    - [How i18n works](#How-It-Works)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
- [👥 Authors](#authors)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

# 📖 Nextjs-Translation   <a name="about-project"></a>
**[Nextjs-Translation ]**  is a Next.js 13/14 application utilizing the app directory feature in combination with i18next to demonstrate how to add translation to your React/Next project.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://nextjs.org/">Next.js</a></li>
    <li><a href="https://tailwindcss.com/">Tailwind CSS</a></li>


  </ul>
</details>


### Key Features <a name="key-features"></a>


- **[Translation]**

###   Key Features <a name="How-It-Works"></a>
This section explains how the internationalization (i18n) works in the project using i18next with Next.js:


### 🔧 How i18n works <a name="How i18n works"></a>

## Initialization: ##

- i18next is initialized in the project with the necessary configuration.
- The configuration includes specifying the languages supported, the default language, and the path to the translation files.

## Translation Files: ##

- Translation files are stored in a specific directory, typically in the public/locales folder.
- Each language has its own folder containing JSON files with key-value pairs for translation strings.

- Example structure:

```

src/
  app/
    locales/
      en/
        en.json
      fr/
        fr.json
```

## Using Translations in Components ##

- Components use the useTranslation hook from react-i18next to access the translation strings.
- Example usage:

``` 
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  return <h1>{{t('Head.Home')}}</h1>;
};

```
The t function takes a key as an argument and returns the corresponding translation string.

## Language Switching ##

- Language switching is typically implemented using a dropdown or buttons that call the i18n.changeLanguage method.
- Example:

```
 import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>French</button>
    </div>
  );
};

``` 

- you can the current langue switcher component check the <a href="https://github.com/stazrouti/Nextjs-Translation/blob/main/src/app/LanguageSwitcher.js">LanguageSwitcher.js</a>



<p align="right">(<a href="#readme-top">back to top</a>)</p>



## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

- In order to run this project you need:

- [git](https://git-scm.com/downloads): A tool for managing source code
- [git](https://nodejs.org): JavaScript runtime for building server-side and networking applications
- [Visual Studio Code](https://code.visualstudio.com/): A source code editor
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer): A simple web server utility for Visual Studio Code

### Setup

Clone this repository to your desired folder:
https://github.com/stazrouti/Nextjs-Translation.git
 Example commands:

```sh
  cd my-folder
https://github.com/stazrouti/Nextjs-Translation.git```
```

### Install

Install this project with:

` cd Nextjs-Translation`
  - Run `npm install` after cloning the repo


### Start Project 

  - Run `npm run dev `


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Author1**

- GitHub: [@stazrouti](https://github.com/stazrouti)
- LinkedIn: [salah Eddine Tazrouti](https://linkedin.com/in/salah-eddine-tazrouti)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you like this project please give it a start and share it with your friends. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>




<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
