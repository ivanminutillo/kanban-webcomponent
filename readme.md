# A Valueflows Kanban WebComponent
![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

This is a draft of a kanban Web Component built with Stenciljs and based on valueflows syntax.
This project is based on [stencil component starter](https://github.com/ionic-team/stencil-component-starter) repository, although I used postcss instead of SASS in my workflow.

## Custom TAGS available with this module

### oce-kanban
*The whole kanban with bins and cards*
`<oce-kanban bins=[...] />`
**Props**


- bins: `Array<bin>`
  
### oce-bin
*A single bin, to be filled with cards* 
`<oce-bin 
cards={this.cards}
outputs={this.outputs}
due={this.due}
title={this.title}
note={this.note} />`

**Props**


- cards: `Array<card>`,
- outputs: `Array<output>`,
- due: string,
- title: string,
- note: string
  
### oce-card
*A single card that represent a commitment*
`<oce-card members={this.members} due={this.due} note={this.note} action={()=>{console.log('hello')}} />`

**Props**


- members: `Array<members>`,
- due: string,
- note: string,
- action: Function
  
#### oce-output
*The ouptut resource of a bin* `<oce-output outputs={this.outputs} />`

**Props**


- resourceClassifiedAs : {
    name: string
  }

## Getting Started

Follow these steps to run locally the kanban webcomponent:

```bash
git clone https://github.com/ivanminutillo/kanban-webcomponent.git
cd kanban-webcomponent
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To watch for file changes during develop, run:

```bash
npm run dev --es5
```

### Prerequisites

It uses post-css to create and compile css. Postcss-cli is required to build correctly the project:

```bash
npm i -g|-D postcss-cli
```

## Using this component

### Script tag

- Insert the following scripts tag `<script src='https://unpkg.com/kanban-webcomponent/dist/resources-flow.js'></script>` to access the webcomponet and `<link rel="stylesheet" type="text/css" href="https://unpkg.com/kanban-webcomponent/dist/styles/main.css">` if you want to import the style, in the head of your index.html
- Then you can use `<oce-kanban />` webcomponent anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install kanban-webcomponent --save`
- Put this script tag `<script src='https://unpkg.com/kanban-webcomponent/dist/resources-flow.js'></script>` in the head of your index.html
- Import the style from the `node-modules` according to your preferences
- Then you can use the element anywhere in your template, JSX, html etc


## Built With

* [Stenciljs](https://github.com/ionic-team/stencil) - A web component compiler
* [PostCSS](https://github.com/postcss/postcss) - a tool for transforming styles with JS plugins

## Contributing

TODO

## Versioning

TODO

## Authors

* **Ivan Minutillo** - *Initial work* - [twitter](https://twitter.com/m44070)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Ionic Team for the stenciljs amazing tool
