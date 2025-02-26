const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI.getFullList().then((characters) => {
        let mainDiv = document.querySelector(".characters-container");
        mainDiv.innerHTML = "";
        characters.forEach((character) => {
          let characterDiv = document.createElement("div");
          characterDiv.classList.add("character-info");
          characterDiv.innerHTML = `
        <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">Character Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
        <div class="weapon">Character Weapon: ${character.weapon}</div>
      `;
          mainDiv.appendChild(characterDiv);
        });
      });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      let id = document.getElementById("find-one-id").value;
      charactersAPI.getOneRegister(id).then((character) => {
        let mainDiv = document.querySelector(".characters-container");
        mainDiv.innerHTML = "";
        let characterDiv = document.createElement("div");
        characterDiv.classList.add("character-info");
        characterDiv.innerHTML = `
        <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">Character Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
        <div class="weapon">Character Weapon: ${character.weapon}</div>
      `;
        mainDiv.appendChild(characterDiv);
      });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      let id = document.getElementById("delete-one-id").value;
      charactersAPI.deleteOneRegister(id);
      console.log(`character id : ${id} was deleted`);
    });

    document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    
      event.preventDefault()
  
      let newCharacterForm = document.getElementById("edit-character-form")
      let characterId = newCharacterForm.querySelector(".chr-id").value
      
      let characterInfo = {
        name: newCharacterForm.name.value,
        occupation: newCharacterForm.occupation.value,
        weapon: newCharacterForm.weapon.value,
        cartoon: newCharacterForm.cartoon.checked,
      }
  
      charactersAPI.updateOneRegister(characterId, characterInfo)
  
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let newName = document.getElementById("create-one-name").value;
      let newOccupation = document.getElementById(
        "create-one-occupation"
      ).value;
      let newWeapon = document.getElementById("create-one-weapon").value;
      let newCartoon = document.getElementById("create-one-cartoon").check;
      let newCharacter = {
        name: newName,
        occupation: newOccupation,
        weapon: newWeapon,
        cartoon: newCartoon,
      };
      charactersAPI
        .createOneRegister(newCharacter)
        .then(() => {
          document.querySelector("#create-data").style.backgroundColor =
            "green";
          event.preventDefault();
        })
        .catch(
          (err) =>
            (document.querySelector("#create-data").style.backgroundColor =
              "red")
        );
    });
});
