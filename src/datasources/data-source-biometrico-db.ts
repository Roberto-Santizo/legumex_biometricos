import "reflect-metadata";
import { DataSource } from "typeorm";
import { Employee } from "../entity/Employee";
import { Transaction } from "../entity/Transaction";
import dotenv from "dotenv";

dotenv.config();

const BiometricoDatasource = new DataSource({
    type: "mssql",
    url: process.env.DB_BIOMETRICO_URL,
    entities: [Employee, Transaction],
    synchronize: false,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
});

export default BiometricoDatasource;
