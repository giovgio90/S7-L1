class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
}

class UserComparison extends User {
  constructor(firstName, lastName, age, location, otherUser) {
    super(firstName, lastName, age, location);
    this.otherUser = otherUser;

    this.ageComparisonResult = this.compareAge();
  }

  compareAge() {
    if (this.age === this.otherUser.age) {
      return `${this.firstName} ha la stessa età di ${this.otherUser.firstName}`;
    } else if (this.age > this.otherUser.age) {
      return `${this.firstName} è più vecchio di ${this.otherUser.firstName}`;
    } else {
      return `${this.firstName} è più giovane di ${this.otherUser.firstName}`;
    }
  }
}

const andrea = new User("Andrea", "Verdi", 25, "Torino");
const marco = new User("Marco", "Polo", 27, "Roma");

const ageComparator1 = new UserComparison(andrea.firstName, andrea.lastName, andrea.age, andrea.location, marco);
const ageComparator2 = new UserComparison(marco.firstName, marco.lastName, marco.age, marco.location, andrea);

console.log(ageComparator1.ageComparisonResult);

//

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const petForm = document.getElementById("petForm");
const petList = document.getElementById("petList");
const submitButton = document.getElementById("submitButton");

const pets = [];

submitButton.addEventListener("click", () => {
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  pets.push(newPet);
  displayPets();
  petForm.reset();
});

function displayPets() {
  petList.innerHTML = "";
  pets.forEach((pet) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
    petList.appendChild(listItem);
  });
}
