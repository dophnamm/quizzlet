import { useMemo, useState } from "react";
import { Button, Col, Divider, Row, Typography } from "antd";
import { shuffle } from "lodash";

import data from "./data.json";
import { IAnswer } from "../Result";
import { useNavigate } from "react-router-dom";

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

  const shuffleData = useMemo(() => {
    return shuffle(data).map((item) => {
      const newOptions = Object.entries(item.options).map(([ans, text]) => ({
        ans,
        text,
      }));

      return {
        ...item,
        options: shuffle(newOptions),
      };
    });
  }, []);

  const isDisabled = result.length !== data.length;

  return (
    <div className="container pt-8 p-5 mx-auto">
      <div className="wrapper">
        <div className="bg-gray-200 text-center">
          <h1 className="text-3xl font-bold underline py-3">Logistic</h1>
        </div>

        <div className="mt-12">
          {shuffleData.map((item, index) => {
            const activeItem = result.find((i) => item.id == i.id);

            return (
              <div key={item.id}>
                <Row gutter={[24, 24]}>
                  <Col className="gutter-row" span={24}>
                    <Typography className="font-bold">
                      {index + 1}: {item.text}
                    </Typography>
                  </Col>

                  <Col span={24}>
                    <Row gutter={[16, 16]}>
                      {item.options.map((ops) => {
                        return (
                          <Col span={12} key={ops.ans}>
                            <Button
                              type={
                                activeItem?.answer === ops.ans
                                  ? "primary"
                                  : "default"
                              }
                              size="large"
                              className="!w-full whitespace-break-spaces text-sm"
                              onClick={() => handleOnSelect(ops.ans, item.id)}
                            >
                              {ops.text}
                            </Button>
                          </Col>
                        );
                      })}
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
