var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, OneToMany, PrimaryKey, Property, SerializedPrimaryKey, } from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";
import { Task } from "./Task.js";
let User = class User {
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    constructor(firstName, lastName, username, email, password) {
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.termsAccepted = false;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
    }
};
__decorate([
    PrimaryKey(),
    __metadata("design:type", ObjectId)
], User.prototype, "_id", void 0);
__decorate([
    SerializedPrimaryKey(),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    Property(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    Property({ onUpdate: () => new Date() }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    Property({ hidden: true }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    Property({ hidden: true }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    Property({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    Property({ name: "fullName" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "getFullName", null);
__decorate([
    Property(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    OneToMany(() => Task, task => task.user),
    __metadata("design:type", Array)
], User.prototype, "tasks", void 0);
__decorate([
    Property(),
    __metadata("design:type", Object)
], User.prototype, "termsAccepted", void 0);
User = __decorate([
    Entity({ collection: "users" }),
    __metadata("design:paramtypes", [String, String, String, String, String])
], User);
export { User };
