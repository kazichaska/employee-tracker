use employeetracker;

INSERT INTO department (name)
VALUES ("HR");
INSERT INTO department (name)
VALUES ("IT");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("HR", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 4);

/* remove manger_id from here and value and add this using update statement later */
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("John", "Doe", 1);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Mike", "Smith", 2,);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Jose", "Rodriguez", 3);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Tina", "Hanson", 4);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Marlin", "Brown", 5);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Sarah", "Thompson", 2);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Brad", "Hu", 4);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Erica", "Erikson", 1);

/* for each employee with manager relation goes here */
update employee set manager_id = 2 where id = 1; 
update employee set manager_id = 2 where id = 2; 
update employee set manager_id = 2 where id = 4; 