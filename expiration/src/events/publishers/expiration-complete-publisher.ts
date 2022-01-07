import {ExpirationCompleteEvent, Subjects, Publisher} from "@ankushstubhub/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;

}
