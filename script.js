  document.getElementById('taskForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const resultDiv = document.getElementById('result');
      resultDiv.className = '';
      
      const taskData = {
        tasks: document.getElementById('task').value,
        priority: document.getElementById('priority').value,
        when: document.getElementById('when').value,
        due: document.getElementById('due').value
      };

      try {
        const response = await fetch('https://adriel-babalola.app.n8n.cloud/webhook/origami-idea-webhook', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(taskData)
        });
        
        if (response.ok) {
          resultDiv.textContent = '🎉 Task submitted successfully!';
          resultDiv.className = 'success';
          document.getElementById('taskForm').reset();
        } else {
          resultDiv.textContent = '❌ Error: ' + (await response.text());
          resultDiv.className = 'error';
        }
      } catch (error) {
        resultDiv.textContent = '⚠️ Network error - please try again';
        resultDiv.className = 'error';
      }
    });

    // Enhance date input for better UX
    const dueInput = document.getElementById('due');
    dueInput.addEventListener('focus', () => {
      dueInput.type = 'date';
    });
    dueInput.addEventListener('blur', () => {
      if (!dueInput.value) dueInput.type = 'text';
    });
