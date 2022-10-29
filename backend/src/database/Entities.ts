import { Entity } from "typeorm";

const typeorm = require("typeorm");
@typeorm.Entity()
export class managmentcompanies {
    @typeorm.PrimaryGeneratedColumn()
    companyid: number

    @typeorm.OneToMany(type => usersgroups, group => group.company) groups: usersgroups[]

    @typeorm.OneToMany(type => appeals, appeal => appeal.company) appeals: appeals[]

    @typeorm.OneToMany(type => appealsmessages, msg => msg.company) msg: appealsmessages[]

    @typeorm.Column()
    name: string

    @typeorm.Column()
    password: string
};

@typeorm.Entity()
export class usersgroups {
    @typeorm.PrimaryGeneratedColumn()
    groupid: number

    @typeorm.OneToMany(type => usersgroups, user => user.group) group: users[]

    @typeorm.ManyToOne(type => managmentcompanies, company => company.groups) company: managmentcompanies

    @typeorm.Column()
    name: string


};

@typeorm.Entity()
export class users {
    @typeorm.PrimaryGeneratedColumn()
    userid: number

    @typeorm.OneToMany(type => achievements, achievement => achievement.user) achievement: achievements[] 

    @typeorm.ManyToOne(type => usersgroups, group => group.users) group: usersgroups

    @typeorm.OneToMany(type => appeals, appeal => appeal.user) appeal: appeals[]

    @typeorm.OneToMany(type => appealsmessages, msg => msg.user) msg: appealsmessages[]

    @typeorm.Column()
    name: string

    @typeorm.Column()
    surname: string

    @typeorm.Column()
    password: string

    @typeorm.Column()
    phone: string

    @typeorm.Column({ type:'date' })
    birtddate: string
};

@typeorm.Entity()
export class chatmessages {
    @typeorm.PrimaryGeneratedColumn()
    messageid: number

    @typeorm.ManyToOne(type => users, user => user.chatmessages) user: users

    @typeorm.Column()
    message: string

    @typeorm.Column({ type:'date' })
    date: string
}

@typeorm.Entity()
export class achievements {
    @typeorm.PrimaryGeneratedColumn()
    achievementid: number

    @typeorm.ManyToOne(type => users, user => user.achievements) user: users

    @typeorm.Column()
    text: string
    

};

@typeorm.Entity()
export class appeals {
    @typeorm.PrimaryGeneratedColumn()
    companyid: number

    @typeorm.ManyToOne(type => managmentcompanies, company => company.groups) company: managmentcompanies

    @typeorm.ManyToOne(type => users, user => user.appeals) user: users

    @typeorm.OneToMany(type => appealsmessages, msg => msg.appeal) msgs: appealsmessages[]

    @typeorm.Column()
    text: string

    @typeorm.Column()
    header: string
};

@typeorm.Entity()
export class appealsmessages {
    @typeorm.PrimaryGeneratedColumn()
    appealmsgid: number

    @typeorm.OneToMany(type => appeals, appeal => appeal.appealmsg) appeal: appeals[]

    @typeorm.ManyToOne(type => users, user => user.appealmsg) user: users

    @typeorm.ManyToOne(type => managmentcompanies, company => company) company: managmentcompanies

    @typeorm.Column()
    text: string
}