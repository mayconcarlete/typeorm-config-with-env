# typeorm-config-with-env
Initial config to work with dotenv variables in typeorm. 
![alt text](https://user-images.githubusercontent.com/6265325/93808860-f18f2800-fc22-11ea-8a7b-8de1e8185c6d.png)

# Command List:

### Create an entity:
npx typeorm entity:create -n [Name]

### Create a migration:
npm run typeorm migration:create -- -n [Name]

### Run migration:
npm run typeorm migration:run

### Run migration by class creation
npm run typeorm migration:generate -- -n[name]


