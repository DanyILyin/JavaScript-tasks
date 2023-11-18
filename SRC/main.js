import {HeaderComponent} from './components/header-component.js';
import {FormAddTaskComponent} from './components/add-task-component.js';
import {FormAddTaskBoardComponent} from './components/tasks-board-component.js'
import {FormTasksListComponent} from './components/tasks-list-component.js'
import {render, RenderPosition} from './render.js';


const bodyContainer = document.querySelector('body');
const formContainer = document.querySelector('.content-block');
const formTaskBoard = document.querySelector('.content-block');
const formTaskList = new FormAddTaskBoardComponent();
// console.log(bodyContainer);


render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer);
render(formTaskList, formTaskBoard);
render(new FormTasksListComponent(), formTaskList.getElement());
render(new FormTasksListComponent(), formTaskList.getElement());
render(new FormTasksListComponent(), formTaskList.getElement());
render(new FormTasksListComponent(), formTaskList.getElement());