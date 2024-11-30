class AnimalTable {
    constructor(data, containerId, columns, styleOptions) {
      this.data = [...data];
      this.container = document.getElementById(containerId);
      this.columns = columns;
      this.styleOptions = styleOptions;
      this.init();
    }
  
    init() {
      this.renderTable();
      this.addAnimalForm();
    }
  
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
      headerRow.innerHTML += "<th>ACTIONS</th>";
      thead.appendChild(headerRow);
  
      // Table Body
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
            img.style.border = "2px solid black";
            img.addEventListener("mouseover", () => {
              img.style.width = "150px";
            });
            img.addEventListener("mouseout", () => {
              img.style.width = "50px";
            });
            td.appendChild(img);
          } else {
            td.textContent = item[col];
            if (col === "name" && this.styleOptions.name.includes("bold")) {
              td.style.fontWeight = "bold";
            }
            if (col === "name" && this.styleOptions.name.includes("blue")) {
              td.style.color = "blue";
            }if (this.styleOptions[col]?.includes("italic")) {
                td.style.fontStyle = "italic";
              }
          }
          row.appendChild(td);
        });
  
        // Actions
        const actionsTd = document.createElement("td");
        actionsTd.appendChild(this.createEditButton(item));
        actionsTd.appendChild(this.createDeleteButton(item));
        row.appendChild(actionsTd);
  
        tbody.appendChild(row);
      });
  
      table.appendChild(thead);
      table.appendChild(tbody);
      this.container.appendChild(table);
    }
  
    sortTable(column) {
      const isNumeric = column === "size";
      this.data.sort((a, b) => {
        const valA = isNumeric ? parseFloat(a[column]) : a[column].toLowerCase();
        const valB = isNumeric ? parseFloat(b[column]) : b[column].toLowerCase();
        return valA > valB ? 1 : -1;
      });
      this.renderTable();
    }
  
    createEditButton(item) {
      const btn = document.createElement("button");
      btn.textContent = "Edit";
      btn.classList.add("btn", "btn-warning", "btn-sm");
      btn.addEventListener("click", () => {
        const newName = prompt("Enter new name:", item.name);
        const newSize = prompt("Enter new size:", item.size);
        const newLocation = prompt("Enter new location:", item.location);
  
        if (newName && newSize && newLocation) {
          item.name = newName;
          item.size = newSize;
          item.location = newLocation;
          this.renderTable();
        }
      });
      return btn;
    }
  
    createDeleteButton(item) {
      const btn = document.createElement("button");
      btn.textContent = "Delete";
      btn.classList.add("btn", "btn-danger", "btn-sm");
      btn.addEventListener("click", () => {
        this.data = this.data.filter((animal) => animal.id !== item.id);
        this.renderTable();
      });
      return btn;
    }
  
    addAnimalForm() {
      const form = document.createElement("form");
      form.classList.add("my-3");
  //monitering adding the text from feild
      const inputs = ["species", "name", "size", "location", "image"].map((field) => {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = field.toUpperCase();
        input.name = field;
        input.classList.add("form-control", "mb-2");
        form.appendChild(input);
        return input;
      });
  
      const addButton = document.createElement("button");
      addButton.textContent = "Add Animal";
      addButton.classList.add("btn", "btn-success", "btn-block");
      form.appendChild(addButton);
  
      addButton.addEventListener("click", (e) => {
        e.preventDefault();
        const newAnimal = {};
        inputs.forEach((input) => {
          newAnimal[input.name] = input.value;
        });
  
        // Validate data
        if (
          !newAnimal.species ||
          !newAnimal.name ||
          !newAnimal.size ||
          !newAnimal.location ||
          !newAnimal.image
        ) {
          alert("All fields are required!");
          return;
        }
  
        if (this.data.some((animal) => animal.name === newAnimal.name)) {
          alert("Animal with this name already exists!");
          return;
        }
  
        newAnimal.id = this.data.length ? this.data[this.data.length - 1].id + 1 : 1;
        this.data.push(newAnimal);
        this.renderTable();
      });
  
      this.container.appendChild(form);
    }
  }