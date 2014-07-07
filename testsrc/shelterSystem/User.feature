Feature: User

Scenario: I should have a dog if I ask for a dog
Given a shelter for dogs with dog1,dog2,dog3 in order
When I want to adopt a dog
Then the system should be able to give me a dog

Scenario: I should have a dog if I ask for a cat
Given a shelter for cats with cat1,cat2,cat3 in order
When I want to adopt a cat
Then the system should be able to give me a cat

Scenario: I should have either a cat or a dog if I ask for an animal
Given a shelter with dog1,cat1,dog2,dog3,cat2 in order
When I want to adopt a animal
Then the system should be able to give me a animal