import Link from "next/link";
import Button from "@/app/components/shared/Button";
import { mockCamps, isEarlyBird, getCurrentPrice } from "@/lib/mockData";
import styles from "@/styles/Camps.module.scss";

import type { Metadata } from "next";

export const currYear = new Date().toLocaleString("en-US", {
    timeZone: "America/Denver",
    year: "numeric",
  })

export const metadata: Metadata = {
  title: `Summer Camp ${currYear} | TaliTech`,
  description: `Explore our three progressive coding camps for ages 7-16. From block-based coding to Python and AI.`,
};

export default function CampsPage() {
  const earlyBird = isEarlyBird();

  return (
    <div className={styles.campsPage}>
      {/* Header Section */}
      <section className={styles.header}>
        <h1 className={styles.title}>Summer {currYear} Coding Camps</h1>
        <p className={styles.subtitle}>
          Three progressive weeks designed for grades 2-11. Small class sizes
          (max 10 students), expert instructors, and hands-on project-based
          learning.
        </p>
        {earlyBird && (
          <div className={styles.earlyBirdAlert}>
            🎉 <strong>Early Bird Special!</strong> Register before April 1,
            {currYear} and save $30 per week.
          </div>
        )}
      </section>

      {/* Camp Details */}
      <section className={styles.campsSection}>
        {mockCamps.map((camp) => {
          const currentPrice = getCurrentPrice(camp);
          const available = camp.maxStudents - camp.currentEnrolled;
          const percentFull = (camp.currentEnrolled / camp.maxStudents) * 100;
          const urgencyLevel =
            percentFull > 70 ? "high" : percentFull > 40 ? "medium" : "low";

          return (
            <div key={camp.id} className={styles.campCard}>
              <div className={styles.campImagePlaceholder}>
                {/* Stock photo placeholder */}
                <div className={styles.weekNumber}>Week {camp.weekNumber}</div>
              </div>

              <div className={styles.campContent}>
                <div className={styles.campHeader}>
                  <h2 className={styles.campName}>{camp.name}</h2>
                  <div
                    className={`${styles.availability} ${styles[urgencyLevel]}`}
                  >
                    <span className={styles.availabilityNumber}>
                      {available}
                    </span>
                    <span className={styles.availabilityText}>
                      {" "}
                      of {camp.maxStudents} spots left
                    </span>
                  </div>
                </div>

                <div className={styles.campMeta}>
                  <div className={styles.metaItem}>
                    <strong>📅 Dates:</strong>{" "}
                    {new Date(camp.startDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    -{" "}
                    {new Date(camp.endDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <div className={styles.metaItem}>
                    <strong>⏰ Time:</strong> {camp.timeStart} - {camp.timeEnd}
                  </div>
                  <div className={styles.metaItem}>
                    <strong>👥 Ages:</strong> {camp.ageMin}-{camp.ageMax}{" "}
                    (Grades {camp.gradeMin}-{camp.gradeMax})
                  </div>
                  <div className={styles.metaItem}>
                    <strong>📍 Location:</strong> Bountiful, Utah
                  </div>
                </div>

                <p className={styles.campDescription}>{camp.description}</p>

                <div className={styles.campDetails}>
                  <div className={styles.detailSection}>
                    <h4>🛠️ Tools & Technologies</h4>
                    <div className={styles.toolsList}>
                      {camp.tools.map((tool, i) => (
                        <span key={i} className={styles.toolBadge}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.detailSection}>
                    <h4>🎯 Learning Focus</h4>
                    <ul className={styles.focusList}>
                      {camp.focus.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {camp.prerequisites && (
                    <div className={styles.detailSection}>
                      <h4>📋 Prerequisites</h4>
                      <p className={styles.prerequisites}>
                        {camp.prerequisites}
                      </p>
                    </div>
                  )}
                </div>

                <div className={styles.pricing}>
                  <div className={styles.priceInfo}>
                    <div className={styles.mainPrice}>
                      <span className={styles.priceAmount}>
                        ${currentPrice}
                      </span>
                      <span className={styles.priceLabel}>per week</span>
                    </div>
                    <div className={styles.additionalFees}>
                      <div>+ ${camp.supplyFee} supply fee</div>
                      <div>+ $100 aftercare (optional, 4-6pm)</div>
                    </div>
                    {earlyBird && camp.price > currentPrice && (
                      <div className={styles.savingsBadge}>
                        Save ${camp.price - currentPrice}!
                      </div>
                    )}
                  </div>

                  <div className={styles.campActions}>
                    <Button variant="primary" size="lg" fullWidth disabled>
                      Registration Opens Soon
                    </Button>
                    <Link href="/camps/curriculum">
                      <Button variant="outline" size="md" fullWidth>
                        View Detailed Curriculum
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Additional Info Section */}
      <section className={styles.infoSection}>
        <div className={styles.infoCard}>
          <h3>💳 Payment Options</h3>
          <ul>
            <li>Full payment due before first day of camp</li>
            <li>Installment plans available (minimum $50 deposit)</li>
            <li>Secure online payment via Square</li>
            <li>In-person payment accepted (Square or Venmo)</li>
          </ul>
        </div>

        <div className={styles.infoCard}>
          <h3>🎁 Discounts Available</h3>
          <ul>
            <li>10% off each student&apos;s 2nd+ week registration</li>
            <li>Applies per student independently</li>
            <li>Automatically calculated at checkout</li>
            <li>Cannot be combined with other offers</li>
          </ul>
        </div>

        <div className={styles.infoCard}>
          <h3>❓ Questions?</h3>
          <p>
            Have questions about our camps?{" "}
            <Link href="/about">Contact us</Link> or check out our detailed
            curriculum page for more information about what your child will
            learn.
          </p>
        </div>
      </section>
    </div>
  );
}
