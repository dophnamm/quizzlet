import { useMemo, useState } from "react";
import { Button, Col, Divider, Row, Typography } from "antd";
import { shuffle } from "lodash";

import data from "./data.json";
import { IAnswer } from "../Result";
import { useNavigate } from "react-router-dom";

interface IOptions {
  a: string;
  b: string;
  c: string;
  d: string;
}

interface IData {
  id: string;
  text: string;
  options: IOptions;
}

const Questions = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<IAnswer[]>([]);

  const handleOnSelect = (answer: string, id: string) => {
    const clone = [...result];
    const index = clone.findIndex((item) => item.id === id);

    if (index >= 0) {
      clone[index] = { id, answer };
    } else {
      clone.push({ id, answer });
    }

    setResult(clone);
  };

  const handleSubmit = () => {
    const dataJson = JSON.stringify(result);

    localStorage.setItem("answers", dataJson);

    navigate("/result");
  };

  const currentData: IData[] = data as IData[];
  const shuffleData = useMemo(() => {
    return shuffle(currentData);
  }, [currentData]);

  const isDisabled = result.length !== currentData.length;

  return (
    <div className="container pt-8 p-5 mx-auto">
      <div className="wrapper">
        <div className="bg-gray-200 text-center">
          <h1 className="text-3xl font-bold underline py-3">Logistic</h1>
        </div>

        <div className="mt-12">
          {shuffleData.map((item) => {
            const activeItem = result.find((i) => item.id == i.id);

            return (
              <div key={item.id}>
                <Row gutter={[24, 24]}>
                  <Col className="gutter-row" span={24}>
                    <Typography className="font-bold">
                      {item.id} {item.text}
                    </Typography>
                  </Col>

                  <Col span={24}>
                    <Row gutter={[16, 16]}>
                      <Col span={12}>
                        <Button
                          type={
                            activeItem?.answer === "a" ? "primary" : "default"
                          }
                          size="large"
                          className="!w-full whitespace-break-spaces text-sm"
                          onClick={() => handleOnSelect("a", item.id)}
                        >
                          {item.options.a}
                        </Button>
                      </Col>

                      <Col span={12}>
                        <Button
                          type={
                            activeItem?.answer === "b" ? "primary" : "default"
                          }
                          size="large"
                          className="!w-full whitespace-break-spaces text-sm"
                          onClick={() => handleOnSelect("b", item.id)}
                        >
                          {item.options.b}
                        </Button>
                      </Col>

                      <Col span={12}>
                        <Button
                          type={
                            activeItem?.answer === "c" ? "primary" : "default"
                          }
                          size="large"
                          className="!w-full whitespace-break-spaces text-sm"
                          onClick={() => handleOnSelect("c", item.id)}
                        >
                          {item.options.c}
                        </Button>
                      </Col>

                      <Col span={12}>
                        <Button
                          type={
                            activeItem?.answer === "d" ? "primary" : "default"
                          }
                          size="large"
                          className="!w-full whitespace-break-spaces text-sm"
                          onClick={() => handleOnSelect("d", item.id)}
                        >
                          {item.options.d}
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
          <Button
            disabled={isDisabled}
            danger
            type="primary"
            size="large"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
