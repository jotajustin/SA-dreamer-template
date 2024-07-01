setTimeout(function reload() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('content').style.display = 'block';
}, 3000); // 2000 milisegundos = 2 segundos

setTimeout(function () {
    let logoElement = document.getElementById('loader-logo');
    logoElement.classList.add('show');
}, 1000); // 500 milisegundos = 1 segundo