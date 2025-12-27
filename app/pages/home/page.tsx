import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/shared/Button";
import {
  mockCamps,
  mockTestimonials,
  isEarlyBird,
  getCurrentPrice,
} from "@/lib/mockData";
import styles from "@/styles/Home.module.scss";

const HomePage = () => {
  const earlyBird = isEarlyBird();
  const currYear = new Date().toLocaleString("en-US", {
    timeZone: "America/Denver",
    year: "numeric",
  });

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Where Kids Learn to <span className={styles.highlight}>Code</span>{" "}
            and <span className={styles.highlight}>Create</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Empower the next generation of innovators with coding camps in Bountiful, Utah. Expert-led classes in AI, Python, and block-based coding for kids.
          </p>
          {earlyBird && (
            <div className={styles.earlyBirdBanner}>
              🎉 Early Bird Pricing Available Until April 1, {currYear}
            </div>
          )}
          <div className={styles.heroCtas}>
            <Link href="/camps">
              <Button variant="primary" size="lg">
                View Coding Camps
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                About Us
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/tali-tech-client-assets/en/a-girl-smiling-headphones-laptop.png"
            alt="Kids learning to code at TaliTech"
            width={600}
            height={400}
            priority
            style={{ objectFit: "cover", borderRadius: "1rem" }}
          />
        </div>
      </section>

      {/* Camps Overview Grid */}
      <section className={styles.campsSection}>
        <h2 className={styles.sectionTitle}>Summer {currYear} Camps</h2>
        <p className={styles.sectionSubtitle}>
          Three progressive weeks designed to take students from beginner to
          advanced
        </p>
        <div className={styles.campsGrid}>
          {mockCamps.map((camp) => {
            const currentPrice = getCurrentPrice(camp);
            const available = camp.maxStudents - camp.currentEnrolled;

            return (
              <div key={camp.id} className={styles.campCard}>
                <div className={styles.campHeader}>
                  <span className={styles.weekBadge}>
                    Week {camp.weekNumber}
                  </span>
                  <span className={styles.availabilityBadge}>
                    {available} of {camp.maxStudents} spots left
                  </span>
                </div>
                <h3 className={styles.campName}>{camp.name}</h3>
                <p className={styles.campDates}>
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
                </p>
                <p className={styles.campTime}>
                  {camp.timeStart} - {camp.timeEnd} | Ages {camp.ageMin}-
                  {camp.ageMax}
                </p>
                <p className={styles.campDescription}>{camp.description}</p>
                <div className={styles.campTools}>
                  {camp.tools.map((tool, index) => (
                    <span key={index} className={styles.toolTag}>
                      {tool}
                    </span>
                  ))}
                </div>
                <div className={styles.campPricing}>
                  <div className={styles.price}>
                    <span className={styles.priceAmount}>${currentPrice}</span>
                    <span className={styles.priceLabel}> + $35 supplies</span>
                  </div>
                  {earlyBird && camp.price > currentPrice && (
                    <span className={styles.savings}>
                      Save ${camp.price - currentPrice}!
                    </span>
                  )}
                </div>
                <Link href="/camps">
                  <Button variant="primary" fullWidth>
                    Learn More
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why TaliTech Section */}
      <section className={styles.whySection}>
        <h2 className={styles.sectionTitle}>Why TaliTech?</h2>
        <div className={styles.whyGrid}>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>👨‍🏫</div>
            <h3>Expert Instructors</h3>
            <p>
              Learn from software engineers and data scientists with real-world
              experience and advanced degrees in CS and Analytics.
            </p>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>🎮</div>
            <h3>Project-Based Learning</h3>
            <p>
              Build real games, apps, and AI projects. No boring lectures - just
              hands-on coding and creativity.
            </p>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>👥</div>
            <h3>Small Class Sizes</h3>
            <p>
              Maximum 10 students per camp ensures personalized attention and
              support for every child.
            </p>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>🚀</div>
            <h3>Age-Appropriate Curriculum</h3>
            <p>
              Carefully designed programs that meet students where they are and
              challenge them to grow.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <h2 className={styles.sectionTitle}>What Parents Are Saying</h2>
        <div className={styles.testimonialsGrid}>
          {mockTestimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.rating}>
                {"⭐".repeat(testimonial.rating)}
              </div>
              <p className={styles.testimonialText}>
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className={styles.testimonialAuthor}>— {testimonial.author}</p>
            </div>
          ))}
        </div>
        <p className={styles.moreReviews}>
          See more reviews on{" "}
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google
          </a>
        </p>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>
          Ready to Give Your Child a Head Start?
        </h2>
        <p className={styles.ctaSubtitle}>
          {earlyBird
            ? "Register now and save with early bird pricing!"
            : "Spaces are limited - register today!"}
        </p>
        <Link href="/camps">
          <Button variant="primary" size="lg">
            View Available Camps
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
