import {Model} from './partial/model';
import {Row} from './partial/row';

export interface TableDTO {
    page: number; // Номер страницы
    size: number; // Размер страницы
    modelActive: Model; // Активная модель
    models: Model[]; // Массив доступных моделей
    rows: Row[]; // Массив записей
}
