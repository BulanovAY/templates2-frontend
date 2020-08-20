import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('сотрудник', 'Сотрудникs');
inflector.irregular('проекта', 'Проектаs');
inflector.irregular('задача', 'Задачаs');
inflector.irregular('проект', 'Проектs');

export default {};
