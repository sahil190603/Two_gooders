"use client";

import React, { useState } from "react";
import styles from "../../Styles/ContactForm.module.css";
import { Form, Input, Button, Select, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { countries } from "../../Data/CountryCodes";
import { AnimatedSection } from "@/app/components/AnimatedSection";

const { Text } = Typography;
const { Option } = Select;

export default function ContactForm() {
  const [form] = Form.useForm();
  const [countryPrefix, setCountryPrefix] = useState("+972");

  const onFinish = (values) => {
    const prefix = values.country || countryPrefix;
    const fullPhone = `${prefix} ${values.phone || ""}`.trim();
    const payload = { ...values, phone: fullPhone };
    console.log("Form values:", payload);
  };

  return (
    <AnimatedSection delay={0.05} className={styles.page}>
      <div className={styles.centerBox}>
        <Form
          form={form}
          name="schedule_call"
          layout="vertical"
          onFinish={onFinish}
          className={styles.form}
          initialValues={{ country: countryPrefix }}
        >
          {/* Organization */}
          <AnimatedSection delay={0.1}>
            <Form.Item
              name="organization"
              rules={[
                { required: true, message: "Please enter organization name" },
              ]}
            >
              <Input id="organization" placeholder="Name of Organization" />
            </Form.Item>
          </AnimatedSection>

          {/* URL */}
          <AnimatedSection delay={0.12}>
            <Form.Item name="url">
              <Input id="url" placeholder="URL" />
            </Form.Item>
          </AnimatedSection>

          {/* Email */}
          <AnimatedSection delay={0.14}>
            <Form.Item
              name="email"
              rules={[{ type: "email", message: "Please enter a valid email" }]}
            >
              <Input id="contact-email" placeholder="Contact Email" />
            </Form.Item>
          </AnimatedSection>

          {/* Contact Name */}
          <AnimatedSection delay={0.16}>
            <Form.Item name="contactName">
              <Input id="contact-name" placeholder="Contact Name" />
            </Form.Item>
          </AnimatedSection>

          {/* Phone Row */}
          <AnimatedSection delay={0.18}>
            <div
              className={styles.phoneRow}
              style={{ display: "flex", gap: 12 }}
            >
              {/* Country code select */}
              <Form.Item name="country" style={{ marginBottom: 0, width: 140 }}>
                <Select
                  id="country-select"
                  optionLabelProp="label"
                  suffixIcon={<DownOutlined />}
                  onChange={(val) => setCountryPrefix(val)}
                  showSearch
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                >
                  {countries.map((c) => (
                    <Option
                      key={c.code}
                      value={c.dial_code}
                      label={`${c.name} ${c.dial_code}`}
                    >
                      <span className={styles.selectOption}>
                        <span className={styles.code}>{c.code}</span>
                        <span
                          className={styles.countryName}
                          style={{ marginLeft: 8 }}
                        >
                          {c.name}
                        </span>
                        <span
                          className={styles.countryCode}
                          style={{ marginLeft: "auto" }}
                        >
                          {c.dial_code}
                        </span>
                      </span>
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              {/* Phone input */}
              <Form.Item
                name="phone"
                style={{ marginBottom: 0, flex: 1 }}
                rules={[
                  { required: true, message: "Please enter phone number" },
                ]}
              >
                <Input
                  id="phone-input"
                  placeholder="Contact Phone"
                  aria-label="Contact phone"
                />
              </Form.Item>
            </div>
          </AnimatedSection>

          {/* Submit button */}
          <AnimatedSection delay={0.2}>
            <Form.Item style={{ marginTop: 16 }}>
              <Button
                htmlType="submit"
                block
                className={styles.submitBtn}
                id="submit-btn"
              >
                Submit
              </Button>
            </Form.Item>
          </AnimatedSection>

          {/* Disclaimer */}
          <AnimatedSection delay={0.22}>
            <div className={styles.disclaimer} style={{ marginTop: 8 }}>
              <Text  style={{ fontSize: 13 }}>
                By signing up, you agree to receive marketing messages at the
                phone number or email provided. Msg and data rates may apply.
                View our privacy policy and terms of service for more info.
              </Text>
            </div>
          </AnimatedSection>
        </Form>
      </div>
    </AnimatedSection>
  );
}
