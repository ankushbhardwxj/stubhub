import {Subjects, Publisher, OrderCancelledEvent} from "@ankushstubhub/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
