"use client";

import React, { useState, useEffect } from "react";
import "antd/dist/reset.css";
import { Layout, Menu, Button, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "../../Styles/Header.module.css";

const { Header: AntHeader } = Layout;

const TopHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideBanner, setHideBanner] = useState(false);

  const navItems = [
    { key: "shop-here", label: <Link href="/shop">Shop Here</Link> },
    { key: "about-us", label: <Link href="/about">About Us</Link> },
    { key: "charities", label: <Link href="/charities">Charities</Link> },
    {
      key: "fundraising-program",
      label: <Link href="/fundraising-program">Fundraising Program</Link>,
    },
    { key: "contact-us", label: <Link href="/contact">Contact Us</Link> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
      setHideBanner(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const BANNER_HEIGHT = 35;

  return (
    <>
      {/* Promo Banner */}
      <div
        className={`${styles.promoBanner} ${
          hideBanner ? styles.hideBanner : ""
        }`}
        style={{ height: `${BANNER_HEIGHT}px` }}
      >
        STOCK UP ON GIFTS TO HAVE ON HAND. DO MORE GOOD.
      </div>

      {/* Fixed Header */}
      <AntHeader
        className={styles.antHeaderWrapper}
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          zIndex: 1001,
          top: hideBanner ? "10px" : `${BANNER_HEIGHT + 10}px`,
          padding: "0 10px",
          background: "transparent",
          height: "auto",
          lineHeight: "normal",
          transition: "top 0.3s ease",
        }}
      >
        <div
          className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
          style={{ margin: "0 auto" }}
        >
          <div className={styles.inner}>
            <div className={styles.left}>
              <Menu
                mode="horizontal"
                items={navItems}
                className={styles.menu}
                selectable={false}
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: "20px",
                  fontWeight: 600
                }}
              />
            </div>

            <Link href="/" className={styles.center}>
              <span className={styles.logo}>Two gooders</span>
            </Link>

            <div className={styles.right}>
              <Space size="middle" align="center">
                <Button
                  type="text"
                  icon={<UserOutlined style={{ fontSize: 16 }} />}
                />
              </Space>
            </div>
          </div>
        </div>
      </AntHeader>
    </>
  );
};

export default TopHeader;
