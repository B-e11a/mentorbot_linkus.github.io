document.getElementById('sendBtn').addEventListener('click', sendMessage);

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (!userInput) {
        alert('Please enter a message.');
        return;
    }

    // 替换为你的后端服务器的线上URL
    fetch('https://mentorbot-497a669f69a8.herokuapp.com/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userInput })
    })
    .then(response => response.json())
    .then(data => {
        if (data.result) {
            document.getElementById('chatResult').innerText = data.result;
        } else {
            document.getElementById('chatResult').innerText = 'No response from model.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('chatResult').innerText = `Error: ${error.message}`;
    });
}
