import { User } from './models/user.model';
import { Event } from './models/event.model';
export interface AppState {
  readonly user: User;
  readonly events: any[];
}