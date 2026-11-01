/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { DEFAULT_LINKS } from './data/constants';
import { ExternalLinks, Inquiry } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Vitalogy } from './components/Vitalogy';
import { Expert } from './components/Expert';
import { Programs } from './components/Programs';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';
import { LinkSettingsModal } from './components/LinkSettingsModal';

export default function App() {
  const [links, setLinks] = useState<ExternalLinks>(() => {
    try {
      const stored = localStorage.getItem('wellbyyoung_links');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (
          !parsed.naverBlog ||
          parsed.naverBlog.includes('wellbyyoung') ||
          parsed.naverBlog.includes('wandokong_lab')
        ) {
          parsed.naverBlog = 'https://blog.naver.com/wellby0';
          localStorage.setItem('wellbyyoung_links', JSON.stringify(parsed));
        }
        return parsed;
      }
    } catch {
      // ignore
    }
    return DEFAULT_LINKS;
  });

  const [inquiries, setInquiries] = useState<Inquiry[]>(() => {
    try {
      const stored = localStorage.getItem('wellbyyoung_inquiries');
      if (stored) return JSON.parse(stored);
    } catch {
      // ignore
    }
    return [];
  });

  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(null);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [linkSettingsModalOpen, setLinkSettingsModalOpen] = useState(false);

  const handleAddInquiry = (newInquiry: Inquiry) => {
    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    try {
      localStorage.setItem('wellbyyoung_inquiries', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleSaveLinks = (newLinks: ExternalLinks) => {
    setLinks(newLinks);
    try {
      localStorage.setItem('wellbyyoung_links', JSON.stringify(newLinks));
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#242724] selection:bg-[#5B6B5C]/20 selection:text-[#1F2720]">
      <Header
        onOpenLinkSettings={() => setLinkSettingsModalOpen(true)}
      />

      <main className="flex-1">
        <Hero />
        <About />
        <Vitalogy />
        <Expert />
        <Programs
          onSelectProgramForConsultation={(progId) => setSelectedProgramId(progId)}
          smartStoreUrl={links.smartStore}
        />
        <Process />
        <Contact
          onAddInquiry={handleAddInquiry}
          selectedProgramId={selectedProgramId}
          onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
          onOpenLinkSettings={() => setLinkSettingsModalOpen(true)}
          externalLinks={links}
        />
      </main>

      <Footer
        onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
        onOpenLinkSettings={() => setLinkSettingsModalOpen(true)}
      />

      {/* Floating Kakao Quick Consultation Button */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2.5 items-end">
        <a
          href={links.kakaoTalk}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#FAF8F5] hover:bg-white text-[#2C302D] px-3.5 py-2 rounded-full border border-[#D3DDD3] shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-md transition-all text-xs font-medium group"
          title="카카오톡 1:1 상담 연결"
          aria-label="카카오톡 1:1 상담 연결"
        >
          <div className="w-5 h-5 rounded-full bg-[#FFE812] flex items-center justify-center text-[#371D1E] shrink-0 font-bold text-[10px]">
            talk
          </div>
          <span className="hidden sm:inline">카톡 빠른 상담</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#767E77] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      <LinkSettingsModal
        isOpen={linkSettingsModalOpen}
        onClose={() => setLinkSettingsModalOpen(false)}
        currentLinks={links}
        onSaveLinks={handleSaveLinks}
      />
    </div>
  );
}
