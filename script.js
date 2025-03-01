document.addEventListener('DOMContentLoaded', function() {
  // Contador de visitas usando la API de countapi.xyz
  fetch('https://api.countapi.xyz/hit/tu-dominio.com/visitas')
    .then(response => response.json())
    .then(data => {
      document.getElementById('visitCounter').innerText = data.value;
    })
    .catch(error => console.error('Error al obtener el contador:', error));

  // Variables para los botones de like y dislike
  let likeCount = 0;
  let dislikeCount = 0;

  document.getElementById('likeBtn').addEventListener('click', function() {
    likeCount++;
    document.getElementById('likeCount').innerText = likeCount;
  });

  document.getElementById('dislikeBtn').addEventListener('click', function() {
    dislikeCount++;
    document.getElementById('dislikeCount').innerText = dislikeCount;
  });

  // Agregar comentarios
  document.getElementById('submitComment').addEventListener('click', function() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    if (commentText !== "") {
      const commentSection = document.getElementById('commentSection');
      const commentDiv = document.createElement('div');
      commentDiv.className = 'comment';
      commentDiv.innerText = commentText;
      commentSection.appendChild(commentDiv);
      commentInput.value = "";
    }
  });

  // Simulación de envío del formulario de contacto
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por contactarnos. Pronto nos pondremos en contacto contigo.');
    this.reset();
  });
});

