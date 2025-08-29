import { Request, Response } from "express";
import { Employee } from "../entity/Employee";
import { getCurrentDate } from "../helpers/helpers";
import BiometricoDatasource from "../datasources/data-source-biometrico-db";


export class BiometricoController {
    static async getComodines(req: Request, res: Response) {
        const employees = await BiometricoDatasource.getRepository(Employee)
            .createQueryBuilder("employee")
            .innerJoinAndSelect(
                "employee.transactions",
                "transaction",
                "CAST(transaction.date AS DATE) = :date",
                { date: getCurrentDate() }
            )
            .andWhere("employee.position LIKE '%LDC%'")
            .getMany();

        res.send(employees);
    }
}