class SortableTable {
    constructor(containerId, data, columns, sortableColumns) {
      this.container = document.getElementById(containerId);
      this.data = data;
      this.columns = columns;
      this.sortableColumns = sortableColumns;
      this.sortDirection = {}; // Keeps track of the sorting direction
      this.renderTable();
    }
  
    renderTable() {
      this.container.innerHTML = ""; // Clear previous content
  
      const table = document.createElement("table");
      table.classList.add("table", "table-bordered", "table-striped");
  
      // Create table header
      const thead = document.createElement("thead");
      const headerRow = document.createElement("tr");
  
      this.columns.forEach((col) => {
        const th = document.createElement("th");
        th.textContent = col.toUpperCase();
  
        if (this.sortableColumns.includes(col)) {
          th.classList.add("sortable");
          th.addEventListener("click", () => this.sortTable(col));
        }
  
        if (this.sortDirection[col]) {
          th.classList.add(
            this.sortDirection[col] === "asc" ? "sorted-asc" : "sorted-desc"
          );
        }
  
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
  
      // Create table body
      const tbody = document.createElement("tbody");
      this.data.forEach((item) => {
        const row = document.createElement("tr");
        this.columns.forEach((col) => {
          const td = document.createElement("td");
  
          if (col === "image") {
            const img = document.createElement("img");
            img.src = item[col];
            img.alt = item.name;
            img.style.width = "50px";
            td.appendChild(img);
          } else {
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
  
    sortTable(column) {
      const isNumeric = ["size"].includes(column); // Adjust for numeric fields
      const direction = this.sortDirection[column] === "asc" ? "desc" : "asc";
  
      this.data.sort((a, b) => {
        const valA = isNumeric ? parseFloat(a[column]) : a[column].toLowerCase();
        const valB = isNumeric ? parseFloat(b[column]) : b[column].toLowerCase();
  
        if (valA < valB) return direction === "asc" ? -1 : 1;
        if (valA > valB) return direction === "asc" ? 1 : -1;
        return 0;
      });
  
      this.sortDirection[column] = direction;
      this.renderTable();
    }
  }
  
  // Sample data
  const table1Data = [
    { name: "Buddy", location: "Park", image: "buddy.jpg", size: 50 },
    { name: "Charlie", location: "Beach", image: "charlie.jpg", size: 30 },
    { name: "Max", location: "Home", image: "max.jpg", size: 40 },
  ];
  
  const table2Data = [...table1Data]; // Example reuse
  const table3Data = [...table1Data];
  
  // Initialize tables
  new SortableTable("table1-container", table1Data, ["name", "location", "image", "size"], ["name", "location", "size"]);
  new SortableTable("table2-container", table2Data, ["name", "location", "image", "size"], ["name", "location"]);
  new SortableTable("table3-container", table3Data, ["name", "location", "image", "size"], ["size"]);
  