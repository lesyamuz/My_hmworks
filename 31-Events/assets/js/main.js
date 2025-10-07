 // --- 1. Редагування тексту ---
    const editableDiv = document.getElementById("editableDiv");
    let textarea;

    document.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.key === "e") {
        event.preventDefault();
        textarea = document.createElement("textarea");
        textarea.id = "editableTextarea";
        textarea.value = editableDiv.textContent;
        editableDiv.replaceWith(textarea);
        textarea.focus();
      }

      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        if (textarea) {
          const div = document.createElement("div");
          div.id = "editableDiv";
          div.textContent = textarea.value;
          textarea.replaceWith(div);
          textarea = null;
        }
      }
    });

    // --- 2. Сортування таблиці ---
    document.querySelectorAll("#sortableTable th").forEach((th, index) => {
      th.addEventListener("click", () => {
        const table = th.closest("table");
        const tbody = table.querySelector("tbody");
        const rows = Array.from(tbody.querySelectorAll("tr"));
        const isNumeric = !isNaN(rows[0].children[index].textContent.trim());
        const ascending = th.dataset.order !== "asc";

        rows.sort((a, b) => {
          const aText = a.children[index].textContent.trim();
          const bText = b.children[index].textContent.trim();
          return isNumeric
            ? (ascending ? aText - bText : bText - aText)
            : (ascending ? aText.localeCompare(bText) : bText.localeCompare(aText));
        });

        tbody.append(...rows);
        th.dataset.order = ascending ? "asc" : "desc";
      });
    });

    // --- 3. Змінюваний блок ---
    const box = document.getElementById("resizableBox");
    const resizer = box.querySelector(".resizer");
    let isResizing = false;

    resizer.addEventListener("mousedown", (e) => {
      isResizing = true;
      document.body.style.cursor = "se-resize";
    });

    document.addEventListener("mousemove", (e) => {
      if (!isResizing) return;
      const rect = box.getBoundingClientRect();
      box.style.width = e.clientX - rect.left + "px";
      box.style.height = e.clientY - rect.top + "px";
    });

    document.addEventListener("mouseup", () => {
      isResizing = false;
      document.body.style.cursor = "default";
    });