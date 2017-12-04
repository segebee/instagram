const {
    Environment,
    Network,
    RecordSource,
    Store,
  } = require('relay-runtime');
  
  const source = new RecordSource();
  const store = new Store(source);
  const network = Network.create((operation, variables) => {
    return fetch('https://api.graph.cool/relay/v1/cjanmyfqh009m01466z6diuaj', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    })
    .then(response => {
        return response.json()
    })
  });
  
  const environment = new Environment({
    network,
    store,
  });

  export default environment