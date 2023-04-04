import {
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
  SerializedPrimaryKey,
} from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";
import { Task } from "./Task.js";

@Entity({ collection: "users" })
export class User {
  @PrimaryKey()
  _id!: ObjectId;

  @SerializedPrimaryKey()
  id!: string;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property({hidden: true})
  firstName!: string;

  @Property({hidden: true})
  lastName!: string;

  @Property({ unique: true })
  username!: string;

  // virtual fullName field
  @Property({ name: "fullName" })
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  @Property()
  email!: string;
    
  @Property()
  password!: string;

  @OneToMany(() => Task, task => task.user)
  tasks!: Task[];

  @Property()
  termsAccepted = false;

  constructor(
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
