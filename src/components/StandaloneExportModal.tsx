import React, { useState } from 'react';
import { X, Download, Copy, Check, ExternalLink, Code } from 'lucide-react';
import { STANDALONE_HTML_CODE } from '../data/standaloneHtmlCode';

interface StandaloneExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StandaloneExportModal: React.FC<StandaloneExportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(STANDALONE_HTML_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownload = () => {
    const blob = new Blob([STANDALONE_HTML_CODE], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'hadda-burger.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-[#151518] border border-white/10 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-[#1C1C20] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-black uppercase text-white text-lg tracking-wide">
                Standalone Executable HTML File
              </h3>
              <p className="text-[11px] text-stone-400">
                Single-file HTML5 + Tailwind CSS (CDN) + Vanilla JS
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 overflow-y-auto flex-1 text-stone-300">
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            As requested, this single <code className="text-amber-400 bg-stone-900 px-1.5 py-0.5 rounded border border-white/10">hadda-burger.html</code> file contains the full responsive layout, brand typography, tabbed menu, review cards, Google map, and interactive online ordering logic with zero build steps needed.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleDownload}
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:brightness-110 text-white font-extrabold uppercase text-xs tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download hadda-burger.html</span>
            </button>

            <button
              onClick={handleCopy}
              className="py-3 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 border border-white/10"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Code</span>
                </>
              )}
            </button>

            <a
              href="/hadda-burger.html"
              target="_blank"
              rel="noreferrer"
              className="py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-400 font-bold text-xs uppercase tracking-wider flex items-center gap-2 border border-amber-500/30"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open in New Tab</span>
            </a>
          </div>

          {/* Code Preview Box */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono">
              <span>Preview: hadda-burger.html ({STANDALONE_HTML_CODE.length} bytes)</span>
            </div>
            <pre className="p-4 bg-black/90 border border-white/10 rounded-xl text-[11px] font-mono text-stone-300 max-h-60 overflow-y-auto whitespace-pre-wrap leading-tight">
              {STANDALONE_HTML_CODE.slice(0, 1500)}...
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#141416] border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-stone-800 hover:bg-stone-700 text-white text-xs font-bold uppercase tracking-wider"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
