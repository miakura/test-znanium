import {Field} from "./field";

export interface Model {
    name: string; // Наименование сущности (модели)
    description: string; // Описание
    fields: Field[]; // Массив полей
}