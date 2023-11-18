import {createElement} from "../render.js";

function createFormTasksListTemplate() {
    return (
                `<ul class="task-block">
                    <h3 class="name-of-task-block">Имя списка</h3>
                </ul>`
            );
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
