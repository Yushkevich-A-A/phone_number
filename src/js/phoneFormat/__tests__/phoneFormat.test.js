import { phoneFormat } from '../phoneFormat';

test('приведение введенного номера телефона к единому формату ', () => {
  const result = phoneFormat('8 (927) 000-00-00');

  expect(result).toBe('+79270000000');
});

test('приведение введенного номера телефона к единому формату', () => {
  const result = phoneFormat('+7 960 000 00 00');

  expect(result).toBe('+79600000000');
});

test('приведение введенного номера телефона к единому формату', () => {
  const result = phoneFormat('+86 000 000 0000');

  expect(result).toBe('+860000000000');
});
test('пробрасывается ошибка если номер телефона не начинается с "8" или "+"', () => {
  expect(() => phoneFormat('6 000 000 0000')).toThrowError();
});
