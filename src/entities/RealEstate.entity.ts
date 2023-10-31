import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Schedule from './Schedule.entity';
import Address from './Address.entity';
import Category from './Category.entity';

@Entity('realEstates')
export default class RealEstate {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ default: 0 })
  sold: boolean;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
  })
  value: number;

  @Column()
  size: number;

  @Column({ type: 'date' })
  createdtAt: string;

  @Column({ type: 'date' })
  updatedAt: string;

  @OneToMany(
    () => Schedule,
    (schedule) => schedule.realEstate
  )
  schedules: Schedule[];

  @OneToOne(
    () => Address,
    (address) => address.realEstate
  )
  @JoinColumn()
  address: Address;

  @ManyToOne(
    () => Category,
    (category) => category.realEstates
  )
  category: Category;
}
