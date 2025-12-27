'use client';
import { useState } from 'react';
import Link from 'next/link';
import Button from '@/app/components/shared/Button';
import { mockCamps } from '@/lib/mockData';
import styles from '@/styles/Curriculum.module.scss';

export default function CurriculumPage() {
  const [activeTab, setActiveTab] = useState(1);

  const activeCamp = mockCamps.find(camp => camp.weekNumber === activeTab);

  return (
    <div className={styles.curriculumPage}>
      {/* Header */}
      <section className={styles.header}>
        <h1 className={styles.title}>Camp Curriculum</h1>
        <p className={styles.subtitle}>
          Detailed breakdown of what your child will learn in each week.
          All curricula are carefully tailored to meet the developmental needs of each age group.
        </p>
      </section>

      {/* Tab Navigation */}
      <section className={styles.tabSection}>
        <div className={styles.tabNav}>
          {mockCamps.map((camp) => (
            <button
              key={camp.id}
              className={`${styles.tabButton} ${activeTab === camp.weekNumber ? styles.active : ''}`}
              onClick={() => setActiveTab(camp.weekNumber)}
            >
              <span className={styles.tabWeek}>Week {camp.weekNumber}</span>
              <span className={styles.tabName}>{camp.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Curriculum Content */}
      {activeCamp && (
        <section className={styles.content}>
          <div className={styles.contentHeader}>
            <h2 className={styles.campTitle}>{activeCamp.name}</h2>
            <div className={styles.campMeta}>
              <span>Ages {activeCamp.ageMin}-{activeCamp.ageMax}</span>
              <span>•</span>
              <span>Grades {activeCamp.gradeMin}-{activeCamp.gradeMax}</span>
              <span>•</span>
              <span>{new Date(activeCamp.startDate).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric' 
              })} - {new Date(activeCamp.endDate).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}</span>
            </div>
          </div>

          <div className={styles.curriculumGrid}>
            {/* Overview */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>📋 Overview</h3>
              <p className={styles.sectionContent}>{activeCamp.description}</p>
            </div>

            {/* Tools & Technologies */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>🛠️ Tools & Technologies</h3>
              <div className={styles.toolsBreakdown}>
                {activeCamp.weekNumber === 1 && (
                  <>
                    <div className={styles.toolItem}>
                      <strong>Scratch (70%)</strong>
                      <p>Visual block-based programming language designed by MIT. Perfect for beginners to learn fundamental programming concepts without typing code.</p>
                    </div>
                    <div className={styles.toolItem}>
                      <strong>Minecraft Education (30%)</strong>
                      <p>Educational version of Minecraft with built-in coding features. Students learn sequences and basic logic through game-based challenges.</p>
                    </div>
                  </>
                )}
                {activeCamp.weekNumber === 2 && (
                  <>
                    <div className={styles.toolItem}>
                      <strong>Minecraft Education (70%)</strong>
                      <p>Block-to-Python bridge. Students start with visual blocks and gradually transition to seeing and writing real Python code.</p>
                    </div>
                    <div className={styles.toolItem}>
                      <strong>Google Colab (30%)</strong>
                      <p>Introduction to professional Python development environment. Students write their first text-based programs in a real coding interface.</p>
                    </div>
                  </>
                )}
                {activeCamp.weekNumber === 3 && (
                  <>
                    <div className={styles.toolItem}>
                      <strong>Google Colab (100%)</strong>
                      <p>Professional Python development environment used by real software engineers and data scientists worldwide.</p>
                    </div>
                    <div className={styles.toolItem}>
                      <strong>ChatGPT API</strong>
                      <p>Students learn to integrate AI into their projects, building applications that can understand and generate human-like text.</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Learning Focus */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>🎯 Learning Focus</h3>
              <ul className={styles.focusList}>
                {activeCamp.focus.map((item, index) => (
                  <li key={index}>
                    <strong>{item}</strong>
                    {activeCamp.weekNumber === 1 && index === 0 && <p>Understanding how to order instructions for computers to follow.</p>}
                    {activeCamp.weekNumber === 1 && index === 1 && <p>Learning to repeat actions efficiently using loop structures.</p>}
                    {activeCamp.weekNumber === 1 && index === 2 && <p>Making programs respond to user actions and game events.</p>}
                    {activeCamp.weekNumber === 1 && index === 3 && <p>Developing problem-solving skills by finding and fixing errors.</p>}
                    {activeCamp.weekNumber === 2 && index === 0 && <p>Creating reusable code blocks that perform specific tasks.</p>}
                    {activeCamp.weekNumber === 2 && index === 1 && <p>Storing and manipulating data in your programs.</p>}
                    {activeCamp.weekNumber === 2 && index === 2 && <p>Understanding how real programming languages work.</p>}
                    {activeCamp.weekNumber === 3 && index === 0 && <p>Lists, dictionaries, and organizing complex data.</p>}
                    {activeCamp.weekNumber === 3 && index === 1 && <p>Understanding how AI and machine learning work.</p>}
                    {activeCamp.weekNumber === 3 && index === 2 && <p>Building real applications that solve actual problems.</p>}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sample Projects */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>🚀 Sample Projects</h3>
              <div className={styles.projectsList}>
                {activeCamp.weekNumber === 1 && (
                  <>
                    <div className={styles.projectItem}>
                      <h4>Interactive Story Game</h4>
                      <p>Create a choose-your-own-adventure game with multiple endings using Scratch&apos;s event system and conditional logic.</p>
                    </div>
                    <div className={styles.projectItem}>
                      <h4>Animated Character</h4>
                      <p>Build an animated sprite that responds to keyboard controls and interacts with other objects on screen.</p>
                    </div>
                    <div className={styles.projectItem}>
                      <h4>Minecraft Maze Challenge</h4>
                      <p>Design and code a maze that teaches sequences and problem-solving through gameplay.</p>
                    </div>
                  </>
                )}
                {activeCamp.weekNumber === 2 && (
                  <>
                    <div className={styles.projectItem}>
                      <h4>Python Calculator</h4>
                      <p>Build a functional calculator using Python functions and variables to perform mathematical operations.</p>
                    </div>
                    <div className={styles.projectItem}>
                      <h4>Text Adventure Game</h4>
                      <p>Create a text-based adventure game using Python logic, functions, and user input handling.</p>
                    </div>
                    <div className={styles.projectItem}>
                      <h4>Minecraft Python Bot</h4>
                      <p>Program an automated builder in Minecraft using Python code instead of blocks.</p>
                    </div>
                  </>
                )}
                {activeCamp.weekNumber === 3 && (
                  <>
                    <div className={styles.projectItem}>
                      <h4>AI Chatbot</h4>
                      <p>Build an intelligent chatbot that uses the ChatGPT API to have natural conversations with users.</p>
                    </div>
                    <div className={styles.projectItem}>
                      <h4>Data Analyzer</h4>
                      <p>Create a program that processes and visualizes data using Python libraries like pandas and matplotlib.</p>
                    </div>
                    <div className={styles.projectItem}>
                      <h4>Personal AI Assistant</h4>
                      <p>Develop a custom AI assistant that can answer questions, summarize text, or generate creative content.</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Prerequisites */}
            {activeCamp.prerequisites && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>📋 Prerequisites</h3>
                <div className={styles.prerequisitesBox}>
                  {activeCamp.prerequisites}
                </div>
              </div>
            )}

            {/* Daily Schedule */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>⏰ Typical Daily Schedule</h3>
              <div className={styles.schedule}>
                <div className={styles.scheduleItem}>
                  <span className={styles.scheduleTime}>9:00 - 9:15</span>
                  <span className={styles.scheduleActivity}>Arrival & Daily Challenge</span>
                </div>
                <div className={styles.scheduleItem}>
                  <span className={styles.scheduleTime}>9:15 - 10:00</span>
                  <span className={styles.scheduleActivity}>Concept Introduction & Live Coding</span>
                </div>
                <div className={styles.scheduleItem}>
                  <span className={styles.scheduleTime}>10:00 - 10:45</span>
                  <span className={styles.scheduleActivity}>Hands-On Project Work</span>
                </div>
                <div className={styles.scheduleItem}>
                  <span className={styles.scheduleTime}>10:45 - 11:00</span>
                  <span className={styles.scheduleActivity}>Break & Snack</span>
                </div>
                <div className={styles.scheduleItem}>
                  <span className={styles.scheduleTime}>11:00 - 11:45</span>
                  <span className={styles.scheduleActivity}>Continued Project Development</span>
                </div>
                <div className={styles.scheduleItem}>
                  <span className={styles.scheduleTime}>11:45 - 12:00</span>
                  <span className={styles.scheduleActivity}>Show & Tell / Wrap-up</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.cta}>
            <Link href="/camps">
              <Button variant="primary" size="lg">
                Back to Camp Details
              </Button>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
