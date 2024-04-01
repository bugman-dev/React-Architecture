import { privateRoute } from './private.routing';
import { publicRoute } from './public.routing';

export const routingConfig = {
  private: privateRoute,
  public: publicRoute,
  defaultRedirect: '/'
};

export const AuthKey = 'ACCESS_TOKEN';
