function loadComponent(conteinerId, filePath) {
    fetch(filePath)
    .then(response =>{
        if (!response.ok) {
            throw new Error(`Erroro al cargar ${filePath}: ${response.statusText}`)
        }
        return response.text()
    })
    .then(html =>{
        document.getElementById(conteinerId).innerHTML = html
    })
    .catch(error => console.error(error))
}

document.addEventListener("DOMContentLoaded", () =>{
    loadComponent("header", "/generales/header.html")
    loadComponent("footer", "/generales/footer.html")
})