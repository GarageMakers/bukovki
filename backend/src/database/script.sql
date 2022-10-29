create table ManagmentCompanies (
    CompanyID int primary key,
    name varchar(255) not null,
    password varchar(255) not null
);

create table UsersGroups(
    GroupID int primary key,
    Name varchar(255) not null,
    CompanyID int REFERENCES ManagmentCompanies(CompanyID)
);

create table Achievements(
    AchievementID int primary key,
    Name varchar(255) not null,
    Text varchar(255) not null
);

create table Users(
    UserID int primary key,
    Name varchar(255) not null,
    Surname varchar(255) not null,
    Password varchar(255) not null,
    BirtdDate date not null,
    GroupID int REFERENCES UsersGroups(GroupID),
    Achievements int REFERENCES Achievements(AchievementID),
    Phone varchar(15) not null,
    Palace varchar(255) not null
);

create table Appeal(
    AppealID int primary key,
    UserID int REFERENCES Users(UserID),
    Text varchar(1023) not null,
    Header varchar(255) not null,
    Status varchar(255) not null,
    Date date not null
);

insert into ManagmentCompanies values (1, 'admin', 'admin');
insert into UsersGroups values (1, 'admin', 1);
insert into Achievements values (1, 'admin', 'admin');
insert into Users values (1, 'admin', 'admin', 'admin', '1999-01-01', 1, 1, 'admin', 'admin');
insert into Users values (2, 'nik', 'bulkin', 'user', '1999-01-01', 1, 1, 'user', 'info');
insert into Appeal values (1, 1, 'admin', 'admin', 'admin', '1999-01-01');

