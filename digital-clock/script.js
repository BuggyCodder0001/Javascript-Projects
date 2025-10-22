const timeDiv = document.getElementById('time');
setInterval(()=>{
    const now = new Date();
    timeDiv.textContent = now.toLocaleTimeString();
},1000)