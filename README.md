## Descripción

Por defecto la app toma la url del back como "http://localhost:3000" en caso de algun cambio se podrá configurar en el archivo ".env" "VITE_REACT_API_URL="http://localhost:3000"

Credenciales: 
- recepcion
  "username": "Maria1",
  "password": "12345"
  
- supervisor
  "username": "Juan1",
  "password": "12345"


Estructura de la app
- La sesión de usuario se maneja de dos formas, una en el local storage y la otra por redux, ahi se guarda el token e info del usuario
- Para las peticiones se usa redux toolkit
- Las rutas estan divididas entre privadas y publicas, estas dependen de si se ha iniciado sesion, en caso de los roles se usa un hook para verificar si se tiene el permiso y si no redirecciona
- Se usa yup para las validaciones de los formularios
- Por motivo de tiempo la data que retorna el back no esta paginada por lo que se la pagina en la tabla de este proyecto
- Se usa MUI para los componentes de diseno
- Uso de Typescript

Abajo los pasos para la instalación del proyecto

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run dev

```







# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
