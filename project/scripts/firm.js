const faqs = document.querySelectorAll('.faq-item');

  faqs.forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.querySelector('.faq-answer');
      
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").innerHTML = document.lastModified;