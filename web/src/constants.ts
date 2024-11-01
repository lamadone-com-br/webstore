import { createContextId } from '@builder.io/qwik';
import { AppState } from './types';

export const APP_STATE = createContextId<AppState>('app_state');
export const AUTH_TOKEN = 'authToken';
export const CUSTOMER_NOT_DEFINED_ID = 'CUSTOMER_NOT_DEFINED_ID';
export const HEADER_AUTH_TOKEN_KEY = 'salime-auth-token';
export const IMAGE_RESOLUTIONS = [1000, 800, 600, 400];
export const HOMEPAGE_IMAGE = '/homepage.webp';
export const DEFAULT_METADATA_URL = 'http://localhost:3000';
export const DEFAULT_METADATA_TITLE = 'Salime';
export const DEFAULT_METADATA_DESCRIPTION =
	'Salime Web Store';
export const DEFAULT_METADATA_IMAGE = 'https://salime.com.br/images/social-image.png';
export const DEFAULT_LOCALE = 'en';
// TODO: replace DEV_API and PROD_API with your dev and prod API urls.
export const DEV_API = 'http://localhost:3000';
export const PROD_API = 'http://localhost:3000';
export const LOCAL_API = 'http://localhost:3000';
