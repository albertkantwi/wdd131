const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const contactForm = document.getElementById("contactForm");
const usernameInput = document.getElementById("username");
const usermailInput = document.getElementById("usermail");
const usermessageInput = document.getElementById("usermessage");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

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

const lawyersData = [
  {
    name: "Noah Zegeh",
    image: "images/lawyer01.jpg",
    description: "An experienced Senior Criminal Lawyer with over 15 years of dedicated practice, handling complex criminal cases."
  },
  {
    name: "Dora Azundem",
    image: "images/lawyer03.jpg",
    description: "Experienced Contract Lawyer specializing in drafting, reviewing, and negotiating agreements to protect clients."
  },
  {
    name: "Irene Debrah",
    image: "images/lawyer04.jpg",
    description: "Property and Land Lawyer specializing in resolving ownership conflicts, tenancy matters, and real estate litigation"
  },
  {
    name: "Appiah Kubi",
    image: "images/lawyer02.jpg",
    description: "Family Law Lawyer specializing in divorce, child custody, maintenance, adoption, and family dispute resolution."
  },
  {
    name: "Joseph Apoya",
    image: "images/lawyer.jpg",
    description: "Immigration Lawyer specializing in visas, residency applications, deportation defense, and cross-border legal matters."
  },
  {
    name: "Portia Gyamea",
    image: "images/lawyer05.jpg",
    description: "Human Rights Lawyer committed to defending civil liberties, social justice, and the legal protection of vulnerable individuals."
  }
];

const lawyersContainer = document.getElementById("lawyers");

lawyersContainer.innerHTML = lawyersData.map(lawyer => `
    <div class="lawyer-card">
        <img src="${lawyer.image}" loading="lazy" alt="A lawyer image">
        <h3>${lawyer.name}</h3>
        <p>${lawyer.description}</p>
    </div>
`).join("");


function loadFormData() {
  const savedData = JSON.parse(localStorage.getItem("contactFormData"));

  if (savedData) {
    usernameInput.value = savedData.username || "";
    usermailInput.value = savedData.usermail || "";
    usermessageInput.value = savedData.usermessage || "";

    if (savedData.purpose) {
      const radio = document.querySelector(`input[name="purpose"][value="${savedData.purpose}"]`);
      if (radio) radio.checked = true;
    }
  }
}

function saveFormData() {
  const selectedPurpose = document.querySelector('input[name="purpose"]:checked');

  const formData = {
    username: usernameInput.value,
    usermail: usermailInput.value,
    usermessage: usermessageInput.value,
    purpose: selectedPurpose ? selectedPurpose.value : ""
  };

  localStorage.setItem("contactFormData", JSON.stringify(formData));
}

contactForm.addEventListener("input", saveFormData);
contactForm.addEventListener("change", saveFormData);

loadFormData();


document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").innerHTML = document.lastModified;