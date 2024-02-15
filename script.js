document.getElementById('submitBtn').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value;
    if (!location) {
        alert('위치를 입력해주세요.');
        return;
    }

    // API 요청 URL 구성
    const apiUrl = `https://open-api.jejucodingcamp.workers.dev/?location=${encodeURIComponent(location)}`;

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // 결과를 #result div에 표시
        document.getElementById('result').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'Error: ' + error.message;
    });
});
