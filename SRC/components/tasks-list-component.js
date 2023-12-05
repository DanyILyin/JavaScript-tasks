import { createElement } from "../render.js";
import { FormOneTaskComponent } from "./one-task-component.js";
import { tasks } from "../mock/task.js";
import { TasksService } from "../service/task-server.js";

function createFormTasksListTemplate() {
    const tasksWindow = document.createElement("div");
    tasksWindow.className = "type-of-content-block";

    // Группируем массив по статусу
    function getGroupBy(key) {
        return function group(array) {
            return array.reduce((acc, obj) => {
                const property = obj[key];
                acc[property] = acc[property] || [];
                acc[property].push(obj);
                return acc;
            }, {});
        };
    }
    const groupByStatus = getGroupBy("status");
    let groupTasksGroup = groupByStatus(tasks);
    // console.log(groupTasks);
    const groupTasks = [groupTasksGroup[2], groupTasksGroup[0], groupTasksGroup[3], groupTasksGroup[1]] 
    // swap(groupTasks, 0, 2) 
    console.log(groupTasks);
    // const testmass = [0, 3, 2, 1]
    // const groupTasksGroup


    // Проходимся по массиву переводим данные в HTML код
    Object.values(groupTasks).forEach((columnElement) => {
        const columnTasks = document.createElement("div");
        columnTasks.className = `${(columnElement[0].status)} task-block`;
        const columnTaskName = document.createElement("h3");
        columnTaskName.className = `${(columnElement[0].status)} task-block-name`;
        columnTaskName.innerHTML += `${defineName(columnElement[0].status)}`;
        columnTasks.innerHTML += columnTaskName.outerHTML;

        Object.values(columnElement).forEach((data) => {
            const task = new FormOneTaskComponent(data);
            const template = task.getTemplate();
            columnTasks.innerHTML += template;
        });

        tasksWindow.innerHTML+=columnTasks.outerHTML;
    });

    return tasksWindow.outerHTML;
}

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

function defineName (name) {
    switch (name) {
        case 'backlog':
            return 'Бэклог'
        case 'in-processing':
            return 'В процессе'
        case 'done':
            return 'Готово'      
        case 'basket':
            return 'Корзина'
        default:
            return name
    }
}
