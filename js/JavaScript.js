function initCountdown() {
            const container = document.getElementById('deMarcosCountdown');
            if (!container) return;

            const targetDate = new Date(container.getAttribute('data-date')).getTime();

            const dBlock = document.getElementById('days');
            const hBlock = document.getElementById('hours');
            const mBlock = document.getElementById('minutes');
            const sBlock = document.getElementById('seconds');

            function update() {
                const now = new Date().getTime();
                const difference = targetDate - now;

                if (difference < 0) {
                    container.innerHTML = "<span class='time-number' style='font-family: inherit; font-size: 24px; color: #2779F5;'>JÁ ESTÁ EM EXIBIÇÃO!</span>";
                    return;
                }

                const d = Math.floor(difference / (1000 * 60 * 60 * 24));
                const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const s = Math.floor((difference % (1000 * 60)) / 1000);

                dBlock.textContent = String(d).padStart(2, '0');
                hBlock.textContent = String(h).padStart(2, '0');
                mBlock.textContent = String(m).padStart(2, '0');
                sBlock.textContent = String(s).padStart(2, '0');
            }

            update();
            setInterval(update, 1000);
        }

        window.addEventListener('DOMContentLoaded', initCountdown);