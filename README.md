Search Box with Suggestions 
* search box has dropdown button to show what people mostly search
* search box show suggestion when user typed more than 2 letter 
- currently sample example has only for suggestion by user typing, are 'tr', 'tru' and  'trui'. ( /api/_search.get.json)
- any dropdowns will close when user click other contents
- there will be button to reset user typing on search ( when user type any, will be shown )
- when user type enter or click icon to submit , it will goes to 
/shop?${some+search+words}






Install
To install project dependencies execute the following command:

yarn install
To run the application use the following command:

yarn start
This command will run two scripts concurrently:

react-scripts start
canned -p 5000 ./api/\"
The User Interface should be running on http://localhost:3000/

A dummy API endpoint should be available on the same port.

e.g.

curl -s http://localhost:3000/search
Run tests
To run tests use the following command:

yarn test
Run storybook
To run storybook use the following command:

yarn storybook