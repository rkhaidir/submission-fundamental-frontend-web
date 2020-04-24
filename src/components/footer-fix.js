class Footerfix extends HTMLElement {

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
            .footer-content {
                height: 300px;
                display: flex;
            }
            .footer-content .about h1 {
                color: #e9e9e9;
                font-weight: 200;
            }
            .footer-content .footer-section {
                flex: 1;
                padding: 25px;
            }
            .footer-content .about h1 {
                color: #e9e9e9;
                font-weight: 200;
            }
            .footer-bottom {
                background: #343a40;
                color: #686868;
                width: 100%;
                height: 40px;
                text-align: center;
                position: absolute;
                bottom: 0;
                left: 0;
                padding-top: 20px;
            }
            </style>

            <div class="footer-content">
                <div class="footer-section about">
                    <h1>Kawal Corona</h1>
                    <p>
                        Kawal Corona merupakan sebuah website untuk memantau perkembangan kasus corona di Indonesia.
                    </p>
                </div>
            </div>
            <div class="footer-bottom">
                &copy; Rakhmat Khaidir
            </div>
        `
    }

}
customElements.define("footer-fix", Footerfix)