import { Form, Select } from "antd";
import { useEffect, useState } from "react";
import {
  getListArtist,
  getListCategories,
  getListRestrictions,
} from "../../../../../store/thunks";

export const EventAboutComp = () => {
  const [listCategories, setListCategories] = useState<any[]>([]);
  const [listArtist, setListArtist] = useState<any[]>([]);
  const [listRestrictions, setListRestrictions] = useState<any[]>([]);

  useEffect(() => {
    fechListCategories();
    fechListArtits();
    fechListRestrictions();
  }, []);

  const fechListCategories = async () => {
    const res = await getListCategories();
    setListCategories(res);
  };

  const fechListArtits = async () => {
    const res = await getListArtist();
    setListArtist(res);
  };

  const fechListRestrictions = async () => {
    const res = await getListRestrictions();
    setListRestrictions(res);
  };

  return (
    <>
      <div className="col-span-1 flex items-center justify-between">
        <h1 className="text-2xl font-bold bebasNeue">About This Event</h1>
      </div>
      <div className="bg-nav p-3! rounded-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
          <div className="col-span-1">
            <Form.Item
              className="m-0!"
              name="categories"
              label={<span className="text-white">Category</span>}
              labelCol={{ span: 24, className: "pb-0!" }}
            >
              <Select
                showSearch
                placeholder="Select Query"
                className="customSelect"
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={listCategories}
              />
            </Form.Item>
          </div>
          <div className="col-span-1">
            <Form.Item
              className="m-0!"
              name="artists"
              label={<span className="text-white">Artists</span>}
              labelCol={{ span: 24, className: "pb-0!" }}
              rules={[
                {
                  required: true,
                  message: "Please input the artists!",
                },
              ]}
            >
              <Select
                showSearch
                mode="multiple"
                placeholder="Select Query"
                className="customSelect"
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={listArtist}
              />
            </Form.Item>
          </div>
          <div className="col-span-1">
            <Form.Item
              className="m-0!"
              name="age_restrictions"
              label={<span className="text-white">Age Restrictions</span>}
              labelCol={{ span: 24, className: "pb-0!" }}
              rules={[
                {
                  required: true,
                  message: "Please input the age restrictions!",
                },
              ]}
            >
              <Select
                showSearch
                placeholder="Select Query"
                className="customSelect"
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={listRestrictions}
              />
            </Form.Item>
          </div>
        </div>
      </div>
    </>
  );
};
