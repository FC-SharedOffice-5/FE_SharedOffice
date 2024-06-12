import { HttpHandler } from 'msw';
import { authHandlers } from './auth-handlers';
import { memberHandlers } from './member-handlers';
import { scheduleHandlers } from './schedule-handlers';

const handlers: HttpHandler[] = [...authHandlers, ...memberHandlers, ...scheduleHandlers];

export { handlers };
