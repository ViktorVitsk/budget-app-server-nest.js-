import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '@src/user/entities/user.entity';
import { Category } from '@src/category/entities/category.entity';

@Entity()
export class Transaction {
  @PrimaryColumn({ name: 'transaction_id' })
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  type: string;

  @ManyToOne(() => User, (user) => user.transaction)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Category, (category) => category.transactions)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column()
  amount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
