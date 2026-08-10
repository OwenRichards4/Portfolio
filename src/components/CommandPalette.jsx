import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { featuredProject, projects, social } from "../data/content";
import "./CommandPalette.css";

const NAV_ITEMS = [
  { label: "Top", hint: "Back to the top", icon: "arrow-up-outline", href: "#top" },
  { label: "About", hint: "Education & background", icon: "person-outline", href: "#about" },
  { label: "Experience", hint: "Siemens co-op work", icon: "briefcase-outline", href: "#experience" },
  { label: "Skills", hint: "Languages, tools, AI/ML", icon: "code-slash-outline", href: "#skills" },
  { label: "Projects", hint: "Featured work & repos", icon: "grid-outline", href: "#projects" },
  { label: "Contact", hint: "Send a message", icon: "mail-outline", href: "#contact" },
];

function buildItems() {
  const nav = NAV_ITEMS.map((item) => ({
    id: `nav-${item.label}`,
    section: "Navigate",
    label: item.label,
    hint: item.hint,
    icon: item.icon,
    run: () => {
      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  }));

  const projectItems = [
    {
      id: "project-featured",
      section: "Projects",
      label: featuredProject.name,
      hint: "Featured — live demo",
      icon: "star-outline",
      run: () => window.open(featuredProject.demoHref, "_blank", "noopener,noreferrer"),
    },
    ...projects.map((p) => ({
      id: `project-${p.name}`,
      section: "Projects",
      label: p.name,
      hint: p.href.replace(/^https?:\/\//, ""),
      icon: "open-outline",
      run: () => window.open(p.href, "_blank", "noopener,noreferrer"),
    })),
  ];

  const socialItems = [
    { id: "social-github", section: "Social", label: "GitHub", hint: "@OwenRichards4", icon: "logo-github", href: social.github },
    { id: "social-linkedin", section: "Social", label: "LinkedIn", hint: "/in/orichards4", icon: "logo-linkedin", href: social.linkedin },
    { id: "social-sites", section: "Social", label: "Google Sites", hint: "Older UI project archive", icon: "newspaper-outline", href: social.googleSites },
  ].map((item) => ({
    ...item,
    run: () => window.open(item.href, "_blank", "noopener,noreferrer"),
  }));

  return [...nav, ...projectItems, ...socialItems];
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const items = useMemo(() => buildItems(), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.section.toLowerCase().includes(q) ||
        item.hint?.toLowerCase().includes(q)
    );
  }, [items, query]);

  const openPalette = () => {
    setQuery("");
    setActiveIndex(0);
    setOpen(true);
  };

  const closePalette = () => setOpen(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      const isMod = e.metaKey || e.ctrlKey;
      if (isMod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => {
          if (o) return false;
          setQuery("");
          setActiveIndex(0);
          return true;
        });
        return;
      }
      if (e.key === "Escape") closePalette();
    };
    const onExternalOpen = () => openPalette();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("cmdk:open", onExternalOpen);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("cmdk:open", onExternalOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 10);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const runItem = (item) => {
    item.run();
    closePalette();
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[activeIndex]) runItem(filtered[activeIndex]);
    }
  };

  let runningIndex = -1;

  return (
    <AnimatePresence>
      {open && (
        <div className="cmdk">
          <Motion.div
            className="cmdk__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={closePalette}
          />
          <Motion.div
            className="cmdk__panel"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="cmdk__input-row">
              <ion-icon name="search-outline"></ion-icon>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Jump to a section, project, or link…"
                aria-label="Command palette search"
              />
              <kbd>Esc</kbd>
            </div>

            <div className="cmdk__results">
              {filtered.length === 0 && (
                <p className="cmdk__empty">No results for "{query}"</p>
              )}

              {["Navigate", "Projects", "Social"].map((section) => {
                const sectionItems = filtered.filter((i) => i.section === section);
                if (sectionItems.length === 0) return null;
                return (
                  <div className="cmdk__section" key={section}>
                    <p className="cmdk__section-label">{section}</p>
                    {sectionItems.map((item) => {
                      runningIndex += 1;
                      const isActive = runningIndex === activeIndex;
                      return (
                        <button
                          key={item.id}
                          className={`cmdk__item ${isActive ? "cmdk__item--active" : ""}`}
                          onMouseEnter={() => setActiveIndex(runningIndex)}
                          onClick={() => runItem(item)}
                        >
                          <ion-icon name={item.icon}></ion-icon>
                          <span className="cmdk__item-label">{item.label}</span>
                          {item.hint && <span className="cmdk__item-hint">{item.hint}</span>}
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            <div className="cmdk__footer">
              <span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
              <span><kbd>Enter</kbd> Select</span>
              <span><kbd>Esc</kbd> Close</span>
            </div>
          </Motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
