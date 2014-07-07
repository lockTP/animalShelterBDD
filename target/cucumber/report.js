$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027shelterSystem\\Manager.feature\u0027");
formatter.feature({
  "line": 1,
  "name": "Manager",
  "description": "",
  "id": "manager",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Current how many cats do we have?",
  "description": "",
  "id": "manager;current-how-many-cats-do-we-have?",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "a shelter for cats with cat1,cat2,cat3 in order",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the manager check the quantity of cats",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the system should display 3 in the shelter",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "cat1,cat2,cat3",
      "offset": 24
    }
  ],
  "location": "TestAnimalShelter.aShelterWithCats(String\u003e)"
});
formatter.result({
  "duration": 169360327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cats",
      "offset": 34
    }
  ],
  "location": "TestAnimalShelter.checkNumberOfAnimal(String)"
});
formatter.result({
  "duration": 87236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "TestAnimalShelter.checkQuantity(int)"
});
formatter.result({
  "duration": 4329606,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Current how many dogs do we have?",
  "description": "",
  "id": "manager;current-how-many-dogs-do-we-have?",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "a shelter for dogs with dog1,dog2,dog3 in order",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the manager check the quantity of dogs",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the system should display 3 in the shelter",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "dog1,dog2,dog3",
      "offset": 24
    }
  ],
  "location": "TestAnimalShelter.aShelterWithDogs(String\u003e)"
});
formatter.result({
  "duration": 260774,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dogs",
      "offset": 34
    }
  ],
  "location": "TestAnimalShelter.checkNumberOfAnimal(String)"
});
formatter.result({
  "duration": 83504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "TestAnimalShelter.checkQuantity(int)"
});
formatter.result({
  "duration": 120824,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Current how many animals do we have?",
  "description": "",
  "id": "manager;current-how-many-animals-do-we-have?",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "a shelter with dog1,cat1,dog2,dog3,cat2 in order",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the manager check the quantity of animals",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the system should display 5 in the shelter",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "dog1,cat1,dog2,dog3,cat2",
      "offset": 15
    }
  ],
  "location": "TestAnimalShelter.aShelterWithAniamls(String\u003e)"
});
formatter.result({
  "duration": 143682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "animals",
      "offset": 34
    }
  ],
  "location": "TestAnimalShelter.checkNumberOfAnimal(String)"
});
formatter.result({
  "duration": 83038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 26
    }
  ],
  "location": "TestAnimalShelter.checkQuantity(int)"
});
formatter.result({
  "duration": 125489,
  "status": "passed"
});
formatter.uri("\u0027shelterSystem\\Staff.feature\u0027");
formatter.feature({
  "line": 1,
  "name": "Staff",
  "description": "",
  "id": "staff",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "First come first go for cat",
  "description": "",
  "id": "staff;first-come-first-go-for-cat",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "a shelter for cats with cat1,cat2,cat3 in order",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "someone wants to adopt a cat",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the system should output the cat cat1 who has been here longest",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "cat1,cat2,cat3",
      "offset": 24
    }
  ],
  "location": "TestAnimalShelter.aShelterWithCats(String\u003e)"
});
formatter.result({
  "duration": 141816,
  "status": "passed"
});
formatter.match({
  "location": "TestAnimalShelter.adoptCat()"
});
formatter.result({
  "duration": 41518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cat1",
      "offset": 33
    }
  ],
  "location": "TestAnimalShelter.checkCat(String)"
});
formatter.result({
  "duration": 75107,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "First come first go for dog",
  "description": "",
  "id": "staff;first-come-first-go-for-dog",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "a shelter for dogs with dog1,dog2,dog3 in order",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "someone wants to adopt a dog",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the system should output the dog dog1 who has been here longest",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "dog1,dog2,dog3",
      "offset": 24
    }
  ],
  "location": "TestAnimalShelter.aShelterWithDogs(String\u003e)"
});
formatter.result({
  "duration": 123156,
  "status": "passed"
});
formatter.match({
  "location": "TestAnimalShelter.adoptDog()"
});
formatter.result({
  "duration": 34054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dog1",
      "offset": 33
    }
  ],
  "location": "TestAnimalShelter.checkDog(String)"
});
formatter.result({
  "duration": 83037,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "First come first go for animal",
  "description": "",
  "id": "staff;first-come-first-go-for-animal",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "a shelter with dog1,cat1,dog2,dog3,cat2 in order",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "someone wants to adopt an animal",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the system should output the animal dog1 who has been here longest",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "dog1,cat1,dog2,dog3,cat2",
      "offset": 15
    }
  ],
  "location": "TestAnimalShelter.aShelterWithAniamls(String\u003e)"
});
formatter.result({
  "duration": 169807,
  "status": "passed"
});
formatter.match({
  "location": "TestAnimalShelter.adoptAnimal()"
});
formatter.result({
  "duration": 70908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dog1",
      "offset": 36
    }
  ],
  "location": "TestAnimalShelter.checkAnimal(String)"
});
formatter.result({
  "duration": 97499,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Be able to register a coming dog",
  "description": "",
  "id": "staff;be-able-to-register-a-coming-dog",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "a shelter",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "a dog dog1 comes in",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the system should be able to register the dog dog1 into the system",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAnimalShelter.aShelter()"
});
formatter.result({
  "duration": 82104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dog1",
      "offset": 6
    }
  ],
  "location": "TestAnimalShelter.registerDog(String)"
});
formatter.result({
  "duration": 110095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dog1",
      "offset": 46
    }
  ],
  "location": "TestAnimalShelter.checkRegisterDog(String)"
});
formatter.result({
  "duration": 127355,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Be able to register a coming cat",
  "description": "",
  "id": "staff;be-able-to-register-a-coming-cat",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "a shelter",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "a cat cat1 comes in",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the system should be able to register the cat cat1 into the system",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAnimalShelter.aShelter()"
});
formatter.result({
  "duration": 46184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cat1",
      "offset": 6
    }
  ],
  "location": "TestAnimalShelter.registerCat(String)"
});
formatter.result({
  "duration": 105429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cat1",
      "offset": 46
    }
  ],
  "location": "TestAnimalShelter.checkRegisterCat(String)"
});
formatter.result({
  "duration": 83037,
  "status": "passed"
});
formatter.uri("\u0027shelterSystem\\User.feature\u0027");
formatter.feature({
  "line": 1,
  "name": "User",
  "description": "",
  "id": "user",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "I should have a dog if I ask for a dog",
  "description": "",
  "id": "user;i-should-have-a-dog-if-i-ask-for-a-dog",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "a shelter for dogs with dog1,dog2,dog3 in order",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I want to adopt a dog",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the system should be able to give me a dog",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "dog1,dog2,dog3",
      "offset": 24
    }
  ],
  "location": "TestAnimalShelter.aShelterWithDogs(String\u003e)"
});
formatter.result({
  "duration": 119891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dog",
      "offset": 18
    }
  ],
  "location": "TestAnimalShelter.adoptAnimal(String)"
});
formatter.result({
  "duration": 53181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dog",
      "offset": 39
    }
  ],
  "location": "TestAnimalShelter.checkAdpot(String)"
});
formatter.result({
  "duration": 48049,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "I should have a dog if I ask for a cat",
  "description": "",
  "id": "user;i-should-have-a-dog-if-i-ask-for-a-cat",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "a shelter for cats with cat1,cat2,cat3 in order",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I want to adopt a cat",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the system should be able to give me a cat",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "cat1,cat2,cat3",
      "offset": 24
    }
  ],
  "location": "TestAnimalShelter.aShelterWithCats(String\u003e)"
});
formatter.result({
  "duration": 102630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cat",
      "offset": 18
    }
  ],
  "location": "TestAnimalShelter.adoptAnimal(String)"
});
formatter.result({
  "duration": 50382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cat",
      "offset": 39
    }
  ],
  "location": "TestAnimalShelter.checkAdpot(String)"
});
formatter.result({
  "duration": 43385,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "I should have either a cat or a dog if I ask for an animal",
  "description": "",
  "id": "user;i-should-have-either-a-cat-or-a-dog-if-i-ask-for-an-animal",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "a shelter with dog1,cat1,dog2,dog3,cat2 in order",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I want to adopt a animal",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the system should be able to give me a animal",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "dog1,cat1,dog2,dog3,cat2",
      "offset": 15
    }
  ],
  "location": "TestAnimalShelter.aShelterWithAniamls(String\u003e)"
});
formatter.result({
  "duration": 129688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "animal",
      "offset": 18
    }
  ],
  "location": "TestAnimalShelter.adoptAnimal(String)"
});
formatter.result({
  "duration": 130621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "animal",
      "offset": 39
    }
  ],
  "location": "TestAnimalShelter.checkAdpot(String)"
});
formatter.result({
  "duration": 83504,
  "status": "passed"
});
});