import React, { useState } from 'react';
import { Check, Link2, RotateCcw, X } from 'lucide-react';
import { DEFAULT_LINKS } from '../data/constants';
import { ExternalLinks } from '../types';

interface LinkSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLinks: ExternalLinks;
  onSaveLinks: (links: ExternalLinks) => void;
}

export const LinkSettingsModal: React.FC<LinkSettingsModalProps> = ({
  isOpen,
  onClose,
  currentLinks,
  onSaveLinks,
}) => {
  const [links, setLinks] = useState<ExternalLinks>(currentLinks);
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveLinks(links);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 800);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1B1E1C]/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF8F5] w-full max-w-lg rounded-lg border border-[#E3DED4] shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#767E77] hover:text-[#1B1E1C] transition-colors rounded-full hover:bg-[#EFECE5]"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-serif-brand tracking-widest uppercase text-[#627A65] font-semibold mb-1">
          <Link2 className="w-4 h-4 text-[#8FA68F]" />
          <span>Channel Link Settings</span>
        </div>
        <h3 className="text-xl font-medium text-[#1B1E1C]">외부 채널 주소 관리</h3>
        <p className="mt-1 text-xs text-[#59605A] leading-relaxed font-light">
          스마트스토어, 공식 블로그, 카카오톡 상담 채널의 실제 주소를 입력해 즉시 연동할 수 있습니다.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-medium text-[#2C302D] mb-1">
              네이버 스마트스토어 URL
            </label>
            <input
              type="url"
              value={links.smartStore}
              onChange={(e) => setLinks({ ...links, smartStore: e.target.value })}
              placeholder="https://smartstore.naver.com/..."
              className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F7F5F0] border border-[#E3DED4] rounded-sm focus:border-[#4E6351] focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#2C302D] mb-1">
              네이버 공식 블로그 URL
            </label>
            <input
              type="url"
              value={links.naverBlog}
              onChange={(e) => setLinks({ ...links, naverBlog: e.target.value })}
              placeholder="https://blog.naver.com/..."
              className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F7F5F0] border border-[#E3DED4] rounded-sm focus:border-[#4E6351] focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#2C302D] mb-1">
              카카오톡 채널 상담 URL
            </label>
            <input
              type="url"
              value={links.kakaoTalk}
              onChange={(e) => setLinks({ ...links, kakaoTalk: e.target.value })}
              placeholder="https://pf.kakao.com/..."
              className="w-full px-3 py-2 text-xs sm:text-sm bg-[#F7F5F0] border border-[#E3DED4] rounded-sm focus:border-[#4E6351] focus:outline-none"
              required
            />
          </div>

          <div className="pt-4 border-t border-[#E3DED4] flex items-center justify-between">
            <button
              type="button"
              onClick={() => setLinks(DEFAULT_LINKS)}
              className="text-xs text-[#767E77] hover:text-[#2C302D] flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>기본값 복원</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-[#59605A] hover:bg-[#EFECE5] rounded-sm"
              >
                취소
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-medium text-[#FAF8F5] bg-[#2C302D] hover:bg-[#1B1E1C] rounded-sm flex items-center gap-1.5"
              >
                {saved ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>저장 완료</span>
                  </>
                ) : (
                  <span>주소 저장하기</span>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
