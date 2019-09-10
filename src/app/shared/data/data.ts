export interface FoodNode {
  name: string;
  id?: number;
  children?: FoodNode[];
}

export const TREE_DATA: FoodNode[] = [
  {
    name: 'Introduction',
    children: [
      {name: 'Your First App', id: 1},
      {name: 'Routing', id: 2},
      {name: 'Managing Data', id: 3},
    ]
  }, {
    name: 'fundamentalss',
    children: [
      {
        name: 'Tour of Heroes',
        children: [
          {name: 'The Hero Editor', id: 4},
          {name: 'Brussel sprouts', id: 5},
        ]
      }, {
        name: 'Angular',
        children: [
          {name: 'Security', id: 6},
          {name: 'Accessibility ', id: 7},
        ]
      },
    ]
  },
  {
    name: 'Testing',
    children: [
      {name: 'Installing Angular CLI', id: 8},
      {name: 'Basic workflow', id: 9},
      {name: 'Workspaces and project files', id: 10},
    ]
  },
  {
    name: 'Setup',
    children: [
      {name: 'Installing Angular CLI', id: 8},
      {name: 'Basic workflow', id: 9},
      {name: 'Workspaces and project files', id: 10},
    ]
  },
  {
    name: 'Configuration',
    children: [
      {name: 'Installing Angular CLI', id: 8},
      {name: 'Basic workflow', id: 9},
      {name: 'Workspaces and project files', id: 10},
    ]
  },
  {
    name: 'Set up continuous integration',
    children: [
      {name: 'Installing Angular CLI', id: 8},
      {name: 'Basic workflow', id: 9},
      {name: 'Workspaces and project files', id: 10},
    ]
  },
  {
    name: 'Workspace',
    children: [
      {name: 'Installing Angular CLI', id: 8},
      {name: 'Basic workflow', id: 9},
      {name: 'Workspaces and project files', id: 10},
    ]
  },
  {
    name: 'Application project files',
    children: [
      {name: 'Installing Angular CLI', id: 8},
      {name: 'Basic workflow', id: 9},
      {name: 'Workspaces and project files', id: 10},
    ]
  },
  {
    name: 'Multiple projects',
    children: [
      {name: 'Installing Angular CLI', id: 8},
      {name: 'Basic workflow', id: 9},
      {name: 'Workspaces and project files', id: 10},
    ]
  },
  {
    name: 'Library',
    children: [
      {name: 'Installing Angular CLI', id: 8},
      {name: 'Basic workflow', id: 9},
      {name: 'Workspaces and project files', id: 10},
    ]
  },
  {
    name: 'Cheat Sheet',
    children: [
      {name: 'Installing Angular CLI', id: 8},
      {name: 'Basic workflow', id: 9},
      {name: 'Workspaces and project files', id: 10},
    ]
  },
  {
    name: 'CLI',
    children: [
      {name: 'Installing Angular CLI', id: 8},
      {name: 'Basic workflow', id: 9},
      {name: 'Workspaces and project files', id: 10},
    ]
  },
  {
    name: 'Language Service',
    children: [
      {name: 'Installing Angular CLI', id: 8},
      {name: 'Basic workflow', id: 9},
      {name: 'Workspaces and project files', id: 10},
    ]
  },
  {
    name: 'Style Guide',
    children: [
      {name: 'Installing Angular CLI', id: 8},
      {name: 'Basic workflow', id: 9},
      {name: 'Workspaces and project files', id: 10},
    ]
  }
];


export const childData = [
  { id: 1, name: 'Your First App',txt: 'These Angular docs help you learn and use the Angular platform and framework, from your first app to optimizing complex enterprise apps. Tutorials and guides include downloadable example to accelerate your projects.These docs assume that you are already familiar with HTML, CSS, JavaScript, and some of the tools from the latest standards,\n such as classes and modules. The code samples are written using TypeScript. Most Angular code can be written with just the latest JavaScript, using types for dependency injection, and using decorators for metadata. sdjkfjksd Our community values respectful, supportive communication. Please consult and adhere to the Code of Conduct.' },
  { id: 2, name: 'Routing', txt: 'At the end of Your First App, the online store application has a basic product catalog. The app doesnt have any variable states or navigation. There is one URL, and that URL always displays the My Store page with a list of products and their descriptions In this section, youll extend the app to display full product details in separate pages, with their own URLs. To do this, youll use the Angular router. The Angular router enables you to show different components and data to the user based on where the user is in the application. The router enables navigation from one view to the next as users perform application tasks'},
  { id: 3, name: 'Managing Data',txt: 'These Angular docs help you learn and use the Angular platform and framework, from your first app to optimizing complex enterprise apps. Tutorials and guides include downloadable example to accelerate your projects.These docs assume that you are already familiar with HTML, CSS, JavaScript, and some of the tools from the latest standards, such as classes and modules. The code samples are written using TypeScript. Most Angular code can be written with just the latest JavaScript, using types for dependency injection, and using decorators for metadata. sdjkfjksd Our community values respectful, supportive communication. Please consult and adhere to the Code of Conduct.' },
  { id: 4, name: 'The Hero Editor', txt: 'At the end of Your First App, the online store application has a basic product catalog. The app doesnt have any variable states or navigation. There is one URL, and that URL always displays the My Store page with a list of products and their descriptions In this section, youll extend the app to display full product details in separate pages, with their own URLs. To do this, youll use the Angular router. The Angular router enables you to show different components and data to the user based on where the user is in the application. The router enables navigation from one view to the next as users perform application tasks'},
  { id: 5, name: 'Brussel sprouts',txt: 'These Angular docs help you learn and use the Angular platform and framework, from your first app to optimizing complex enterprise apps. Tutorials and guides include downloadable example to accelerate your projects.These docs assume that you are already familiar with HTML, CSS, JavaScript, and some of the tools from the latest standards, such as classes and modules. The code samples are written using TypeScript. Most Angular code can be written with just the latest JavaScript, using types for dependency injection, and using decorators for metadata. sdjkfjksd Our community values respectful, supportive communication. Please consult and adhere to the Code of Conduct.' },
  { id: 6, name: 'Security', txt: 'At the end of Your First App, the online store application has a basic product catalog. The app doesnt have any variable states or navigation. There is one URL, and that URL always displays the My Store page with a list of products and their descriptions In this section, youll extend the app to display full product details in separate pages, with their own URLs. To do this, youll use the Angular router. The Angular router enables you to show different components and data to the user based on where the user is in the application. The router enables navigation from one view to the next as users perform application tasks'},
  { id: 7, name: 'Accessibility ',txt: 'These Angular docs help you learn and use the Angular platform and framework, from your first app to optimizing complex enterprise apps. Tutorials and guides include downloadable example to accelerate your projects.These docs assume that you are already familiar with HTML, CSS, JavaScript, and some of the tools from the latest standards, such as classes and modules. The code samples are written using TypeScript. Most Angular code can be written with just the latest JavaScript, using types for dependency injection, and using decorators for metadata. sdjkfjksd Our community values respectful, supportive communication. Please consult and adhere to the Code of Conduct.' },
  { id: 8, name: 'Installing Angular CLI',txt: 'These Angular docs help you learn and use the Angular platform and framework, from your first app to optimizing complex enterprise apps. Tutorials and guides include downloadable example to accelerate your projects.These docs assume that you are already familiar with HTML, CSS, JavaScript, and some of the tools from the latest standards, such as classes and modules. The code samples are written using TypeScript. Most Angular code can be written with just the latest JavaScript, using types for dependency injection, and using decorators for metadata. sdjkfjksd Our community values respectful, supportive communication. Please consult and adhere to the Code of Conduct.' },
  { id: 9, name: 'Basic workflow',txt: 'These Angular docs help you learn and use the Angular platform and framework, from your first app to optimizing complex enterprise apps. Tutorials and guides include downloadable example to accelerate your projects.These docs assume that you are already familiar with HTML, CSS, JavaScript, and some of the tools from the latest standards, such as classes and modules. The code samples are written using TypeScript. Most Angular code can be written with just the latest JavaScript, using types for dependency injection, and using decorators for metadata. sdjkfjksd Our community values respectful, supportive communication. Please consult and adhere to the Code of Conduct.' },
  { id: 10, name: 'Workspaces and project files',txt: 'These Angular docs help you learn and use the Angular platform and framework, from your first app to optimizing complex enterprise apps. Tutorials and guides include downloadable example to accelerate your projects.These docs assume that you are already familiar with HTML, CSS, JavaScript, and some of the tools from the latest standards, such as classes and modules. The code samples are written using TypeScript. Most Angular code can be written with just the latest JavaScript, using types for dependency injection, and using decorators for metadata. sdjkfjksd Our community values respectful, supportive communication. Please consult and adhere to the Code of Conduct.' },
];
