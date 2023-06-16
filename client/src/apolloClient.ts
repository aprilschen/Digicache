import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://digicache-docker-server.us-west-1.elasticbeanstalk.com/',
  cache: new InMemoryCache(),
});

export default client;