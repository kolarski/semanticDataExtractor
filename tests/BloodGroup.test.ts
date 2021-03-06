import Recognizer from "../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize correct blood group string", () => {
  expect(recognizer.recognize("A+", ["blood-group"])).toStrictEqual([
    {
      data: {
        string: "A+"
      },
      type: "blood-group",
      value: "A+"
    }
  ]);
  expect(recognizer.recognize("B-", ["blood-group"])).toStrictEqual([
    {
      data: {
        string: "B-"
      },
      type: "blood-group",
      value: "B-"
    }
  ]);
  expect(recognizer.recognize("AB+")).toStrictEqual([
    {
      data: {
        string: "AB+"
      },
      type: "blood-group",
      value: "AB+"
    }
  ]);
});

test("Do not recognize wrong blood group string", () => {
  expect(recognizer.recognize("AA")).toStrictEqual([]);
  expect(recognizer.recognize("BC")).toStrictEqual([]);
  expect(recognizer.recognize("AZ-")).toStrictEqual([]);
});
