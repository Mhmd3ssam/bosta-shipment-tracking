# Bosta Shipment Tracking 🚚

Bosta Shipment Tracking is a React application designed to track shipments efficiently. It utilizes Redux Toolkit for HTTP requests and state management, MUI for UI components, and i18n for multilingual support (Arabic and English). The project follows a modular architecture for better organization and scalability.

## Folder Structure
bosta-shipment-tracking
  ├──  public
    ├── index.html
    └── ...
  └──  src
      ├──  assets
      └── ...
      ├──  helpers
      │   ├── constants.js
      │   ├── dateTime.js
      │   ├── makeTheme.js
      │   └── urls.js
      ├──  i18n
      │   └── ...
      ├──  modules
      │   ├──  app
      │   │   ├──  components
      │   │   │   └── ...
      │   │   ├──  locales
      │   │   │   └── ...
      │   │   └──  views
      │   │       └── ...
      │   └──  shipment
      │       ├──  components
      │       │   └── ...
      │       ├──  locales
      │       │   └── ...
      │       └──  views
      │           └── ...
      ├──  redux
      │   └── ...
      ├──  shared
      │   └── ...
      ├──  main
      └── ...
      ├── index.js
      └── ...

## About the Project

Bosta Shipment Tracking is built with the following technologies:

- **React**: JavaScript library for building user interfaces.
- **Redux Toolkit**: Redux library for efficient state management.
- **MUI**: React component library for Material Design.
- **i18n**: Internationalization library for supporting multiple languages.

The project adopts a modular architecture for better organization and maintainability. Key features include:

- **State Management**: Redux Toolkit is used for managing application state and making HTTP requests.
- **Internationalization**: i18n library is utilized for supporting both Arabic and English languages.
- **Modular Structure**: The project is organized into modules such as `app` and `shipment`, with each module containing components, views, and localization files.

## Getting Started

To run the project locally, follow these steps:

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.

## Contributors

- [Mhmd Essam](https://github.com/Mhmd3ssam)
