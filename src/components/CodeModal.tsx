import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type File = {
  name: string;
  language: string;
  content: string;
};

type Folder = {
  name: string;
  files: File[];
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  structure: Folder[];
};

export function CodeModal({ isOpen, onClose, structure }: Props) {
  const [activeFile, setActiveFile] = useState<File | null>(
    structure[0]?.files[0] || null
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-[95%] h-[90vh] bg-[#1e1e1e] rounded-xl overflow-hidden flex shadow-2xl">

        <div className="w-64 bg-[#252526] border-r border-white/10 p-4 text-sm overflow-auto">
          {structure.map((folder, i) => (
            <div key={i} className="mb-4">
              <div className="text-gray-400 font-semibold mb-2">
                {folder.name}
              </div>

              {folder.files.map((file, j) => (
                <div
                  key={j}
                  onClick={() => setActiveFile(file)}
                  className={`cursor-pointer px-2 py-1 rounded hover:bg-white/10 ${
                    activeFile?.name === file.name
                      ? "bg-white/10 text-white"
                      : "text-gray-400"
                  }`}
                >
                  {file.name}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col">

          <div className="flex justify-between items-center px-6 py-3 bg-[#2d2d2d] border-b border-white/10">
            <span className="text-gray-300 text-sm">
              {activeFile?.name}
            </span>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-auto p-6 text-sm">
            {activeFile && (
              <SyntaxHighlighter
                language={activeFile.language}
                style={vscDarkPlus}
                showLineNumbers
                customStyle={{ background: "transparent", margin: 0 }}
              >
                {activeFile.content}
              </SyntaxHighlighter>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
