"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "antd/dist/reset.css";
import { Button, Divider } from "antd";
import { AnimatedSection } from "./components/AnimatedSection";

const lines = [
  "Your selected charity receives half the profit from your purchase. ONE GOODER",
  "Additional funds from every sale go to our favorite charities. TWO GOODER",
  "Many of our supplies support additional charities. Gifts That Give Back!",
];

export default function HomePage() {
  const router = useRouter();
  const go = (path) => router.push(path);

  return (
    <main>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-image-single" aria-hidden="true">
          <img src="/images/home3.jpg" alt="People giving and gifting" />

          <div
            className="hero-quote-container gift-tag-quote"
            aria-hidden="true"
          >
            <div className="quote-background">
              <h3 id="hero-heading" className="hero-quote">
                "Alone we can do so little, together we can do so much"
              </h3>
              <cite className="quote-author">— Helen Keller</cite>
            </div>
          </div>
        </div>

        <div className="hero-overlay">
          <div className="hero-main-content" aria-live="polite">
            <h2 className="hero-mainline">
              Make Two Gooders your go-to shop for gifts for any reason!
            </h2>

            <div className="hero-lines">
              {lines.map((text, i) => (
                <p key={i} className="hero-line">
                  <span className="hero-line-text">{text}</span>
                </p>
              ))}
            </div>

            <h3 className="hero-summary">
              One + Two + Three = Gifts That Give Back!
            </h3>
          </div>
        </div>
        <div
          className="hero-join-wrapper"
          role="region"
          aria-label="Join actions"
        >
          <div className="hero-join-title">Join Us In Doing Some Good!</div>

          <div className="hero-join-bar">
            <div className="hero-join-buttons">
              <div className="hero-btn-tagline">
                Start shopping to suppot charity
              </div>
              <Button
                size="small"
                className="hero-join-btn"
                onClick={() => go("/shop")}
              >
                Shop Here
              </Button>
              <Divider type="vertical" className="divider" />
              <div className="hero-btn-tagline">
                Boost your business and the good we all do!
              </div>
              <Button
                size="small"
                className="hero-join-btn"
                onClick={() => go("/apply-supplier")}
              >
                Become a Supplier
              </Button>
              <Divider type="vertical" className="divider" />
              <div className="hero-btn-tagline">
                Learn more about our fundraising program
              </div>
              <Button
                size="small"
                className="hero-join-btn"
                onClick={() => go("/charities")}
              >
                Fundraise
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your existing content remains the same */}
      <div className="wrapper">
        <div className="row">
          <AnimatedSection
            delay={0.1}
            className="block small"
            role="region"
            aria-label="Gift giving with purpose"
          >
            <img src="/images/gift_giving.jpg" alt="Gift giving with purpose" />
            <AnimatedSection delay={0.3} className="overlay">
              <h2>Gift Giving With Purpose</h2>
              <p>
                <strong>Before:</strong> Gifts only profited companies.
              </p>
              <p>
                <strong>Now:</strong> Profits support your charity.
              </p>
            </AnimatedSection>
          </AnimatedSection>

          <AnimatedSection
            delay={0.2}
            className="block big"
            role="region"
            aria-label="Why we do it"
          >
            <img src="/images/why_wo_do.webp" alt="Community outreach" />
            <AnimatedSection delay={0.4} className="overlay">
              <h2>Why We Do It</h2>
              <ul>
                <li>
                  <strong>Shoppers:</strong> Make the world brighter.
                </li>
                <li>
                  <strong>Suppliers:</strong> Sell with real purpose.
                </li>
                <li>
                  <strong>Charities:</strong> Easily raise more funds.
                </li>
              </ul>
            </AnimatedSection>
          </AnimatedSection>
        </div>

        {/* FUNDRAISING CARD */}
        <AnimatedSection
          delay={0.3}
          className="card"
          role="region"
          aria-label="How fundraising works"
        >
          <div className="content">
            <h2>How Fundraising Works</h2>
            <p>
              We give charities support to drive sales through their affiliate
              store. They receive half the profit from sales.
            </p>
            <p>
              We also donate a portion of our overall profits to additional
              charities.
            </p>
          </div>
          <div className="image">
            <img
              src="/images/fund_raising.webp"
              alt="Fundraising illustration"
            />
          </div>
        </AnimatedSection>

        {/* FOUR COMPONENTS SECTION */}
        <AnimatedSection
          className="four-components"
          aria-labelledby="four-components-heading"
        >
          <div className="four-components__wrap">
            <div className="four-components__title">
              <h2 id="four-components-heading">
                FOUR CRITICAL COMPONENTS TO DOING ALL THIS GOOD
              </h2>
            </div>

            <div className="four-components__card">
              <section className="four-components__row row-70-30">
                <AnimatedSection
                  delay={0.1}
                  className="four-components__col wholesale"
                  aria-labelledby="wholesale-title"
                >
                  <h3 id="wholesale-title">Wholesale Suppliers and Artisans</h3>
                  <p>
                    We look for quality products that appeal to all audiences.
                    We strive to find unique products you can't find anywhere
                    else, this includes art and handmade products from local
                    artisans. In some cases, they are one of a kind! We ask our
                    suppliers to commit to certain efforts to provide the
                    highest level of standards to support customer service and
                    the best pricing to provide for the highest possible profit
                    to support philanthropic efforts.
                  </p>
                </AnimatedSection>

                <AnimatedSection
                  delay={0.2}
                  className="four-components__col"
                  aria-labelledby="charities-title"
                >
                  <h3 id="charities-title">Charities</h3>
                  <p>
                    We ask charities to do a few easy things with the resources
                    we provide to them. In exchange we give them a chunk of the
                    profits. We do most of the work, they receive most of the
                    benefit!
                  </p>
                </AnimatedSection>
              </section>

              <section className="four-components__row row-30-70">
                <AnimatedSection
                  delay={0.2}
                  className="four-components__col"
                  aria-labelledby="shoppers-title"
                >
                  <h3 id="shoppers-title">Shoppers</h3>
                  <p>
                    We ask shoppers to turn to Two Gooders as their primary
                    source for gift giving. We may not always be the least
                    expensive or ship the quickest, but we definitely do the
                    most good with the profits from your purchases! The benefits
                    are worth their wait/weight in donations.
                  </p>
                </AnimatedSection>

                <AnimatedSection
                  delay={0.3}
                  className="four-components__col team"
                  aria-labelledby="team-title"
                >
                  <h3 id="team-title">The Two Gooders Team</h3>
                  <p>
                    We pledge to drive company profitability to enable the
                    highest amount of fundraising dollars possible. We add to
                    the fundraising totals with traditional marketing efforts to
                    drive shoppers to our site to purchase gifts on behalf of
                    the charity partners participating in the fundraising
                    program. We operate in a team culture that fosters equality
                    and rewards efforts of kindness, compassion, inclusion,
                    local & global community service and philanthropic
                    endeavors.
                  </p>
                </AnimatedSection>
              </section>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
