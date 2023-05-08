"use strict";

(function() {

    function createQuiz(e){
        e.preventDefault(); // don't submit the form, we just want to update the data

        let quizQuestionsAmount = quizQuestionsAmountEntered.value;
        let quiz = [];

        console.log(glossaryArray)

        for (let i = 0; i < quizQuestionsAmount; i++) {

            // remove current object from array
            let glossaryArrayRemoveCurrent = glossaryArray.slice();
            glossaryArrayRemoveCurrent.splice(i,1);
            console.log(glossaryArrayRemoveCurrent)

            // randomize array to select wrong answer options
            let shuffledGlossaryArrayRemoveCurrent = glossaryArrayRemoveCurrent.slice();
            shuffledGlossaryArrayRemoveCurrent.sort(() => Math.random() - 0.5);
            console.log(shuffledGlossaryArrayRemoveCurrent)

            let quizQAndA = Object();
            let quizAnswerOptions = Object();
            let randomNumber = Math.floor(Math.random() * 4) + 1;

            quizQAndA.question = glossaryArray[i].term;

            if (randomNumber === 1){
                quizAnswerOptions.a = glossaryArray[i].definition;
                quizAnswerOptions.b = shuffledGlossaryArrayRemoveCurrent[0].definition;
                quizAnswerOptions.c = shuffledGlossaryArrayRemoveCurrent[1].definition;
                quizAnswerOptions.d = shuffledGlossaryArrayRemoveCurrent[2].definition;
                quizQAndA.correctAnswer = 'a';
            } else if (randomNumber === 2){
                quizAnswerOptions.a = shuffledGlossaryArrayRemoveCurrent[0].definition;
                quizAnswerOptions.b = glossaryArray[i].definition;
                quizAnswerOptions.c = shuffledGlossaryArrayRemoveCurrent[1].definition;
                quizAnswerOptions.d = shuffledGlossaryArrayRemoveCurrent[2].definition;
                quizQAndA.correctAnswer = 'b';
            } else if (randomNumber === 3){
                quizAnswerOptions.a = shuffledGlossaryArrayRemoveCurrent[0].definition;
                quizAnswerOptions.b = shuffledGlossaryArrayRemoveCurrent[1].definition;
                quizAnswerOptions.c = glossaryArray[i].definition;
                quizAnswerOptions.d = shuffledGlossaryArrayRemoveCurrent[2].definition;
                quizQAndA.correctAnswer = 'c';
            } else {
                quizAnswerOptions.a = shuffledGlossaryArrayRemoveCurrent[0].definition;
                quizAnswerOptions.b = shuffledGlossaryArrayRemoveCurrent[1].definition;
                quizAnswerOptions.c = shuffledGlossaryArrayRemoveCurrent[2].definition;
                quizAnswerOptions.d = glossaryArray[i].definition;
                quizQAndA.correctAnswer = 'd';
            }

            quizQAndA.answers = quizAnswerOptions;

            quiz.push(quizQAndA);

            glossaryArrayRemoveCurrent = glossaryArray;
        }
    }

    let glossaryArray = [
        {'term': '(S)CRUD', 'definition': 'This refers to the basic operations of data manipulation in a web application, where "S" stands for "Search," "C" for "Create," "R" for "Read," "U" for "Update," and "D" for "Delete." '},
        {'term': '1:1 relationship', 'definition': 'A relationship between two entities in which one entity can be associated with only one instance of the other entity, and vice versa.'},
        {'term': '1:M relationship', 'definition': 'A relationship between two entities in which one entity can be associated with multiple instances of the other entity, but each instance of the other entity can only be associated with one instance of the first entity.'},
        {'term': '4 basic SQL statements', 'definition': 'Select, Insert, Update, and Delete'},
        {'term': 'Absolute path', 'definition': 'The full URL of a web page, including the protocol (http:// or https://) and the domain name.'},
        {'term': 'Abstract class', 'definition': 'A class in object-oriented programming that cannot be instantiated on its own and is intended to be subclassed.'},
        {'term': 'Access control', 'definition': 'The process of controlling who can access a web application and what actions they can perform.'},
        {'term': 'Aliases', 'definition': 'Short names assigned to database tables or columns to make them easier to reference in SQL statements.'},
        {'term': 'Annotation', 'definition': 'In programming, a special syntax used to provide additional information about a piece of code, such as the intended use of a function or the meaning of a variable.'},
        {'term': 'Anonymous function', 'definition': 'A function without a name that can be used inline as an argument to another function.'},
        {'term': 'API', 'definition': 'Short for "Application Programming Interface," a set of protocols and tools used to build software applications.'},
        {'term': 'Argument', 'definition': 'A value passed to a function or method when it is called.'},
        {'term': 'Array', 'definition': 'A data structure that can hold multiple values of the same data type.'},
        {'term': 'Array joining', 'definition': 'The process of combining two or more arrays into a single array.'},
        {'term': 'Array slicing', 'definition': 'The process of selecting a subset of an array by specifying a starting index and an ending index.'},
        {'term': 'Array splitting', 'definition': 'The process of dividing an array into multiple smaller arrays.'},
        {'term': 'ArrayList', 'definition': 'A class in Java that provides a dynamic array implementation.'},
        {'term': 'Arrow function', 'definition': 'A shorthand syntax for creating a function in JavaScript.'},
        {'term': 'Associative table', 'definition': 'A database table that is used to define a many-to-many relationship between two other tables.'},
        {'term': 'Asynch/await', 'definition': 'A feature in JavaScript that allows for asynchronous programming using promises.'},
        {'term': 'Asynchronous nature of JavaScript', 'definition': 'JavaScript`s ability to execute code without blocking the main thread, allowing for better performance and responsiveness in web applications.'},
        {'term': 'Authentication', 'definition': 'The process of verifying the identity of a user or device in order to grant access to a web application.'},
        {'term': 'Backend', 'definition': 'The part of a web application that runs on the server and is responsible for processing requests and returning responses.'},
        {'term': 'Backlog', 'definition': 'A list of features or tasks that need to be completed for a web application.'},
        {'term': 'BOM', 'definition': 'Short for "Browser Object Model," a collection of objects and methods provided by web browsers for manipulating the browser window and document.'},
        {'term': 'Boolean', 'definition': 'A data type that can have one of two possible values: true or false. Booleans are often used in web development for conditional statements and logical comparisons.'},
        {'term': 'Bootstrap', 'definition': 'A popular front-end framework for building responsive and mobile-first websites. Bootstrap provides a set of pre-designed HTML, CSS, and JavaScript components that can be used to quickly create a variety of user interface elements.'},
        {'term': 'Box model', 'definition': 'A conceptual model used in web design that describes how HTML elements are laid out on a web page. The box model consists of four parts: content, padding, border, and margin.'},
        {'term': 'Build tool', 'definition': 'A software tool used to automate the process of building and deploying web applications. Examples of build tools include Grunt, Gulp, and Webpack.'},
        {'term': 'Catching an exception', 'definition': 'The process of handling an error that occurs during the execution of a program. When an exception is thrown, it can be caught and handled in a specific way, such as displaying an error message to the user or logging the error for debugging purposes.'},
        {'term': 'Checked exception', 'definition': 'In Java, a type of exception that must be declared in a method`s signature or handled using a try-catch block. Checked exceptions are used to handle error conditions that are outside of a program`s control, such as I/O errors or network failures.'},
        {'term': 'Class', 'definition': 'A blueprint for creating objects in object-oriented programming. A class defines the properties and methods that an object will have.'},
        {'term': 'Collection', 'definition': 'A group of related objects or values that can be manipulated together. In web development, collections are often used to store and retrieve data from databases.'},
        {'term': 'Columns', 'definition': 'In web design, a layout technique used to arrange content in a grid. Columns can be used to create responsive designs that adapt to different screen sizes.'},
        {'term': 'Compiled language', 'definition': 'A programming language that is converted into machine code before it is executed. Examples of compiled languages include C, C++, and Java.'},
        {'term': 'Conditional', 'definition': 'A programming construct that allows code to be executed only if a certain condition is met. Conditionals are often used to control the flow of a program.'},
        {'term': 'Constant', 'definition': 'A variable whose value cannot be changed once it has been assigned. Constants are often used to represent fixed values or settings in a program.'},
        {'term': 'Constructor', 'definition': 'A special method in a class that is used to create and initialize objects. Constructors are called when an object is created and can be used to set initial values for the object`s properties.'},
        {'term': 'Controller', 'definition': 'A component that handles user input and manages the flow of data between the model and the view. Controllers are often used in the Model-View-Controller (MVC) architectural pattern.'},
        {'term': 'Create, alter, drop', 'definition': 'SQL commands used to create, modify, and delete database objects such as tables, indexes, and views.'},
        {'term': 'CSS', 'definition': 'Cascading Style Sheets, a language used to describe the presentation of HTML elements on a web page. CSS is used to control layout, typography, color, and other visual aspects of a website.'},
        {'term': 'CSS absolute positioning', 'definition': 'A technique used in CSS to position an element relative to its containing element or the browser window. Absolute positioning is often used to create fixed or overlayed elements on a web page.'},
        {'term': 'CSS property/attribute', 'definition': 'A setting that can be applied to an HTML element using CSS. CSS properties control various aspects of an element`s appearance and behavior.'},
        {'term': 'CSS relative positioning', 'definition': 'A technique used in CSS to position an element relative to its normal position in the document flow. Relative positioning is often used to adjust the position of an element without affecting the layout of other elements on the page.'},
        {'term': 'CSS selector', 'definition': 'A pattern used to select HTML elements on a web page. CSS selectors can be used to apply styles to specific elements or groups of elements.'},
        {'term': 'Database', 'definition': 'A collection of data that is organized and stored in a structured manner, allowing for efficient retrieval, modification, and deletion of data.'},
        {'term': 'Default function parameter values', 'definition': 'A feature in JavaScript that allows developers to set default values for parameters in a function declaration. If a value is not passed for a parameter when the function is called, the default value is used instead.'},
        {'term': 'Dependency', 'definition': 'A file or module that is required by another file or module to function properly.'},
        {'term': 'Directory', 'definition': 'A folder on a computer or server that contains files or other directories.'},
        {'term': 'DOM', 'definition': 'Document Object Model is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.'},
        {'term': 'DOM traversal', 'definition': 'The process of navigating and manipulating elements in the DOM tree structure using JavaScript methods.'},
        {'term': 'Element', 'definition': 'An individual component of an HTML document, such as a paragraph, image, or form.'},
        {'term': 'Embedded CSS', 'definition': 'CSS styles that are included directly in the HTML document using the "&lt;style&gt; tag.'},
        {'term': 'Endpoint', 'definition': 'A specific URL within a web API that serves a particular function, such as retrieving or updating data.'},
        {'term': 'Entity', 'definition': 'A data object that represents a real-world object, such as a customer or product, in a database.'},
        {'term': 'Event listener', 'definition': 'A function that is executed in response to a specific event, such as a mouse click or keypress.'},
        {'term': 'Exception', 'definition': 'An error or unexpected event that occurs during program execution.'},
        {'term': 'Exclusive left or right join', 'definition': 'A type of SQL join that returns only the rows from one table that do not have matching values in the other table. An exclusive left join returns all rows from the left table and only the unmatched rows from the right table, while an exclusive right join returns all rows from the right table and only the unmatched rows from the left table.'},
        {'term': 'Expression', 'definition': 'A piece of code that can be evaluated to produce a value.'},
        {'term': 'External CSS', 'definition': 'CSS styles that are included in a separate file and linked to the HTML document using the "&lt;link&gt;" tag.'},
        {'term': 'Fetch', 'definition': 'JavaScript API for making network requests to retrieve data from a server.'},
        {'term': 'Field', 'definition': 'A column or attribute in a database table that represents a specific piece of data.'},
        {'term': 'File', 'definition': 'A collection of data that is stored on a computer or server and can be accessed by a program.'},
        {'term': 'final', 'definition': 'A keyword in Java that indicates that a variable or method cannot be modified or overridden.'},
        {'term': 'finally', 'definition': 'A keyword in Java and other programming languages that indicates a block of code that is executed regardless of whether an exception is thrown or not.'},
        {'term': 'First class functions', 'definition': 'A feature in programming languages that allows functions to be treated as first-class objects, meaning they can be passed as arguments to other functions, returned as values, and stored in variables.'},
        {'term': 'Fixed length char columns', 'definition': 'A type of column in a database table that has a fixed length and contains character data.'},
        {'term': 'Flexbox', 'definition': 'A layout model in CSS that allows for flexible and responsive design, enabling developers to easily align and distribute content in a container.'},
        {'term': 'Flexbox axes', 'definition': 'The main and cross axes of a flex container, which determine the direction in which content is aligned and distributed.'},
        {'term': 'Floating point, or real numbers', 'definition': 'A type of data that represents a decimal or fractional number, with a fixed number of digits before and after the decimal point.'},
        {'term': 'for .. of', 'definition': 'A JavaScript loop statement that allows developers to iterate over the elements of an array or other iterable object.'},
        {'term': 'Frontend', 'definition': 'The client-side of web development, focused on creating and implementing the user interface of a website or application using languages such as HTML, CSS, and JavaScript.'},
        {'term': 'Full-stack', 'definition': 'A term used to describe web developers who are proficient in both frontend and backend development. Full-stack developers have knowledge of the complete web development process, from building user interfaces to designing databases and servers.'},
        {'term': 'Function', 'definition': 'A block of code that performs a specific task, designed to be reusable and modular. Functions can be called and executed multiple times throughout a program.'},
        {'term': 'Function variable', 'definition': 'A variable that holds a reference to a function, allowing the function to be called and executed later in the program.'},
        {'term': 'Git', 'definition': 'A version control system used for software development that allows developers to track changes to their code over time, collaborate with others, and manage code changes across multiple branches.'},
        {'term': 'Git branch', 'definition': 'A version of a codebase that diverges from the main codebase, allowing developers to work on different features or fixes simultaneously.'},
        {'term': 'Git commit', 'definition': 'A snapshot of changes made to the codebase at a particular time, with a unique identifier that can be used to reference and track changes.'},
        {'term': 'Git merge', 'definition': 'The process of combining changes from one Git branch into another, typically used to integrate new features or fixes into the main codebase.'},
        {'term': 'Git pull', 'definition': 'The process of downloading and incorporating changes made to a Git repository since the last time it was synced with a local copy.'},
        {'term': 'Git push', 'definition': 'The process of uploading changes made to a local Git repository to a remote repository.'},
        {'term': 'Git repository', 'definition': 'A centralized location where code is stored and version-controlled using Git.'},
        {'term': 'Github', 'definition': 'A web-based platform for hosting and sharing Git repositories, used by developers for collaboration and open-source projects.'},
        {'term': 'Global scope', 'definition': 'The highest level of variable scope in JavaScript, accessible from anywhere in the program.'},
        {'term': 'Group by clause', 'definition': 'A clause used in SQL to group rows of data based on a specified column, typically used in conjunction with aggregate functions such as COUNT, SUM, and AVG.'},
        {'term': 'HashMap', 'definition': 'A data structure used in programming for efficient lookups and storage of key-value pairs.'},
        {'term': 'HTML', 'definition': 'HyperText Markup Language, the standard markup language used for creating web pages and applications.'},
        {'term': 'HTML element', 'definition': 'A building block of an HTML document, defined by an opening tag, content, and a closing tag.'},
        {'term': 'HTML script', 'definition': 'A block of code written in JavaScript or another scripting language that can be embedded in an HTML document to provide interactive functionality.'},
        {'term': 'HTML style', 'definition': 'A set of CSS rules applied to an HTML element or set of elements to define their visual appearance.'},
        {'term': 'HTML tag', 'definition': 'A snippet of code used to define an HTML element.'},
        {'term': 'HTTP', 'definition': 'Hypertext Transfer Protocol, the protocol used for transferring data over the web.'},
        {'term': 'HTTP methods', 'definition': 'A set of commands used in HTTP for communicating with servers, including GET, POST, PUT, and DELETE.'},
        {'term': 'HTTP response code', 'definition': 'A three-digit code sent by a server in response to an HTTP request, indicating the success or failure of the request.'},
        {'term': 'I/O', 'definition': 'Input/output, the communication between a computer and its peripherals or external devices.'},
        {'term': 'Identifier', 'definition': 'A name given to a variable, function, or other programming construct that allows it to be referenced and used within the program.'},
        {'term': 'Immediately-Invoked Function Expression (IIFE)', 'definition': 'A JavaScript function that is executed immediately upon definition, typically used to create a local scope for variables and functions.'},
        {'term': 'Implementation', 'definition': 'The process of turning a design or specification into a working software product.'},
        {'term': 'Index', 'definition': 'In web development, an index typically refers to a database index, which is a data structure that improves the speed of data retrieval operations on a database table.'},
        {'term': 'Indexes', 'definition': 'A data structure that helps to optimize queries on large tables by allowing for faster lookups of specific rows based on a given set of columns.'},
        {'term': 'Inheritance', 'definition': 'Inheritance is a fundamental concept in object-oriented programming (OOP) that allows one class to inherit properties and methods from another class. In web development, inheritance can be used to create more modular and reusable code by creating parent classes that define common functionality and child classes that inherit and extend that functionality.'},
        {'term': 'Inline CSS', 'definition': 'Inline CSS is a way of applying CSS styles directly to individual HTML elements using the "style" attribute. This can be useful for applying specific styles to individual elements or overriding default styles, but it can also make it more difficult to maintain and update the styles of a website.'},
        {'term': 'Inner join', 'definition': 'In web development, an inner join is a type of database join that returns only the rows from both tables that have matching values based on a specified column or set of columns.'},
        {'term': 'Integer', 'definition': 'In web development, an integer is a type of numeric data that represents whole numbers without decimal places. Integers can be used to represent a wide range of values in web applications, from IDs and counts to financial data and user input.'},
        {'term': 'Interface', 'definition': 'In web development, an interface is a type of object or module that defines a set of methods and properties that can be used by other parts of the application. Interfaces can be useful for creating more modular and flexible code that can be easily swapped in and out as needed.'},
        {'term': 'Interpreted language', 'definition': 'An interpreted language is a programming language that executes code directly without first compiling it into machine code. JavaScript is an example of an interpreted language commonly used in web development.'},
        {'term': 'Iteration', 'definition': 'Iteration is the process of repeating a set of instructions or operations a certain number of times, typically using a loop. Iteration is a fundamental concept in web development and is used in a wide range of applications, from generating dynamic content to processing user input.'},
        {'term': 'JAR file', 'definition': 'A JAR (Java Archive) file is a file format used for packaging and distributing Java applications and libraries. JAR files are commonly used in web development to package and distribute Java-based web applications and frameworks.'},
        {'term': 'Java', 'definition': 'Java is a popular programming language commonly used in web development for creating dynamic web applications, web services, and other types of server-side software.'},
        {'term': 'Java object', 'definition': 'A Java object is an instance of a class in the Java programming language. Objects are the fundamental building blocks of Java applications and are used extensively in web development for creating complex data structures and managing application state.'},
        {'term': 'JavaScript', 'definition': 'JavaScript is a programming language commonly used in web development for creating interactive and dynamic web pages and web applications.'},
        {'term': 'JavaScript object', 'definition': 'A JavaScript object is a data structure that stores data in key-value pairs. Objects are a fundamental component of JavaScript and are used extensively in web development for representing complex data structures and managing application state.'},
        {'term': 'JavaScript primitive data types', 'definition': 'Boolean, Null, Undefined, Number, String, and Symbol. These data types are used extensively in web development for representing and manipulating data in JavaScript applications.'},
        {'term': 'JDBC', 'definition': 'JDBC (Java Database Connectivity) is a Java API for connecting to and interacting with relational databases. JDBC is commonly used in web development for building Java-based web applications and integrating them with databases.'},
        {'term': 'Join', 'definition': 'In web development, a join is a database operation that combines rows from two or more tables based on a related column or set of columns.'},
        {'term': 'JPA', 'definition': 'Java Persistence API (JPA) is a Java specification that provides a standard way of mapping Java objects to relational databases.'},
        {'term': 'JSON', 'definition': 'JavaScript Object Notation is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate.'},
        {'term': 'JUnit', 'definition': 'A popular open-source testing framework for Java that is used to write and run unit tests.'},
        {'term': 'JWT', 'definition': 'JSON Web Token is a standard for securely transmitting information between parties as a JSON object.'},
        {'term': 'Key-value pair', 'definition': 'A key-value pair is a data structure that consists of a key, which is a unique identifier, and a value, which can be any data type.'},
        {'term': 'Left or right join', 'definition': 'A left or right join is a type of database join that returns all the records from one table and matching records from another table, or NULL values if there is no match.'},
        {'term': 'Limit clause', 'definition': 'A SQL statement used to limit the number of rows returned by a query.'},
        {'term': 'List', 'definition': 'A list is a collection of ordered elements, typically used to store multiple related items of the same data type.'},
        {'term': 'Local scope', 'definition': 'Local scope refers to the visibility of variables or functions within a specific block of code, typically enclosed by curly braces.'},
        {'term': 'Logging', 'definition': 'Logging refers to the practice of recording events or messages to a log file or console, typically used for debugging or auditing purposes.'},
        {'term': 'Loop', 'definition': 'A loop is a programming construct that allows a block of code to be executed repeatedly while a certain condition is true.'},
        {'term': 'M:M relationship', 'definition': 'A type of database relationship where multiple records in one table can be associated with multiple records in another table.'},
        {'term': 'Map', 'definition': 'A map is a collection of key-value pairs, where each key is unique and maps to a corresponding value.'},
        {'term': 'Map, filter, reduce', 'definition': 'Map, filter, and reduce are three common functional programming operations used to manipulate collections of data.'},
        {'term': 'Maven', 'definition': 'A popular build automation tool used primarily for Java projects, which helps manage dependencies and build processes.'},
        {'term': 'Media query', 'definition': 'A CSS technique that allows web developers to apply different styles to a web page based on the characteristics of the device or viewport.'},
        {'term': 'Method', 'definition': 'A block of code that can be called by other parts of the program to perform a specific task.'},
        {'term': 'Method overloading', 'definition': 'A programming concept in which multiple methods can have the same name but different parameters.'},
        {'term': 'Mockup', 'definition': 'A visual representation of a website or application design that helps stakeholders to visualize the final product before development begins.'},
        {'term': 'Multi page application', 'definition': 'A type of web application that consists of multiple pages that are navigated between using hyperlinks.'},
        {'term': 'Mysql functions', 'definition': 'Built-in functions that can be used to perform various operations on MySQL databases, such as mathematical calculations or string manipulations.'},
        {'term': 'Null and undefined', 'definition': 'Special values that represent the absence of a value or the lack of a defined value.'},
        {'term': 'Object destructuring', 'definition': 'A JavaScript technique that allows developers to extract properties from objects and assign them to variables with the same name.'},
        {'term': 'Object property variable assignment shorthand', 'definition': 'A concise syntax for assigning values to object properties using variables. For example, instead of writing "obj.prop = var;", you can write "obj.prop = var" and the variable name will automatically be used as the property name.'},
        {'term': 'ORM', 'definition': 'Object-Relational Mapper is a tool that maps data between an object-oriented programming language and a relational database. It allows developers to interact with the database using objects, making it easier to work with complex data structures.'},
        {'term': 'OOP', 'definition': 'A programming paradigm that emphasizes the use of objects to represent data and behavior. OOP languages like Java and Python allow developers to define classes that encapsulate data and methods, making it easier to organize and reuse code.'},
        {'term': 'Operand', 'definition': 'A value or variable that is used in an expression with an operator. For example, in the expression "x + y", "x" and "y" are operands.'},
        {'term': 'Operator', 'definition': 'A symbol that is used to perform an operation on one or more operands. Examples of operators include +, -, *, /, and %.'},
        {'term': 'Order by clause', 'definition': 'A clause in SQL that is used to sort the results of a query based on one or more columns. For example, "ORDER BY column_name ASC" will sort the results in ascending order based on the values in "column_name".'},
        {'term': 'Parameter', 'definition': 'A value that is passed to a function or method as input. Parameters can be used to customize the behavior of a function or to provide data for it to work with.'},
        {'term': 'Path', 'definition': 'The location of a file or resource on a server. Paths can be expressed as absolute paths (e.g. "/home/user/file.txt") or relative paths (e.g. "file.txt").'},
        {'term': 'Path parameters', 'definition': 'Parameters that are included in a URL path, typically used in RESTful APIs to identify specific resources. For example, in the URL "/users/{id}", the "{id}" portion is a path parameter.'},
        {'term': 'Polymorphism', 'definition': 'The ability of objects to take on different forms depending on the context in which they are used. In OOP, this is often achieved through inheritance and method overriding.'},
        {'term': 'Postman', 'definition': 'A popular tool for testing and debugging APIs. It allows developers to send HTTP requests and view the responses in a user-friendly interface.'},
        {'term': 'Primary key', 'definition': 'A column or set of columns in a database table that uniquely identifies each row. Primary keys are used to enforce data integrity and facilitate efficient querying.'},
        {'term': 'Programming language primitive', 'definition': 'A basic data type that is built into a programming language. Examples of primitives include integers, booleans, and characters.'},
        {'term': 'Promises', 'definition': 'A programming construct used in asynchronous programming to represent a value that may not be available immediately. Promises are typically used to avoid blocking the main thread of execution while waiting for data to be fetched or processed.'},
        {'term': 'Protected visibility', 'definition': 'A visibility modifier in OOP that allows a member to be accessed by the defining class and its subclasses, but not by other classes.'},
        {'term': 'Records', 'definition': 'A new data structure introduced in Java 16 that provides a concise way to define classes with immutable state. Records are often used to represent data transfer objects (DTOs) in web applications.'},
        {'term': 'Recursion', 'definition': 'A programming technique in which a function calls itself in order to solve a problem. Recursive functions can be used to solve problems that can be broken down into smaller sub-problems.'},
        {'term': 'Refactor', 'definition': 'The process of restructuring existing code without changing its external behavior. Refactoring is often done to improve code readability, maintainability, or performance.'},
        {'term': 'Relational database', 'definition': 'A type of database that stores data in tables with rows and columns. Relational databases use SQL (Structured Query Language) to manipulate data.'},
        {'term': 'Relational database server', 'definition': 'A software program that manages and provides access to a relational database. A database server may be located on a separate machine from the web application, and can be accessed over a network connection.'},
        {'term': 'Relative path', 'definition': 'A path that is relative to the current file or resource. For example, if the current file is located in a directory called "images", and you want to reference a file called "logo.png" in the same directory, you would use the relative path "images/logo.png".'},
        {'term': 'Repository (Spring)', 'definition': 'A component in the Spring Framework that provides a way to store and retrieve data from a database or other persistent storage system. Repositories typically encapsulate the underlying data access logic and provide a higher-level API for working with data.'},
        {'term': 'Request parameters', 'definition': 'Data that is passed to a web server as part of an HTTP request. Request parameters can be used to provide input to a web application, or to modify its behavior.'},
        {'term': 'RESTful API', 'definition': 'An API (Application Programming Interface) that adheres to the principles of Representational State Transfer (REST). RESTful APIs use HTTP methods (GET, POST, PUT, DELETE) to manipulate resources, and typically return data in JSON or XML format.'},
        {'term': 'robust', 'definition': 'A term used to describe software that is able to handle a wide range of inputs and conditions without crashing or producing incorrect results. Robust software is often designed to handle errors and unexpected situations gracefully.'},
        {'term': 'Route', 'definition': 'A specific URL pattern that is associated with a particular controller method in a web application. Routes are used to map incoming HTTP requests to specific actions in the application.'},
        {'term': 'Routing', 'definition': 'The process of determining which controller method should handle an incoming HTTP request based on the request`s URL and other parameters.'},
        {'term': 'Schema', 'definition': 'A blueprint or plan for the structure of a database. A schema typically includes definitions for tables, columns, relationships, and other database objects.'},
        {'term': 'Scope', 'definition': 'The range or visibility of a variable or other programming construct. In web development, the term scope is often used to describe the lifetime of a variable or object within the context of a request or session.'},
        {'term': 'Scrum', 'definition': 'A popular Agile methodology for software development that emphasizes iterative, incremental delivery of working software. Scrum is typically used in teams of 3-9 members, with daily stand-up meetings and regular sprint reviews.'},
        {'term': 'Semantic markup', 'definition': 'HTML markup that is used to convey the meaning of content, rather than just its appearance. Semantic markup helps search engines and other tools understand the structure and meaning of a web page.'},
        {'term': 'Service (Spring)', 'definition': 'A component in the Spring Framework that provides business logic and other higher-level functionality to a web application. Services typically encapsulate business logic and coordinate data access through repositories.'},
        {'term': 'Set', 'definition': 'A collection of distinct values in computer programming. In web development, sets can be used to represent things like lists of unique tags or categories.'},
        {'term': 'Single page application', 'definition': 'A web application that loads a single HTML page and dynamically updates its content as the user interacts with the application. Single page applications typically use JavaScript frameworks like Angular, React, or Vue.'},
        {'term': 'Software feature', 'definition': 'A distinct piece of functionality in a software application that provides value to the user. Software features can include things like search, user authentication, or integration with third-party services.'},
        {'term': 'Spring (Boot)', 'definition': 'A popular framework for building web applications in Java. Spring Boot provides a range of tools and libraries for developing RESTful APIs, handling data persistence, and managing application configuration.'},
        {'term': 'SQL', 'definition': 'Structured Query Language, a programming language used to manage and manipulate data in a relational database. SQL is used for tasks like creating tables, inserting and updating data, and running queries.'},
        {'term': 'Standup', 'definition': 'A brief daily meeting in Agile software development teams, typically held in the morning. Standups are used to coordinate work, discuss progress and blockers, and identify any issues that need to be resolved.'},
        {'term': 'Statement', 'definition': 'A line of code in a programming language that performs a specific action, such as assigning a value to a variable or executing a loop.'},
        {'term': 'Static vs. instance', 'definition': 'In object-oriented programming, static refers to a method or variable that is associated with the class itself, rather than with instances of the class. Instance refers to a method or variable that is associated with a specific instance of the class.'},
        {'term': 'Storyboard', 'definition': 'A visual representation of the flow of a user interface or user experience, typically used in the design phase of a web development project.'},
        {'term': 'String', 'definition': 'A sequence of characters in a programming language, typically used to represent text.'},
        {'term': 'Sub-query', 'definition': 'A query that is nested inside another query. Sub-queries can be used to filter or aggregate data before it is passed to the outer query.'},
        {'term': 'super', 'definition': 'A keyword in object-oriented programming that is used to call a method or constructor in a superclass from a subclass.'},
        {'term': 'Swagger', 'definition': 'A set of open-source tools for designing, building, and documenting RESTful APIs.'},
        {'term': 'Switch', 'definition': 'A programming construct that allows a value to be tested against a series of cases, with a corresponding block of code executed when a match is found.'},
        {'term': 'Table', 'definition': 'A data structure in a relational database that represents a collection of related data. Tables typically consist of rows and columns, with each row representing a single record or instance of the data.'},
        {'term': 'Template strings', 'definition': 'A feature in some programming languages that allows variables or expressions to be interpolated directly into a string literal, without the need for concatenation or other manipulation.'},
        {'term': 'Ternary', 'definition': 'A shorthand notation for an if-else statement, typically used for simple conditional expressions.'},
        {'term': 'Test coverage', 'definition': 'A measure of the degree to which a codebase is covered by automated tests. Test coverage is typically expressed as a percentage of lines of code or branches that are exercised by tests.'},
        {'term': 'Test Driven Development, or TDD', 'definition': 'A software development methodology in which tests are written before the code to be tested. TDD emphasizes a tight feedback loop and a focus on creating code that is correct and maintainable.'},
        {'term': 'this', 'definition': 'A keyword in object-oriented programming that refers to the current instance of a class.'},
        {'term': 'Throwing an exception', 'definition': 'An action taken by a program when it encounters an error or other exceptional condition. Exceptions are typically used to signal that something has gone wrong and that normal program execution cannot continue.'},
        {'term': 'Truthy and falsy', 'definition': 'In JavaScript and other languages, values that are considered true or false in boolean expressions. Falsy values include null, undefined, and false, while truthy values include all other values.'},
        {'term': 'Unchecked exception', 'definition': 'An exception that does not need to be declared in a method`s signature or caught in a try-catch block. Unchecked exceptions are typically used for errors that are outside of the control of the program.'},
        {'term': 'Unit (of code)', 'definition': 'A small, independent piece of code that performs a specific function or task.'},
        {'term': 'Unit Test', 'definition': 'A type of automated test that verifies the behavior of a single unit of code in isolation from other units.'},
        {'term': 'Unit testing', 'definition': 'The practice of writing automated tests for individual units of code in order to verify their correctness and behavior.'},
        {'term': 'URL', 'definition': 'Uniform Resource Locator, a standardized way of identifying resources on the web, including web pages, images, and other files.'},
        {'term': 'User story', 'definition': 'A short, informal description of a feature or requirement from the perspective of a user or customer. User stories are typically used in Agile development as a way of capturing requirements and prioritizing work.'},
        {'term': 'Validation', 'definition': 'The process of checking that data or input meets certain requirements or constraints, such as a valid email address or a required field.'},
        {'term': 'Variable', 'definition': 'A named storage location in a programming language that can hold a value, such as a number, a string, or an object.'},
        {'term': 'Variable length char columns', 'definition': 'A type of data column in a relational database that can hold variable-length character data, such as strings or text. The size of the column is not fixed in advance, but can grow or shrink as needed to accommodate the data being stored.'},
        {'term': 'Version control system', 'definition': 'A software tool used to manage changes to source code or other files over time. Version control systems typically provide features for tracking changes, branching and merging code, and collaborating with other developers.'},
        {'term': 'Visibility', 'definition': 'In object-oriented programming, the degree to which a method or variable is accessible from other parts of the code. Visibility can be public, protected, or private, with each level controlling how much of the code can see or modify the method or variable.'},
        {'term': 'Where clause', 'definition': 'A part of a SQL query that is used to filter or select specific rows from a table based on certain conditions. The where clause is typically used to limit the results returned by a query to only those that meet certain criteria.'},
        {'term': 'Wireframe', 'definition': 'A visual representation of the layout and structure of a web page or user interface, typically created in the design phase of a web development project. Wireframes are used to explore and refine the design of a web page or user interface, and to communicate design ideas to other members of the development team.'}
    ];

    function shuffleArray(glossaryArray){
        glossaryArray.sort(() => Math.random() - 0.5);
    }
    shuffleArray(glossaryArray);

    let quizQuestionsAmountEntered = document.querySelector("#questions-amount-value");
    let formQuiz = document.querySelector('#question-amount');
    formQuiz.addEventListener("submit", createQuiz);

})();