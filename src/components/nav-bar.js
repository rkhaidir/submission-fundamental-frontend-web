class NavBar extends HTMLElement {

    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <div class="logo">
            <h1 class="logo-text"><span>Kawal</span> Corona</h1>
        </div>
        `
    }
}
customElements.define("nav-bar", NavBar)