document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll('.skill');

  skills.forEach(skill => {
    skill.addEventListener('click', () => {
      const items = skill.querySelector('.items');

      // Cierra todos los demás
      document.querySelectorAll('.items').forEach(i => {
        if (i !== items) i.classList.remove('active');
      });

      // Toggle del seleccionado
      items.classList.toggle('active');
    });
  });
});

// Activar animaciones de secciones
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const onScroll = () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add("visible");
      }
    });
  };

  // Solo activar en escritorio
  if (window.innerWidth >= 1024) {
    window.addEventListener("scroll", onScroll);
    onScroll(); // Trigger initial scroll
  }
});
