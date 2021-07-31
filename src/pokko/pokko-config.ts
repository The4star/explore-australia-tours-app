import {
  ApolloClient,
  ApolloClientOptions,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import getEnvVariables from "../../env";

const envVariables = getEnvVariables()
const config = {
  environment: envVariables.POKKO_ENVIRONMENT!,
  project: envVariables.POKKO_PROJECT!,
  token: envVariables.POKKO_TOKEN!,
};

const options: ApolloClientOptions<NormalizedCacheObject> = {
  cache: new InMemoryCache(),

  headers: {
    "X-Token": config.token,
  },

  uri: `https://au-syd1.pokko.io/${config.project}/${config.environment}/graphql`,
};

export const client = new ApolloClient(options);
