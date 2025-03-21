# CLI New Express App

## Overview

This CLI tool is designed to streamline project setup by automating the configuration of various templates, dependencies, and database connections. It provides options for selecting project types, programming languages, testing frameworks, and database integrations.

## Features

- Interactive prompts for selecting project configuration

- Support for multiple project templates (Basic, API, MVC)

- Option to choose TypeScript or JavaScript

- Database configuration for PostgreSQL, MySQL and MongoDB

- Automated installation of required dependencies

- Git repository initialization

## Installation and Usage

To install the CLI tool globally, run:

`npm install -g new-express-app`

Or use it directly with npx:

`npx new-express-app`

Follow the prompts to configure your project.

## Configuration Options

| Option             |  Choice 1  |  Choice 2  |    Choice 3    |
| ------------------ | :--------: | :--------: | :------------: |
| Name               |   input    |     -      |       -        |
| Git Init           |    Yes     |     No     |       -        |
| GitHub repo        |    Yes     |     No     |       -        |
| Languages          | JavaScript | TypeScript |       -        |
| Templates          |   Basic    |    API     |      MVC       |
| README             |    Yes     |     No     |       -        |
| Testing            |    Yes     |     No     |       -        |
| Testing lib        |    jest    |   Mocka    |       -        |
| Testing lib. packs |  multiple  |     -      |       -        |
| Docker             |    Yes     |     No     |       -        |
| Docker config      |   image    |   ports    | docker-compose |
| Database           | PostgreSQL |   MySQL    |    MongoDB     |
| Packages           |  multiple  |     -      |       -        |

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository

2. Create a feature branch (git checkout -b feature-name)

3. Commit your changes (git commit -m 'Add new feature')

4. Push to the branch (git push origin feature-name)

5. Open a pull request

## Future Improvements

- Add more database integrations

- Improve error handling and logging

- Support for additional testing frameworks

## License

This project is licensed under the MIT License.
