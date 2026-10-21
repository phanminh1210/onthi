export interface Question {
  id: number
  content: string
  answers: string[]
  correctAnswer: number | number[]
}

export const questionsData: Question[] = [
  {
    id: 1,
    content: "What is NOT a name of a primitive data type in Java?",
    answers: ["int", "float", "boolean", "string"],
    correctAnswer: 4
  },
  {
    id: 2,
    content: "Is the value ONE always represented by the same bit sequence?",
    answers: ["Yes – there is only one “one”, so there is only one bit sequence.", "No – “one” can be represented by different integer or floating point data types.", "Yes – it is always stored in one bit.", "No – the bit pattern changes every time the program starts."],
    correctAnswer: 1
  },
  {
    id: 3,
    content: "Which of the following is NOT a correct variable name?\n",
    answers: ["2schlecht", "zero", "derLetzteWertVonAllen", "Year2000"],
    correctAnswer: 1
  },
  {
    id: 4,
    content: "Which of the following declarations is NOT correct?",
    answers: ["double duty;", "float credit;", "boolean value = 12;\n", "int start = 34, end = 99;"],
    correctAnswer: 3
  },
  {
    id: 5,
    content: "What is an operand? [Toán hạng là gì?] x",
    answers: ["Another name for a number.", "Another name for an integer.", "One of the arithmetic symbols like *, +, – and / [Một trong những ký hiệu số học như *, +, – và /] x.", "A value that an operator acts on. [Một giá trị mà một toán tử hành động trên đó.] x"],
    correctAnswer: 4
  },
  {
    id: 6,
    content: "What is the result of the following expression?\n-32 / 6",
    answers: ["-2", "-5", "-5.3333", "6"],
    correctAnswer: 2
  },
  {
    id: 7,
    content: "How many objects of a given class can be constructed in a program?",
    answers: ["Only one object is constructed per run.", "As many as the program requires.", "Only one per class.", "One object per variable."],
    correctAnswer: 2
  },
  {
    id: 8,
    content: "Which of the following is a correct way String to construct an object?",
    answers: ["String alpha (“Hello Hanoi!”);", "String = “Hello Hanoi!” ;", "String alpha = new “Hello Hanoi!” ;", "String alpha = new String (“Hello Hanoi!”);"],
    correctAnswer: 4
  },
  {
    id: 9,
    content: "What is the following code snippet on the screen?\nint sum = 14;\nif (sum <20)\nSystem.out.print (“Below”);\nelse\n{\nSystem.out.print (“About”);\nSystem.out.println (“the limit.”);\n}",
    answers: ["Below", "Over", "Under the limit.", "Over the limit."],
    correctAnswer: 1
  },
  {
    id: 10,
    content: "Rate the following expression:\n8 + 1 >= 3 * 3",
    answers: ["True", "False", "Unpredictable ", "error"],
    correctAnswer: 1
  },
  {
    id: 11,
    content: "What is the following code snippet on the screen?\nint height = 10;\nif (height <= 12)\nSystem.out.print (“Low Bridge:”);\nSystem.out.println (“Carefully drive on.”);",
    answers: ["Carefully drive on.", "Low Bridge:", "Carefully drive on.", "Low Bridge: Carefully drive on."],
    correctAnswer: 4
  },
  {
    id: 12,
    content: "Another word for ‘looping [vòng lặp] x’ is:",
    answers: ["recapitulation [tóm tắt lại] x", "Tintinabulation [Tintinabulation] x", "iteration [sự lặp lại] x [sự kết thúc] x", "reiteration [nhắc lại] x"],
    correctAnswer: 3
  },
  {
    id: 13,
    content: "What constitutes [cấu thành] x a counting loop [một vòng đếm] x?",
    answers: ["A loop while control variable is tested in the statement and is changed every loop [Một vòng lặp while biến điều khiển được kiểm tra trong câu lệnh và được thay đổi sau mỗi vòng lặp] x", "A count variable is incremented by one until a certain value [một giá trị nhất định] x is reached [Một biến đếm được tăng thêm một cho đến khi đạt đến một giá trị nhất định] x", "A count variable is counted down by one until the value 0 is reached [Một biến đếm được đếm ngược một cho đến khi đạt giá trị 0] x", "No loop control variables are used"],
    correctAnswer: 1
  },
  {
    id: 14,
    content: "Assuming that a random number Random rand = Random()generator was created . Which of the following selects an integer from the range 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11?",
    answers: ["rand.nextInt(11)", "rand.nextInt()*10", "rand.nextInt(1,10)", "rand.nextInt(12)"],
    correctAnswer: 4
  },
  {
    id: 15,
    content: "Assuming that a random number generator was created with Random rand = Random(). Which of the following selects an integer from the range 10, 11, 12, 13, 14, 15, 16?",
    answers: ["rand.nextInt(6)", "rand.nextInt(6) + 11", "rand.nextInt(10,15)", "rand.nextInt(5) + 9"],
    correctAnswer: 2
  },
  {
    id: 16,
    content: "What is the advantage of polymorphism [tính đa hình] x?",
    answers: ["The same programming logic can be applied to multiple related object types [Logic lập trình giống nhau có thể được áp dụng cho nhiều loại đối tượng liên quan] x.
", "Variables can be reused to save memory.
", "Constructing new objects from old objects of a similar type saves time. [Xây dựng các đối tượng mới từ các đối tượng cũ cùng loại giúp tiết kiệm thời gian.] x
", "Polymorphism is a dangerous aspect of heredity and should be avoided. [Đa hình là một khía cạnh nguy hiểm của di truyền và nên tránh.] x"],
    correctAnswer: 1
  },
  {
    id: 17,
    content: "Consider the following lines of code:\nint area;\nString name;\nHow many objects were created?",
    answers: ["None – there is an object reference variable, but no object yet.", "One – there is an object reference variable, so there must be an object.", "Two – one for each variable.", "Two – one for each guy."],
    correctAnswer: 1
  },
  {
    id: 18,
    content: "Consider the following lines of code:\nString strA;\nString strB = new String (“VNPT”);\nHow many objects were created?",
    answers: ["zero", "one", "two", "three"],
    correctAnswer: 2
  },
  {
    id: 19,
    content: "Consider the following piece of code:\nString strA = new String (“VNPT”);\nString strB = new String (“IT”);\nString strC = new String (“Software”);\nString strD = new String (“AI”);\nString strE = new String (“Smart”);\nHow many objects (in total) were generated? After the last instruction has been executed, how many objects can be reached (without counting the data)?",
    answers: ["This code part is not correct.", "generated: 5 now available: 5", "generated: 1 now available: 5", "generated: 5 now available: 1"],
    correctAnswer: 2
  },
  {
    id: 20,
    content: "What happens to an object that no longer has reference variables that reference it? [Điều gì sẽ xảy ra với một đối tượng không còn các biến tham chiếu tham chiếu đến nó nữa?] x",
    answers: ["It remains in main memory forever.", "It is swapped out to the hard disk.", "The garbage collection service exposes the memory it occupies to other objects.", "It comes in the dumpster."],
    correctAnswer: 3
  },
  {
    id: 21,
    content: "Consider the code:\nString stringA = “We ”;\nString stringB = “like ”;\nString stringC = “coding”;\nString result;\nWhich of the following statements assigns the variable resulta reference to “We like coding”?",
    answers: ["result = stringA.concat( stringB.concat( stringC ) );", "result.concat( stringA, stringB, stringC );", "result+stringA+stringB+stringC;", "result = concat(StringA).concat(StringB).concat(StringC)"],
    correctAnswer: 1
  },
  {
    id: 22,
    content: "What is the name of an object that can not be changed after creation?",
    answers: ["unalterable [không thể thay đổi] x", "forever", "invariable [bất biến] x", "incomprehensible [không thể hiểu được] x"],
    correctAnswer: 3
  },
  {
    id: 23,
    content: "If the access modifier is missing in the definition of a class member (instance variable or method), does the member have …..?",
    answers: ["default access.
", "public access.
", "private access.
", "universal access."],
    correctAnswer: 1
  },
  {
    id: 24,
    content: "Which term is used to hide object details?",
    answers: ["Obfustikation. [Sự xáo trộn.] x", "Data Mining. [Khai thác dữ liệu.] x", "Compilation. [Biên soạn.] x", "Encapsulation. [Đóng gói.] x"],
    correctAnswer: 4
  },
  {
    id: 25,
    content: "What is a current parameter?",
    answers: ["The identifier used in a method instead of the value passed to this method by the caller ", "The value passed to a method by the caller ", "A variable used to control a counting loop.", "The value returned by a method."],
    correctAnswer: 2
  },
  {
    id: 26,
    content: "Which type of parameter passing is used in Java?",
    answers: ["Call-by-value.", "Call-By-Object.", "Call-By-parameters.", "Call-By-Waiting."],
    correctAnswer: 1
  },
  {
    id: 27,
    content: "How many references can there be to a single object?",
    answers: ["Just one.
", "Two. One from the caller and one from the called method
", "Three. The original reference and a reference for the formal and the current parameters.
", "There can be any number of references held in any number of variables and parameters (as long as they are of the correct type)."],
    correctAnswer: 4
  },
  {
    id: 28,
    content: "What does variable++ mean?",
    answers: ["Add a one to the variable ", "Add a one to the variable after its current value is used
", "Add a one to the variable before using its current value
", "Double the value of the variable."],
    correctAnswer: 2
  },
  {
    id: 29,
    content: "What will the following program display on the screen:\nint number = 0;\nint counter = 1;\nnumber = count ++;\nSystem.out.println (“number:” + number “+ count:” + count);",
    answers: ["number: 0 count: 0", "number: 0 counter: 1", "number: 1 count: 1", "number: 1 counter: 2"],
    correctAnswer: 4
  },
  {
    id: 30,
    content: "What is the output of the following:\nint a = 0;\nint b = 10;\na = --b;\nSystem.out.println (“a:” + a + “b:” + b);",
    answers: ["a: 9b: 11", "a: 10b: 9", "a: 9b: 9", "a: 0b: 9"],
    correctAnswer: 3
  },
  {
    id: 31,
    content: "What type of inheritance does Java have?",
    answers: ["single inheritance", "double inheritance", "Multiple Inheritance", "class inheritance"],
    correctAnswer: 1
  },
  {
    id: 32,
    content: "How many objects of a given class can be in a program?",
    answers: ["One per defined class.", "One per constructor definition.", "As many as the program needs.", "One per main()method."],
    correctAnswer: 3
  },
  {
    id: 33,
    content: "What is an abstract class?",
    answers: ["An abstract class is a class without subclasses.", "An abstract class is any superclass with more than one subclass.", "An abstract class is a class that can not be instantiated", "An abstract class is another name for a base class"],
    correctAnswer: 3
  },
  {
    id: 34,
    content: "What is an abstract class?",
    answers: ["An abstract method is any method in an abstract class.", "An abstract method is a method that can not be inherited", "An abstract method is a bodyless method abstract declared with the reserved word", "An abstract method is a method in the subclass that overrides the method of a superclass."],
    correctAnswer: 3
  },
  {
    id: 35,
    content: "What is the part of a frame containing the graphical components?",
    answers: ["content pane ", "content provider ", "data frame ", "window pane"],
    correctAnswer: 1
  },
  {
    id: 36,
    content: "Which type of object determines where the GUI components are placed in a container?",
    answers: ["The layer organizer.
", "The Component Manager.
", "The Frame Manager.
", "The layout manager."],
    correctAnswer: 4
  },
  {
    id: 37,
    content: "Which type of component is one JPanel()?",
    answers: ["Container", "JFrame", "JButton", "JWindow"],
    correctAnswer: 1
  },
  {
    id: 38,
    content: "A process that involves recognizing and focusing on the important characteristics of a situation or object is known as:",
    answers: ["Encapsulation", " Polymorphism
", " Abstraction ", " Inheritance
", " Object persistence."],
    correctAnswer: 3
  },
  {
    id: 39,
    content: "Which statement is true regarding an object?",
    answers: [" An object is what classes instantiated are from", " An object is an instance of a class", "An object is a variable", " An object is a reference to an attribute", " An object is not an instance of a class."],
    correctAnswer: 2
  },
  {
    id: 40,
    content: "In object-oriented programming, composition relates to ",
    answers: [" The use of consistent coding conventions [Việc sử dụng các quy ước mã hóa nhất quán] x", " The organization of components interacting to achieve a coherent, common behavio [Việc tổ chức các thành phần tương tác với nhau để đạt được một hành vi chung, mạch lạc] xr", " The use of inheritance to achieve polymorphic behavio [Việc sử dụng tính kế thừa để đạt được hành vi đa hình] xr", " The organization of components interacting not to achieve a coherent common behavior [Việc tổ chức các thành phần tương tác với nhau không đạt được một hành vi chung mạch lạc] x", " The use of data hiding to achieve polymorphic behavior. [Việc sử dụng ẩn dữ liệu để đạt được hành vi đa hình.] x"],
    correctAnswer: 2
  },
  {
    id: 41,
    content: "In object-oriented programming, new classes can be defined by extending existing classes. This is an example of:",
    answers: [" Encapsulation", " Interface", " Composition ", " Inheritance", "Aggregation."],
    correctAnswer: 4
  },
  {
    id: 42,
    content: "Which of the following does not belong: If a class inherits from some other class, it should",
    answers: [" Make use of the parent class’s capabilities", " Over-ride or add the minimum to accomplish the derived class’ purpose", " Over-ride all the methods of its parent class", " Make sure the result “IS-A-KIND-OF” its base class", " Make sure the result “contains” its base class."],
    correctAnswer: 3
  },
  {
    id: 43,
    content: "Object-oriented inheritance models the",
    answers: [" “is a kind of” relationship", " “has a” relationship", " “want to be” relationship", " inheritance does not describe any kind of relationship between classes", " “contains” of relationship."],
    correctAnswer: 1
  },
  {
    id: 44,
    content: "The wrapping up of data and functions into a single unit is called",
    answers: [" Encapsulation ", " Abstraction
", " Data Hiding ", " Polymorphism ", " Message passing."],
    correctAnswer: 1
  },
  {
    id: 45,
    content: "Polymorphism",
    answers: [" Is not supported by Java", " Refers to the ability of two or more objects belonging to different classes to respond to exactly the same message in different class-specific ways [Đề cập đến khả năng của hai hoặc nhiều đối tượng thuộc các lớp khác nhau phản hồi chính xác cùng một thông báo theo các cách khác nhau dành riêng cho từng lớp] x", " Simplifies code maintenance", " Not simplifies code maintenance", " Refers to the ability of two or more objects belonging to different classes to respond to exactly the same message in different class-specific ways and simplifies code maintenance. [Đề cập đến khả năng của hai hoặc nhiều đối tượng thuộc các lớp khác nhau phản hồi chính xác cùng một thông báo theo các cách khác nhau dành riêng cho từng lớp và đơn giản hóa việc bảo trì mã.] x"],
    correctAnswer: 4
  },
  {
    id: 46,
    content: "In object-oriented programming, new classes can be defined by extending existing classes. This is an example of:",
    answers: [" Encapsulation ", " Interface ", " Composition", " Inheritance ", " Aggregation."],
    correctAnswer: 4
  },
  {
    id: 47,
    content: "Given a class named Student, which of the following is a valid constructor declaration for the class?",
    answers: [" Student (Student s) { } ", " Student student ( ) { }", " Private final student ( ) { } ", " Void student ( ) { }", " Static void student(){ }."],
    correctAnswer: 1
  },
  {
    id: 48,
    content: "What is garbage collection in the context of Java?",
    answers: [" The operating system periodically deletes all of the java files available on the system.\n", " Any package imported in a program and not used is automatically deleted.", " When all references to an object are gone, the memory used by the object is automatically reclaimed.", " The JVM checks the output of any Java program and deletes anything that doesn’t make sense.", " When all references to an object are gone the memory used by the object is not reclaimed."],
    correctAnswer: 3
  },
  {
    id: 49,
    content: "The concept of multiple inheritances is implemented in Java by\nI. Extending two or more classes.
II. Extending one class and implementing one or more interfaces.
III. Implementing two or more interfaces.",
    answers: [" Only (II) ", " (I) and (II) ", " (II) and (III)
", " Only (I) ", " Only (III)."],
    correctAnswer: 3
  },
  {
    id: 50,
    content: "In Java, declaring a class abstract is useful",
    answers: [" To prevent developers from further extending the class\n", " When it doesn’t make sense to have objects of that class", " When default implementations of some methods are not desirable", " To force developers to extend the class not to use its capabilities", " When it makes sense to have objects of that class."],
    correctAnswer: 2
  },
  {
    id: 51,
    content: "What is the error in the following class definitions?\nAbstract class xy\n{\nabstract sum (int x, int y) { }\n}",
    answers: [" Class header is not defined properly.", " Constructor is not defined.", " Method is not defined properly", " Method is defined properly", " No error."],
    correctAnswer: 3
  },
  {
    id: 52,
    content: "Which of these field declarations are legal within the body of an interface?",
    answers: [" Private final static int answer = 42 ", " public static int answer=42", " final static answer =42 ", " int answer", " No error."],
    correctAnswer: 4
  },
  {
    id: 53,
    content: "A method within a class is only accessible by classes that are defined within the same package as the class of the method. Which one of the following is used to enforce such restriction?",
    answers: [" Declare the method with the keyword public", " Declare the method with the keyword private", " Declare the method with the keyword protected", " Do not declare the method with any accessibility modifiers", " Declare the method with the keyword public and private."],
    correctAnswer: 4
  },
  {
    id: 54,
    content: "Basic Java language functions are stored in which of the following java package?",
    answers: [" java.lang ", " java.io ", " java.net ", " java.util ", " java.awt"],
    correctAnswer: 1
  },
  {
    id: 55,
    content: "Which of the following is true in regard to applet execution?",
    answers: [" Applets loaded from the same computer where they are executing have the same restrictions as applets loaded from the network.", " Applets loaded and executing locally have none of the restrictions faced by applets that get loaded from the network.", " Applets loaded and executing locally have some restrictions faced by applets that get loaded from the network.", " Applets cant react to user input and change dynamically", " Applets can be run independently."],
    correctAnswer: 2
  },
  {
    id: 56,
    content: "Which of the following statements are true regarding the finalize( ) method?",
    answers: [" The finalize ( ) method must be declared with protected accessibility\n", " The compiler will fail to compile the code that explicitly tries to call the finalize( ) method", " The body of the finalize ( ) method can only access other objects that are eligible for garbage collection", " The finalize ( ) method can be overloaded", " The finalize() method cant be overloaded."],
    correctAnswer: 4
  },
  {
    id: 57,
    content: "What will be the result of attempting to compile the following program?\npublic class MyClass {\nlong var;\npublic void MyClass(long param) \n{ var = param; } //(1)\npublic static void main(String[] args) {\nMyClass a,b;\na = new MyClass(); //(2)\nb = new MyClass(5); //(3)\n}\n}",
    answers: ["\nA compilation ERROR will occur at (1), since constructors cannot specify a return value", "\nA compilation error will occur at (2), since the class does not have a default constructor", "\nA compilation error will occur at (3), since the class does not have a constructor which takes one argument of type int", "\nThe program will compile correctly", "\nThe program will compile and execute correctly."],
    correctAnswer: 3
  },
  {
    id: 58,
    content: "Given the following class, which of these is valid way of referring to the class from outside of the package net.basemaster?\npackage net.basemaster;\npublic class Base {\n// . . .\n}\nSelect the correct answer.",
    answers: ["\nBy simply referring to the class as Base\n", "\nBy simply referring to the class as basemaster.Base\n", "\nBy simply referring to the class as net.basemaster.Base\n", "\nBy simply referring to the class as net.Base\n", "\nBy importing with net.* and referring to the class as basemaster.Base.\n"],
    correctAnswer: 3
  },
  {
    id: 59,
    content: "Given the following definition of a class, which fields are accessible from outside the package com.corporation.project?\npackage com.corporation.project;\npublic class MyClass\n{\nint i;\npublic int j;\nprotected int k;\nprivate int l;\n}\nSelect the correct answer.",
    answers: ["\nField i is accessible in all classes in other packages\n", "\nField j is accessible in all classes in other packages\n", "\nField k is accessible in all classes in other packages\n", "\nField l is accessible in all classes in other packages\n", "\nField l is accessible in subclasses only in other packages.\n"],
    correctAnswer: 2
  },
  {
    id: 60,
    content: "Which statement is true about accessibility of members?",
    answers: ["Private members are always accessible from within the same package", "Private members can only be accessed by code from within the class of the member", "A member with default accessibility can be accessed by any subclass of the class in which it is defined", "Private members cannot be accessed at all", "Package/default accessibility for a member can be declared using the keyword default."],
    correctAnswer: 2
  },
  {
    id: 61,
    content: "Re-implementing an inherited method in a sub class to perform a different task from the parent class is called",
    answers: [" Binding ", " Transferring ", " Hiding ", " Coupling ", " extending."],
    correctAnswer: 3
  },
  {
    id: 62,
    content: "Consider the following statements about Java packages:\nI. Packages don’t provide a mechanism to partition all class names into more manageable chunks.\nII. Packages provide a visibility control mechanism.\nIII. One of the important properties of a package is that all classes defined inside a package is accessible by code outside that package.\nIV. The .class files for classes declared to be part of a package can be stored in multiple directories.\nWhich of them is correct?",
    answers: [" Only (I) above ", " Only (II) above", " Only (III) above ", " Only (IV) above", " All (I), (II), (III) and (IV) above are wrong."],
    correctAnswer: 2
  },
  {
    id: 63,
    content: "Consider the following statements:\nI. A class can be declared as both abstract and final.\nII. A class declared as final can be extended by defining a sub-class.\nIII. Resolving calls to methods dynamically at run-time is called late binding.\nIV. The class Object defined by Java need not be a super class of all other classes.\nIdentify the correct statement from the following:\n",
    answers: [" Both (I) and (II) above ", " Both (III) and (IV) above", " Both (I) and (III) above ", " Both (II) and (IV) above", " Only (III) above."],
    correctAnswer: 4
  },
  {
    id: 64,
    content: "Identify, from among the following, the incorrect descriptions related to Java :",
    answers: [" Java Virtual Machine translates byte code into its own system’s machine language and runs the resulting machine code", " The arithmetic operations *, /, %, + and – have the same level of precedence", " Comments do not cause any action to be performed during the program execution", " All variables must be given a type when they are declared", " Java variable names are case-sensitive."],
    correctAnswer: 2
  },
  {
    id: 65,
    content: "Consider the following statement(s) about Java:\nI. All white-space characters (blanks) are ignored by the compiler.\nII. Java keywords can be used as variable names.\nIII. An identifier does not begin with a digit and does not contain any spaces.\nIV. The execution of Java applications begins at method main.\nWhich of them is correct?",
    answers: [" Both (I) and (III) above ", " Both (II) and (IV) above", " Both (I) and (II) above ", " (III) and (IV) above", " All (I), (II), (III) and (IV) above."],
    correctAnswer: 4
  },
  {
    id: 66,
    content: "Consider the following data types in Java :\nI. Int II. Boolean III. Double IV. String V. Array.\nWhich of them are simple data types?",
    answers: [" Both (I) and (II) above ", " (I), (II), (III) and (IV) above", " (I), (II) and (III) above ", " (II) and (III) above", " All (I), (II), (III), (IV) and (V) above."],
    correctAnswer: 3
  },
  {
    id: 67,
    content: "For what values respectively of the variables gender and age would the Java expression gender == 1 && age >= 65 become true?",
    answers: [" gender = 1, age = 60 ", " gender = 1, age = 50
", " gender = 1, age = 65 ", " gender = 0, age = 70
", " gender = 0, age = 55."],
    correctAnswer: 3
  },
  {
    id: 68,
    content: "Consider the following Java program :\npublic class Compute {\npublic static void main (string args [ ])\n{\nint result, x ;\nx = 1 ;\nresult = 0;\nwhile (x < = 10) {\nif (x%2 == 0) result + = x ;\n+ + x ;\n}\nSystem.out.println(result) ;\n}\n}\nWhich of the following will be the output of the above program?",
    answers: [" 55 ", "30", "25", "35", " 45."],
    correctAnswer: 2
  },
  {
    id: 69,
    content: "Which of the following statements about Java Threads is correct?",
    answers: [" Java threads don’t allow parts of a program to be executed in parallel", " Java is a single-threaded language", " Java’s garbage collector runs as a high priority thread", " Ready, running and sleeping are three states that a thread can be in during its life cycle", " Every java application is not multithreaded."],
    correctAnswer: 4
  },
  {
    id: 70,
    content: "How to extract numbers from a string using regular expression?",
    answers: ["Pattern is \\\\d+", "Pattern is \\\\r?\\\\n", "Pattern is 1?+b", "Pattern is \\\\dw"],
    correctAnswer: 1
  },
  {
    id: 71,
    content: "How to replace all non-alphanumeric characters with empty strings using regular expression?",
    answers: ["replaceAll(\"[^A-Za-z0-9]\", \"\")", "replaceAll(\"[^A-Za-z0-9|.+]\", \"\");", "replaceAll(\"[A-Za-z0-9]\", \"\")", "replaceAll(\"[^A-Za-z0-9|\\\\d]\", \"\");"],
    correctAnswer: 1
  },
  {
    id: 72,
    content: "How to replace 2 or more spaces with single space in string and delete leading spaces only using regular expression?",
    answers: ["replaceAll(\"[\\\\s]+\", \" \")", "replaceAll(\"^[\\\\s]+\", \" \")", "replaceAll(\"[\\\\s]\", \" \")", "replaceAll(\"[\\\\s\\\\d]+\", \" \")"],
    correctAnswer: 1
  },
  {
    id: 73,
    content: "How to extract phone numbers from a string using regular expression?\n Phone number of the following formats:\n (123) 456 7899\n (123).456.7899\n (123)-456-7899\n 123-456-7899\n 123 456 7899\n 1234567899",
    answers: ["Pattern is /\\(?([0-9]{3})\\)?([ .-]?)([0-9]{3})\\2([0-9]{4})/", "Pattern is /\\(?([0-9]{3})\\)?([ .]?)([0-9]{3})\\2([0-9]{4})/", "Pattern is /\\(?([0-9]{3})\\)?([ .-]?)([0-9]{3})\\2([0-9]{5})/", "Pattern is /\\(([0-9]{3})\\)?([ .-]?)([0-9]{3})\\2([0-9]{4})/"],
    correctAnswer: 1
  },
  {
    id: 74,
    content: "How to extract IP address from a string using regular expression?",
    answers: ["Pattern is \\\\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\\\b", "Pattern is \\\\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\\\b", "Pattern is/\\\\d{1,2}|(0|1)\\\\d{2}|2[0-4]\\\\d{0-5}/", "Pattern is/\\\\d{1,2}|(0|1)\\\\d{2}|2[2-4]\\\\d|25[0-5]/"],
    correctAnswer: 1
  },
  {
    id: 75,
    content: "How to extract email from a string using regular expression?",
    answers: ["Pattern is ([a-z0-9_.-]+)@([a-z0-9_.-]+[a-z])", "Pattern is ([a-z09_.-]+)@([a-z0-9_.-]+[a-z])", "Pattern is ([a-z0-9_.+]+)@([a-z0-9_.-]+[a-z])", "Pattern is ([a-z0-9_.-].)@([a-z0-9_.-]+[a-z])"],
    correctAnswer: 1
  },
  {
    id: 76,
    content: "How to configure Connector/J properly that MySql is being aborted automatically?",
    answers: ["url=\"jdbc:mysql://localhost:3306/confluence?autoReconnect=true\"", "url=\"jdbc:mysql://localhost:3306/confluence?useUnicode=yes\"", "url=\"jdbc:mysql://localhost:3306/confluence?is-connection-validation-required=true\"", "url=\"jdbc:mysql://localhost:3306/confluence?autoReconnectForPools=true\""],
    correctAnswer: 1
  },
  {
    id: 77,
    content: "Differentiate between get() and load() in Hibernate?",
    answers: ["get() when want to load an object \nload() when need to obtain a reference to the object without issuing extra SQL queries", "load() when want to load an object \n get() when need to obtain a reference to the object without issuing extra SQL queries", "load when save entity to database\n get when need to obtain a reference to the object without issuing extra SQL queries", "get() when want to load an object \n load() when forces the session to flush and synchronize session data with database"],
    correctAnswer: 1
  },
  {
    id: 78,
    content: "Difference between save() and persist() in Hibernate?",
    answers: ["save() return generated Id after saving. Its Serializable return type\n persist() return void", "persist() and save() is that both methods make a transient object to persistent state. However, persist() method doesn’t guarantee that the identifier value will be assigned to the persistent state immediately, the assignment might happen at flush time", "persist() method guarantees that it do not execute an INSERT statement if it is called outside of transaction boundaries\n save() method guarantees that itexecute an INSERT statement if it is called outside of transaction boundaries", "all answers above"],
    correctAnswer: 4
  },
  {
    id: 79,
    content: "Difference between save() and saveOrUpdate() in Hibernate?",
    answers: ["save() - always try to insert a row into a database.\n saveOrUpdate() - inserts a row if it does not exist in a database or update it if it does exist.", "save() - always try to insert a row into a database.\n saveOrUpdate() - always try to update a row in a database", "save() - always try to insert a row into a database.\n saveOrUpdate() - always try to update a row in a database", "save() - inserts a row if it does not exist in a database or update it if it does exist\n saveOrUpdate() - always try to update a row in a database"],
    correctAnswer: 1
  },
  {
    id: 80,
    content: "What annotation used for model classes to specify that they are entity beans in Hibernate mapping?",
    answers: ["javax.persistence.Entity", "javax.persistence.Table", "javax.persistence.Access", "javax.persistence.Id"],
    correctAnswer: 1
  },
  {
    id: 81,
    content: "What annotation used for entity beans to define the corresponding table name in database in Hibernate mapping?",
    answers: ["javax.persistence.Entity", "javax.persistence.Table", "javax.persistence.Access", "javax.persistence.Id"],
    correctAnswer: 2
  },
  {
    id: 82,
    content: "What annotation used for entity beans to define the access type, either field or property in Hibernate mapping?",
    answers: ["javax.persistence.Entity", "javax.persistence.Table", "javax.persistence.Access", "javax.persistence.Id"],
    correctAnswer: 3
  },
  {
    id: 83,
    content: "What annotation used for entity beans to define define the primary key in the entity bean in Hibernate mapping?",
    answers: ["javax.persistence.Entity", "javax.persistence.Table", "javax.persistence.Access", "javax.persistence.Id"],
    correctAnswer: 4
  },
  {
    id: 84,
    content: "What annotation used for define composite primary key in the entity bean in Hibernate mapping?",
    answers: ["javax.persistence.EmbeddedId", "javax.persistence.Table", "javax.persistence.Access", "javax.persistence.Id"],
    correctAnswer: 1
  },
  {
    id: 85,
    content: "What annotation used for define the column name in database table in Hibernate mapping?",
    answers: ["javax.persistence.EmbeddedId", "javax.persistence.Column", "javax.persistence.Access", "javax.persistence.Id"],
    correctAnswer: 2
  },
  {
    id: 86,
    content: "What annotation used for define the strategy to be used for generation of primary key in Hibernate mapping?",
    answers: ["javax.persistence.EmbeddedId", "javax.persistence.GeneratedValue", "javax.persistence.Access", "javax.persistence.Id"],
    correctAnswer: 2
  },
  {
    id: 87,
    content: "What annotation used for define the property for foreign key in Hibernate mapping?",
    answers: ["javax.persistence.PrimaryKeyJoinColumn", "javax.persistence.GeneratedValue", "javax.persistence.Access", "javax.persistence.Column"],
    correctAnswer: 1
  },
  {
    id: 88,
    content: "What are the type of relationship available in Hibernate mapping?",
    answers: ["One-To-One\n Many-To-One\n Many-To-Many\n One-To-Many", "One-To-Zero\n Many-To-All\n Many-To-Many\n One-To-Many", "All-To-All\n More-To-One\n More-To-More\n One-To-More", "All-To-All\n More-To-One\n More-To-More\n One-To-More"],
    correctAnswer: 1
  },
  {
    id: 89,
    content: "What are the types of collectionin Hibernate",
    answers: ["Set\n List\n Array\n Map", "Queue\n List\n Array\n Map", "Vector\n List\n LinkedList \n Map", "Vector\n List\n Array\n Vector"],
    correctAnswer: 1
  },
  {
    id: 90,
    content: "What are the types of state in Hibernate?",
    answers: ["Transient \n Persistent \n Detached", "Transient \n Session\n Detached", "Factory\n Persistent \n Session", "Transient \n Factory\n Session"],
    correctAnswer: 1
  },
  {
    id: 91,
    content: "What are the types of exceptions in Java?",
    answers: ["Checked Exceptions\n Unchecked Exceptions\n Errors", "Resolved Exceptions\n Unresolved Exceptions\n Errors", "Checked Exceptions\n Resolved Exceptions\n Errors", "Cleared Exceptions\n Uncleared Exceptions\n Errors"],
    correctAnswer: 1
  },
  {
    id: 92,
    content: "How to customize exception in java?",
    answers: ["class MyException extends Exception\n {\n String s1;\n \n public MyException(String s2) {\n s1=s2;\n }\n public String toString() {\n return (\"MyException defines: \"+s1) ;\n }\n \n }", "class MyException\n {\n String s1;\n \n public MyException(String s2) {\n s1=s2;\n }\n public String toString() {\n return (\"MyException defines: \"+s1) ;\n }\n \n }", "class MyException extend HibernateException\n {\n String s1;\n \n public MyException(String s2) {\n s1=s2;\n }\n public String toString() {\n return (\"MyException defines: \"+s1) ;\n }\n \n }", "class MyException implement Exception\n {\n String s1;\n \n public MyException(String s2) {\n s1=s2;\n }\n public String toString() {\n return (\"MyException defines: \"+s1) ;\n }\n \n }"],
    correctAnswer: 1
  },
  {
    id: 93,
    content: "How is multiple exception handling in java? (choice code correct)",
    answers: ["try {\n // code that throws an exception\n } \n catch (exception_class1 e1) {\n // handle the exception\n } \n catch (exception_class2 e2) {\n // handle the exception\n } \n catch (exception_class3 e3) {\n // handle the exception\n }", "try {\n // code that throws an exception\n } \n catchs (exception_class1 e1 | e2 | e3) {\n // handle the exception\n }", "try {\n // code that throws an exception\n } \n catch (exception_class1 e1) {\n // handle the exception\n }", "try {\n // code that throws an exception\n } \n catch (exception_class1 e1) exception_class2 e2)(exception_class3 e3)"],
    correctAnswer: 1
  },
  {
    id: 94,
    content: "Which of these is a super class of all errors and exceptions in the Java language?",
    answers: ["Throwable", "RunTimeExceptions", "Catchable", "None of the above"],
    correctAnswer: 1
  },
  {
    id: 95,
    content: "What will be the output of the following Java program?\n class exception_handling \n {\n public static void main(String args[]) \n {\n try \n {\n System.out.print(\"Hello\" + \" \" + 1 / 0);\n }\n catch(ArithmeticException e) \n {\n System.out.print(\"World\");\n }\n }\n }",
    answers: ["Hello", "World", "HelloWorld", "Hello World"],
    correctAnswer: 2
  },
  {
    id: 96,
    content: "What are the differences between a thread and a process?",
    answers: ["A thread is a subset of a process. One process can have multiple threads running for it", "A process is a subset of a thread. One thread can have multiple process running for it", "thread is another name of a process", "no answer"],
    correctAnswer: 1
  },
  {
    id: 97,
    content: "Which function of pre defined class Thread is used to check weather current thread being checked is still running?",
    answers: ["isAlive", "join()", "isRunning()", "waitting()"],
    correctAnswer: 1
  },
  {
    id: 98,
    content: "Which of these packages contain all the Java’s built in exceptions?",
    answers: ["java.lang", "java.io", "java.util", "java.net"],
    correctAnswer: 1
  },
  {
    id: 99,
    content: "What will happen if two thread of same priority are called to be processed simultaneously?",
    answers: ["It is dependent on the operating system", "Any one will be executed first lexographically", "Both of them will be executed simultaneously", "None of them will be executed"],
    correctAnswer: 1
  },
  {
    id: 100,
    content: "What is synchronization in reference to a thread?",
    answers: ["It’s a process of handling situations when two or more threads need access to a shared resource.", "It’s a process of handling situations when two or more threads need access to a shared resource.", "Its a process by which a method is able to access many different threads simultaneously", "ts a method that allow to many threads to access any information require."],
    correctAnswer: 1
  },
  {
    id: 101,
    content: "Which of these method waits for the thread to treminate?",
    answers: ["join()", "sleep()", "isAlive()", "stop()"],
    correctAnswer: 1
  },
  {
    id: 102,
    content: "What will be the output of the program?\n \n class Test implements Runnable { \n public\n void run() \n { \n System.out.println(\"Run\"); \n } \n } class Myclass { \n public\n static void main(String[] args) \n { \n Test t = new Test(); \n t.start(); \n System.out.println(\"Main\"); \n } \n }",
    answers: ["Compile time error", "Main Run", "Run Main", "Depend upon JVM"],
    correctAnswer: 1
  },
  {
    id: 103,
    content: "How can Thread go from waiting to runnable state?",
    answers: ["notify/notifAll", "When sleep time is up", "Using resume() method when thread was suspended", "all"],
    correctAnswer: 4
  },
  {
    id: 104,
    content: "What are valid statements for suspend() and resume() method?",
    answers: ["Suspend() method is deadlock prone", "If the target thread holds a lock on object when it is suspended, no thread can lock this object until the target thread is resumed", "If the thread that would resume the target thread attempts to lock this monitor prior to calling resume, it results in deadlock formation.", "all"],
    correctAnswer: 4
  },
  {
    id: 105,
    content: "What is difference between starting thread with run() and start() method?",
    answers: ["There is no difference", "When you call start() method, main thread internally calls run() method to start newly created Thread", "run() calls start() method internally", "none"],
    correctAnswer: 2
  },
  {
    id: 106,
    content: "Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.\n What is code correct?",
    answers: ["public static String LetterCapitalize(String str) {\n StringBuilder sb = new StringBuilder();\n for (String word : str.toLowerCase().split(\"\\\\s\")) {\n char firstLetter = word.substring(0, 1).charAt(0);\n sb.append(firstLetter >= 'a' && firstLetter <= 'z' ? (char)(firstLetter - 32) : firstLetter).append(word.substring(1)).append(\" \");\n }\n return sb.toString().substring(0, sb.toString().length() - 1);\n }", "public static String LetterCapitalize(String str) {\n StringBuilder sb = new StringBuilder();\n for (String word : str.toLowerCase().split(\"\\\\s\")) {\n char firstLetter = word.substring(0, 1).charAt(0);\n sb.append(firstLetter >= 'a' && firstLetter <= 'z' ? (char)(firstLetter - 31) : firstLetter).append(word.substring(1)).append(\" \");\n }\n return sb.toString().substring(0, sb.toString().length());\n }", "public static String LetterCapitalize(String str) {\n StringBuilder sb = new StringBuilder();\n for (String word : str.toLowerCase().split(\"\\\\s\")) {\n char firstLetter = word.substring(0, 1).charAt(0);\n sb.append(firstLetter >= 'a' && firstLetter <= 'z' ? (char)(firstLetter - 22) : firstLetter).append(word.substring(1)).append(\" \");\n }\n return sb.toString().substring(0, sb.toString().length() - 12);\n }", "public static String LetterCapitalize(String str) {\n StringBuilder sb = new StringBuilder();\n for (String word : str.toLowerCase().split(\"\\\\s\")) {\n char firstLetter = word.substring(0, 1).charAt(0);\n sb.append(firstLetter >= 'a' && firstLetter <= 'z' ? (char)(firstLetter - 12) : firstLetter).append(word.substring(1)).append(\" \");\n }\n return sb.toString().substring(0, sb.toString().length() - 11);\n }"],
    correctAnswer: 1
  },
  {
    id: 107,
    content: "Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.\n What is code correct?",
    answers: ["public static String TimeConvert(int num) {\n return (num / 60 + \":\" + num % 60);\n }", "public static String TimeConvert(int num) {\n return (num / 60 + \":\" + num % 30);\n }", "public static String TimeConvert(int num) {\n return (num / 60 + \":\" + num / 60);\n }", "public static String TimeConvert(int num) {\n return (num / 60 + \":\" + num * 0.6);\n }"],
    correctAnswer: 1
  },
  {
    id: 108,
    content: "Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.\n What is code correct?",
    answers: ["public static String AlphabetSoup(String str) {\n char[] strChars = str.toCharArray();\n Arrays.sort(strChars);\n return new String(strChars);\n }", "public static String AlphabetSoup(String str) {\n char[] strChars = str.split(\"\");\n Arrays.sort(strChars);\n return new String(strChars);\n }", "public static String AlphabetSoup(String str) {\n char[] strChars = str.slit(\" \");\n Arrays.sort(strChars);\n return new String(strChars);\n }", "public static String AlphabetSoup(String str) {\n char[] strChars = str.toCharArray();\n Arrays.sort(strChars, 'DESC');\n return new String(strChars);\n }"],
    correctAnswer: 1
  },
  {
    id: 109,
    content: "Have the function ChessboardTraveling(str) read str which will be a string consisting of the location of a space on a standard 8x8 chess board with no pieces on the board along with another space on the chess board. The structure of str will be the following: \"(x y)(a b)\" where (x y) represents the position you are currently on with x and y ranging from 1 to 8 and (a b) represents some other space on the chess board with a and b also ranging from 1 to 8 where a > x and b > y. Your program should determine how many ways there are of traveling from (x y) on the board to (a b) moving only up and to the right. For example: if str is (1 1)(2 2) then your program should output 2 because there are only two possible ways to travel from space (1 1) on a chessboard to space (2 2) while making only moves up and to the right.\n What is code correct?",
    answers: ["public static int ChessboardTraveling(String str) {\n long x1 = Long.parseLong(str.substring(1,2));\n long y1 = Long.parseLong(str.substring(3,4));\n long x2 = Long.parseLong(str.substring(6,7));\n long y2 = Long.parseLong(str.substring(8,9));\n long n = (x2 - x1) + (y2 - y1);\n long r = x2 - x1;\n return (int)(factorial(n) / (factorial(r) * factorial(n - r)));\n }\n \n private static long factorial(long n) {\n return (n < 2 ? 1 : n * factorial(n - 1));\n }", "public static int ChessboardTraveling(String str) {\n long x1 = Long.parseLong(str.substring(1,2));\n long y1 = Long.parseLong(str.substring(3,4));\n long x2 = Long.parseLong(str.substring(4,5));\n long y2 = Long.parseLong(str.substring(6,7));\n long n = (x2 - x1) + (y2 - y1);\n long r = x2 - x1;\n return (int)(factorial(n) / (factorial(r) * factorial(n - r)));\n }\n \n private static long factorial(long n) {\n return (n < 2 ? 1 : n * factorial(n - 1));\n }", "public static int ChessboardTraveling(String str) {\n long x1 = Long.parseLong(str.substring(1,2));\n long y1 = Long.parseLong(str.substring(3,4));\n long x2 = Long.parseLong(str.substring(4,6));\n long y2 = Long.parseLong(str.substring(7,9));\n long n = (x2 - x1) + (y2 - y1);\n long r = x2 - x1;\n return (int)(factorial(n) / (factorial(r) * factorial(n - r)));\n }\n \n private static long factorial(long n) {\n return (n < 2 ? 1 : n * factorial(n - 1));\n }", "public static int ChessboardTraveling(String str) {\n long x1 = Long.parseLong(str.substring(1,2));\n long y1 = Long.parseLong(str.substring(2,4));\n long x2 = Long.parseLong(str.substring(5,7));\n long y2 = Long.parseLong(str.substring(8,9));\n long n = (x2 - x1) + (y2 - y1);\n long r = x2 - x1;\n return (int)(factorial(n) / (factorial(r) * factorial(n - r)));\n }\n \n private static long factorial(long n) {\n return (n < 2 ? 1 : n * factorial(n - 1));\n }"],
    correctAnswer: 1
  },
  {
    id: 110,
    content: "Have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit number with at least two distinct digits. Your program should perform the following routine on the number: Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number), and subtract the smaller number from the bigger number. Then repeat the previous step. Performing this routine will always cause you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). Your program should return the number of times this routine must be performed until 6174 is reached. For example: if num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174.\n What is code correct?",
    answers: ["public static int KaprekarsConstant(int num) {\n if (num == 6174) {\n return 0;\n }\n int[] numArray = {num / 1000, num % 1000 / 100, num % 1000 % 100 / 10, num % 1000 % 100 % 10};\n int ascNum = 0;\n int desNum = 0;\n Arrays.sort(numArray);\n for (int i = 0; i < 4; i++) {\n desNum += (numArray[i] * (int)Math.pow(10, i));\n ascNum += (numArray[i] * (int)Math.pow(10, 3 - i));\n }\n return 1 + KaprekarsConstant(desNum - ascNum);\n }", "public static int KaprekarsConstant(int num) {\n if (num == 6174) {\n return 0;\n }\n int[] numArray = {num % 1000, num % 1000 / 100, num % 1000 % 100 % 10, num % 1000 % 100 % 10};\n int ascNum = 0;\n int desNum = 0;\n Arrays.sort(numArray);\n for (int i = 0; i < 4; i++) {\n desNum += (numArray[i] * (int)Math.pow(10, i));\n ascNum += (numArray[i] * (int)Math.pow(10, 3 - i));\n }\n return 1 + KaprekarsConstant(desNum - ascNum);\n }", "public static int KaprekarsConstant(int num) {\n if (num == 6174) {\n return 0;\n }\n int[] numArray = {num / 1000, num % 1000 / 100, num % 1000 % 100 / 10, num % 1000 / 100 % 10};\n int ascNum = 0;\n int desNum = 0;\n Arrays.sort(numArray);\n for (int i = 0; i < 4; i++) {\n desNum += (numArray[i] * (int)Math.pow(10, i));\n ascNum += (numArray[i] * (int)Math.pow(10, 3 - i));\n }\n return 1 + KaprekarsConstant(desNum - ascNum);\n }", "public static int KaprekarsConstant(int num) {\n if (num == 6174) {\n return 0;\n }\n int[] numArray = {num / 1000, num % 1000 / 100, num % 1000 % 100 / 10, num / 1000 / 100 % 10};\n int ascNum = 0;\n int desNum = 0;\n Arrays.sort(numArray);\n for (int i = 0; i < 4; i++) {\n desNum += (numArray[i] * (int)Math.pow(10, i));\n ascNum += (numArray[i] * (int)Math.pow(10, 3 - i));\n }\n return 1 + KaprekarsConstant(desNum - ascNum);\n }"],
    correctAnswer: 1
  },
  {
    id: 111,
    content: "Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.\n \n For example: if str is \"arrb6???4xxbl5???eee5\" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.\n What is code correct?",
    answers: ["public static String QuestionsMarks(String str) {\n String numMarks = str.replaceAll(\"[^0-9?]\", \"\");\n Pattern p = Pattern.compile(\"(\\\\d\\\\?+\\\\d)\");\n Matcher m = p.matcher(numMarks);\n boolean matched = false;\n while (m.find()) {\n String match = m.group();\n int a = Integer.parseInt(match.substring(0, 1));\n int b = Integer.parseInt(match.substring(match.length() - 1));\n if (a + b == 10) {\n if (match.length() != 5) {\n return \"false\";\n } else {\n matched = true;\n }\n }\n }\n return matched ? \"true\" : \"false\";\n }", "public static String QuestionsMarks(String str) {\n String numMarks = str.replaceAll(\"[^0-9?]\", \"\");\n Pattern p = Pattern.compile(\"(\\\\d{2}\\\\?+\\\\d)\");\n Matcher m = p.matcher(numMarks);\n boolean matched = false;\n while (m.find()) {\n String match = m.group();\n int a = Integer.parseInt(match.substring(0, 1));\n int b = Integer.parseInt(match.substring(match.length() - 1));\n if (a + b == 8) {\n if (match.length() != 5) {\n return \"false\";\n } else {\n matched = true;\n }\n }\n }\n return matched ? \"true\" : \"false\";\n }", "public static String QuestionsMarks(String str) {\n String numMarks = str.replaceAll(\"[^0-9?]\", \"\");\n Pattern p = Pattern.compile(\"(\\\\d\\\\?+\\\\d{3})\");\n Matcher m = p.matcher(numMarks);\n boolean matched = false;\n while (m.find()) {\n String match = m.group();\n int a = Integer.parseInt(match.substring(0, 1));\n int b = Integer.parseInt(match.substring(match.length() - 1));\n if (a + b == 9) {\n if (match.length() != 5) {\n return \"false\";\n } else {\n matched = true;\n }\n }\n }\n return matched ? \"true\" : \"false\";\n }", "public static String QuestionsMarks(String str) {\n String numMarks = str.replaceAll(\"[^0-9?]\", \"\");\n Pattern p = Pattern.compile(\"(\\\\d{2}\\\\?+\\\\d{3})\");\n Matcher m = p.matcher(numMarks);\n boolean matched = false;\n while (m.find()) {\n String match = m.group();\n int a = Integer.parseInt(match.substring(0, 1));\n int b = Integer.parseInt(match.substring(match.length() - 1));\n if (a + b == 11) {\n if (match.length() != 5) {\n return \"false\";\n } else {\n matched = true;\n }\n }\n }\n return matched ? \"true\" : \"false\";\n }"],
    correctAnswer: 1
  },
  {
    id: 112,
    content: "Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.\n What is code correct?",
    answers: ["public static int SimpleAdding(int num) {\n return (num == 0 ? 0 : num + SimpleAdding(num - 1));\n }", "public static int SimpleAdding(int num) {\n return (num == 0 ? 0 : num + SimpleAdding(num - 2));\n }", "public static int SimpleAdding(int num) {\n return (num == 0 ? 0 : num + SimpleAdding(num - 3));\n }", "public static int SimpleAdding(int num) {\n return (num == 0 ? 0 : num + SimpleAdding(num - 4));\n }"],
    correctAnswer: 1
  },
  {
    id: 113,
    content: "Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several characters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.\n What is code correct?",
    answers: ["public static String SimpleSymbols(String str) {\n int patternCount = 0;\n Matcher patternMatch = Pattern.compile(\"(?=(\\\\+[a-z]\\\\+))\").matcher(str.toLowerCase());\n while (patternMatch.find()) {\n patternCount++;\n }\n int letterCount = 0;\n Matcher letterMatch = Pattern.compile(\"[a-z]\").matcher(str.toLowerCase());\n while (letterMatch.find()) {\n letterCount++;\n }\n return String.valueOf(letterCount == patternCount);\n }", "public static String SimpleSymbols(String str) {\n int patternCount = 0;\n Matcher patternMatch = Pattern.compile(\"(?=(\\\\+[a-z]\\\\+))\").matcher(str.toLowerCase());\n while (patternMatch.find()) {\n patternCount++;\n }\n int letterCount = 0;\n Matcher letterMatch = Pattern.compile(\"[a-z]\").matcher(str.toLowerCase());\n while (letterMatch.find()) {\n letterCount += 2;\n }\n return String.valueOf(letterCount == patternCount);\n }", "public static String SimpleSymbols(String str) {\n int patternCount = 0;\n Matcher patternMatch = Pattern.compile(\"(?=(\\\\+[a-z]\\\\+))\").matcher(str.toLowerCase());\n while (patternMatch.find()) {\n patternCount++;\n }\n int letterCount = 1;\n Matcher letterMatch = Pattern.compile(\"[a-z]\").matcher(str.toLowerCase());\n while (letterMatch.find()) {\n letterCount +=3;\n }\n return String.valueOf(letterCount == patternCount);\n }", "public static String SimpleSymbols(String str) {\n int patternCount = 0;\n Matcher patternMatch = Pattern.compile(\"(?=(\\\\+[a-z]\\\\+))\").matcher(str.toLowerCase());\n while (patternMatch.find()) {\n patternCount++;\n }\n int letterCount = 2;\n Matcher letterMatch = Pattern.compile(\"[a-z]\").matcher(str.toLowerCase());\n while (letterMatch.find()) {\n letterCount +=3;\n }\n return String.valueOf(letterCount == patternCount);\n }"],
    correctAnswer: 1
  },
  {
    id: 114,
    content: "public class Shape {
    \nprotected void display() {
        \nSystem.out.println(\"Display-base\");
   \n }\n
}

\npublic class Circle extends Shape {
 \n<access-modifier> void display(){
        \nSystem.out.println(\"Display-derived\");
   \n }
}\nWhat is the access-modifier suitable for display() method:\n",
    answers: ["Only protected can be used", "Public and protected both can be used", "Public, protected, and private can be used", "Only public can be used"],
    correctAnswer: 2
  },
  {
    id: 115,
    content: "Select one or more answers: Which method(s) of the Object class can be overridden?",
    answers: ["finalize() method", "clone() method", "getClass() method", "notify() method", "wait() method"],
    correctAnswer: [1, 2]
  },
  {
    id: 116,
    content: "interface Foo {
    \ndefault void foo() { \nSystem.out.println(\"foo\"); \n}
}
\n@FunctionalInterface
interface Bar extends Foo {
    \n@Override
abstract void foo();
\n}
\nclass TestLambda {
    \npublic static void main(String []args) {
        \nBar bar = () -> System.out.println(\"qux\");
        \nbar.foo();
    \n}
}\nWhat is the output of the program?",
    answers: ["This program results in a compiler error for Foo interface: cannot\noverride default method to be an abstract method\n", "This program results in a compiler error: Foo is not a functional\ninterface", "This program prints: foo", "This program prints: qux"],
    correctAnswer: 4
  },
  {
    id: 117,
    content: "class ListTest {
    \npublic static void main(String []args) {
        \nList<int> intList = new ArrayList<>();
        \nintList.add(100);
        \nintList.add(200);
        \nSystem.out.println(\"My list:\" + intList);
    \n}
}\n\nDetermine the behavior of this program:\n",
    answers: ["It prints the following: My list: [200, 100]
", "A compiler error", " It prints the following: My list: [100, 200]
", "A runtime exception"],
    correctAnswer: 2
  },
  {
    id: 118,
    content: "Choose the correct option based on this program:\nclass Test {
   \nprivate static boolean removeCharacter(int character) {
      \nswitch(character) {
        \n case 'a': case 'e': case 'i': case 'o': case 'u': return true;
     \n }
      \nreturn false;
   \n}
   \npublic static void main(String []args) {
     \n \"alexander\".chars()
           \n .filter(Test::removeCharacter)
            \n.forEach(ch -> System.out.printf(\"%c\", ch));
   \n}
}",
    answers: ["This program results in a compiler error", "This program prints: \"aeae\"", "This program prints: \"lxndr\"", "This program prints: \"alexander\"", "This program crashes by throwing a java.lang.IllegalStateException", "This program crashes by throwing a java.util.IllegalFormatConversionException"],
    correctAnswer: 2
  },
  {
    id: 119,
    content: "Consider the following program:\nclass TestException {
   \npublic static void foo() {
     \n try {
        \n throw new ArrayIndexOutOfBoundsException();
      \n} \ncatch(ArrayIndexOutOfBoundsException e) \n{
         RuntimeException exception = new RuntimeException(e);
         \nexception.initCause(e);
         \nthrow exception;
      \n}
   \n}
   \npublic static void main(String []args) {
     \n try {
         \nfoo();
     \n } \ncatch(Exception e) {
         \nSystem.out.println(e.getClass());
      }
  \n }
}\nWhat is the output?",
    answers: ["class java.lang.RuntimeException\n", "class java.lang.Exception", " class java.lang.ArrayIndexOutOfBoundsException", "class java.lang.IllegalStateException"],
    correctAnswer: 4
  },
  {
    id: 120,
    content: "public static void main(String []args) throws IOException {
   \nDataInputStream dataInputStream = new DataInputStream(new FileInputStream(\"Input.csv\"));
   \nBufferedReader bufferedReader = new BufferedReader(new InputStreamReader(dataInputStream));
   \nString line;
  \n while ((line = bufferedReader.readLine()) != null) {
      \nSystem.out.println(line);
   \n}
   \nbufferedReader.close();
}\nWhich options are true regarding this code segment?\n",
    answers: ["bufferedReader.close() statement will close only the BufferedReader object, and\nfindings and dataStream will remain unclosed.", "The bufferedReader.close() statement will close the BufferedReader object and the\nunderlying stream objects referred by findings and dataStream.", "The readLine() method invoked in the statement bufferedReader.readLine() can throw\nan IOException; if this exception is thrown, bufferedReader.close() will not be called,\nresulting in a resource leak.\n", "The readLine() method invoked in the statement bufferedReader.readLine() can throw\nan IOException; however, there will not be any resource leaks since Garbage\nCollector collects all resources.", "In this code segment, no exceptions can be thrown calling bufferedReader.close(), so\nthere is no possibility of resource leaks."],
    correctAnswer: [2, 3]
  },
  {
    id: 121,
    content: "Which of the following are true of interfaces?",
    answers: ["They can extend other classes.", "They cannot be extended.", " They enable classes to have multiple inheritance.", "They can only contain abstract methods.", "They can be declared final.", "All members of an interface are public."],
    correctAnswer: [3, 5]
  },
  {
    id: 122,
    content: "Which of the following statements about polymorphism are true? ",
    answers: ["A reference to an object may be cast to a subclass of the object without an explicit cast.", "If a method takes a class that is the superclass of three different object references, then\nany of those objects may be passed as a parameter to the method.", "A reference to an object may be cast to a superclass of the object without an explicit cast.\n", "All cast exceptions can be detected at compile time.\n", "By defining a public instance method in the superclass, you guarantee that the specific\nmethod will be called in the parent class at runtime"],
    correctAnswer: [2, 3]
  },
  {
    id: 123,
    content: "Which three scenarios would best benefit from using a singleton pattern? (Choose all\nthree.)",
    answers: ["Create read‐only objects that are thread‐safe", "Manage a reusable cache of objects.\n", " Ensure that all objects are lazily instantiated.\n", "Manage write access to a log file.", "Provide central access to application configuration data.\n", "Allow multiple instances of a static object to be managed in memory\n"],
    correctAnswer: [2, 5]
  },
  {
    id: 124,
    content: "Which of the following prints out all of the values in foo?\n",
    answers: ["foo.keys().stream().map(k -> k .forEach(System.out::println);\n", "foo.keys().stream().map(k -> foo.get(k))\n.forEach(System.out::println);", " foo.keySet().stream().map(k -> k) .forEach(System.out::println);\n", "foo.keySet().stream().map(k -> foo.get(k))\n.forEach(System.out::println);", "foo.stream().map(k -> k) .forEach(System.out::println);", "foo.stream().map(k -> foo.get(k)) .forEach(System.out::println);\n"],
    correctAnswer: 4
  },
  {
    id: 125,
    content: "What does the minimum JDBC URL need?",
    answers: ["Connection parameters\n", "Database name", "jdbc", "Location of database", "Port", "Password"],
    correctAnswer: [2, 3]
  },
  {
    id: 126,
    content: " What is the result of this code?\nConnection conn = DriverManager.getConnection(\"jdbc:foo:bar\");
Statement stmt = conn.createStatement();
int result = stmt.executeUpdate(\"UPDATE student SET number = number + 10\");
System.out.println(result);",
    answers: ["0", "1", "table student’s row number", "The code does not compile.", "A SQLException is thrown", "A different exception is thrown"],
    correctAnswer: 6
  },
  {
    id: 127,
    content: "What is the output of the following code?\ntry (Connection connection = DriverManager.getConnection(\"jdbc:foo:bar\");
    Statement statement = connection.createStatement()) {
   ResultSet resultSet = statement.executeQuery(\"SELECT COUNT(*) FROM Employee\");
   int num = statement.executeUpdate(\"INSERT INTO Employee VALUES (3, 'John', 15)\");
   resultSet.next();
   System.out.println(resultSet.getInt(1));
} catch (Exception e) {
   System.out.println(e.toString());
}\n",
    answers: ["Employee’s row number", " Employee’s row number + 1", "The code does not compile.", "A SQLException is thrown.", "A different exception is thrown."],
    correctAnswer: 5
  },
  {
    id: 128,
    content: "do {\n   int x = 1;\n   System.out.println(x++ + \" \");\n   } while (x <= 8);\nwhat is the output?",
    answers: ["1 2 3 4 5 6 7 8 9\n", "1 2 3 4 5 6 7 8 \n", " 2 3 4 5 6 7 8 9 10 ", "The code will not compile", "The code contains an infinite loop and does not terminate"],
    correctAnswer: 4
  },
  {
    id: 129,
    content: "boolean isActive = true;\nint result = 5, \ni = 5;\ndo \n{\n   i--;\n   if (i == 2) \n   {      \n        isActive = false;\n   }\n   result *= 2;\n   } while (isActive);\n   System.out.println(result);\nwhat is the output?",
    answers: ["10", "20", "40", "60", "80", "The code will not compile"],
    correctAnswer: 3
  },
  {
    id: 130,
    content: "What is the result of the following?\nDoubleStream doubleStream = DoubleStream.of(2.2, 3.9);\ndoubleStream.peek(System.out::println).filter(x -> x > 2).count();\n\n",
    answers: ["2", "3", "2 and 4", "2.2 and 3.9", "There is no output.", "The code does not compile.", "An exception is thrown."],
    correctAnswer: 4
  },
  {
    id: 131,
    content: "Which of the following are runtime exceptions?",
    answers: ["Exception", "IllegalStateException", "IOException", "MissingResourceException", "DateTimeParseException", "SQLException"],
    correctAnswer: [2, 4, 6]
  },
  {
    id: 132,
    content: "The removeTree method is implemented to recursively remove the directory tree. \nWhich of the following properties reflect the method definition?\npublic static void deleteTree(File file) {\nif(!file.isFile())\n for(File entry: file.listFiles())\n\tdeleteTree(entry);\n\telse file.delete();\n\t}",
    answers: ["It can delete a directory that contains only files.", "It can delete a directory tree of arbitrary length.\n", "It can delete a single file.\n", "The code will not compile because of line 2", "The code will not compile because of line 3", "It compiles but may throw an exception at runtime."],
    correctAnswer: [3, 6]
  },
  {
    id: 133,
    content: "Which of the following are properties of classes that define immutable objects? ",
    answers: ["They don’t define any getter methods.", "All of the instance variables marked private and final.\n", "They don’t define any setter methods.\n", " They mark all instance variables static.", "They prevent methods from being overridden.\n", "All getter methods are marked synchronized."],
    correctAnswer: [2, 3, 5]
  },
  {
    id: 134,
    content: "Which of the following are true? (Choose 2)",
    answers: ["this() can be called from anywhere in a constructor.", "this() can be called from any instance method in the class.", "this.variableName can be called from any instance method in the class.\n", " this.variableName can be called from any static method in the class.\n", "You must include a default constructor in the code if the compiler does not include one.\n", "You can call the default constructor written by the compiler using this().", " You can access a private constructor with the main() method."],
    correctAnswer: [3, 7]
  },
  {
    id: 135,
    content: "Which of the following are true? (Choose all that apply)",
    answers: ["Encapsulation uses package private instance variables.\n", "Encapsulation uses private instance variables.", "Encapsulation allows setters", "Immutability uses package private instance variables.", "Immutability uses private instance variables.\n", "Immutability allows setters"],
    correctAnswer: [2, 3, 5]
  },
  {
    id: 136,
    content: "Which of the following are true? (Choose all that apply)",
    answers: ["Package private access is more lenient than protected access.", "A public class that has private fields and package private methods is not visible to\nclasses outside the package", "You can use access modifiers so only some of the classes in a package see a particular\npackage private class.", "You can use access modifiers to allow read access to all methods, but not any instance\nvariables.", "You can use access modifiers to restrict read access to all classes that begin with the\nword Test"],
    correctAnswer: 4
  },
  {
    id: 137,
    content: "Which are true statements? (Choose all that apply)",
    answers: ["An immutable object can be modified.", "An immutable object cannot be modified.", "An immutable object can be garbage collected.", "An immutable object cannot be garbage collected.", "String is immutable", "StringBuffer is immutable.\n", "StringBuilder is immutable."],
    correctAnswer: [2, 3, 5]
  },
  {
    id: 138,
    content: "What is the result of the following code?\nStringBuilder stringBuilder = new StringBuilder();\nstringBuilder.append(\"aaa\").insert(1, \"bb\").insert(4, \"ccc\");\nSystem.out.println(stringBuilder);",
    answers: ["abbaaccca", "abbaccca", "bbaaaccc", "bbaaccca", "An exception is thrown.", "The code does not compile."],
    correctAnswer: 2
  },
  {
    id: 139,
    content: "public static void main(String []args) {\n  int x = 6;\n  System.out.println(x > 2 ? x < 4 ? 11 : 9 : 7);\n  }\nwhat is the output?",
    answers: ["5", "4", "9", "8", "7"],
    correctAnswer: 3
  },
  {
    id: 140,
    content: "What statements about the following code are true?\nInteger i1 = Arrays.asList(1,2,3,4,5).stream().findAny().get();\nsynchronized(i1) { // y1\n   Integer i2 = Arrays.asList(6,7,8,9,10)\n         .parallelStream()\n         .sorted() // y2\n         .findAny().get(); // y3\n   System.out.println(i1+\" \"+i2);\n}\n",
    answers: ["It outputs 1 6.", " It outputs 1 10.", "The code will not compile because of line y1.", "The code will not compile because of line y2.", "The code will not compile because of line y3", "It compiles but throws an exception at runtime.", "The output cannot be determined ahead of time.\n", "It compiles but waits forever at runtime"],
    correctAnswer: 7
  },
  {
    id: 141,
    content: "public static void main(String[] args) {\n               String a = new String(\"String\");  \n              String b = \"String\";  \n              if(a == b)  \n              {  \n                  System.out.println(\"a == b\");  \n              }  \n              if(a.equals(b))  \n              {  \n                  System.out.println(\"a equals b\");  \n              }  \n        }\nWhat is the output?",
    answers: ["a equals b", "a == b", "a == b\na equals b", "The code will not compile"],
    correctAnswer: 1
  },
  {
    id: 142,
    content: "public static void main(String[] args) {\n                System.out.println(20 + 19 + \"Vnpt\");   \n                System.out.println(\"Vnpt\" + 20 + 19);  \n        }\nWhat is the ouput?",
    answers: ["39Vnpt\nVnpt2019", "2019Vnpt\nVnpt2019", "39Vnpt\nVnpt39", "39vnpt\nvnpt39"],
    correctAnswer: 1
  },
  {
    id: 143,
    content: "public class Employee {\n        int id;  \n        String name;\n          \n        void show(){\n                System.out.println(id+\" \"+name);\n        }\n        \n        public static void main(String args[]){  \n        Employee empl =new Employee();  //y1\n        empl.show();  //y2\n        }\n}\nWhat is the ouput?",
    answers: ["0 null", "null null", "The code will not compile because of line y1.", "The code will not compile because of line y2."],
    correctAnswer: 1
  },
  {
    id: 144,
    content: "public class Test {\n            Test(int a, int b)  \n            {  \n                System.out.println(\"a = \"+a+\" b = \"+b);  \n            }  \n            Test(int a, float b)  \n            {  \n                System.out.println(\"a = \"+a+\" b = \"+b);  \n            }  \n            public static void main (String args[])  \n            {  \n                byte a = 5;   \n                byte b = 10;  \n                Test test = new Test(a,b);  \n            }  \n}\nWhat is the ouput?",
    answers: ["a = 5 b = 10", "a = 5.0 b = 10.0", "a = 5.0 b = 10", "a = 5 b = 10.0"],
    correctAnswer: 1
  },
  {
    id: 145,
    content: "public class Test {\n         static{System.out.println(\"VNPT\");}  //y1\n          public static void main(String args[]){  \n           System.out.println(\"Hello world!\");  \n          }  \n}\nWhat is the ouput?",
    answers: ["VNPT\nHello world!", "\nHello world!", "the code will not compile because of line y1.", "VNPT"],
    correctAnswer: 1
  },
  {
    id: 146,
    content: "public class Test {\n        int id;\n        \n         public Test()  \n            {  \n                this = 10; //y1  \n                System.out.println(\"id = \" + id);  \n            }  \n            public static void main (String args[])  \n            {  \n                Test t = new Test();  \n            }   \n}\nWhat is the output?",
    answers: ["the code will not compile because of line y1.", "id = 10", "id = 0", "id = null"],
    correctAnswer: 1
  },
  {
    id: 147,
    content: "class A{  \nvoid msg(){System.out.println(\"VNPT 1\");}  \n}  \nclass B{  \nvoid msg(){System.out.println(\"VNPT 2\");}  \n}  \nclass C extends A,B{//y1\n   \nPublic Static void main(String args[]){  \n        C obj=new C();  \n        obj.msg();//y2\n}  \n}  \nWhat is the output?",
    answers: ["the code will not compile because of line y1.", "the code will not compile because of line y2.", "VNPT 1\nVNPT 2", "VNPT 1", "VNPT 2"],
    correctAnswer: 1
  },
  {
    id: 148,
    content: "What is the range of data type short in Java",
    answers: ["-128 to 127", "-32768 to 32767", "-2147483648 to 2147483647", "None of the mentioned"],
    correctAnswer: 2
  },
  {
    id: 149,
    content: "Which of these class can generate an array which can increase and decrease in size automatically",
    answers: ["ArrayList()", "DynamicList()", "LinkedList()", "DynamicList()"],
    correctAnswer: 1
  },
  {
    id: 150,
    content: "Which of these method is used to add an element to the start of a LinkedList object",
    answers: ["add()", "first()", "AddFirst()", "addFirst()"],
    correctAnswer: 4
  },
  {
    id: 151,
    content: "Which of these method is used to change an element in a LinkedList Object",
    answers: ["change()", "set()", "redo()", "add()"],
    correctAnswer: 3
  },
  {
    id: 152,
    content: "What is the default value of priority variable MIN_PRIORITY AND MAX_PRIORITY",
    answers: ["0 & 256", "0 & 1", "1 & 10", "1 & 256"],
    correctAnswer: 3
  },
  {
    id: 153,
    content: "What is the error in the following class definitions? \nAbstract class xy \n{\n   abstract sum (int x, int y) { } \n}",
    answers: ["Class header is not defined properly.", "Constructor is not defined.", "Method is not defined properly", "Method is defined properly", "No error."],
    correctAnswer: 3
  },
  {
    id: 154,
    content: "Consider the two methods (within the same class)\npublic static int foo(int a, String s)\n\n{\ns = “Yellow”;\na=a+2;\nreturn a;\n}\npublic static void bar()\n{\nint a=3;\nString s = “Blue”;\na = foo(a,s);\nSystem.out.println(“a=”+a+” s=”+s);\n}\npublic static void main(String args[])\n{\nbar();\n}\nWhat is printed on execution of these methods?\n",
    answers: ["a = 3 s = Blue ", "a = 5 s = Yellow ", "a = 3 s = Yellow", "a = 5 s = Blue ", "none of the above."],
    correctAnswer: 4
  },
  {
    id: 155,
    content: "What is the result of the following code?\npackage VNPT;\n \nclass A\n{\n        void m1() throws ArrayIndexOutOfBoundsException\n        {\n                System.out.println(\"In m1 A\");\n        }\n}\nclass B extends A\n{\n        void m1() throws IndexOutOfBoundsException\n        {\n                System.out.println(\"In m1 B\");\n        }\n}\npublic class Test {\n \n        public static void main(String[] args) {\n                A a=new B();\n                a.m1();\n        }\n}",
    answers: ["Runtime error", "In m1 B", "Compile time error", "In m1 A"],
    correctAnswer: 2
  },
  {
    id: 156,
    content: "There are two threads T1 and T2. T1 is accessing m1 method. Will T2 be able to access m2 method on the same instance at the same time?\nclass A\n{\n\tsynchronized void m1()\n\t{\n\t\tSystem.out.println(\"In m1 A\");\n\t}\n\tvoid m2()\n\t{\n\t\tSystem.out.println(\"In m2 A\");\n\t}\n}",
    answers: ["Yes", "No"],
    correctAnswer: 1
  },
  {
    id: 157,
    content: "Can you overload main method in java?",
    answers: ["Yes", "No"],
    correctAnswer: 1
  },
  {
    id: 158,
    content: "Among these Java method declarations, which is usually the preferred one?",
    answers: ["public HashMap getTable()", "public Map getTable()", "public Hashtable getTable()"],
    correctAnswer: 2
  },
  {
    id: 159,
    content: "Given that: Gadget has-a Sprocket and Gadget has-a Spring and Gadget is-a Widget and Widget has-a Sprocket Which two code fragments represent these relationships? (Choose two.)",
    answers: ["class Widget {\nSprocket s; }\nclass Gadget extends Widget {\nSpring s; }", "class Widget {\n}\nclass Gadget extends Widget {\nSpring s1; Sprocket s2; }", "class Widget {\nSprocket s1; Spring s2; }\nclass Gadget extends Widget { } ", "class Gadget {\nSpring s;\n}\nclass Widget extends Gadget {\nSprocket s; }", "class Gadget {\n}\nclass Widget extends Gadget {\nSprocket s1; Spring s2; }", "class Gadget { Spring s1; Sprocket s2; }\nclass Widget extends Gadget { }"],
    correctAnswer: [1, 3]
  },
  {
    id: 160,
    content: "class Pizza {\n    java.util.ArrayList toppings;\n\n    public final void addTopping(String topping) {\n          toppings.add(topping);\n    }\n\n    public void removeTopping(String topping) {\n          toppings.remove(topping);\n    }\n}\n\npublic class PepperoniPizza extends Pizza {\n    public void addTopping(String topping) {\n          System.out.println(\"Cannot add Toppings\");\n    }\n\n    public static void main(String[] args) {\n          Pizza pizza = new PepperoniPizza();\n          pizza.addTopping(\"Mushrooms\");\n          pizza.removeTopping(\"Peperoni\");\n    }\n}\n\n\nWhat is the result?",
    answers: ["Compilation fails", "Cannot add Toppings", "The code runs with no output", "A NullPointerException is thrown in Line 4"],
    correctAnswer: 1
  },
  {
    id: 161,
    content: "Which three statements are true? (Choose three.)",
    answers: ["A final method in class X can be abstract if and only if X is abstract", "A protected method in class X can be overridden by any subclass of X", "A private static method can be called only within other static methods in class X", "A non-static public final method in class X can be overridden in any subclass of X", "A public static method in class X can be called by a subclass of X without explicitly referencing the \nclass X", "A method with the same signature as a private final method in class X can be implemented in a\nsubclass of X", "A protected method in class X can be overridden by a subclass of X only if the subclass is in the same\npackage as X"],
    correctAnswer: [2, 5, 6]
  },
  {
    id: 162,
    content: "What is the appropriate definition of the hashCode method in class Person?\npublic class Person {\n    private String name, comment;\n    private int age;\n\n    public Person(String n, int a, String c) {\n          name = n;\n          age = a;\n          comment = c;\n    }\n\n    public boolean equals(Object o) {\n          if (!(o instanceof Person))\n                 return false;\n          Person p = (Person) o;\n          return age == p.age && name.equals(p.name);\n    }\n}",
    answers: ["return super.hashCode();", "return name.hashCode() + age * 7;", "return name.hashCode() + comment.hashCode() / 2;", "return name.hashCode() + comment.hashCode() / 2 - age * 3;"],
    correctAnswer: 2
  },
  {
    id: 163,
    content: "What is the result?\nimport java.util.*;\npublic class Explorer3 { \npublic static void main(String[] args) { \nTreeSet<Integer> s = new TreeSet<Integer>(); \nTreeSet<Integer> subs = new TreeSet<Integer>(); \nfor (int i = 606; i < 613; i++) \nif (i % 2 == 0) 9. s.add(i); \nsubs = (TreeSet) s.subSet(608, true, 611, true); \nsubs.add(629); \nSystem.out.println(s + \" \" + subs); \n}\n}",
    answers: ["Compilation fails", "An exception is thrown at runtime", " [608, 610, 612, 629] [608, 610] ", "[608, 610, 612, 629] [608, 610, 629]", "[606, 608, 610, 612, 629] [608, 610] ", "[606, 608, 610, 612, 629] [608, 610, 629]"],
    correctAnswer: 2
  },
  {
    id: 164,
    content: "What is the result?\npublic class Breaker2 { \nstatic String o = \"\";\npublic static void main(String[] args) { \n    z: for (int x = 2; x < 7; x++) { \n    if (x == 3) \n       continue; \n    if (x == 5) \n       break z; 10. o = o + x; \n} \nSystem.out.println(o); \n} \n} ",
    answers: ["2", "24", "234", "Compilation fails"],
    correctAnswer: 2
  },
  {
    id: 165,
    content: "A programmer must create a generic class MinMax and the type parameter\nof MinMax must implement Comparable. Which implementation of MinMax will compile?",
    answers: ["class MinMax<E extends Comparable<E>> {\nE min = null;\nE max = null;\npublic MinMax() {}\npublic void put(E value) { /* store min or max */ }", "class MinMax<E implements Comparable<E>> {\nE min = null;\nE max = null;\npublic MinMax() {}\npublic void put(E value) { /* store min or max */ }", "class MinMax<E extends Comparable<E>> {\n<E> E min = null;\n<E> E max = null;\npublic MinMax() {}\npublic <E> void put(E value) { /* store min or max */ }", "class MinMax<E implements Comparable<E>> {\n<E> E min = null;\n<E> E max = null;\npublic MinMax() {}\npublic <E> void put(E value) { /* store min or max */ }"],
    correctAnswer: 1
  },
  {
    id: 166,
    content: "Given:\nArrayList a = new ArrayList();\ncontaining the values {“1”, “2”, “3”, “4”, “5”, “6”, “7”, “8”}\nWhich code will return 2?",
    answers: ["Collections. sort(a, a.reverse());\nint result = Collections.binarySearch(a, “6”);", "Comparator c = Collections.reverseOrder();\nCollections.sort(a, c);\nint result = Collections.binarySearch(a, “6”);", "Comparator c = Collections.reverseOrder();\nCollections.sort(a, c);\nint result = Collections.binarySearch(a, “6”,c);", "Comparator c = Collections.reverseOrder(a);\nCollections.sort(a, c);\nint result = Collections.binarySearch(a, “6”,c);"],
    correctAnswer: 3
  },
  {
    id: 167,
    content: "public class Messager implements Runnable {\npublic static void main(String[] args) {\nnew Thread(new Messager(\"Wallace\")).start();\nnew Thread(new Messager(\"Gromit\")).start();\n}\nprivate String name;\npublic Messager(String name) { this.name = name; }\npublic void run() {\nmessage(1); message(2);\n}\nprivate synchronized void message(int n) {\nSystem.out.print(name + \"-\" + n + \" \");\n}\n}\nWhich of the following is a possible result?",
    answers: ["Gromit-1 Gromit-2", "The code does not compile", "Wallace-1 Gromit-1 Gromit-2 Wallace-2", "An error occurs at run time"],
    correctAnswer: 3
  },
  {
    id: 168,
    content: "A programmer has an algorithm that requires a java.util.List that provides\nan efficient implementation of add(0, object), but does NOT need to support quick random access.\nWhat supports these requirements?",
    answers: ["java.util.Queue", " java.util.ArrayList", "java.util.LinearList", "java.util.LinkedList"],
    correctAnswer: 4
  },
  {
    id: 169,
    content: "public class Counter {\n1. public static void main(String[] args) {\n2. int numArgs = /* insert code here */;\n3. }\n4. }\nand the command line:\njava Counter one fred 42\nWhich code, inserted at line 2, captures the number of arguments\npassed into the program?",
    answers: ["args.count", "args.length", "args.count()", "args.getLength()"],
    correctAnswer: 2
  },
  {
    id: 170,
    content: "What is the result?\npublic class OrtegorumFunction {\npublic int computeDiscontinuous(int x) {\nint r = 1;\nr += x;\nif ((x > 4) && (x < 10)) {\nr += 2 * x;\n} else (x <= 4) {\nr += 3 * x;\n} else {\nr += 4 * x;\n}\nr += 5 * x;\nreturn r;\n}\npublic static void main(String [] args) {\nOrtegorumFunction o = new OrtegorumFunction();\nSystem.out.println(\"OF(11) is: \" + o.computeDiscontinuous(11));\n} }",
    answers: ["OF(11) is: 45", "OF(11) is: 56", "OF(11) is: 111", "Compilation fails"],
    correctAnswer: 4
  },
  {
    id: 171,
    content: "How many times will line 3 be executed?\n1. int x = 10;\n2. do { \n3. x--;\n4. } \n5. while (x < 10);",
    answers: ["ten times", "zero times", "one to nine times", "more than ten times"],
    correctAnswer: 4
  },
  {
    id: 172,
    content: "What is the result?\npublic class TestOne {\npublic static void main (String[] args) throws Exception {\nThread.sleep(3000);\nSystem.out.println(\"sleep\");\n}\n}",
    answers: ["Compilation fails", "An exception is thrown at runtime", "The code executes normally and prints \"sleep\"", "The code executes normally, but nothing is printed"],
    correctAnswer: 3
  },
  {
    id: 173,
    content: "Which of these method is used to find out that a thread is still running or not",
    answers: ["run()", "Alive()", "isAlive()", "checkRun()"],
    correctAnswer: 3
  },
  {
    id: 174,
    content: "Which of these method is used to explicitly set the priority of a thread",
    answers: ["set()", "make()", "setPriority()", "makePriority()"],
    correctAnswer: 3
  },
  {
    id: 175,
    content: "Which of these method is used to implement Runnable interface",
    answers: ["stop()", "run()", "runThread()", "stopThread()"],
    correctAnswer: 2
  },
  {
    id: 176,
    content: "When does Exceptions in Java arises in code sequence",
    answers: ["Run Time", "Compilation Time", "Can Occur Any Time", "None of the mentioned"],
    correctAnswer: 1
  },
  {
    id: 177,
    content: "Which of the following is/are legal method declarations?\n 1.protected abstract void m1();\n 2.static final void m1(){}\n 3.synchronized public final void m1() {}\n 4.private native void m1();",
    answers: ["1 and 3", "2 and 4", "1 only", "All of them are legal declarations"],
    correctAnswer: 4
  },
  {
    id: 178,
    content: "Which class does not override the equals() and hashCode() methods, inheriting them directly from class Object?",
    answers: ["java.lang.String", "java.lang.Double", "java.lang.StringBuffer", "java.lang.Character"],
    correctAnswer: 3
  },
  {
    id: 179,
    content: "Which is a valid keyword in java?",
    answers: ["interface", "string", "Float", "unsigned"],
    correctAnswer: 1
  },
  {
    id: 180,
    content: "What is the result?\ninterface DoStuff2 {\n    float getRange(int low, int high);\n}\n\ninterface DoMore {\n    float getAvg(int a, int b, int c);\n}\n\nabstract class DoAbstract implements DoStuff2, DoMore {\n}\n\nclass DoStuff implements DoStuff2 {\n    public float getRange(int x, int y) {\n          return 3.14f;\n    }\n}\n\ninterface DoAll extends DoMore {\n    float getAvg(int a, int b, int c, int d);\n}\n",
    answers: ["The file will compile without error", "Compilation fails. Only line 7 contains an error", "Compilation fails. Only line 12 contains an error", "Compilation fails. Lines 7, 12, and 13 contain errors"],
    correctAnswer: 1
  },
  {
    id: 181,
    content: "Given: \n1. public class TestFive { \n2. private int x; \n3. public void foo() { \n4. int current = x; \n5. x = current + 1; \n6. } \n7. public void go() { \n8. for(int i = 0; i < 5; i++) { \n9. new Thread() { \n10. public void run() { 11. foo(); 12. System.out.print(x + \", \"); \n13. } }.start(); \n14. } } \n15.} \nWhich two changes, taken together, would guarantee the output: 1, 2, 3, 4, 5, ? (Choose two.)",
    answers: ["move the line 12 print statement into the foo() method", "change line 7 to public synchronized void go() {", "change the variable declaration on line 2 to private volatile int x;", "wrap the code inside the foo() method with a synchronized( this ) block", "wrap the for loop code inside the go() method with a synchronized block synchronized(this) { // for loop\ncode here }"],
    correctAnswer: [1, 4]
  },
  {
    id: 182,
    content: "Runnable r = new Runnable() {\npublic void run() {\nSystem.out.print(\"Cat\"); \n} \n}; \nThread t = new Thread(r) {\npublic void run() {\nSystem.out.print(\"Dog\"); \n} \n}; \nt.start(); \n\nWhat is the result?",
    answers: ["Cat ", "Dog ", "Compilation fails", "The code runs with no output"],
    correctAnswer: 2
  },
  {
    id: 183,
    content: "What is the result?\n\n1. public class Threads5 { \n2. public static void main (String[] args) { \n3. new Thread(new Runnable() { \n4. public void run() { \n5. System.out.print(\"bar\"); \n6. }}).start(); \n7. } \n8. }",
    answers: ["Compilation fails", "An exception is thrown at runtime", "The code executes normally and prints \"bar\"", "The code executes normally, but nothing prints"],
    correctAnswer: 3
  },
  {
    id: 184,
    content: "Given that c is a reference to a valid java.io.Console object, which two code fragments read a line of text from the console? (Choose two.)",
    answers: ["String s = c.readLine(); ", "char[] c = c.readLine(); ", "String s = c.readConsole();", "char[] c = c.readConsole(); ", "String s = c.readLine(\"%s\", \"name \"); ", "char[] c = c.readLine(\"%s\", \"name \");"],
    correctAnswer: [1, 5]
  },
  {
    id: 185,
    content: "What creates the appropriate DateFormat object and adds a day to the Date object?\n1. Date d = new Date(0); \n2. String ds = \"December 15, 2004\"; \n3. // insert code here \n4. try { \n5. d = df.parse(ds); \n6. } \n7. catch(ParseException e) { \n8. System.out.println(\"Unable to parse \" + ds); \n9. } \n10. // insert code here too",
    answers: ["3. DateFormat df = DateFormat.getDateFormat();\n10. d.setTime( (60 * 60 * 24) + d.getTime()); ", "3. DateFormat df = DateFormat.getDateInstance();\n10. d.setTime( (1000 * 60 * 60 * 24) + d.getTime()); ", "3. DateFormat df = DateFormat.getDateFormat();\n10. d.setLocalTime( (1000*60*60*24) + d.getLocalTime()); ", "3. DateFormat df = DateFormat.getDateInstance();\n10. d.setLocalTime( (60 * 60 * 24) + d.getLocalTime());"],
    correctAnswer: 2
  },
  {
    id: 186,
    content: "Which two code fragments correctly create and initialize a static array of int elements? (Choose two.)",
    answers: ["static final int[] a = { 100,200 }; ", "static final int[] a; \nstatic { a=new int[2]; a[0]=100; a[1]=200; }", "static final int[] a = new int[2]{ 100,200 }; ", "static final int[] a;\nstatic void init() { a = new int[3]; a[0]=100; a[1]=200; }"],
    correctAnswer: [1, 2]
  },
  {
    id: 187,
    content: "public class NamedCounter {\n    private final String name;\n    private int count;\n\n    public NamedCounter(String name) {\n          this.name = name;\n    }\n\n    public String getName() {\n          return name;\n    }\n\n    public void increment() {\n          count++;\n    }\n\n    public int getCount() {\n          return count;\n    }\n\n    public void reset() {\n          count = 0;\n    }\n}\nWhich three changes should be made to adapt this class to be used safely by multiple threads? (Choose three.)",
    answers: ["declare reset() using the synchronized keyword ", "declare getName() using the synchronized keyword", "declare getCount() using the synchronized keyword", "declare the constructor using the synchronized keyword", "declare increment() using the synchronized keyword"],
    correctAnswer: [1, 3, 5]
  },
  {
    id: 188,
    content: "Given:\n1. interface DeclareStuff { \n2. public static final int EASY = 3;\n4. void doStuff(int t); \n5. }\n7. public class TestDeclare implements DeclareStuff { \n8. public static void main(String[] args) { \n9. int x = 5; \n10. new TestDeclare().doStuff(++x); \n11. } \n12. \n13. void doStuff(int s) { \n14. s += EASY + ++s; \n15. System.out.println(\"s \" + s); \n16. }\n17.}\nWhat is the result?",
    answers: ["s 14", "s 16", "s 10", "Compilation fails"],
    correctAnswer: 4
  },
  {
    id: 189,
    content: "Given two files:\npackage xcom;\npublic class Stuff {\npublic static final int MY_CONSTANT = 5;\npublic static int doStuff(int x) { return (x++)*x; }\n}\nimport xcom.Stuff.*;\nimport java.lang.System.out;\nclass User {\npublic static void main(String[] args) {\nnew User().go();\n}\nvoid go() { out.println(doStuff(MY_CONSTANT)); }\n}\nWhat is the result?",
    answers: ["25", "30", "36", "Compilation fails"],
    correctAnswer: 4
  },
  {
    id: 190,
    content: "Given:\n1. import java.io.*;\n2. public class Edgy {\n3. public static void main(String[] args) {\n4. try {\n5. wow();\n6. // throw new IOException();\n7. } finally {\n8. // throw new Error();\n9. // throw new IOException();\n10. }\n11. }\n12. static void wow() {\n13. // throw new IllegalArgumentException();\n14. // throw new IOException();\n15. } }\nAnd given that IOException is a direct subclass of java.lang.Exception, and that\nIllegalArgumentException is a runtime exception, which of the following, if uncommented\nindependently, will compile? ",
    answers: ["Line 6", "Line 8", "Line 14", "The code will NOT compile as is"],
    correctAnswer: 2
  },
  {
    id: 191,
    content: "Given:\n1. public class Juggler extends Thread {\n2. public static void main(String[] args) {\n3. try {\n4. Thread t = new Thread(new Juggler());\n5. Thread t2 = new Thread(new Juggler());\n6. } catch (Exception e) { System.out.print(\"e \"); }\n7. }\n8. public void run() {\n9. for(int i = 0; i < 2; i++) {\n10. try { Thread.sleep(500); }\n11. catch (Exception e) { System.out.print(\"e2 \"); }\n12. System.out.print(Thread.currentThread().getName() + \" \");\n13. } } }\nWhich is true?",
    answers: ["The output could be Thread-1 Thread-1 Thread-3 Thread-2", "No output is produced", "The output could be Thread-1 Thread-1 e", "Compilation fails."],
    correctAnswer: 2
  },
  {
    id: 192,
    content: "You have a java file name Test.java .\n\nTest.java needs access to a class contained in app.jar in “exam”\ndirectory.\n\nWhich of the follwing command set classpath to compile clean?",
    answers: ["javac -classpath exam/app.jar Test.java", "javac -classpath app.jar Test.java", "javac -classpath exam Test.java", "None of the above"],
    correctAnswer: 1
  },
  {
    id: 193,
    content: "What is the output for the below code ?\n\n \n\nclass A implements Runnable{\npublic void run(){\ntry{\nfor(int i=0;i<4;i++){\nThread.sleep(100);\nSystem.out.println(Thread.currentThread().getName());\n}\n}catch(InterruptedException e){\n}\n}\n}\npublic class Test {\npublic static void main(String argv[]) throws Exception{\nA a = new A();\nThread t = new Thread(a,”A”);\nThread t1 = new Thread(a,”B”);\nt.start();\nt.join();\nt1.start();\n}\n}",
    answers: ["A.A A A A B B B B", "B.A B A B A B A B", "Output order is not guaranteed", "Compilation succeed but Runtime Exception"],
    correctAnswer: 1
  },
  {
    id: 194,
    content: "What is the output for the below code ?\n\n1. public class Test {\n\n2. static int i =5;\n\n3. public static void main(String… args) {\n\n4. System.out.println(i++);\n\n5. System.out.println(i);\n\n6. System.out.println(++i);\n\n7. System.out.println(++i+i++);\n\n8.\n\n9. }\n\n10. }",
    answers: ["5 6 7 16", "6 6 6 16", "6 6 7 16", "5 6 6 16"],
    correctAnswer: 1
  },
  {
    id: 195,
    content: "Given: \nclass Converter {\npublic static void main(String[] args) {\nInteger i = args[0]; // line 13 \nint j = 12; \nSystem.out.println(\"It is \" + (j == i) + \" that j==i.\"); \n} \n}\nWhat is the result when the programmer attempts to compile the code and run it with the command java Converter 12?",
    answers: ["It is true that j==i. ", "It is false that j==i.", "An exception is thrown at runtime", "Compilation fails because of an error in line 13"],
    correctAnswer: 4
  },
  {
    id: 196,
    content: "HashMap can be synchronized by _______ ?\n\nOptions are",
    answers: ["Map m = Collections.synchronizeMap(hashMap);", "Map m = hashMap.synchronizeMap();", "Map m = Collection.synchronizeMap(hashMap);", "None of the above"],
    correctAnswer: 1
  },
  {
    id: 197,
    content: "Which keyword is used by classes to implement an interface?",
    answers: [" import", "implements", "instance of", "None of the above"],
    correctAnswer: 2
  },
  {
    id: 198,
    content: "Which is nothing but a blueprint or a template for creating different objects which defines its properties and behaviours?",
    answers: ["An Array", "A class", "Interface", "None of the above"],
    correctAnswer: 2
  },
  {
    id: 199,
    content: "Which inheritance is not supported in java in case of class?",
    answers: ["Single inheritance", "Hierarchical inheritance", "Multilevel inheritance", "None of the above"],
    correctAnswer: 3
  },
  {
    id: 200,
    content: " ",
    answers: ["Abstract Class", "Abstract Method", "Both A & B", "None of the above"],
    correctAnswer: 1
  },
  {
    id: 201,
    content: "Which method cannot be overridden?",
    answers: ["Final Method", "Final class", "Final Variable", " Both A & C"],
    correctAnswer: 1
  },
  {
    id: 202,
    content: "In which the access modifier means that the field can be accessed by all classes in your application?",
    answers: ["Private", "Public", "Package", "Protected"],
    correctAnswer: 2
  },
  {
    id: 203,
    content: "Which field cannot be changed after the object has been constructed?",
    answers: ["Static field", "Non-static field", "Final field", "Naming field"],
    correctAnswer: 3
  },
  {
    id: 204,
    content: "In Java, objects will expose variables and functions in these variables are also known as?",
    answers: ["Fields", "Methods", "Fields & Methods", "None of the above"],
    correctAnswer: 1
  },
  {
    id: 205,
    content: "Which allows you define one interface and have multiple implementations?",
    answers: ["Encapsulation", "Inheritance", "Polymorphism", "None of the above"],
    correctAnswer: 3
  },
  {
    id: 206,
    content: "Which is a valid functional interface?",
    answers: ["public interface Useful<E> {\n E getStuff();\n void putStuff(E e);\n }", "public interface Useful {\n void doStuff();\n default void doOtherStuff() {}\n }", " @FunctionalInterface\n public interface Useful{ default void doStuff(){} }", "public interface Useful {\n abstract void doStuff();\n abstract void doCalc();\n }"],
    correctAnswer: 2
  },
  {
    id: 207,
    content: "The following program is an example for?\nclass Student{ \n         int id; \n         String name; \n\n         void display(){System.out.println(id+\" \"+name);}\n\n         public static void main(String args[]){  \n                 Student s1=new Student(); \n                 Student s2=new Student(); \n                 s1.display(); \n                 s2.display(); \n         } \n}\n",
    answers: ["Parameterized constructor", "Default Constructor", "Overloading Constructor", "None of the above"],
    correctAnswer: 2
  },
  {
    id: 208,
    content: "Which is a technique in Java in which a class can have any number of constructors that differ in parameter lists?",
    answers: ["Constructor overloading", "Method overloading", "Operator overloading", "None of the above"],
    correctAnswer: 1
  },
  {
    id: 209,
    content: "The following two rules are defined by?\n1. The parameters may differ in their type or number, or in both.\n2. They may have the same or different return types.\n",
    answers: [" Method overloading", "Method overriding", "Constructor overloading", "None of the above"],
    correctAnswer: 1
  },
  {
    id: 210,
    content: "Given:\nimport java.util.ArrayList;\nimport java.util.List;\npublic class JavaSETest {\n public static void main(String[] args) {\n List<Integer> elements = new ArrayList<>();\n elements.add(10);\n int firstElmnt = elements.get(1);\n System.out.println(firstElmnt);\n }\n}\n",
    answers: ["null", "10", "0", "An IndexOutOfBoundsException is thrown at runtime."],
    correctAnswer: 4
  },
  {
    id: 211,
    content: "Given the code fragment:\n StringBuilder s1 = new StringBuilder(\"Java\");\n String s2 = \"Love\";\n s1.append(s2);\n s1.substring(4);\n int foundAt = s1.indexOf(s2);\nSystem.out.println(foundAt);\nWhat is the result?\n",
    answers: ["-1", "3", "4", "A StringIndexOutOfBoundsException is thrown at runtime."],
    correctAnswer: 3
  },
  {
    id: 212,
    content: " Given the code fragment:\npublic class TestFun {\n public static void main(String[] args) {\n List<Integer> nums = Arrays.asList(1,2,3,4,5);\n // Line n1\n }\n}\nWhich code fragment can be inserted at Line n1 to enable the code to print 2 4?",
    answers: ["nums.peek(n -> n%2 == 0)\n .forEach( s -> System.out.print(\" \"+s));\n", "nums.filter(n -> n%2 == 0)\n .forEach( s -> System.out.print(\" \"+s));\n", "nums.map(n -> n%2 == 0)\n .forEach( s -> System.out.print(\" \"+s));", " nums.stream()\n .filter(n -> n%2 == 0)\n .forEach( s -> System.out.print(\" \"+s));"],
    correctAnswer: 4
  },
  {
    id: 213,
    content: "Given the code fragment:\npublic class App{\n public static void main(String[] args) {\n String[] fruits = {\"banana\", \"apple\", \"pears\", \"grapes\"};\n Arrays.sort(fruits, (a, b) -> a.compareTo(b));\n for (String s : fruits) {\n System.out.print(\" \"+s);\n }\n }\n}\nWhat is the result?",
    answers: ["apple banana grapes pears\n", "pears grapes banana apple\n", " banana apple pears grapes\n", "Compilation fails.\n"],
    correctAnswer: 1
  },
  {
    id: 214,
    content: "Given:\nThe test1.txt file is available and the test2.txt file is not available.\nAnd, given the code fragment:\nPath sPath = Paths.get(\"test1.txt\");\nPath dPath = Paths.get(\"test2.txt\");\ntry {\n Files.move(sPath, dPath, StandardCopyOption.ATOMIC_MOVE);\n} catch (IOException ex) {\n System.err.println(\"Exception!\");\n}\nWhich statement is true?\n",
    answers: ["The test1.txt file is renamed to the test2.txt file and the test1.txt file is removed in a single\noperation", "The test1.txt file is renamed to the test2.txt file and the test1.txt file is removed in two\ndistinct operation.", "The test1.txt file is copied and renamed to the test2.txt file in a single operation", "The program prints: Exception!\n"],
    correctAnswer: 1
  },
  {
    id: 215,
    content: "Given:\npublic abstract class Customer {\n private String name;\n public Customer (String name) {\n this.name = name;\n }\n public String getName() { return name; }\n public abstract void buy();\n}\nWhich two statements are true about Customer?",
    answers: ["The Customer class cannot be extended", "The Customer class cannot be instantiated.", "Subclasses of Customer cannot override getName() method.\n", "Concrete subclasses of Customer must use a default constructor."],
    correctAnswer: 2
  },
  {
    id: 216,
    content: "Given that /report/jun.txt and report/data/jundata.txt files are accessible\nand given the code fragment:\npublic static void main(String[] args) {\n try (Stream<Path> st1 = Files.find(Paths.get(\"/report\"), 2, (p, a) ->\np.toString().endsWith(\"txt\"));\n Stream<Path> st2 = Files.walk(Paths.get(\"/report\"), 2);) {\n st1.forEach(s -> System.out.println(\"Found: \" + s));\n st2.filter(s -> s.toString()\n .endsWith(\"txt\"))\n .forEach(s -> System.out.println(\"Walked: \" + s));\n } catch (IOException ioe) {\n System.out.println(\"Exception\");\n }\n}\nWhat is the result?\n",
    answers: ["Found: \\report\\data\\jundata.txt\n Found: \\report\\jun.txt\n Walked: \\report\\data\\jundata.txt\n Walked: \\report\\jun.txt\n", " Found: \\report\\data\\jundata.txt\n Found: \\report\\jun.txt\n Walked: \\report\\data\\jundata.txt\n Walked: \\report\n Walked: \\report\\jun.txt\n Walked: \\report\\data\\\n", " Found: \\report\\jun.txt\n Walked: \\report\\data\\jundata.txt\n Walked: \\report\\jun.txt\n", "Found: \\report\\jun.txt\n Walked: \\report\n Walked: \\report\\jun.txt\n Walked: \\report\\data\\\n Walked: \\report\\data\\jundata.txt\n"],
    correctAnswer: 1
  },
  {
    id: 217,
    content: " Given the code fragment:\npublic static void main(String[] args) {\n Stream<Integer> nums = Stream.of(1, 2, 3, 4, 5);\n nums.filter(n -> n % 2 == 1);\n nums.forEach(p -> System.out.print(p));\n}\nWhat is the result?\n",
    answers: ["135", "12345", "Compilation fails.", "An exception is thrown at runtime"],
    correctAnswer: 4
  },
  {
    id: 218,
    content: "Assuming that the TestResult.txt file exists and given the code fragment:\npublic class TestReadFile {\n public void readFile(String fName) throws IOException {\n // Line n1\n Stream<String> content = Files.lines(p);\n content.forEach(s1 -> System.out.println(s1));\n }\n public static void main(String[] args) throws IOException {\n TestReadFile trf = new TestReadFile();\n trf.readFile(\"TestResult.txt \");\n }\n}\nWhich code fragment at Line n1 compiles?",
    answers: ["Path p = new Path(fName);\n", "Path p = Paths.get(fName);", "Path p = Paths.toPath(fName);\n", "Path p = Paths.get(new File(fName));"],
    correctAnswer: 2
  },
  {
    id: 219,
    content: ". Given the code fragment:\nclass MyResource1 implements AutoCloseable {\n public void close() throws IOException {\n System.out.print(\"1 \");\n }\n}\nclass MyResource2 implements Closeable {\n public void close() throws IOException {\n throw new IOException();\n }\n}\npublic class TestRes {\n public static void main(String[] args) {\n try (MyResource1 r1 = new MyResource1();\n MyResource2 r2 = new MyResource2();) {\n System.out.print(\"T \");\n } catch (IOException ioe) {\n System.out.print(\"IOE \");\n } finally {\n System.out.print(\"F \");\n }\n }\n}\nWhat is the result?",
    answers: [" T 1 IOE F\n", " T IOE F", " T IOE 1 F\n", "Compilation fails"],
    correctAnswer: 1
  },
  {
    id: 220,
    content: "Given:\npublic class Clover extends Harrier {\nString bark() { return \"feed me \"; }\n public static void main(String[] args) {\n Dog[] dogs = new Dog[3];\n dogs[0] = new Harrier();\n dogs[1] = (Dog)new Clover();\n dogs[2] = (Dog)new Harrier();\n for(Dog d: dogs) System.out.print(d.bark());\n } }\nclass Dog { String bark() { return \"bark \"; } }\n class Harrier extends Dog { String bark() { return \"woof \"; } }\nWhat is the result? (Choose all that apply.)",
    answers: ["bark bark bark", "woof bark bark", "woof feed me woof", "Compilation fails due to an error"],
    correctAnswer: 3
  },
  {
    id: 221,
    content: "In this type one super-class is having more than one sub-class?",
    answers: ["Hierarchical inheritance", "Single inheritance", "Multiple inheritances", "Multilevel inheritance"],
    correctAnswer: 1
  },
  {
    id: 222,
    content: "Given:\n2. public class Maize {\n3. public static void main(String[] args) {\n4. String s = \"12\";\n5. s.concat(\"ab\");\n6. s = go(s);\n7. System.out.println(s);\n8. }\n9. static String go(String s) {\n10. s.concat(\"56\");\n11. return s;\n12. } }\nWhat is the result?",
    answers: ["ab56", "12", "ab56", "Compilation fails."],
    correctAnswer: 2
  },
  {
    id: 223,
    content: "Given:\n2. import rt.utils.Remote;\n3. public class Controller{\n4. public static void main(String[] args){\n5. Remote remote = new Remote();\n6. } }\nAnd rt.utils.Remote class is properly bundled into a JAR file called rtutils.jar.\nAnd given the following steps:\nP. Place rtutils.jar in the $ROOT directory.\nQ. Extract rtutils.jar and put rt directory with its subdirectories in the $ROOT directory.\nR. Extract rtutils.jar and place Remote.class in the $ROOT directory.\nS. Place rtutils.jar in the $JAVA_HOME/jre/lib/ext directory.\nX. Compile using: javac -cp rtutils.jar Controller.java\nY. Compile using: javac Controller.java\nZ. Compile using: javac -cp . Controller.java\nIf Controller.java resides in the $ROOT directory, which set(s) of steps will compile the\nController class?",
    answers: ["R -> Z", "P -> X", "P -> Z", "S -> Z"],
    correctAnswer: 2
  },
  {
    id: 224,
    content: "Given:\n1. interface Gadget {\n2. int patent = 12345;\n3. Gadget doStuff();\n4. }\n5. public class TimeMachine implements Gadget {\n6. int patent = 34567;\n7. public static void main(String[] args) {\n8. new TimeMachine().doStuff();\n9. }\n10. TimeMachine doStuff() {\n11. System.out.println( ++patent);\n12. return new TimeMachine();\n13. } }\nIf javac is invoked twice:\njavac -source 1.4 TimeMachine.java\njavac TimeMachine.java\nAnd, if \"java TimeMachine\" is invoked whenever TimeMachine compiles, what is the result?",
    answers: ["First, 34568, then compilation fails.", "Compilation fails on both javac invocations.", "First, compilation fails, then 34568"],
    correctAnswer: 2
  },
  {
    id: 225,
    content: "6. Given:\n2. class Chilis {\n3. Chilis(String c, int h) { color = c; hotness = h; }\n4. String color;\n5. int hotness;\n6. public boolean equals(Object o) {\n7. Chilis c = (Chilis)o;\n8. if(this.color == c.color) return true;\n9. return false;\n10. }\n11. public int hashCode() { return (color.length() + hotness); }\n12. }\nIf instances of class Chilis are to be used as keys in a Map, which is true?",
    answers: ["The code will not compile", "The equals() method is reflexive, symmetric, and transitive.", "The Chilis class used to create keys to reliably add and retrieve entries in a Map."],
    correctAnswer: 2
  },
  {
    id: 226,
    content: "Given:\n3. public class BigData {\n4. static BigData bd;\n5. public static void main(String[] args) {\n6. new BigData().doStuff();\n7. // do lots of memory intensive stuff\n... // JVM finds an eligible BigData object for GC\n... // JVM invokes finalize()\n... // do more stuff\n48. }\n49. void doStuff() { }\n50. // insert code here\n51. bd = this;\n52. }\n53. }\n54. class MyException extends Exception { }\nand the following four fragments:\nI. protected void finalize() throws Throwable {\nII. protected void finalize() {\nIII. protected void finalize() throws MyException {\nIV. void finalize() {\nIf the fragments are inserted, independently, at line 50, which is true?",
    answers: ["Because of the way finalize() has been overridden, the GC will never collect eligible\nobjects of type BigData.", "Fragment I compiles.", "Fragment IV compiles"],
    correctAnswer: 2
  },
  {
    id: 227,
    content: "Which is true?",
    answers: ["All Throwables must be handled or declared", "All classes of Exception extend Throwable.", "All Exceptions must be handled or declared"],
    correctAnswer: 2
  },
  {
    id: 228,
    content: "Which statement(s) is true? ",
    answers: ["Coupling is the OO principle most closely associated with hiding a class’s implementation\ndetails.", "Coupling is the OO principle most closely associated with making sure classes know about\nother classes only through their APIs.", "Coupling is the OO principle most closely associated with making sure a class is designed\nwith a single, well-focused purpose.", "Coupling is the OO principle most closely associated with allowing a single object to be\nseen as having many types."],
    correctAnswer: 4
  },
  {
    id: 229,
    content: "Given the current directory is bigApp, and the directory structure:\nbigApp\n|-- classes\n|-- Cloned.class\n|-- com\n|-- Cloned.class\n|-- wickedlysmart\n|-- Cloned.class\nAnd the three files:\npublic class Cloned {\npublic static void main(String[] args) { System.out.println(\"classes\"); }\n}\npublic class Cloned {\npublic static void main(String[] args) { System.out.println(\"com\"); }\n}\npublic class Cloned {\npublic static void main(String[] args) { System.out.println(\"ws\"); }\n}\nHave been compiled into the classes, com, and wickedlysmart directories, respectively.\nWhich will produce the output \"ws\"?",
    answers: ["java -cp wickedlysmart:. Cloned", "java -cp classes/com/wickedlysmart Cloned", "java -cp classes:classes/com/wickedlysmart Cloned", "java -cp .:classes/com:classes/com/wickedlysmart Cloned"],
    correctAnswer: 2
  },
  {
    id: 230,
    content: "Given:\n 2. package pack.clients;\n 3. import pack.banking.Bank;\n 4. public class Client{\n 5. public static void main(String[] args){\n 6. Bank bank = new Bank();\n 7. System.out.println(bank.getMoney(2000L));\n 8. } }\n And given that Client.java resides in the $ROOT directory and is not yet compiled. There\n is another class named pack.banking.Bank, which has a method called getMoney(long)\n that returns a value. Bank class is compiled and deployed into a JAR file called pack.jar, as\n shown in the following directory structure\n $ROOT\n |-- Client.java\n |-- [pack.jar]\n |-- pack\n |-- banking\n |-- Bank.class\n Which is correct about compiling or running the Client class from the $ROOT directory?",
    answers: ["To compile, use javac -cp pack.jar -d . Client.java", "To compile, use javac -cp * -d . Client.java", "To run, use java -cp pack.jar pack.clients.Client", "To run, use java -cp . -d pack.jar pack.clients.Client"],
    correctAnswer: 1
  },
  {
    id: 231,
    content: "Which is true?",
    answers: ["If a class’s member’s values can be retrieved, but not changed, without using the class’s API,\n the class is not cohesive.", "If a class’s member’s values can be retrieved, but not changed, without using the class’s API,\n tight coupling could occur.", "If a class’s member’s values can be updated only through the use of its API, or by an inner\n class, the class is NOT well encapsulated.", "If a class’s member’s values can be retrieved, but changed, using the class’s API,\n the class is not well encapsulated"],
    correctAnswer: 2
  },
  {
    id: 232,
    content: "\"Given: \n1. public class Checkout2 implements Runnable {\n2. void doStuff() { }\n3. synchronized void doSynch() {\n4. try { Thread.sleep(1000); }\n5. catch (Exception e) { System.out.print(\"\"e \"\"); }\n6. }\n7. public static void main(String[] args) {\n8. long start = System.currentTimeMillis();\n9. new Thread(new Checkout2()).start();\n10. Thread t1 = new Thread(new Checkout2());\n11. t1.start();\n12. try { t1.join(); }\n13. catch (Exception e) { System.out.print(\"\"e \"\"); }\n14. System.out.println(\"\"elapsed: \"\"\n+ (System.currentTimeMillis() - start));\n15. }\n16. public void run() {\n17. for(int j = 0; j < 4; j++) {\n18. doStuff();\n19. try { Thread.sleep(1000); }\n20. catch (Exception e) { System.out.print(\"\"e \"\"); }\n21. doSynch();\n22. } } }\nWhich are true?\"\n",
    answers: ["Compilation fails.", "Elapsed time will be about nine seconds.", "Elapsed time will be about 12 seconds.", "Changing doSynch() to be unsynchronized will change elapsed by 450 or more\n milliseconds."],
    correctAnswer: 1
  },
  {
    id: 233,
    content: "\"Exception is the superclass of IOException, and\nIOException is the superclass of FileNotFoundException, and\n3. import java.io.*;\n4. class Physicist {\n5. void think() throws IOException { }\n6. }\n7. public class Feynman extends Physicist {\n8. public static void main(String[] args) {\n9. new Feynman().think();\n10. }\n11. // insert method here\n12. }\nWhich of the following methods, inserted independently at line 11, compiles? (Choose all that apply.)\"\n",
    answers: ["private void think() throws IOException { }", "public void think() { }", "void thinks() { int x = 7/0; }", "private void thinked() throws IOException { }"],
    correctAnswer: 2
  },
  {
    id: 234,
    content: "Which are capabilities of Java’s assertion mechanism?",
    answers: ["You can, at runtime, enable assertions for any version of Java", "You can, at the command line, enable assertions for a specific class", "It’s considered appropriate to catch and handle an AssertionError programmatically.", "You can programmatically test whether assertions have been enabled throwing an\nAssertionError"],
    correctAnswer: 2
  },
  {
    id: 235,
    content: "Concerning Java’s Garbage Collector (GC), which is true?",
    answers: ["If Object X has a reference to Object Y, then Object Y cannot be GCed.", "If the GC decides to delete an object, and if finalize() has never been invoked for that\n object, it is guaranteed that the GC will invoke finalize() for that object before the\n object is deleted.", "\nIf the GC decides to delete an object, and if finalize() has never been invoked for that\n object, it is guaranteed that the GC will invoke finalize() for that object before the\n object is deleted.", "Once the GC invokes finalize() on an object, it is guaranteed that the GC will delete\n that object once finalize() has completed."],
    correctAnswer: 3
  },
  {
    id: 236,
    content: "Assuming that sleep() sleeps for about the amount of time specified in its argument, and that\nall other code runs almost instantly, which output is likely?",
    answers: ["0 1 pre exc 2 3 4 post 5 6 7", "pre exc 0 1 post 2 3 4 5 6 7", "exc", "0 1 pre exc post"],
    correctAnswer: 1
  }
]
