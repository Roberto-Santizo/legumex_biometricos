import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Token {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    token: string;

    @CreateDateColumn()
    createdAt: Date;

    @OneToOne(() => User, user => user.token)
    @JoinColumn({ name: "user_id" })
    user: User;
}
