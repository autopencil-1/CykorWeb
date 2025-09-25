import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react"; // icons for toggle
import "./App.css";

export default function CyKorSite() {
  const [darkMode, setDarkMode] = useState(true);

  // Persist theme across refresh
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      {/* Header */}
      <header className="max-w-6xl mx-auto flex items-center justify-end p-4">
        {/* Light/Dark toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 p-2 rounded-lg border border-gray-400 dark:border-gray-600"
        >
          {darkMode ? (
            <Sun className="h-5 w-5 text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5 text-gray-700" />
          )}
        </button>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <Card className="bg-gray-100 text-black dark:bg-neutral-900 dark:text-white border border-gray-300 dark:border-neutral-800 p-6 rounded-2xl shadow-md transition-colors duration-300">
          <div className="flex items-center justify-center mb-3">
            <div className="bg-white dark:bg-white rounded-lg p-2">
              <img
                src="/[CyKor]logo.png"
                alt="CyKor Logo"
                className="h-16 w-auto"
              />
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            <span className="text-red-500">Cy</span>ber security club at{" "}
            <span className="text-red-500">Kor</span>ea university
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We are a student-run cybersecurity club at Korea University. We
            learn together, run workshops, give conference-level talks, and
            compete internationally in CTFs.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button className="bg-black text-white dark:bg-white dark:text-black font-semibold hover:opacity-80 transition">
              <a href="#join">Join / Apply</a>
            </Button>
            <Button variant="outline" className="border-gray-400 text-black dark:border-gray-600 dark:text-white font-semibold">
              <a href="#achievements">Achievements</a>
            </Button>
            <Button variant="outline" className="border-gray-400 text-black dark:border-gray-600 dark:text-white font-semibold">
              <a href="https://blog.cykor.kr" target="_blank" rel="noopener">
                Blog
              </a>
            </Button>
          </div>
        </Card>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-8">
        <Card className="bg-gray-100 text-black dark:bg-neutral-900 dark:text-white border border-gray-300 dark:border-neutral-800 p-6 rounded-2xl transition-colors duration-300">
          <h3 className="text-lg md:text-xl font-bold mb-3">About CyKor</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            CyKor is a long-established hacking club at Korea University. Members
            study cybersecurity, develop projects, and compete in domestic &
            international Capture The Flag (CTF) competitions.
          </p>
          <div className="text-gray-600 dark:text-gray-400 space-y-1 max-w-md mx-auto">
            <div className="flex items-center text-left">
              <span className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full mr-3 flex-shrink-0 mt-2"></span>
              <span>CTF practice & competitions</span>
            </div>
            <div className="flex items-center text-left">
              <span className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full mr-3 flex-shrink-0 mt-2"></span>
              <span>Seminars and conference-level talks</span>
            </div>
            <div className="flex items-center text-left">
              <span className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full mr-3 flex-shrink-0 mt-2"></span>
              <span>Collaborations with other university clubs</span>
            </div>
          </div>
        </Card>
      </section>

      {/* Achievements */}
      <section id="achievements" className="max-w-6xl mx-auto px-4 py-8">
        <Card className="bg-gray-100 text-black dark:bg-neutral-900 dark:text-white border border-gray-300 dark:border-neutral-800 p-6 rounded-2xl transition-colors duration-300">
          <h3 className="text-lg md:text-xl font-bold mb-3">Selected Achievements</h3>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <div>
              <p className="font-semibold">CODEGATE CTF 2024 — General</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2nd place (USACykor), Seoul</p>
            </div>
            <div>
              <p className="font-semibold">Blue Water CTF 2024</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2nd place (CyKor)</p>
            </div>
            <div>
              <p className="font-semibold">HackTheon 2024</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2nd place (04vs02)</p>
            </div>
            <div>
              <p className="font-semibold">PoX CTF Final 2022</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">1st place (마라탕)</p>
            </div>
            <div>
              <p className="font-semibold">DEFCON 26 CTF — 2018</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">1st place (DEFKOR00T), Las Vegas</p>
            </div>
            <p className="text-sm mt-3">
              See full list:{" "}
              <a
                href="https://blog.cykor.kr/about/"
                className="text-gray-700 dark:text-gray-300 hover:underline"
                target="_blank"
                rel="noopener"
              >
                blog.cykor.kr/about
              </a>
            </p>
          </div>
        </Card>
      </section>

      {/* Join */}
      <section id="join" className="max-w-6xl mx-auto px-4 py-8">
        <Card className="bg-gray-100 text-black dark:bg-neutral-900 dark:text-white border border-gray-300 dark:border-neutral-800 p-6 rounded-2xl transition-colors duration-300">
          <h3 className="text-lg md:text-xl font-bold mb-3">How to Join</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            New members normally start as trainees and follow a year-long
            educational track. CyKor also runs a Recruit CTF as part of the
            selection process.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button className="bg-black text-white dark:bg-white dark:text-black font-semibold hover:opacity-80 transition">
              <a
                href="https://forms.gle/3kGidGjZGfkU2NgP6"
                target="_blank"
                rel="noopener"
              >
                Apply Now
              </a>
            </Button>
            <Button variant="outline" className="border-gray-400 text-black dark:border-gray-600 dark:text-white font-semibold">
              <a href="https://blog.cykor.kr" target="_blank" rel="noopener">
                Blog
              </a>
            </Button>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
            Contact:{" "}
            <a href="mailto:contact@cykor.kr" className="text-gray-800 dark:text-gray-300">
              contact@cykor.kr
            </a>{" "}
            · X:{" "}
            <a
              href="https://x.com/CyKorKU"
              target="_blank"
              rel="noopener"
              className="text-gray-800 dark:text-gray-300"
            >
              @CyKorKU
            </a>
          </p>
        </Card>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-500 text-sm transition-colors duration-300">
        © CyKor 2025 — Korea University hacking & cybersecurity club.
      </footer>
    </div>
  );
}