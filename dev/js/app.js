document.addEventListener("DOMContentLoaded", () => {
    new AnimalTable(bigCats, "cats-container", ["species","name","size", "location","image" ],{name:""});
    new AnimalTable(dogs, "dogs-container", ["species","name","size", "location","image" ], { name: "bold" });
    new AnimalTable(bigFish, "fish-container", ["species","name","size", "location","image" ], {name: "bold blue italic"} );
  });
  