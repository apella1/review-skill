import {
  Entity,
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

  @Property()
  firstName!: string;

  @Property()
  lastName!: string;

  @Property({ unique: true })
  username!: string;

  @Property()
  email!: string;

  @Property()
  tasks!: Task[];

  @Property()
  termsAccepted = false;

  constructor(
    firstName: string,
    lastName: string,
    username: string,
    email: string
  ) {
    this.firstName = firstName;
    this.lastName = this.lastName;
    this.username = this.username;
    this.email = email;
  }
}
