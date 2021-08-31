import {LitElement, html, css} from 'lit-element';
import htmlContent from './button.html';
import cssContent from './button.scss';

import '@vdab/vdab-design-component-button';

class Dropdown extends LitElement {
    render() {
        return html([htmlContent]);
    }

    static get styles() {
        return css([cssContent]);
    }
}

customElements.define('vdab-dropdown', Dropdown);