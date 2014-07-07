Feature: Staff

Scenario: First come first go for cat
Given a shelter for cats with cat1,cat2,cat3 in order
When someone wants to adopt a cat
Then the system should output the cat cat1 who has been here longest

Scenario: First come first go for dog
Given a shelter for dogs with dog1,dog2,dog3 in order
When someone wants to adopt a dog
Then the system should output the dog dog1 who has been here longest

Scenario: First come first go for animal
Given a shelter with dog1,cat1,dog2,dog3,cat2 in order
When someone wants to adopt an animal
Then the system should output the animal dog1 who has been here longest

Scenario: Be able to register a coming dog
Given a shelter
When a dog dog1 comes in
Then the system should be able to register the dog dog1 into the system

Scenario: Be able to register a coming cat
Given a shelter
When a cat cat1 comes in
Then the system should be able to register the cat cat1 into the system

