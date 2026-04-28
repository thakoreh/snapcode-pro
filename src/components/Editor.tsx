"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { toPng, toSvg } from "html-to-image";
import hljs from "highlight.js";
import {
  LANGUAGES,
  THEMES,
  GRADIENT_BACKGROUNDS,
  SAMPLE_CODE,
  WINDOW_STYLES,
  FONT_SIZES,
  PADDING_OPTIONS,
} from "@/lib/constants";

// Track highlight.js theme stylesheet
function loadThemeStylesheet(theme: string) {
  const linkId = "hljs-theme-link";
  let link = document.getElementById(linkId) as HTMLLinkElement;
  if (!link) {
    link = document.createElement("link");
    link.id = linkId;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }
  link.href = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/${theme}.min.css`;
}

export default function Editor() {
  const [code, setCode] = useState(SAMPLE_CODE.javascript);
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState("github-dark");
  const [background, setBackground] = useState(
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  );
  const [windowStyle, setWindowStyle] = useState<"macos" | "windows" | "none">(
    "macos"
  );
  const [fontSize, setFontSize] = useState("14");
  const [padding, setPadding] = useState("32");
  const [borderRadius, setBorderRadius] = useState("12");
  const [showLineNumbers, setShowLineNumbers] = useState(true);
  const [showWatermark, setShowWatermark] = useState(true);
  const [title, setTitle] = useState("app.js");
  const [exporting, setExporting] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadThemeStylesheet(theme);
  }, [theme]);

  const highlighted = React.useMemo(() => {
    try {
      const result = hljs.highlight(code, {
        language: language === "jsx" ? "javascript" : language === "tsx" ? "typescript" : language,
        ignoreIllegals: true,
      });
      return result.value;
    } catch {
      return hljs.highlightAuto(code).value;
    }
  }, [code, language]);

  const lineCount = code.split("\n").length;

  const handleLanguageChange = useCallback(
    (lang: string) => {
      setLanguage(lang);
      if (SAMPLE_CODE[lang]) {
        setCode(SAMPLE_CODE[lang]);
      }
    },
    []
  );

  const exportImage = useCallback(
    async (format: "png" | "svg") => {
      if (!previewRef.current) return;
      setExporting(true);
      try {
        // Temporarily hide watermark for export? No - watermark is part of free tier
        const fn = format === "png" ? toPng : toSvg;
        const dataUrl = await fn(previewRef.current, {
          pixelRatio: 3,
          quality: 1,
          backgroundColor: undefined,
        });

        const link = document.createElement("a");
        link.download = `snapcode.${format}`;
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error("Export failed:", err);
      } finally {
        setExporting(false);
      }
    },
    []
  );

  const copyToClipboard = useCallback(async () => {
    if (!previewRef.current) return;
    setExporting(true);
    try {
      const dataUrl = await toPng(previewRef.current, {
        pixelRatio: 3,
        quality: 1,
      });
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob }),
      ]);
    } catch (err) {
      console.error("Copy failed:", err);
    } finally {
      setExporting(false);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Toolbar */}
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-screen-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <span className="font-semibold text-lg hidden sm:block">
              SnapCode <span className="text-violet-400">Pro</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick selects */}
            <select
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>

            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 hidden md:block"
            >
              {THEMES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>

            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 rounded-lg hover:bg-zinc-800 transition-colors"
              title="Settings"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>

            <div className="w-px h-6 bg-zinc-700 mx-1 hidden sm:block" />

            <button
              onClick={copyToClipboard}
              disabled={exporting}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors text-sm disabled:opacity-50"
              title="Copy to clipboard"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span className="hidden sm:inline">Copy</span>
            </button>

            <div className="relative group">
              <button
                onClick={() => exportImage("png")}
                disabled={exporting}
                className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 transition-colors text-sm font-medium disabled:opacity-50"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {exporting ? "Exporting..." : "Export PNG"}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Code Input */}
        <div className="flex-1 flex flex-col min-w-0 border-r border-zinc-800">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
            <div className="window-dot bg-red-500/80" />
            <div className="window-dot bg-yellow-500/80" />
            <div className="window-dot bg-green-500/80" />
            <span className="text-xs text-zinc-500 ml-2">{title}</span>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="code-editor flex-1 w-full bg-transparent p-4 text-sm text-zinc-200 placeholder-zinc-600"
            placeholder="Paste your code here..."
            spellCheck={false}
          />
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className="w-full lg:w-72 border-b lg:border-b-0 border-zinc-800 bg-zinc-900/50 overflow-y-auto">
            <div className="p-4 space-y-5">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Window Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Theme
                </label>
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  {THEMES.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Background
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {GRADIENT_BACKGROUNDS.map((bg) => (
                    <button
                      key={bg.value}
                      onClick={() => setBackground(bg.value)}
                      className={`w-full aspect-square rounded-lg border-2 transition-all ${
                        background === bg.value
                          ? "border-violet-500 scale-110"
                          : "border-transparent hover:border-zinc-600"
                      }`}
                      style={{ background: bg.value }}
                      title={bg.label}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Window Style
                </label>
                <div className="flex gap-2">
                  {WINDOW_STYLES.map((ws) => (
                    <button
                      key={ws.value}
                      onClick={() => setWindowStyle(ws.value)}
                      className={`flex-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        windowStyle === ws.value
                          ? "bg-violet-600 text-white"
                          : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                      }`}
                    >
                      {ws.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Font Size
                </label>
                <select
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  {FONT_SIZES.map((fs) => (
                    <option key={fs.value} value={fs.value}>
                      {fs.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Padding
                </label>
                <select
                  value={padding}
                  onChange={(e) => setPadding(e.target.value)}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  {PADDING_OPTIONS.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                  Border Radius: {borderRadius}px
                </label>
                <input
                  type="range"
                  min="0"
                  max="24"
                  value={borderRadius}
                  onChange={(e) => setBorderRadius(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showLineNumbers}
                    onChange={(e) => setShowLineNumbers(e.target.checked)}
                    className="w-4 h-4 rounded bg-zinc-800 border-zinc-600 text-violet-500 focus:ring-violet-500"
                  />
                  <span className="text-sm">Line Numbers</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showWatermark}
                    onChange={(e) => setShowWatermark(e.target.checked)}
                    className="w-4 h-4 rounded bg-zinc-800 border-zinc-600 text-violet-500 focus:ring-violet-500"
                  />
                  <span className="text-sm text-zinc-400">
                    Watermark{" "}
                    <span className="text-xs">(Pro removes this)</span>
                  </span>
                </label>
              </div>

              <div className="pt-3 border-t border-zinc-800">
                <button
                  onClick={() => exportImage("svg")}
                  disabled={exporting}
                  className="w-full py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors text-sm font-medium"
                >
                  Export SVG
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Preview */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-12 min-h-[400px] overflow-auto">
          <div ref={previewRef} style={{ background, padding: `${padding}px` }}>
            <div
              className="overflow-hidden"
              style={{
                borderRadius: `${borderRadius}px`,
                backgroundColor: "var(--hljs-bg, #0d1117)",
                minWidth: "480px",
                maxWidth: "800px",
              }}
            >
              {/* Window Header */}
              {windowStyle !== "none" && (
                <div
                  className="flex items-center gap-2 px-4 py-3"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.2)",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {windowStyle === "macos" ? (
                    <>
                      <div
                        className="window-dot"
                        style={{ backgroundColor: "#ff5f57" }}
                      />
                      <div
                        className="window-dot"
                        style={{ backgroundColor: "#febc2e" }}
                      />
                      <div
                        className="window-dot"
                        style={{ backgroundColor: "#28c840" }}
                      />
                      <span className="text-xs text-zinc-500 ml-2 flex-1 text-center">
                        {title}
                      </span>
                      <div className="w-[36px]" />
                    </>
                  ) : (
                    <>
                      <span className="text-xs text-zinc-400 flex-1">
                        {title}
                      </span>
                      <div className="flex gap-1">
                        <div className="w-6 h-4 rounded-sm bg-zinc-600/50" />
                        <div className="w-6 h-4 rounded-sm bg-zinc-600/50" />
                        <div className="w-6 h-4 rounded-sm bg-red-600/50" />
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Code Content */}
              <div className="flex p-4">
                {showLineNumbers && (
                  <div
                    className="select-none text-right pr-4 shrink-0"
                    style={{
                      color: "rgba(255,255,255,0.2)",
                      fontSize: `${fontSize}px`,
                      lineHeight: "1.6",
                    }}
                  >
                    {Array.from({ length: lineCount }, (_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>
                )}
                <div className="highlighted-code overflow-x-auto flex-1">
                  <pre>
                    <code
                      className={`hljs language-${language}`}
                      style={{ fontSize: `${fontSize}px` }}
                      dangerouslySetInnerHTML={{ __html: highlighted }}
                    />
                  </pre>
                </div>
              </div>

              {/* Watermark */}
              {showWatermark && (
                <div
                  className="text-right px-4 pb-3"
                  style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)" }}
                >
                  snapcode.pro
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
