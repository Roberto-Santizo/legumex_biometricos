import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Employee } from "./Employee";

@Entity({ name: "acc_transaction" })
export class Transaction {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column({ name: 'last_name' })
    code: string;

    @Column({ name: 'pin' })
    position: string;

    @Column({ name: 'event_time' })
    date: Date

    @ManyToOne(() => Employee, employee => employee.transactions)
    @JoinColumn({ name: "pin", referencedColumnName: "code" }) 
    employee: Employee;
}
