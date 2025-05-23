import { UniqueEntityID } from "./unique-entity-id";

export class Entity<T> {
  private _id: UniqueEntityID;
  protected props: T;

  constructor(props: T, id?: string) {
    this._id = new UniqueEntityID(id);
    this.props = props;
  }

  get id(): string {
    return this._id.toString();
  }
}
