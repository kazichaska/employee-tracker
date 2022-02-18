DROP table if exists department;
DROP table if exists role;
DROP table if exists employee;

create table department (
    id integer auto_increment primary key,
    name varchar(30) null
);

create table role (
    id integer auto_increment primary key,
    title varchar(30) null,
    salary decimal(10,2) null,
    department_id integer null
    /* constraint fk_dept_id foreign key (department_id) references department(id) */
);

create table employee (
    id integer auto_increment primary key,
    first_name varchar(30) null,
    last_name varchar(30) null,
    role_id integer null,
    manager_id integer null
    /* constraint fk_role_id foreign key (role_id) references role(id), */
    /* constraint fk_mgr_id foreign key (manager_id) references employee(id) */
);