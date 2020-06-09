import {Action} from "./action";

export interface Row {
    fieldValues: string[][]; // Значение полей записи. Массив вида <Наименование поля>:<Значение поля>
    action: Action; // Действие, которое необходимо выполнить с записью
}
