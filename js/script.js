document.addEventListener("DOMContentLoaded", () => {
    // Texte à animer
    const text1 = "Bienvenue dans mon CV !!";
    const text2 = "Mohamed El Bachir Gueye";

    // Cibles dans le HTML
    const target1 = document.getElementById("typed-text");
    const target2 = document.getElementById("typed-name");

    // Fonction pour animer un texte
    function typeWriter(target, text, callback) {
      let i = 0;
      function typing() {
        if (i < text.length) {
          target.textContent = text.substring(0, i + 1);
          i++;
          setTimeout(typing, 120);
        } else if (callback) {
          setTimeout(callback, 2000);
        }
      }
      typing();
    }

    // Crée la barre orange clignotante (seulement pour le nom)
    function createCursor(afterElement) {
      const cursor = document.createElement("span");
      cursor.classList.add("cursor");
      afterElement.after(cursor);
    }

    // Style de la barre orange
    const style = document.createElement("style");
    style.textContent = `
      .cursor {
        display: inline-block;
        width: 6px;
        height: 20px;
        background-color: #ff4800;
        margin-left: 5px;
        animation: blink 0.7s infinite;
      }

      @keyframes blink {
        0%, 50% { opacity: 1; }
        50.1%, 100% { opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    // ✅ La barre sera ajoutée uniquement après le nom
    createCursor(target2);

    // Démarre les animations
    typeWriter(target1, text1, () => typeWriter(target2, text2));
  });