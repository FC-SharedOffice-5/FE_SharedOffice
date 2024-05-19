import { HttpHandler } from 'msw';
import { authHandlers } from './auth-handlers';

const handlers: HttpHandler[] = [...authHandlers];

export { handlers };
