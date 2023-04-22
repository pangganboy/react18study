import React, { useEffect, useState } from "react";
import "./index.scss";
import logo from "@/assets/logo.png";
import {
  Button,
  Form,
  Input,
  Space,
  Switch,
  Dropdown,
  Col,
  Row,
  Divider,
} from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  AlignCenterOutlined,
} from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
export default function MusicPlay() {
  const [renderLink, setRenderLink] = useState(false);
  const [renderNav, setRenderNav] = useState(false);
  const rules = [{ required: true }];
  const [form] = useForm();

  const items = [
    {
      key: "Logout",
      label: "Logout",
    },
    {
      key: "My Party Space",
      label: "My Party Space",
    },
    {
      key: "Party settings",
      label: "Party settings",
    },
  ];

  const submit = () => {
    form.validateFields().then((values) => {
      console.log("提交表单submit", values);
    });
  };

  const back = () => {
    console.log("返回主页party space");
  };

  const menuClick = ({ key }) => {
    console.log("菜单项点击", key);
  };

  useEffect(() => {
    if (document.body.clientWidth > 390) setRenderNav(true);
    else setRenderNav(false);
  }, [document.body.clientWidth]);
  return (
    <div className="party-space-seting bese">
      <header>
        <img src={logo} />
        {renderNav ? (
          <div>
            <Space>
              <Button type="link">My Party Space</Button>
              <Button type="link">Party settings</Button>
              <Button type="primary" shape="round">
                Logout
              </Button>
            </Space>
          </div>
        ) : (
          <div>
            <Dropdown
              getPopupContainer={(e) => e}
              trigger={["click"]}
              menu={{ items, onClick: menuClick }}
            >
              <Button icon={<AlignCenterOutlined />}></Button>
            </Dropdown>
          </div>
        )}
      </header>
      <div className="main">
        {renderNav ? (<Row>
        <Col xs={{  span: 5,offset: 1, }} lg={{span: 6, offset: 2,}}>
           <div style={{width:'200px'}}>
            呀呀呀
           </div>
          </Col>
          <Col xs={{  span: 11,offset: 1, }} lg={{span: 6, offset: 2,}}>
            <div style={{width:'200px'}}>
            呀呀呀
           </div>
          </Col>
          <Col xs={{  span: 5,offset: 1, }} lg={{span: 6, offset: 2,}}>
          <div style={{width:'200px'}}>
          呀呀呀
          </div>
          </Col>
        </Row>):('')}
      </div>
      <div className="footer"></div>
    </div>
  );
}
