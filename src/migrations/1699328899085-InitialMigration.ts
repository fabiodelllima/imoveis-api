import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1699328899085
  implements MigrationInterface
{
  name = 'InitialMigration1699328899085';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "realEstates" ALTER COLUMN "sold" SET DEFAULT '0'`
    );
    await queryRunner.query(
      `ALTER TABLE "realEstates" ALTER COLUMN "createdAt" SET DEFAULT now()`
    );
    await queryRunner.query(
      `ALTER TABLE "realEstates" ALTER COLUMN "updatedAt" SET DEFAULT now()`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "realEstates" ALTER COLUMN "updatedAt" DROP DEFAULT`
    );
    await queryRunner.query(
      `ALTER TABLE "realEstates" ALTER COLUMN "createdAt" DROP DEFAULT`
    );
    await queryRunner.query(
      `ALTER TABLE "realEstates" ALTER COLUMN "sold" SET DEFAULT false`
    );
  }
}
