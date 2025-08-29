import BiometricoDatasource from "./datasources/data-source-biometrico-db";
import AppDatasource from "./datasources/data-source-app-db";
import express from "express";
import colors from "colors";
import biometricRoutes from "./routes/biometricRoutes";
import appRoutes from "./routes/appRoutes";
import authRoutes from "./routes/authRoutes";

const app = express();

app.use(express.json());
app.use('/biometrico', biometricRoutes);
app.use('/auth', authRoutes);
app.use('/token', appRoutes);


BiometricoDatasource.initialize().then(async () => {
    console.log(colors.green.bold('conectado a la base de datos'));
}).catch(error => console.log(colors.red.bold(error.message)));


AppDatasource.initialize().then(async () => {
    console.log(colors.green.bold('Conectado postgress'));
}).catch(error => console.log(colors.red.bold(error.message)));;

export default app;