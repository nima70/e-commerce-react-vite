import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  BeforeInsert,
  BeforeUpdate,
  AfterLoad,
} from "typeorm";
import * as bcrypt from "bcrypt";
@Entity()
@Unique(["email"])
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({ default: false })
  isAdmin!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  private tempPassword?: string;
  @AfterLoad()
  private loadTempPassword(): void {
    this.tempPassword = this.password;
  }
  // 🔐 Hash password before insert or update
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password !== this.tempPassword) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
  }

  // ✅ Method to compare password
  async comparePassword(enteredPassword: string): Promise<boolean> {
    return await bcrypt.compare(enteredPassword, this.password);
  }
}
