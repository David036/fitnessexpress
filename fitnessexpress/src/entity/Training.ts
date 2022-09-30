import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({ name:'trainings' })
export class Training {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    username: string;

    @Column()
    age: number;

    @Column()
    exercise:string;

    @Column()
    difficulty:string;

    @Column()
    hours:number;
}