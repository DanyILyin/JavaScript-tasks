import {createElement} from "../render.js";
import {FormOneTaskComponent} from "./one-task-component.js"

const OneTask = new FormOneTaskComponent();

let nameOfTaskList = [
    {
        name: 'Имя Списка',
        tasks: [ 'Тест1', 'Тест2', 'Тест3', 'Тест4' ]
    },
    {
        name: 'Имя Списка2',
        tasks: [ 'Тест1', 'Тест2', 'Тест3', 'Тест4' ]
    },
    {
        name: 'Имя Списка3',
        tasks: [ 'Тест1', 'Тест2', 'Тест3', 'Тест4' ]
    },
    {
        name: 'Имя Списка4',
        tasks: [ 'Тест1', 'Тест2', 'Тест3', 'Тест4' ]
    },
];


function createFormTasksListTemplate() {

    const tasksWindow = document.createElement('div');
    tasksWindow.className = 'type-of-content-block';

    nameOfTaskList.forEach(columnElement => {
        const columnTasks = document.createElement('div');
        columnTasks.className = 'task-block';
        columnTasks.innerHTML = `<h3 class="name-of-task-block">${columnElement.name}</h3>`;
        
        columnElement.tasks.forEach(task => {
            columnTasks.innerHTML += ADDTask(task)
        })

        tasksWindow.appendChild(columnTasks);
    })
    function ADDTask (text) {
        return(`${OneTask.getTemplate(text)}`);
    }

    return tasksWindow.outerHTML;
    }
    const formOneTask = new FormOneTaskComponent();

    export class FormTasksListComponent {
        getTemplate() {
            return createFormTasksListTemplate();
        }
        getElement() {
            if (!this.element) {
                this.element = createElement(this.getTemplate());
            }

            return this.element;
        }
        

    removeElement() {
        this.element = null;
    }
}
