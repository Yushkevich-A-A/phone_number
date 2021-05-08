export function phoneFormat(data) {
  if (!/^[87+]/.test(data)) {
    throw new Error('номер телефона должен начинаться с "8" или "+"');
  }

  return data.replace(/^8/, '7').replace(/[^\d]*/g, '').replace(/^(.)/g, '+$1');
}
