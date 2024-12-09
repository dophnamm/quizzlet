import { useEffect, useState } from "react";
import { Button, Col, Divider, Row, Typography } from "antd";

import data from "../Questions/data.json";
import { useNavigate } from "react-router-dom";

export interface IAnswer {
  id: string;
  answer: string;
}

const Result = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<IAnswer[]>([]);
  const answers = [
    { id: "Câu 1", answer: "b" },
    { id: "Câu 2", answer: "c" },
    { id: "Câu 3", answer: "c" },
    { id: "Câu 4", answer: "c" },
    { id: "Câu 5", answer: "c" },
    { id: "Câu 6", answer: "c" },
    { id: "Câu 7", answer: "b" },
    { id: "Câu 8", answer: "b" },
    { id: "Câu 9", answer: "c" },
    { id: "Câu 10", answer: "d" },
    { id: "Câu 11", answer: "c" },
    { id: "Câu 12", answer: "c" },
    { id: "Câu 13", answer: "b" },
    { id: "Câu 14", answer: "d" },
    { id: "Câu 15", answer: "b" },
    { id: "Câu 16", answer: "d" },
    { id: "Câu 17", answer: "a" },
    { id: "Câu 18", answer: "d" },
    { id: "Câu 19", answer: "c" },
    { id: "Câu 20", answer: "a" },
    { id: "Câu 21", answer: "b" },
    { id: "Câu 22", answer: "d" },
    { id: "Câu 23", answer: "b" },
    { id: "Câu 24", answer: "c" },
    { id: "Câu 25", answer: "d" },
    { id: "Câu 26", answer: "c" },
    { id: "Câu 27", answer: "a" },
    { id: "Câu 28", answer: "c" },
    { id: "Câu 29", answer: "c" },
    { id: "Câu 30", answer: "a" },
    { id: "Câu 31", answer: "d" },
    { id: "Câu 32", answer: "b" },
    { id: "Câu 33", answer: "d" },
    { id: "Câu 34", answer: "c" },
    { id: "Câu 35", answer: "d" },
    { id: "Câu 36", answer: "a" },
    { id: "Câu 37", answer: "d" },
    { id: "Câu 38", answer: "c" },
    { id: "Câu 39", answer: "d" },
    { id: "Câu 40", answer: "b" },
    { id: "Câu 41", answer: "c" },
    { id: "Câu 42", answer: "c" },
    { id: "Câu 43", answer: "a" },
    { id: "Câu 44", answer: "b" },
    { id: "Câu 45", answer: "a" },
    { id: "Câu 46", answer: "b" },
    { id: "Câu 47", answer: "b" },
    { id: "Câu 48", answer: "a" },
    { id: "Câu 49", answer: "d" },
    { id: "Câu 50", answer: "b" },
    { id: "Câu 51", answer: "b" },
    { id: "Câu 52", answer: "d" },
    { id: "Câu 53", answer: "c" },
    { id: "Câu 54", answer: "a" },
    { id: "Câu 55", answer: "b" },
    { id: "Câu 56", answer: "b" },
    { id: "Câu 57", answer: "d" },
    { id: "Câu 58", answer: "b" },
    { id: "Câu 59", answer: "c" },
    { id: "Câu 60", answer: "b" },
  ];

  useEffect(() => {
    const dataJson = JSON.parse(localStorage.getItem("answers") ?? "[]");

    setResult(dataJson);
  }, []);

  const handleSubmit = () => {
    localStorage.removeItem("answers");
    navigate("/");
  };

  const correctAnswers = result.filter((item) => {
    const ans = answers.find((i) => item.id === i.id);

    return ans?.answer === item.answer;
  });

  return (
    <div className="container pt-8 p-5 mx-auto">
      <div className="wrapper">
        <div className="bg-gray-200 text-center">
          <h1 className="text-3xl font-bold underline py-3">Result</h1>
        </div>

        <div className="mt-12 p-5 bg-gray-300 text-center">
          <Typography.Title level={2} className="!mb-0">
            {correctAnswers.length}/{data.length}
          </Typography.Title>
        </div>

        <div className="mt-12">
          {data.map((item) => {
            const currentResult = result.find((it) => it.id === item.id);
            const currentAnswer = answers.find((it) => it.id === item.id);
            const correct = currentResult?.answer === currentAnswer?.answer;

            return (
              <div key={item.id}>
                <Row gutter={[24, 24]}>
                  <Col className="gutter-row" span={24}>
                    <Typography className="font-bold">- {item.text}</Typography>
                  </Col>

                  <Col span={24}>
                    <Row gutter={[16, 16]}>
                      <Col span={12}>
                        <Button
                          size="large"
                          className="!w-full whitespace-break-spaces text-sm"
                          danger={currentResult?.answer === "a" && !correct}
                          type={
                            currentAnswer?.answer === "a"
                              ? "primary"
                              : "default"
                          }
                        >
                          a. {item.options.a}
                        </Button>
                      </Col>

                      <Col span={12}>
                        <Button
                          size="large"
                          className="!w-full whitespace-break-spaces text-sm"
                          danger={currentResult?.answer === "b" && !correct}
                          type={
                            currentAnswer?.answer === "b"
                              ? "primary"
                              : "default"
                          }
                        >
                          b. {item.options.b}
                        </Button>
                      </Col>

                      <Col span={12}>
                        <Button
                          size="large"
                          className="!w-full whitespace-break-spaces text-sm"
                          danger={currentResult?.answer === "c" && !correct}
                          type={
                            currentAnswer?.answer === "c"
                              ? "primary"
                              : "default"
                          }
                        >
                          c. {item.options.c}
                        </Button>
                      </Col>

                      <Col span={12}>
                        <Button
                          size="large"
                          className="!w-full whitespace-break-spaces text-sm"
                          danger={currentResult?.answer === "d" && !correct}
                          type={
                            currentAnswer?.answer === "d"
                              ? "primary"
                              : "default"
                          }
                        >
                          d. {item.options.d}
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Divider className="!bg-gray-500" />
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button danger type="primary" size="large" onClick={handleSubmit}>
            Test Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Result;
