To start the app run ``yarn start``;

NOTE: you need to set api key that I've sent to you via email in the src/constants.ts (googleMapsApiKey);

DOCUMENTATION:
- Technologies was used:
1. Redux + thunk - This application is not so big and could be written without state managers, but I'd prefer to use one because without redux you need to manage state in the state of components or use context for it and I think that it could be confused 
2. Google Maps - I haven't worked with maps API before so I chose most popular one 

- Technologies could be used:
1. Reselect for making redux selector work quirkier (result caching, etc.);
2. Axious - I used native fetch for my API calls but axios is more flexible 

- What I want to change/add:
1. All requirements that I haven't implement (add a filter, add UI marker for errors)
2. Write Unit tests: I would start from covering my utils and API functionality, then I would move to redux actions and the components 
3. Add properly typing - in my implementation you will see a lot of any and I want to get rid of them 
4. Add formatting for data that comes from the API and save in the store only data that is needed for front end. 