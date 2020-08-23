import { IEnvironment } from './environment.interface';

export const environment: IEnvironment = {
  production: false,
  backUrl: 'http://localhost:8080',
  backVersion: 'v1',
  gutendexApiUrl: 'http://gutendex.williamlambert.fr',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error'; // Included with Angular CLI.
