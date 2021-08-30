import {LitElement, html, css} from 'lit-element';
import htmlContent from './button.html';
import cssContent from './button.css';

class Button extends LitElement {
    render() {
        return html([htmlContent]);
    }

    static get styles() {
        return css([cssContent]);
    }
}

customElements.define('vdab-button', Button);