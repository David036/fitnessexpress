import { MigrationInterface, QueryRunner } from "typeorm";

export class init1664549587021 implements MigrationInterface {
    name = 'init1664549587021'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`trainings\` ADD \`hours\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`trainings\` DROP COLUMN \`hours\``);
    }

}
