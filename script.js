let countdownInterval;

function startCountdown() {
    const targetDateInput = document.getElementById('target-date').value;
    const targetTimeInput = document.getElementById('target-time').value;

    if (!targetDateInput || !targetTimeInput) {
        alert('Please set a target date and time.');
        return;
    }

    const targetDateTime = new Date(`${targetDateInput}T${targetTimeInput}:00`);

    function updateCountdown() {
        const now = new Date();
        const timeDifference = targetDateTime - now;

        if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = '<h2 style="color: red;">Countdown Completed!</h2>';
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
}

function resetCountdown() {
    clearInterval(countdownInterval);
    document.getElementById('target-date').value = '';
    document.getElementById('target-time').value = '';
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    document.getElementById('countdown').innerHTML = `
            <div id="days" class="time">00</div><p>Days</p>
            <div id="hours" class="time">00</div><p>Hrs</p>
            <div id="minutes" class="time">00</div><p>Min</p>
            <div id="seconds" class="time"style="color: red;">00</div><p style="color: red;">Sec</p>`;
}
