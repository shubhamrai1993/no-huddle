document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateRequest');
    const generatedRequest = document.getElementById('generatedRequest');
    const slots = document.querySelectorAll('.slot.available');
    
    let selectedSlot = null;
    
    slots.forEach(slot => {
        slot.addEventListener('click', function() {
            slots.forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
            selectedSlot = this.dataset.time;
            updateGeneratedMessage();
        });
    });
    
    generateButton.addEventListener('click', updateGeneratedMessage);
    
    document.getElementById('meetingTopic').addEventListener('input', updateGeneratedMessage);
    document.getElementById('meetingDuration').addEventListener('change', updateGeneratedMessage);
    document.getElementById('meetingUrgency').addEventListener('change', updateGeneratedMessage);
    
    function updateGeneratedMessage() {
        const topic = document.getElementById('meetingTopic').value;
        const duration = document.getElementById('meetingDuration').value;
        const urgency = document.getElementById('meetingUrgency').value;
        
        if (!topic) {
            generatedRequest.innerHTML = '<p class="placeholder">Enter a topic to see your generated message</p>';
            return;
        }
        
        let urgencyText = '';
        let timeText = '';
        
        switch(urgency) {
            case 'flexible':
                urgencyText = 'when you have time';
                timeText = selectedSlot ? `I can do ${selectedSlot} or any time that works better for you.` : 'Let me know what time works for you.';
                break;
            case 'today':
                urgencyText = 'sometime today if possible';
                timeText = selectedSlot ? `Could we do ${selectedSlot} today?` : 'Any time today that works for you.';
                break;
            case 'urgent':
                urgencyText = 'within the next couple hours if you\'re available';
                timeText = selectedSlot ? `I'm hoping we could connect at ${selectedSlot} if you're free.` : 'I\'m flexible on time within the next 2 hours.';
                break;
        }
        
        const message = `Hi! Could we do a ${duration}-minute call about ${topic}? I'd like to discuss this ${urgencyText}. ${timeText}`;
        
        generatedRequest.innerHTML = `
            <div class="generated-content">
                <h4>Your considerate meeting request:</h4>
                <div class="message-preview">${message}</div>
                <button onclick="copyToClipboard('${message.replace(/'/g, "\\'")}')">Copy Message</button>
            </div>
        `;
    }
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    });
}