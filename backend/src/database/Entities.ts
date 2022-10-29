import { type } from "os";

const typeorm = require("typeorm");
@typeorm.Entity()
export class ManagmentCompanies {
    @typeorm.PrimaryGeneratedColumn()
    CompanyID: number

    @typeorm.OneToMany(type => UsersGroups, group => group.company) groups: UsersGroups[]

    @typeorm.OneToMany(type => Appeals, appeal => appeal.company) appeals: Appeals[]

    @typeorm.Column()
    Name: string

    @typeorm.Column()
    Password: string
};

@typeorm.Entity()
export class UsersGroups {
    @typeorm.PrimaryGeneratedColumn()
    GroupID: number

    @typeorm.OneToMany(type => UsersGroups, user => user.group) group: Users[]

    @typeorm.ManyToOne(type => ManagmentCompanies, company => company.groups) company: ManagmentCompanies

    @typeorm.Column()
    Name: string


};

@typeorm.Entity()
export class Users {
    @typeorm.PrimaryGeneratedColumn()
    UserID: number

    @typeorm.OneToMany(type => Achievements, achievement => achievement.user) achievement: Achievements[] 

    @typeorm.ManyToOne(type => UsersGroups, group => group.users) group: UsersGroups

    @typeorm.OneToMany(type => Appeals, appeal => appeal.user) appeal: Appeals[]

    @typeorm.Column()
    Name: string

    @typeorm.Column()
    Surname: string

    @typeorm.Column()
    Password: string

    @typeorm.Column()
    PhoneNumber: string

    @typeorm.Column({ type:'date' })
    BirthDate: string
};

@typeorm.Entity()
export class chatMessages {
    @typeorm.PrimaryGeneratedColumn()
    MessageID: number

    @typeorm.ManyToOne(type => Users, user => user.chatMessages) user: Users

    @typeorm.Column()
    Message: string

    @typeorm.Column({ type:'date' })
    Date: string
}

@typeorm.Entity()
export class Achievements {
    @typeorm.PrimaryGeneratedColumn()
    AchievementID: number

    @typeorm.ManyToOne(type => Users, user => user.achievements) user: Users

    @typeorm.Column()
    Text: string
    

};

@typeorm.Entity()
export class Appeals {
    @typeorm.PrimaryGeneratedColumn()
    CompanyID: number

    @typeorm.ManyToOne(type => ManagmentCompanies, company => company.groups) company: ManagmentCompanies

    @typeorm.ManyToOne(type => Users, user => user.appeals) user: Users

    @typeorm.Column()
    Text: string

    @typeorm.Column()
    Header: string
};