import {createElement} from "../render.js";
import {FormOneTaskComponent} from "./one-task-component.js"

const OneTask = new FormOneTaskComponent();

let nameOfTaskList = [
    {
        nameOfBlock: 'name-of-backlog-block',
        name: 'Бэклог',
        tasks: [ 'Выучить JS', 'Выучить React', 'Сделать домашку']
    },
    {
        nameOfBlock: 'name-of-processing-block',
        name: 'В процессе',
        tasks: [ 'Выпить смузи', 'Перестать тупить']
    },
    {
        nameOfBlock: 'name-of-done-block',
        name: 'Готово',
        tasks: [ 'Позвонить маме', 'Погладить Кекса???' ]
    },
    {
        nameOfBlock: 'name-of-basket-block',
        name: 'Корзина',
        tasks: [ 'Сходить погулять', 'Катку в доту']
    },
];


function createFormTasksListTemplate() {

    const tasksWindow = document.createElement('div');
    tasksWindow.className = 'type-of-content-block';

    nameOfTaskList.forEach(columnElement => {
        const columnTasks = document.createElement('div');
        columnTasks.className = 'task-block';
        columnTasks.innerHTML = `<h3 class="${columnElement.nameOfBlock}">${columnElement.name}</h3>`;
        
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
