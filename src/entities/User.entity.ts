import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Schedule from './Schedule.entity';
import { getRounds, hashSync } from 'bcryptjs';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column({ default: false })
  admin: boolean;

  @Column({ length: 120 })
  password: string;

  @CreateDateColumn({ type: 'date' })
  createdAt: string;

  @CreateDateColumn({ type: 'date' })
  updatedAt: string;

  @CreateDateColumn({ type: 'date', nullable: true })
  deletedAt: string | null;

  @OneToMany(() => Schedule, (schedules) => schedules.user)
  schedules: Schedule[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const hasRounds: number = getRounds(this.password);

    if (!hasRounds) this.password = hashSync(this.password, 10);
  }
}
