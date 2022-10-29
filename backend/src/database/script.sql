create table ManagmentCompanies (
    id int primary key,
    name varchar(255) not null,
    password varchar(255) not null
);

create table UsersGroups(
    id int primary key,
    Name varchar(255) not null,
    CompanyID int REFERENCES ManagmentCompanies(id)
);

create table Achievements(
    id int primary key,
    Name varchar(255) not null,
    Text varchar(255) not null
);

create table Users(
    id int primary key,
    Name varchar(255) not null,
    Surname varchar(255) not null,
    Password varchar(255) not null,
    BirtdDate date not null,
    GroupID int REFERENCES UsersGroups(ID),
    Achievements int REFERENCES Achievements(ID),
    Phone varchar(15) not null,
    Palace varchar(255) not null
);

create table Appeals(
    id int primary key,
    UserID int REFERENCES Users(id),
    companyid int REFERENCES ManagmentCompanies(id),
    Text varchar(1023) not null,
    Header varchar(255) not null,
    Status varchar(255) not null,
    Date date not null
);

insert into ManagmentCompanies values (1, 'admin', 'admin');
insert into ManagementCompanies values (2, 'admin2', 'admin2');
insert into ManagementCompanies values (3, 'admin3', 'admin3');
insert into UsersGroups values (1, 'admin', 1);
insert into Achievements values (1, 'admin', 'admin');
insert into Users values (1, 'admin', 'admin', 'admin', '1999-01-01', 1, 1, 'admin', 'admin');
insert into Users values (2, 'nik', 'bulkin', 'user', '1999-01-01', 1, 1, 'user', 'info');
insert into Appeals values (1, 1, 1, 'admin', 'admin', 'admin', '1999-01-01');
insert into Appeals values (2, 2, 1, 'user', 'user', 'user', '1999-01-01');
insert into Appeals values (3, 1, 1, 'admin', 'admin', 'admin', '1999-01-01');

