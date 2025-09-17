// ExpandablePanel.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ExpandablePanel.css";

interface ExpandablePanelProps {
  header: string;
  children: React.ReactNode;
}

export const ExpandablePanel = ({ header, children }: ExpandablePanelProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="expandable-panel">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="expandable-header"
      >
        {header}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      <AnimatePresence initial={true}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="expandable-content"
          >
            <div className="expandable-body">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
