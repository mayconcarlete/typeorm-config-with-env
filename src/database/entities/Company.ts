import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne} from "typeorm";
import { User } from "./User";

@Entity('companies')
export class Company {
    @PrimaryGeneratedColumn('uuid')
    id!:string

    @Column({default:true, nullable:false})
    isActive!:boolean

    @Column({length:50, nullable:false, unique:true})
    name!:string

    @Column({length:50, nullable:true})
    web_site!:string
    
    @Column({length:15, nullable:false})
    phoneNumber!:string

    @CreateDateColumn({name:'created_At'})
    createdAt!:Date

    @UpdateDateColumn({name:'updated_At'})
    updatedAt!:Date
    
    @ManyToOne(type => User, user => user.companies, {nullable:false})
    user_owner!:User
}
