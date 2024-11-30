renderTable() {
    this.container.innerHTML = ""; // Clear the container
    const table = document.createElement("table");
    table.classList.add("table", "table-bordered", "table-striped");
  
    // Table Header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    this.columns.forEach((col) => {
      const th = document.createElement("th");
      th.textContent = col.toUpperCase();
  
      if (col !== "image") {
        th.style.cursor = "pointer";
        th.addEventListener("click", () => this.sortTable(col));
      }
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
  
    // Table Body
    const tbody = document.createElement("tbody");
    this.data.forEach((item) => {
      const row = document.createElement("tr");
      this.columns.forEach((col) => {
        const td = document.createElement("td");
  
        if (col === "image") {
          // Handle image display
          const img = document.createElement("img");
          img.src = item[col];
          img.alt = item.name;
          img.style.width = "50px";
          img.style.border = "2px solid black";
  
          // Add hover effect for larger image
          img.addEventListener("mouseover", () => {
            img.style.width = "150px";
          });
          img.addEventListener("mouseout", () => {
            img.style.width = "50px";
          });
          td.appendChild(img);
        } else {
          // Text content for other columns
          td.textContent = item[col];
        }
        row.appendChild(td);
      });
  
      tbody.appendChild(row);
    });
  
    table.appendChild(thead);
    table.appendChild(tbody);
    this.container.appendChild(table);
  }
  