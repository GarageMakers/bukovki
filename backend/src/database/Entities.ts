const typeorm = require("typeorm");
@typeorm.Entity()
export class managmentcompanies {
    @typeorm.PrimaryGeneratedColumn()
    companyid: number

    @typeorm.OneToMany(type => usersgroups, group => group.company) groups: usersgroups[]

    @typeorm.OneToMany(type => appeals, appeal => appeal.company) appeals: appeals[]

    @typeorm.Column()
    name: string

    @typeorm.Column()
    password: string
};

@typeorm.Entity()
export class usersgroups {
    @typeorm.PrimaryGeneratedColumn()
    usergroupid: number

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
    chatmessageid: number

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
    appealsid: number

    @typeorm.ManyToOne(type => managmentcompanies, company => company.appeals) company: managmentcompanies

    @typeorm.ManyToOne(type => users, user => user.appeals) user: users

    @typeorm.Column()
    text: string

    @typeorm.Column()
    header: string
};