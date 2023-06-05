import { MigrationInterface, QueryRunner } from "typeorm"

export class InitialDb1685699954916 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS \`character\` (id INT AUTOINCREMENT, \`name\` VARCHAR(255), planet VARCHAR(255), PRIMARY KEY (ID))
        `);

        await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS \`episode\` (id INT AUTOINCREMENT, \`name\` VARCHAR(255), PRIMARY KEY (ID))
        `);

        await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS \`character_episode\` (character_id INT, \`episode_id\` INT, PRIMARY KEY (character_id,episode_id))
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE \`character\`;
        `);
        await queryRunner.query(`
            DROP TABLE \`episode\`;
        `);
        await queryRunner.query(`
            DROP TABLE \`character_episode\`;
        `);
    }

}
