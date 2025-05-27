/* ClassCastException */

public class ClassCastException {
    public static void main(String[] args) {
        Dog dog = new Dog();
        changeDog(dog);

        Cat cat = new Cat();
        changeDog(cat);       //예외 발생
    }

    public static void changeDog(Animal animal) {
        //if (animal instanceof Dog) {
          Dog dog = (Dog) animal;  //예외 발생가능
        //}
    }
}

class Animal {}
class Dog extends Animal {}
class Cat extends Animal {}
