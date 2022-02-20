-- to connect to the database
use employeetracker;

-- department tables content
INSERT INTO department (name)
VALUES ("HR");
INSERT INTO department (name)
VALUES ("IT");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");

-- role tables content
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

-- employee tables content
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


-- export directly from database using `MySQL Workbench`
/*
INSERT INTO `` (`id`,`first_name`,`last_name`,`role_id`,`manager_id`) VALUES (1,'John','Doe',1,2);
INSERT INTO `` (`id`,`first_name`,`last_name`,`role_id`,`manager_id`) VALUES (2,'Jose','Rodriguez',3,2);
INSERT INTO `` (`id`,`first_name`,`last_name`,`role_id`,`manager_id`) VALUES (3,'Tina','Hanson',4,4);
INSERT INTO `` (`id`,`first_name`,`last_name`,`role_id`,`manager_id`) VALUES (4,'Marlin','Brown',5,NULL);
INSERT INTO `` (`id`,`first_name`,`last_name`,`role_id`,`manager_id`) VALUES (5,'Sarah','Thompson',2,NULL);
INSERT INTO `` (`id`,`first_name`,`last_name`,`role_id`,`manager_id`) VALUES (7,'Erica','Erikson',1,NULL);
INSERT INTO `` (`id`,`first_name`,`last_name`,`role_id`,`manager_id`) VALUES (8,'Robin','Smith',4,3);
INSERT INTO `` (`id`,`first_name`,`last_name`,`role_id`,`manager_id`) VALUES (10,'Rayyan','Kazi',6,NULL);
INSERT INTO `` (`id`,`first_name`,`last_name`,`role_id`,`manager_id`) VALUES (11,'Borris','Melfold',7,NULL);
*/

/*
INSERT INTO `` (`id`,`name`) VALUES (1,'HR');
INSERT INTO `` (`id`,`name`) VALUES (2,'IT');
INSERT INTO `` (`id`,`name`) VALUES (3,'Finance');
INSERT INTO `` (`id`,`name`) VALUES (4,'Legal');
INSERT INTO `` (`id`,`name`) VALUES (5,'Operations');
INSERT INTO `` (`id`,`name`) VALUES (6,'Security');
INSERT INTO `` (`id`,`name`) VALUES (7,'Executive');
INSERT INTO `` (`id`,`name`) VALUES (11,'Sales');
*/

/*
INSERT INTO `` (`id`,`title`,`salary`,`department_id`) VALUES (1,'HR',100000.00,1);
INSERT INTO `` (`id`,`title`,`salary`,`department_id`) VALUES (2,'Lead Engineer',150000.00,2);
INSERT INTO `` (`id`,`title`,`salary`,`department_id`) VALUES (3,'Software Engineer',120000.00,2);
INSERT INTO `` (`id`,`title`,`salary`,`department_id`) VALUES (4,'Accountant',125000.00,3);
INSERT INTO `` (`id`,`title`,`salary`,`department_id`) VALUES (5,'Legal Team Lead',250000.00,4);
INSERT INTO `` (`id`,`title`,`salary`,`department_id`) VALUES (6,'CIO',201000.00,7);
INSERT INTO `` (`id`,`title`,`salary`,`department_id`) VALUES (7,'Cust Support Specialist',54000.00,8);
*/