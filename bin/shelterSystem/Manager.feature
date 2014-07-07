Feature: Manager

Scenario: Current how many cats do we have?
Given a shelter for cats with cat1,cat2,cat3 in order
When the manager check the quantity of cats
Then the system should display 3 in the shelter

Scenario: Current how many dogs do we have?
Given a shelter for dogs with dog1,dog2,dog3 in order
When the manager check the quantity of dogs
Then the system should display 3 in the shelter

Scenario: Current how many animals do we have?
Given a shelter with dog1,cat1,dog2,dog3,cat2 in order
When the manager check the quantity of animals
Then the system should display 5 in the shelter