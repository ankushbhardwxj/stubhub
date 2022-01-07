import {Publisher, OrderCreatedEvent, Subjects} from "@ankushstubhub/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
