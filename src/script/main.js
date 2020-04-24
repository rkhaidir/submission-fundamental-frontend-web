import "../style/style.css";

function main() {

    const baseUrl = `https://api.kawalcorona.com`
        
    const getDataIndonesia = () => {
        fetch(`${baseUrl}/indonesia/`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson) {
                    renderData(responseJson[0])
                }
            })
    }

    const getDataProvinsi = () => {
        fetch(`${baseUrl}/indonesia/provinsi/`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                renderDataProvinsi(responseJson)
            })
    }

    const renderData = (data) => {
        const infoData = document.querySelector(".info-data")

        infoData.innerHTML = `
        <div class="info-content">
            <div class="info-section">
                <h3>Positif</h3>
                <h1>${data.positif}</h1>
            </div>
            <div class="info-section">
                <h3>Meninggal</h3>
                <h1>${data.meninggal}</h1>
            </div>
            <div class="info-section">
                <h3>Sembuh</h3>
                <h1>${data.sembuh}</h1>
            </div>
        </div>`
    }

    const renderDataProvinsi = (data) => {
        const listData = document.querySelector("#list-data")

        let no = 1
        data.forEach(provinsi => {
            listData.innerHTML += `
            <tr>
                <td><b>${no}<b></td>
                <td>${provinsi.attributes.Provinsi}</td>
                <td>${provinsi.attributes.Kasus_Posi}</td>
                <td>${provinsi.attributes.Kasus_Meni}</td>
                <td>${provinsi.attributes.Kasus_Semb}</td>
            </tr>`
            no++
        })
    }

    document.addEventListener("DOMContentLoaded", function() {
        getDataIndonesia()
        getDataProvinsi()


        // BackTop
        const backTop = document.querySelector(".back-top")
        window.addEventListener("scroll", scrollUp)
    
        function scrollUp() {
            if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backTop.style.display = ""
            } else {
                backTop.style.display = "none"
            }
        }
    
        backTop.addEventListener("click", () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })
    })
}
export default main