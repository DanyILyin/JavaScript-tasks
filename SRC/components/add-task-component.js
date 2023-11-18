import {createElement} from "../render.js";

function createFormAddTaskComponentTemplate() {
    return (
        `<div class="task-container">
            <div class="create-task-container">
                <h2 class="new-task-text">Новая задача</h2> 
                    <div class="input-container">
                        <input class="input-place" type="text" placeholder=" Название задачи...">
                        <input class="button-enter" type="button" value=" + Добавить ">
                    </div>
            </div>
        </div>`
            );
}

export class FormAddTaskComponent {
    getTemplate() {
        return createFormAddTaskComponentTemplate();
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
