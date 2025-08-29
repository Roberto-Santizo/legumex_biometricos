import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { Transaction } from "./Transaction";

@Entity({ name: "pers_person" })
export class Employee {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column({ name: 'pin' })
    code: string;

    @Column({ name: 'last_name' })
    position: string;

    @OneToMany(() => Transaction, transaction => transaction.employee)
    transactions: Transaction[];

}
