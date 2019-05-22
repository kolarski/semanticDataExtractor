import Recognizer from "./../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize Integer", () => {
  expect(recognizer.recognize("1231")).toStrictEqual([
    {
      sanatizedValue: 1231,
      type: "integer",
      value: "1231"
    }
  ]);
});
