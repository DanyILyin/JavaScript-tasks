import {HeaderComponent} from './components/header-component.js';
import {FormAddTaskComponent} from './components/add-task-component.js';
import {render, RenderPosition} from './render.js';




const bodyContainer = document.querySelector('body');
const formContainer = document.querySelector('.content-block');
console.log(bodyContainer);


render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);