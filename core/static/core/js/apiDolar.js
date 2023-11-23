document.addEventListener('DOMContentLoaded', () => {
    fetch('https://www.mindicador.cl/api')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const ufValue = data.uf.valor;
        const dolarValue = data.dolar.valor;
        const euroValue = data.euro.valor;
        const utmValue = data.utm.valor;
  
        document.getElementById('ufValue').innerText = `$${ufValue}`;
        document.getElementById('dolarValue').innerText = `$${dolarValue}`;
        document.getElementById('euroValue').innerText = `$${euroValue}`;
        document.getElementById('utmValue').innerText = `$${utmValue}`;
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  });
  