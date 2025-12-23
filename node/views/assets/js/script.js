document.addEventListener('DOMContentLoaded', () => {
    const timeMessageElement = document.querySelector('[name="timemsg"]');
    const timeNowElements = document.querySelectorAll('.timenow');

    const updateTimeMessage = () => {
        const now = new Date();
        const hour = now.getHours();

        let message = '';
        if (hour < 5) {
            message = '좋은 새벽입니다!';
        } else if (hour < 11) {
            message = '행복한 아침 시간이에요!';
        } else if (hour < 14) {
            message = '즐거운 점심 시간입니다!';
        } else if (hour < 18) {
            message = '출출한 기분이 드시나요?';
        } else if (hour < 22) {
            message = '든든한 저녁 시간입니다!';
        } else {
            message = '늦은 밤, 간단한 야식?';
        }

        if (timeMessageElement) {
            timeMessageElement.textContent = message;
        }
    };

    const updateNowTime = () => {
        if (!timeNowElements.length) return;
        const now = new Date();
        const timeText = now.toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
        timeNowElements.forEach((el) => {
            el.textContent = timeText;
        });
    };

    // 초기 표시
    updateTimeMessage();
    updateNowTime();

    // 주기 업데이트
    setInterval(updateTimeMessage, 60 * 1000);
    setInterval(updateNowTime, 1000);
});
    
document.addEventListener('DOMContentLoaded', () => {
    const meansElement = document.querySelector('[name="mens"]');

    const gender = document.querySelector('[name="gender"]').value;

    const mens = () => {
        let divmens
        if (gender == 'male') {
            divmens = '';
        }
        else {
            divmens = '<p>생리주기</p><input type="date" name="mens"></div>';
        }

        if (meansElement) {
            meansElement.innerHTML = divmens;
        }
    }

    mens();
});