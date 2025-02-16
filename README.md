# My Store ORM (node: 23.6.1 and npm: 11.1.0)

This Module is a part of the **MyStore** full-stack application, which consists of:

- **my-store-orm**: A module responsible for handling database transactions.(This repo)
- [**my-store-backend**](https://github.com/chetanyaag/my-store-backend): A module responsible for handling database transactions.
- [**my-store-app**](https://github.com/chetanyaag/my-store-app): A React-based frontend application that consumes this API and renders data to users.


## Prerequisite
- A Mysql server running on port 3306
- A database created with name mystore


## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/chetanyaag/my-store-orm.git
   ```
2. Navigate to the project directory:
   ```sh
   cd my-store-orm
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run migrations
    ```sh
    npm run migration:run
    ```
5. Seed Data (For Development)
    ```sh
    npm run seed
    ```

## Environment Variables

Create a `.env` file in the root directory and define necessary environment variables:

```sh
DB_HOST=localhost
DB_PORT=3306
DB_USER=mystore_user
DB_PASS=mystore_password
DB_NAME=mystore
```



## Buliding the Module
```sh
npm run Build
```


## Generate Migrations
```sh
npm run migration:generate
```
## Run Migrations
```sh
npm run migration:run
```

## Seed data
```sh
npm run seed
```





