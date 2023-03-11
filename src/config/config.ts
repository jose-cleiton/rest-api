import dotenv from "dotenv";

dotenv.config();

const environment: string = process.env.NODE_ENV || "test";

interface Options {
  host: string;
  port: string;
  database: string;
  username: string;
  password: string;
  dialect: "mysql";
  dialectOptions: {
    timezone: string;
  };
  logging: boolean;
}

const suffix = {
  prod: "",
  production: "",
  dev: "-dev",
  development: "-dev",
  test: "-test",
};

const options: Options = {
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || "3306",
  database: `${process.env.DB_NAME || "delivery-app"}`,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "123456",
  dialect: "mysql",
  dialectOptions: {
    timezone: "Z",
  },
  logging: false,
};

export default {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};
