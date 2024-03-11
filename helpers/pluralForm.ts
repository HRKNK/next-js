/**
 *  Плюральное склонение слов.
 *
 * @param {number} value Текущее числовое значение (кол-во);
 * @param {[string, string, string]} titles Tuple-массив вариаций склонений;
 * @return Возвращает склоненный результат: 'string';
 *
 * @example
 * const plural = pluralForm(10, ['отзыв', 'отзыва', 'отзывов']);
 */

export const pluralForm = (
  number: number,
  titles: [string, string, string]
): string => {
  const cases: number[] = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};
