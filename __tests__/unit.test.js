// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

describe('isPhoneNumber', () => {
  test('is valid phone number using dashes', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });
  test('vis alid phone number using parentheses', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });
  test('is invalid phone number, incorrect ammount of numbers', () => {
    expect(isPhoneNumber('45-9834')).toBe(false);
  });
  test('is invalid phone number, wrong format', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
  });
});

describe('isEmail', () => {
  test('valid email', () => {
    expect(isEmail('test@example.com')).toBe(true);
  });
  test('valid email with underscore', () => {
    expect(isEmail('hello_world@site.org')).toBe(true);
  });
  test('invalid email, missing @', () => {
    expect(isEmail('invalid.com')).toBe(false);
  });
  test('invalid email, missing domain', () => {
    expect(isEmail('user@com')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('valid strong password', () => {
    expect(isStrongPassword('Abcd1234')).toBe(true);
  });
  test('valid short strong password', () => {
    expect(isStrongPassword('A123')).toBe(true);
  });
  test('invalid password, starts with number', () => {
    expect(isStrongPassword('1abcd')).toBe(false);
  });
  test('invalid password, too long', () => {
    expect(isStrongPassword('A_very_long_password')).toBe(false);
  });
});


describe('isDate', () => {
  test('valid date format', () => {
    expect(isDate('1/1/2020')).toBe(true);
  });
  test('valid double digit date', () => {
    expect(isDate('12/31/1999')).toBe(true);
  });
  test('invalid date, year iss not 4 digits', () => {
    expect(isDate('12/31/99')).toBe(false);
  });
  test('invalid date, using wrong separator', () => {
    expect(isDate('12-31-2020')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('valid short hex', () => {
    expect(isHexColor('#abc')).toBe(true);
  });
  test('valid long hex without #', () => {
    expect(isHexColor('abcdef')).toBe(false);
  });
  test('invalid hex, too long', () => {
    expect(isHexColor('#1234567')).toBe(false);
  });
  test('invalid hex, contains invalid letter', () => {
    expect(isHexColor('#ghijkl')).toBe(false);
  });
});

