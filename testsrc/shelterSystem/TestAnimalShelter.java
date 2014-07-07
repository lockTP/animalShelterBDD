package shelterSystem;

import static org.junit.Assert.*;

import java.util.ArrayList;

import org.omg.CORBA.PUBLIC_MEMBER;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.lu.wann;

public class TestAnimalShelter {
	
	private AnimalQueue shelter;
	private Cat cat1,cat2,cat3;
	private Dog dog1,dog2,dog3;
	private Animal animal1,animal2,animal3,animal4,animal5,animal6;
	private Animal output;
	private int quantity;
	
	@Given("a shelter for cats with (.+) in order")
	public void aShelterWithCats(ArrayList<String> cats) {  
        shelter = new AnimalQueue();  
        cat1 = new Cat(cats.get(0));
        cat2 = new Cat(cats.get(1));
        cat3 = new Cat(cats.get(2));
        shelter.enqueue(cat1);
        shelter.enqueue(cat2);
        shelter.enqueue(cat3);
    }  
	
	@Given("a shelter for dogs with (.+) in order")
	public void aShelterWithDogs(ArrayList<String> dogs) {  
        shelter = new AnimalQueue();  
        dog1 = new Dog(dogs.get(0));
        dog2 = new Dog(dogs.get(1));
        dog3 = new Dog(dogs.get(2));
        shelter.enqueue(dog1);
        shelter.enqueue(dog2);
        shelter.enqueue(dog3);
    }  
	
	@Given("a shelter with (.+) in order")
	public void aShelterWithAniamls(ArrayList<String> animals) {  
        shelter = new AnimalQueue();  
        dog1 = new Dog(animals.get(0));
        cat1 = new Cat(animals.get(1));
        dog2 = new Dog(animals.get(2));
        dog3 = new Dog(animals.get(3));
        cat2 = new Cat(animals.get(4));
        shelter.enqueue(dog1);
        shelter.enqueue(cat1);
        shelter.enqueue(dog2);
        shelter.enqueue(dog3);
        shelter.enqueue(cat2);

    }  
	
	@Given("a shelter")
	public void aShelter(){
		shelter = new AnimalQueue();
	}
	
	@When("someone wants to adopt a cat")
	public void adoptCat(){
		output = shelter.dequeueCats();
	}
	
	@When("someone wants to adopt a dog")
	public void adoptDog(){
		output = shelter.dequeueDogs();
	}
	
	@When("someone wants to adopt an animal")
	public void adoptAnimal(){
		output = shelter.dequeueAny();
	}
	
	@When("a dog (.+) comes in")
	public void registerDog(String d1){
		dog1 = new Dog(d1);
		shelter.enqueue(dog1);
	}
	
	@When("a cat (.+) comes in")
	public void registerCat(String c1){
		cat1 = new Cat(c1);
		shelter.enqueue(cat1);
	}
	
	@When("I want to adopt a (.+)")
	public void adoptAnimal(String a1){
		if(a1.equals("dog")){
			output = shelter.dequeueDogs();
		}
		else if (a1.equals("cat")) {
			output = shelter.dequeueCats();
		}
		else {
			output = shelter.dequeueAny();
		}
	}
	
	@When("the manager check the quantity of (.+)")
	public void checkNumberOfAnimal(String a1){
		if(a1.equals("dogs")){
			 quantity = shelter.dogs.size();
		}
		else if (a1.equals("cats")) {
			quantity = shelter.cats.size();
		}
		else {
			quantity = shelter.cats.size()+shelter.dogs.size();
		}
	}
	
	@Then("the system should output the cat (.+) who has been here longest")
	public void checkCat(String c1){
		assertEquals(c1, output.name);
	}
	
	@Then("the system should output the dog (.+) who has been here longest")
	public void checkDog(String d1){
		assertEquals(d1, output.name);
	}
	
	@Then("the system should output the animal (.+) who has been here longest")
	public void checkAnimal(String a1){
		assertEquals(a1, output.name);
	}
	
	@Then("the system should be able to register the dog (.+) into the system")
	public void checkRegisterDog(String d1){
		assertEquals(d1, shelter.dogs.get(0).name);
	}
	
	@Then("the system should be able to register the cat (.+) into the system")
	public void checkRegisterCat(String c1){
		assertEquals(c1, shelter.cats.get(0).name);
	}
	
	@Then("the system should be able to give me a (.+)")
	public void checkAdpot(String a1){
		if(a1.equals("dog")){
			assertTrue(output instanceof Dog);
		}
		else if (a1.equals("cat")) {
			assertTrue(output instanceof Cat);
		}
		else {
			assertTrue(output instanceof Animal);
		}
	}
	
	@Then("the system should display (\\d+) in the shelter")
	public void checkQuantity(int q){
		assertEquals(q, quantity);
	}
}


