import { Column, Entity, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class BlogPost {
    @Column({ type: "text" })
    postContent!: string;

    @CreateDateColumn({ type: "timestamp" })
    created_at!: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at!: Date;
}
