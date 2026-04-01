function changeToRed() {
    document.body.innerHTML = '';
    document.body.style.backgroundColor = 'red';

    let count = 3;
    const readyText = document.createElement('div');
    readyText.textContent = 'ready your hands on the keyboard';
    readyText.style.position = 'fixed';
    readyText.style.top = '40%';
    readyText.style.left = '50%';
    readyText.style.transform = 'translate(-50%, -50%)';
    readyText.style.fontSize = '24px';
    readyText.style.color = 'white';
    readyText.style.fontFamily = 'Suisse Intl S Alt, -apple-system, Inter, system-ui, sans-serif';
    readyText.style.zIndex = '9998';
    document.body.appendChild(readyText);

    const countdownElem = document.createElement('div');
    countdownElem.style.position = 'fixed';
    countdownElem.style.top = '55%';
    countdownElem.style.left = '50%';
    countdownElem.style.transform = 'translate(-50%, -50%)';
    countdownElem.style.fontSize = '120px';
    countdownElem.style.color = 'white';
    countdownElem.style.fontFamily = 'Suisse Intl S Alt, -apple-system, Inter, system-ui, sans-serif';
    countdownElem.style.zIndex = '9999';
    document.body.appendChild(countdownElem);

    const interval = setInterval(() => {
        if (count > 0) {
            countdownElem.textContent = count;
            count--;
        } else {
            clearInterval(interval);
            
            
            const delay = 500 + Math.random() * 1000; // 0.5-1.5 seconds
            countdownElem.remove();
            readyText.remove();
            setTimeout(() => {
                const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
                const randomKey = keys[Math.floor(Math.random() * keys.length)];

                const buttonPrompt = document.createElement('div');
                buttonPrompt.textContent = `Press this key: ${randomKey}`;
                buttonPrompt.style.position = 'fixed';
                buttonPrompt.style.top = '50%';
                buttonPrompt.style.left = '50%';
                buttonPrompt.style.transform = 'translate(-50%, -50%)';
                buttonPrompt.style.fontSize = '40px';
                buttonPrompt.style.color = 'white';
                buttonPrompt.style.fontFamily = 'Suisse Intl S Alt, -apple-system, Inter, system-ui, sans-serif';
                buttonPrompt.style.zIndex = '9999';
                document.body.style.backgroundColor = 'green';
                document.body.appendChild(buttonPrompt);

                const startTime = Date.now();

                function onKeyDown(event) {
                    if (event.key.toUpperCase() === randomKey) {
                        document.removeEventListener('keydown', onKeyDown);
                        const reactionTime = Date.now() - startTime;
                        localStorage.setItem('reactionTime', reactionTime);
                        window.location.href = 'bluePage.html'; 
                    }
                }

                document.addEventListener('keydown', onKeyDown);
            }, delay);
        }
    }, 1000);
}