import {Publisher, Subjects, TicketCreatedEvent} from "@ankushstubhub/common";
export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
