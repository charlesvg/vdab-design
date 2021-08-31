import {LitElement, html, css} from 'lit-element';
import htmlContent from './dropdown.html';
import cssContent from './dropdown.scss';


class Dropdown extends LitElement {
    render() {
        return html([htmlContent]);
    }

    static get styles() {
        return css([cssContent]);
    }
}

customElements.define('vdab-dropdown', Dropdown);