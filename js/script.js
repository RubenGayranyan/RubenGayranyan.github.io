const namespace = 'gayranyan-github-pages';
const key = 'visits';

fetch(`https://api.countapi.xyz/hit/${encodeURIComponent(namespace)}/${encodeURIComponent(key)}`)
    .then(res => res.json())
    .then(data => {
        document.getElementById('visits').textContent = data.value;
    })
    .catch(err => {
        console.error('CountAPI error', err);
        document.getElementById('visits').textContent = '0';
    });