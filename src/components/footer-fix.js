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
            .footer-content .about a {
                color: #fff;
                font-weight: 200;
            }
            .footer-content .profil h2 {
                color: #e9e9e9;
                font-weight: 200;
            }
            .footer-content .profil a {
                color: #fff;
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

            @media only screen and (max-width: 800px) {
                .footer-content {
                    height: auto;
                    flex-direction: column;
                }
                .footer-content .profil {
                    padding-bottom: 80px;
                }
            }
            </style>

            <div class="footer-content">
                <div class="footer-section about">
                    <h1>Kawal Corona</h1>
                    <p>
                        Kawal Corona merupakan sebuah website untuk memantau perkembangan kasus corona di Indonesia. Website ini mengambil data dari <a href="https://kawalcorona.com/api/">kawalcorona.com/api</a>.<br><br>
                        <a href="https://github.com/rkhaidir/submission-fundamental-frontend-web">Sorce Code</a>
                    </p>
                </div>
                <div class="footer-section profil">
                    <h2>Profil Pembuat</h2>
                    <p>Rakhmat Khaidir</p>
                    <p><a href="https://github.com/rkhaidir">Github</a> | <a href="https://web.facebook.com/rakhmat.khaidir.90">Facebook</a> | <a href="https://twitter.com/rkhaidir16">Twitter</a></p>
                </div>
            </div>
            <div class="footer-bottom">
                &copy; Rakhmat Khaidir
            </div>
        `
    }

}
customElements.define("footer-fix", Footerfix)