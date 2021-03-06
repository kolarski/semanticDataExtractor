import Recognizer from "../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize simple float", () => {
  expect(recognizer.recognize("32.5931", ["float" /* percentage */])).toStrictEqual([
    {
      data: { float: 32.5931 },
      type: "float",
      value: "32.5931"
    }
  ]);
});

test("Recognize float with ,", () => {
  expect(recognizer.recognize("32,5931", ["float" /*skip geo-location*/])).toStrictEqual([
    {
      data: { float: 32.5931 },
      type: "float",
      value: "32,5931"
    }
  ]);
});
