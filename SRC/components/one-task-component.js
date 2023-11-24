import {createElement} from "../render.js";



function createFormOneTaskTemplate(text) {
    return (
                `<div class="task-li">${text}</div>`
            );
}

export class FormOneTaskComponent {
    getTemplate(text) {
        return createFormOneTaskTemplate(text);
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
