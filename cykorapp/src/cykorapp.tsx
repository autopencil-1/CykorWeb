import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import './App.css';

export default function CyKorSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100">
      {/* Header */}
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
    <div className="bg-white rounded-lg p-2">
      <img
        src="/[CyKor]logo.png"   
        alt="CyKor Logo"
        className="h-24 w-auto"
      />
    </div>
    <nav className="hidden md:flex gap-6 text-base md:text-lg font-medium">
      <a href="#about" className="hover:text-cyan-400">
        About
      </a>
      <a href="#achievements" className="hover:text-cyan-400">
        Achievements
      </a>
      <a href="#join" className="hover:text-cyan-400">
        Join
      </a>
      <a
        href="https://blog.cykor.kr"
        target="_blank"
        rel="noopener"
        className="hover:text-cyan-400"
      >
        Blog
      </a>
    </nav>
  </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <Card className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl shadow-lg">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-3">
            <span className="text-red-400">CyKor</span> 
          </h2>
          <h3 className="text-white text-2xl md:text-3xl font-semibold mb-3">
            <span className="text-red-400">Cy</span>ber security club at <span className="text-red-400">Kor</span>ea university
          </h3>
          <p className="text-slate-300 mb-4">
            We are a student-run cybersecurity club at Korea University. We
            learn together, run workshops, give conference-level talks, and
            compete internationally in CTFs.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold">
              <a href="#join"><span className="text-white">Join / Apply</span></a>
            </Button>
            <Button variant="outline" className="text-white font-semibold">
              <a href="#achievements">Achievements</a>
            </Button>
            <Button variant="outline" className="text-white font-semibold">
              <a href="https://blog.cykor.kr" target="_blank" rel="noopener">
                Blog
              </a>
            </Button>
          </div>
        </Card>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-8">
        <Card className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl">
          <h3 className="text-cyan-400 text-xl md:text-xl font-bold mb-3">About CyKor</h3>
          <p className="text-slate-300 mb-4">
            CyKor is a long-established hacking club at Korea University. Members
            study cybersecurity, develop projects, and compete in domestic &
            international Capture The Flag (CTF) competitions.
          </p>
          <ul className="list-disc list-inside text-slate-400 space-y-1">
            <li>CTF practice & competitions (web, crypto, reversing, pwn, blockchain)</li>
            <li>Seminars and conference-level talks by members</li>
            <li>Collaborations with other university clubs</li>
          </ul>
        </Card>
      </section>

      {/* Achievements */}
      <section id="achievements" className="max-w-6xl mx-auto px-4 py-8">
        <Card className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl">
          <h3 className="text-cyan-400 text-xl md:text-xl font-bold mb-3">Selected Achievements</h3>
          <div className="space-y-3 text-slate-300">
            <div>
              <p className="font-semibold">CODEGATE CTF 2024 — .General</p>
              <p className="text-sm text-slate-400">2nd place (USACykor), Seoul</p>
            </div>
            <div>
              <p className="font-semibold">Blue Water CTF 2024</p>
              <p className="text-sm text-slate-400">2nd place (CyKor)</p>
            </div>
            <div>
              <p className="font-semibold">HackTheon 2024</p>
              <p className="text-sm text-slate-400">2nd place (04vs02)</p>
            </div>
            <div>
              <p className="font-semibold">PoX CTF Final 2022</p>
              <p className="text-sm text-slate-400">1st place (마라탕)</p>
            </div>
            <div>
              <p className="font-semibold">DEFCON 26 CTF — 2018</p>
              <p className="text-sm text-slate-400">1st place (DEFKOR00T), Las Vegas</p>
            </div>
            <p className="text-sm mt-3">
              See full list:{" "}
              <a
                href="https://blog.cykor.kr/about/"
                className="text-cyan-400 hover:underline"
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
        <Card className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl">
          <h3 className="text-cyan-400 text-xl md:text-xl font-bold mb-3">How to Join</h3>
          <p className="text-slate-300 mb-4">
            New members normally start as trainees and follow a year-long
            educational track. CyKor also runs a Recruit CTF as part of the
            selection process. Details and application links are announced at the
            beginning of the spring semester.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold">
              <a
                href="https://forms.gle/3kGidGjZGfkU2NgP6"
                target="_blank"
                rel="noopener"
              >
                <span className="text-white">Apply Now</span>
              </a>
            </Button>
            <Button variant="outline" className="text-white font-semibold">
              <a href="https://blog.cykor.kr" target="_blank" rel="noopener">
                Blog
              </a>
            </Button>
          </div>
          <p className="text-slate-400 text-sm mt-3">
            Contact: <a href="mailto:contact@cykor.kr" className="text-cyan-400">contact@cykor.kr</a> · X:{" "}
            <a
              href="https://x.com/CyKorKU"
              target="_blank"
              rel="noopener"
              className="text-cyan-400"
            >
              @CyKorKU
            </a>
          </p>
        </Card>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 py-6 text-center text-slate-500 text-sm">
        © CyKor 2025 — Korea University hacking & cybersecurity club.
      </footer>
    </div>
  );
}
