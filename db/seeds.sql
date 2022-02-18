use employeetracker;

INSERT INTO department (name)
VALUES ("HR");
INSERT INTO department (name)
VALUES ("Information Technology");
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

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Smith", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jose", "Rodriguez", 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tina", "Hanson", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Marlin", "Brown", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sarah", "Thompson", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Brad", "Hu", 4, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Erica", "Erikson", 1, 2);
