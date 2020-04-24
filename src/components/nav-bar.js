class NavBar extends HTMLElement {

    constructor() {
        super()
        this.shadowDOM = this.attachShadow({mode : "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .logo {
            height: inherit;
            margin-left: 2em;
            float: left;
        }
        .logo-text {
            margin: 9px;
            font-weight: 200;
        }
        .logo-text span {
            color: #e9e9e9;
            font-weight: 900;
        }
        </style>
        <div class="logo">
            <h1 class="logo-text"><span>Kawal</span> Corona</h1>
        </div>
        `
    }
}
customElements.define("nav-bar", NavBar)