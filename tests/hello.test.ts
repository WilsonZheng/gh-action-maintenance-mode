import { hello } from "../src/hello";

test('says hello to the given name', () => {
  expect(hello('World')).toBe('Hello, World!');
});