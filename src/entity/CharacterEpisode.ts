import {Entity, OneToOne, PrimaryColumn} from "typeorm"
import {Character} from "./Character";
import {Episode} from "./Episode";
@Entity()
export class CharacterEpisode {

    @PrimaryColumn({type: "integer"})
    @OneToOne(() => Character)
    character_id: number

    @OneToOne(() => Episode)
    @PrimaryColumn({type: "integer"})
    episode_id: number
}
