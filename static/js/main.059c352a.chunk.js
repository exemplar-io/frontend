(this["webpackJsonpexemplar-io.github.io"]=this["webpackJsonpexemplar-io.github.io"]||[]).push([[0],{379:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),s=n(57),a=n.n(s),r=(n(70),n(12)),c=n(2),l=n(21),d=n(10),h=n(14),u=n.n(h),p=n(58),b=n.n(p),j=function(){var e=Object(l.a)(u.a.mark((function e(t,n){var o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.delete("/github/repo?projectName=".concat(t,"&token=").concat(n));case 2:return o=e.sent,console.log(o),e.abrupt("return",o.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=b.a.create({baseURL:"https://8eqbhzi5ay.eu-west-1.awsapprunner.com"}),x=n(0),f=function(e){var t=e.title,n=e.onClick,o=e.disabled;return Object(x.jsx)("button",{className:"bg-primary-500 shadow hover:bg-primary-400 disabled:cursor-not-allowed disabled:bg-primary-500 focus:shadow-outline focus:outline-none text-secondary font-bold py-2 px-4 rounded",onClick:n,disabled:o,children:t})},g=function(e){var t=e.id,n=e.placeholder,o=e.error,i=e.value,s=e.onChange,a="border-primary-500";return o&&(a="border-error"),Object(x.jsx)("input",{className:"shadow appearance-none border-2 "+a+" rounded py-2 px-3 text-primary-500 leading-tight focus:outline-none focus:shadow-outline",id:t,type:"text",placeholder:n,value:i,onChange:s})},w=n(59),y=n.n(w),O=function(){return Object(x.jsx)("div",{className:y.a.loader})},v=n(382),k=n(383),N=function(){var e=Object(o.useState)(""),t=Object(d.a)(e,2),n=t[0],i=t[1],s=Object(o.useState)(""),a=Object(d.a)(s,2),r=a[0],h=a[1],p=Object(o.useState)(""),b=Object(d.a)(p,2),w=b[0],y=b[1],N=Object(o.useState)(""),T=Object(d.a)(N,2),_=T[0],S=T[1],A=Object(o.useState)(!1),E=Object(d.a)(A,2),C=E[0],P=E[1],R=new URLSearchParams(Object(c.f)().search).get("code");console.log("code1",R),Object(o.useEffect)((function(){console.log("code",R),R&&function(e){return m.post("/github/auth",{githubCode:e}).then((function(e){return console.log(e.data),e.data}))}(R).then((function(e){i(e)}))}),[R]);var I=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(r,n).then((function(){S(""),y("")})).catch((function(){S("Oh no! One or more of the repositories could not be deleted! \ud83d\ude2e Please try again later")}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("main",{className:"container mx-auto w-2/6 space-y-10 pb-20 pt-20",children:[Object(x.jsx)("h1",{className:"text-secondary text-4xl",children:"Exemplar \ud83d\udd25"}),Object(x.jsx)("h3",{className:"text-secondary text-xl",children:"In order for us to be able to create an awesome project template for you, we need you to authorize your Github account with us."}),Object(x.jsx)("div",{children:Object(x.jsx)(f,{disabled:!!n,onClick:function(){return window.location.href="https://github.com/login/oauth/authorize?client_id=e78392cb4d38b6f34b4b&scope=public_repo workflow "+("dev"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GITHUB_CLIENT_ID:"e78392cb4d38b6f34b4b",REACT_APP_BACKEND_BASE_URL:"https://8eqbhzi5ay.eu-west-1.awsapprunner.com"}).REACT_APP_ENVIRONMENT?"delete_repo":""),Object(x.jsx)("div",{children:Object(x.jsx)(f,{title:"Delete Repositories",onClick:I})})},title:n?"You have authorized Github \ud83c\udf89":"Authorize Github"})}),n?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h3",{className:"text-secondary text-xl",children:"Cool! The next step is to choose a project name \ud83d\ude0e"}),Object(x.jsxs)("div",{className:"space-y-3",children:[Object(x.jsx)("div",{hidden:!_,children:Object(x.jsx)("p",{className:"text-error text-xl",children:_})}),Object(x.jsx)("div",{children:Object(x.jsx)(g,{id:"projectName",error:_,placeholder:"Project name",value:r,onChange:function(e){S(""),h(e.target.value)}})}),Object(x.jsx)("div",{children:Object(x.jsx)(f,{title:"Create Repositories",onClick:function(){P(!0),function(e,t){return m.post("/github/repo",{projectName:e,githubToken:t}).then((function(e){return e.data.rootUrl}))}(r,n).then((function(e){P(!1),y(e)})).catch((function(e){422===e.response.status&&S("Oh no! Project name was already occupied on your Github account! \ud83d\ude2e Find a new name and try again!"),y(""),P(!1)}))},disabled:!n||!r})}),"dev"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GITHUB_CLIENT_ID:"e78392cb4d38b6f34b4b",REACT_APP_BACKEND_BASE_URL:"https://8eqbhzi5ay.eu-west-1.awsapprunner.com"}).REACT_APP_ENVIRONMENT?Object(x.jsx)("div",{children:Object(x.jsx)(f,{title:"Delete Repositories",onClick:I})}):Object(x.jsx)("div",{}),Object(x.jsx)("div",{children:C?Object(x.jsx)(O,{}):null})]}),w?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{children:Object(x.jsx)("h3",{className:"text-secondary text-xl",children:"Alright, this is it. Here's the link to your new Github repo! \ud83d\udc4a\ud83c\udffc"})}),Object(x.jsx)("div",{children:Object(x.jsx)(f,{title:"Open Root Repository",onClick:function(){return window.open(w)}})}),Object(x.jsx)("div",{children:Object(x.jsx)("h3",{className:"text-secondary text-xl",children:"To download the entire project, open a terminal, paste and run the command below!"})}),Object(x.jsx)("div",{children:Object(x.jsx)(k.a,{language:"shell",style:v.a,showLineNumbers:!0,children:"git clone --recurse-submodules -j8 ".concat(w)})}),Object(x.jsx)("div",{children:Object(x.jsx)("h3",{className:"text-secondary text-xl",children:"Now navigate to the project folder and run the entire project!\ud83c\udf7e\ud83e\udd42\ud83e\udd73"})}),Object(x.jsx)("div",{children:Object(x.jsx)(k.a,{language:"shell",style:v.a,showLineNumbers:!0,children:"cd ".concat(r," && docker-compose up")})})]}):null]}):null]})},T=function(){return Object(x.jsxs)("div",{className:"h-screen w-1/6 ml-0 pt-20 top-0 fixed flex flex-col space-y-3",children:[Object(x.jsxs)("div",{className:"flex flex-col space-y-3 bg-primary-900 rounded p-4",children:[Object(x.jsx)("a",{className:"sticky text-secondary font-medium text-xl  hover:font-bold",href:"#introduction",children:"Introduction"}),Object(x.jsx)("a",{className:"sticky text-secondary text-m font-light hover:font-medium",href:"#how-does-it-work",children:"How does it work?"}),Object(x.jsx)("a",{className:"sticky text-secondary text-m font-light hover:font-medium",href:"#tech-stack",children:"Tech stack"})]}),Object(x.jsxs)("div",{className:"flex flex-col space-y-3 bg-primary-900 rounded p-4",children:[Object(x.jsx)("a",{className:"sticky text-secondary font-medium text-xl hover:font-bold",href:"#whats-generated",children:"What's generated"}),Object(x.jsx)("a",{className:"sticky text-secondary text-m font-light hover:font-medium",href:"#frontend-repository",children:"Frontend"}),Object(x.jsx)("a",{className:"sticky text-secondary text-m font-light hover:font-medium",href:"#backend",children:"Backend"}),Object(x.jsx)("a",{className:"sticky text-secondary text-m font-light hover:font-medium",href:"#root-repository",children:"Root repository (System)"}),Object(x.jsx)("a",{className:"sticky text-secondary text-m font-light hover:font-medium",href:"#DevOps",children:"DevOps"})]})]})},_=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(T,{}),Object(x.jsxs)("main",{className:"container mx-auto w-1/2 space-y-5 pb-10 pt-20 text-secondary text-left",children:[Object(x.jsx)("h1",{className:"text-2xl bg-primary-800 p-4 rounded",id:"introduction",children:"Introduction"}),Object(x.jsx)("p",{className:"text-m",children:"For a developer, setting up a new project from scratch can be a di\ufb00icult task. The developer has to come up with a good overall design and architecture, while also choosing which tech stacks to use. By picking the correct choices from the beginning, a lot of time spent refactoring code in the future can be mitigated and the focus of the developer can be on developing cool features instead!"}),Object(x.jsx)("p",{className:"text-m",children:"Exemplar is a framework with the intention to help developers build full stack software solutions, by providing an out-of-the-box template to generate a project, with a frontend, backend consisting of microservices, message queue and a DevOps setup with pipelines for automatic testing and deployment. The motivation behind this is, to ensure a software project doesn't run in to scalability issues, and in general help the project evolving in a direction that satisfy both short-term, but especially long-term requirements. From the rest of the documentation page, we will focus on the project that exemplar generates for you."}),Object(x.jsx)("h2",{className:"text-xl bg-primary-800 p-2 rounded",id:"how-does-it-work",children:"How does it work?"}),Object(x.jsx)("p",{className:"text-m",children:"Imagine you, a developer, wants to start a new project. What would be the first steps you take? Probably picking an adequate frontend and backend technology and create a Git repository. Afterwards, you would probably setup some testing framework, write a pipeline to ensure automatic deployment to a cloud and more. By looking at the diagram, the idea behind Exemplar is, that all of this is provied to you already. You are simply asked to authorise your Github account and choose a project name and a project is generated for you. (Fix img below - looks ugly)"}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:"/docs/overview.png",alt:"overview",className:"w-2/4 m-auto rounded-lg"})}),Object(x.jsx)("h2",{className:"text-xl bg-primary-800 p-2 rounded",id:"tech-stack",children:"Tech stack"}),Object(x.jsx)("p",{className:"text-m",children:"Before we are diving deeper into what exactly is generated, we would just like to show the tech stack that you will have available in your generated project."}),Object(x.jsxs)("ul",{className:"list-disc pl-8 text-sm font-mono bg-gray-800 rounded p-4",children:[Object(x.jsx)("li",{children:"React with TypeScript (Dockerized) \u2705"}),Object(x.jsx)("li",{children:"Nestjs applications with Typescript (Dockerized) \u2705"}),Object(x.jsx)("li",{children:"Redis (Dockerized) \u2705"}),Object(x.jsx)("li",{children:"Git submodules \u2705"}),Object(x.jsx)("li",{children:"Github actions \u2705"}),Object(x.jsx)("li",{children:"Github pages \u2705"}),Object(x.jsx)("li",{children:"Docker-compose \u2705"}),Object(x.jsx)("li",{children:"Webdriver.io (Selenium grid) \u2705"}),Object(x.jsx)("li",{children:"Postman automation \u2705"}),Object(x.jsx)("li",{children:"Kubernetes integration including deployment files for each app \u2705"})]}),Object(x.jsx)("h1",{className:"text-2xl  bg-primary-800 p-4 rounded",id:"whats-generated",children:"What's generated"}),Object(x.jsx)("p",{className:"text-m",children:"Now, let's get into what Exemplar generates for you. There are three main applications, a frontend and two microservices; all three are dockerized. Besides that, there are test suites, build, test, deployment pipelines as well as docker orchestration tools. A lot of these technologies does not live in a specific app, but cross-app. It might seem counter-intuitive to develop microservices and still rely on some sort of centralization, but for example E2E tests or orchestration tools such as Kubernetes simply needs to be in a centralized context. Therefore, it makes sense to start explaining the root project."}),Object(x.jsx)("h2",{className:"text-xl bg-primary-800 p-2 rounded",id:"frontend-repository",children:"Frontend"}),Object(x.jsxs)("p",{className:"text-m",children:["The frontend is the users' way of interacting with the system. We have decided to use the"," ",Object(x.jsx)("a",{href:"https://reactjs.org/",target:"_blank",children:"ReactJS"})," ","and specifically, combined with"," ",Object(x.jsx)("a",{href:"https://www.typescriptlang.org/",target:"_blank",children:"Typescript"})," ","."]}),Object(x.jsx)("p",{className:"text-m",children:"The frontend contains a simple login component, that allows the user to authenticate themselves with a username and a password to the generated backend. For the frontend it has been chosen to have a bare minimum of functionality, and instead the focus has been on the creating the infrastructure to develop, test and deploy it. Specifically, the following functionality is included in the frontend."}),Object(x.jsxs)("ul",{className:"list-disc pl-8 text-sm font-mono bg-gray-800 rounded p-4",children:[Object(x.jsx)("li",{children:"The frontend application is a ReactJS application with Typescript \u2705"}),Object(x.jsx)("li",{children:"Automatic Github deployment to public URL with Github Pages \u2705"}),Object(x.jsx)("li",{children:"Selenium e2e test-suite setup \u2705"}),Object(x.jsx)("li",{children:"Integration tests setup \u2705"}),Object(x.jsx)("li",{children:"Unit tests setup \u2705"}),Object(x.jsx)("li",{children:"Github actions to build and test automatically, upon opening a pull request \u2705"})]}),Object(x.jsx)("h2",{className:"text-xl bg-primary-800 p-2 rounded",id:"backend",children:"Backend"}),Object(x.jsx)("p",{children:"The backend is the part of the system which is not run in your browser. Specifically, looking at the figure below, it can be seen as the white box surrounding the API gateway, AuthMS, MS and MQ."}),Object(x.jsx)("p",{children:"As it is, the backend\u2019s current functionality is to authenticate users and that's it. As mentioned in the frontend section, the focus is to create the infrastructure to develop a scalable and flexible application. To authenticate a user, all of the components below are triggered (except MS, but we will explain that a bit later)."}),Object(x.jsx)("img",{src:"/docs/generated_app_architecture.svg",alt:"overview",className:"w-3/6 m-auto"}),Object(x.jsx)("h2",{className:"text-m bg-primary-800 p-1 rounded",id:"backend",children:"API gateway"}),Object(x.jsxs)("p",{className:"text-m",children:["The API gateway is the point that the frontend can interact with through Rest. It is developed in"," ",Object(x.jsxs)("a",{href:"https://nestjs.com/",target:"_blank",children:[" ","NestJS"]})," ",". The API gateways responsibility is to provide the infrastructure for the communication between the frontend and backend in this scenario."]}),Object(x.jsx)("p",{children:"The API gateway listens on port 3000 and it serves one endpoint, the /login endpoint. The endpoint will put a message on the message queue, saying that an authentication task is ready to be picked up. This is also why it is called the API gateway, because its task is to delegate the communication in the app. The actual authentication logic resides in the AuthMS."}),Object(x.jsx)("h2",{className:"text-m bg-primary-800 p-1 rounded",children:"AuthMS"}),Object(x.jsx)("p",{children:"The The AuthMS microservice cannot be interacted through rest, as it is with the API gateway. The AuthMS can be interacted with through messages put on the message queue. Just like the API gateway, this is a NestJS project written in Typescript."}),Object(x.jsxs)("p",{children:["It connects to the message queue and listens for messages with the login id. When a message with the login id is put on the queue, it will consume it and verify if the user is an authenticated user or not. If the user is authenticated, it will return a JWT (JSON web token) and if not, a new unauthorized exception will be thrown and the user will receive a 401 Unauthorized status code. Using JWTs for authentication is a very popular and highly scalable method of implementing authentication - you can read a lot more about it on the",Object(x.jsxs)("a",{href:"https://jwt.io/",target:"_blank",children:[" ","jwt.io"," "]}),"website."]}),Object(x.jsx)("h2",{className:"text-m bg-primary-800 p-1 rounded",children:"Summary of the features the backend has"}),Object(x.jsxs)("ul",{className:"list-disc pl-8 text-sm font-mono bg-gray-800 rounded p-4",children:[Object(x.jsx)("li",{children:"API gateway written in NestJS \u2705"}),Object(x.jsx)("li",{children:"Authentication microservice written in NestJS \u2705"}),Object(x.jsx)("li",{children:"Empty (extendable microservice) written in NestJS \u2705"}),Object(x.jsx)("li",{children:"All three of the above services in their Github repositories (submodules) \u2705"}),Object(x.jsx)("li",{children:"Dockerization by all of the above services \u2705"}),Object(x.jsx)("li",{children:"Message queue using Redis \u2705"}),Object(x.jsx)("li",{children:"Postman Automation e2e tests for API gateway \u2705"}),Object(x.jsx)("li",{children:"Integration tests for backend \u2705"}),Object(x.jsx)("li",{children:"Unit tests for backend \u2705"}),Object(x.jsx)("li",{children:"Github actions to build and test automatically, upon opening a pull request \u2705"})]}),Object(x.jsx)("h2",{className:"text-xl bg-primary-800 p-2 rounded",id:"root-repository",children:"Root repository (System)"}),Object(x.jsx)("p",{className:"text-m",children:"Now, you might think there is a missing link, which comes now. Even though we seek to decouple the different apps as much as possible, when it comes to testing and managing the applications in a production context, there needs to be some sort of centralization. This is done by having a root git project."}),Object(x.jsxs)("p",{children:["The root project will be a stand alone Github repository which contains references to all the repositories we have generated. The different references are so called"," ",Object(x.jsx)("a",{href:"https://git-scm.com/book/en/v2/Git-Tools-Submodules",target:"_blank",children:"submodules"}),", which are links to other stand alone repositories - hence, it is not a nested repository. This means that the different git submodule apps, can also be cloned and developed independently if desired."]}),Object(x.jsxs)("p",{children:["Apart from the submodule references, the root project also contains a",Object(x.jsxs)("a",{href:"https://docs.docker.com/compose/",target:"_blank",children:[" ","docker-compose"]})," ","file. With this file, after you've downloaded the project, you can spin up the entire project with the command docker-compose up. This is because all three apps are dockerized as mentioned before."]}),Object(x.jsxs)("p",{children:["Docker-compose is a good tool for local docker-orchestration, but in a production context it is inadequate. Therefore, there is also provided support to deploy the application using"," ",Object(x.jsxs)("a",{href:"https://kubernetes.io/",target:"_blank",children:[" ","Kubernetes"]}),". Below is an example of the application could be deployed using Kubernetes, and it is showing a state with multiple service pods. This could indicate that the MS pods have been under some load, and therefore the system deemed it necessary to deploy several pods."]}),Object(x.jsx)("img",{src:"/docs/system_diagram_k8.svg",alt:"overview",className:"w-4/6 m-auto"}),Object(x.jsx)("p",{children:"Seen below is the folder structure of the generated app, where the building, deployment, orchestration files and more is shown. DevOps pipelines and Github actions will be shown later."}),Object(x.jsx)("img",{src:"/docs/git_structure.png",alt:"overview",className:"w-5/6 m-auto"}),Object(x.jsx)("p",{children:"Specifically, the files above means that the project supports the following features:"}),Object(x.jsxs)("ul",{className:"list-disc pl-8 text-sm font-mono bg-gray-800 rounded p-4",children:[Object(x.jsx)("li",{children:"Docker orchestration for local development using docker-compose \u2705"}),Object(x.jsx)("li",{children:"Deployment files used to deploy the microservices and Redis into Kubernetes clusters either locally or on a cloud-provider \u2705"}),Object(x.jsx)("li",{children:"Local deployment, scaling and management of containerized applications using Kubernetes and minikube \u2705"}),Object(x.jsx)("li",{children:"Guide on how to deploy the backend on Amazons EKS (Elastic Kubernetes service) \u2705"}),Object(x.jsx)("li",{children:"Script to build all Docker images \u2705"})]}),Object(x.jsx)("h2",{className:"text-xl bg-primary-800 p-2 rounded",id:"DevOps",children:"DevOps"}),Object(x.jsx)("h1",{className:"text-2xl  bg-primary-800 p-4 rounded",id:"next-steps",children:"Next Steps - Development Guidelines"}),Object(x.jsx)("p",{className:"text-secondary text-m text-left",children:"You have gotten the project and seen all of the awesome components and code that have been generated for you. Now it's time to make it your own and implement exactly the features you want in your project. In this section we will go through how to work with the generated project and how to extend it with new features."}),Object(x.jsx)("p",{className:"text-secondary text-m text-left",children:"You have gotten the project and seen all of the awesome components and code that have been generated for you. Now it's time to make it your own and implement exactly the features you want in your project. In this section we will go through how to work with the generated project and how to extend it with new features."}),Object(x.jsx)("h2",{className:"text-2xl",id:"root-repository",children:"Development Process"}),Object(x.jsx)("p",{className:"text-secondary text-m text-left",children:"One of the key features of Exemplar is the setup for continuous integration, testing and deployment. For this flow to work optimally we expect you to follow a certain process when developing new features. In this section we will explain this development process."})," ",Object(x.jsxs)("p",{className:"text-secondary text-m text-left",children:["Generally, the flow of adding new features to the project should follow the listed protocol. If the feature involves editing multiple different repositories, repeat this protocol for all of the repositories that the feature touches.",Object(x.jsxs)("ul",{className:"list-disc",children:[Object(x.jsx)("li",{children:"Create and checkout a new git branch with the name of the feature."}),Object(x.jsx)("li",{children:"Develop the necessary code. Issue Git commits regularly"}),Object(x.jsx)("li",{children:"Develop appropriate amount of unit, integration and e2e tests"}),Object(x.jsx)("li",{children:"When the feature is implemented, open a new pull request in Github."}),Object(x.jsx)("li",{children:"Verify that all Github Actions workflows runs and completes."}),Object(x.jsx)("li",{children:"Merge the pull request with the main branch."})]}),"The principles introduced in the list above are mostly general good practice. This includes working with features on a separate branch, developing automated tests etc. But especially important to mention, is that a Github pull request has to be opened in order for the automated test to run. This can even be forced by changing a configuration setting in Github but this has this up to the developer to do."]}),Object(x.jsx)("h2",{className:"text-2xl",id:"root-repository",children:"Root repository"}),Object(x.jsx)("h2",{className:"text-2xl",id:"root-repository",children:"Root repository"}),Object(x.jsx)("h2",{className:"text-2xl",id:"root-repository",children:"Root repository"})]})]})},S=function(){return Object(x.jsx)(x.Fragment,{})},A=function(e){var t=e.link,n=e.onClick,o=e.children;return Object(x.jsx)(r.b,{to:t,className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-secondary hover:opacity-75",onClick:n,children:Object(x.jsx)("span",{className:"ml-2",children:o})})},E=function(e){var t=e.link,n=e.children;return Object(x.jsx)("button",{className:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-secondary hover:opacity-75",onClick:function(){return window.open(t)},children:Object(x.jsx)("span",{className:"ml-2",children:n})})},C=Object(x.jsx)("svg",{fill:"#ffffff",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"30px",height:"30px",children:Object(x.jsx)("path",{d:"M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"})}),P=function(){var e=i.a.useState(!1),t=Object(d.a)(e,2),n=t[0],o=t[1];return Object(x.jsx)("nav",{className:"fixed w-full flex flex-wrap items-center justify-between px-2 py-3 h-16 z-10",children:Object(x.jsxs)("div",{className:"container px-4 mx-auto flex flex-wrap items-center justify-between",children:[Object(x.jsxs)("div",{className:"w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start",children:[Object(x.jsx)(r.b,{className:"text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-secondary",to:"/",children:"Exemplar"}),Object(x.jsx)("button",{className:"text-secondary cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",type:"button",onClick:function(){return o(!n)},children:C})]}),Object(x.jsx)("div",{className:"lg:flex flex-grow items-center"+(n?" flex":" hidden"),id:"example-navbar-danger",children:Object(x.jsxs)("ul",{className:"flex flex-col lg:flex-row list-none lg:ml-auto",children:[Object(x.jsx)(A,{link:"/docs",onClick:function(){return o(!n)},children:"docs"}),Object(x.jsx)(A,{link:"/about",onClick:function(){return o(!n)},children:"about"}),Object(x.jsx)(E,{link:"https://github.com/peareasy-elastics",children:"github"})]})})]})})};var R=function(){return Object(x.jsx)("div",{className:"min-h-screen text-center bg-cover bg-center bg-cover bg-wave",children:Object(x.jsxs)(r.a,{children:[Object(x.jsx)(P,{}),Object(x.jsx)("div",{children:Object(x.jsxs)(c.c,{children:[Object(x.jsx)(c.a,{path:"/docs",component:_}),Object(x.jsx)(c.a,{path:"/about",component:S}),Object(x.jsx)(c.a,{path:"/",component:N})]})})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,384)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),o(e),i(e),s(e),a(e)}))};a.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(R,{})}),document.getElementById("root")),I()},59:function(e,t,n){e.exports={loader:"Spinner_loader__fTuX5",load6:"Spinner_load6__1_74m",round:"Spinner_round__3G_CY"}},70:function(e,t,n){}},[[379,1,2]]]);
//# sourceMappingURL=main.059c352a.chunk.js.map