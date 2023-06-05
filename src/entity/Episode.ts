import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Episode {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}
