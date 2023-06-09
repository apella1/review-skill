var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, ManyToOne, PrimaryKey, Property, SerializedPrimaryKey, } from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";
import { User } from "./User.js";
let Task = class Task {
    constructor(title, body) {
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.title = title;
        this.body = body;
    }
};
__decorate([
    PrimaryKey(),
    __metadata("design:type", ObjectId)
], Task.prototype, "_id", void 0);
__decorate([
    SerializedPrimaryKey(),
    __metadata("design:type", String)
], Task.prototype, "id", void 0);
__decorate([
    ManyToOne(),
    __metadata("design:type", User)
], Task.prototype, "user", void 0);
__decorate([
    Property(),
    __metadata("design:type", Date)
], Task.prototype, "createdAt", void 0);
__decorate([
    Property({ onUpdate: () => new Date() }),
    __metadata("design:type", Date)
], Task.prototype, "updatedAt", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], Task.prototype, "body", void 0);
Task = __decorate([
    Entity({ collection: "tasks" }),
    __metadata("design:paramtypes", [String, String])
], Task);
export { Task };
