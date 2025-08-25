// import React, { useState, useEffect } from 'react';
// import { CopyIcon, DownloadIcon, CheckIcon } from './icons';

// interface ReadmeDisplayProps {
//   content: string;
//   onReset: () => void;
// }

// // Basic Markdown to HTML converter to show a preview
// const MarkdownPreview: React.FC<{ markdown: string }> = ({ markdown }) => {
//     const renderMarkdown = (text: string) => {
//         let html = text
//             // Headers
//             .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-6 mb-4">$1</h1>')
//             .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-5 mb-3">$1</h2>')
//             .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-4 mb-2">$1</h3>')
//             // Bold and Italic
//             .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
//             .replace(/\*(.*?)\*/g, '<em>$1</em>')
//             // Lists
//             .replace(/^\* (.*$)/gim, '<li class="ml-6 list-disc">$1</li>')
//             .replace(/^\s*\d+\.\s(.*$)/gim, '<li class="ml-6 list-decimal">$1</li>')
//             // Links and Images
//             .replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2" class="my-4 rounded-lg max-w-full h-auto">')
//             .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline">$1</a>')
//             // Code blocks
//             .replace(/```(\w+)?\n([\s\S]*?)\n```/g, '<pre class="bg-zinc-900 p-4 rounded-lg my-4 overflow-x-auto"><code class="text-sm font-mono">$2</code></pre>')
//             // Inline code
//             .replace(/`(.*?)`/g, '<code class="bg-zinc-700 text-orange-300 px-1.5 py-0.5 rounded-md">$1</code>')
//              // Paragraphs
//             .replace(/\n\n/g, '<br/><br/>')
//             .replace(/\n/g, '<br/>');

//         // Wrap list items in <ul> or <ol>
//         html = html.replace(/(<li class="ml-6 list-disc">[\s\S]*?<\/li>)/g, '<ul>$1</ul>');
//         html = html.replace(/(<li class="ml-6 list-decimal">[\s\S]*?<\/li>)/g, '<ol>$1</ol>');
//         html = html.replace(/<\/ul>\s*<ul>/g, '');
//         html = html.replace(/<\/ol>\s*<ol>/g, '');

//         return { __html: html };
//     };

//     return <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={renderMarkdown(markdown)} />;
// };

// const ReadmeDisplay: React.FC<ReadmeDisplayProps> = ({ content, onReset }) => {
//   const [copied, setCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(content);
//     setCopied(true);
//   };

//   const handleDownload = () => {
//     const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'README.md';
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };

//   useEffect(() => {
//     if (copied) {
//       const timer = setTimeout(() => setCopied(false), 2000);
//       return () => clearTimeout(timer);
//     }
//   }, [copied]);

//   return (
//     <div className="w-full max-w-4xl mx-auto flex flex-col">
//       <div className="bg-surface rounded-t-xl border border-b-0 border-border-color p-3 flex justify-between items-center">
//         <div>
//             <span className="text-sm font-medium text-text-primary border-b-2 border-primary px-3 py-2">README.md</span>
//         </div>
//         <div className="flex items-center space-x-1">
//            <button
//             onClick={handleCopy}
//             title={copied ? "Copied!" : "Copy Markdown"}
//             className="p-2 rounded-md hover:bg-white/10 text-text-secondary transition-colors"
//             aria-label="Copy Markdown"
//           >
//             {copied ? <CheckIcon className="h-5 w-5 text-green-400" /> : <CopyIcon className="h-5 w-5" />}
//           </button>
//           <button
//             onClick={handleDownload}
//             title="Download .md file"
//             className="p-2 rounded-md hover:bg-white/10 text-text-secondary transition-colors"
//             aria-label="Download .md file"
//           >
//             <DownloadIcon className="h-5 w-5" />
//           </button>
//         </div>
//       </div>
//       <div className="bg-background/80 p-6 rounded-b-xl border border-border-color h-[60vh] overflow-y-auto">
//         <MarkdownPreview markdown={content} />
//       </div>
//        <button 
//         onClick={onReset}
//         className="mt-6 px-6 py-2 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-hover transition-colors self-center"
//         >
//             Back to Start
//         </button>
//     </div>
//   );
// };

// export default ReadmeDisplay;
import React, { useState, useEffect } from 'react';
import { CopyIcon, DownloadIcon, CheckIcon } from './icons';

interface ReadmeDisplayProps {
  content: string;
  onReset: () => void;
}

// Basic Markdown to HTML converter to show a preview
const MarkdownPreview: React.FC<{ markdown: string }> = ({ markdown }) => {
  const renderMarkdown = (text: string) => {
    let html = text
      // Headers
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-6 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-5 mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-4 mb-2 text-green-300">$1</h3>')
      // Bold and Italic
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-green-200">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-green-100">$1</em>')
      // Lists
      .replace(/^\* (.*$)/gim, '<li class="ml-6 list-disc text-white">$1</li>')
      .replace(/^\s*\d+\.\s(.*$)/gim, '<li class="ml-6 list-decimal text-white">$1</li>')
      // Links and Images
      .replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2" class="my-4 rounded-lg max-w-full h-auto border border-green-500/30">')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-green-400 hover:text-green-300 hover:underline transition-colors">$1</a>')
      // Code blocks
      .replace(/```(\w+)?\n([\s\S]*?)\n```/g, '<pre class="bg-black/60 border border-green-500/30 p-4 rounded-lg my-4 overflow-x-auto"><code class="text-sm font-mono text-green-200">$2</code></pre>')
      // Inline code
      .replace(/`(.*?)`/g, '<code class="bg-black/40 text-green-300 px-1.5 py-0.5 rounded-md border border-green-500/20">$1</code>')
      // Paragraphs
      .replace(/\n\n/g, '<br/><br/>')
      .replace(/\n/g, '<br/>');

    // Wrap list items in <ul> or <ol>
    html = html.replace(/(<li class="ml-6 list-disc text-white">[\s\S]*?<\/li>)/g, '<ul class="text-white">$1</ul>');
    html = html.replace(/(<li class="ml-6 list-decimal text-white">[\s\S]*?<\/li>)/g, '<ol class="text-white">$1</ol>');
    html = html.replace(/<\/ul>\s*<ul>/g, '');
    html = html.replace(/<\/ol>\s*<ol>/g, '');

    return { __html: html };
  };

  return <div className="prose prose-invert max-w-none text-white" dangerouslySetInnerHTML={renderMarkdown(markdown)} />;
};

const ReadmeDisplay: React.FC<ReadmeDisplayProps> = ({ content, onReset }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
  };

  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-green-400/10 to-green-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-green-500/10 to-green-400/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="bg-black/60 backdrop-blur-xl rounded-t-3xl border border-b-0 border-green-500/30 p-4 flex justify-between items-center shadow-[0_0_30px_rgba(34,197,94,0.2)]">
          <div>
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300 border-b-2 border-green-400 px-4 py-2">README.md</span>
          </div>
          <div className="flex items-center space-x-1">
            <button
              onClick={handleCopy}
              title={copied ? "Copied!" : "Copy Markdown"}
              className="p-3 rounded-xl hover:bg-black/40 text-white hover:text-green-300 transition-all duration-300 border border-transparent hover:border-green-500/30 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)]"
              aria-label="Copy Markdown"
            >
              {copied ? <CheckIcon className="h-5 w-5 text-green-400" /> : <CopyIcon className="h-5 w-5" />}
            </button>
            <button
              onClick={handleDownload}
              title="Download .md file"
              className="p-3 rounded-xl hover:bg-black/40 text-white hover:text-green-300 transition-all duration-300 border border-transparent hover:border-green-500/30 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)]"
              aria-label="Download .md file"
            >
              <DownloadIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-xl p-8 rounded-b-3xl border border-green-500/30 h-[60vh] overflow-y-auto relative shadow-[0_20px_70px_-10px_rgba(34,197,94,0.3)]">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/10 rounded-b-3xl"></div>
          <div className="relative z-10">
            <MarkdownPreview markdown={content} />
          </div>

          {/* Custom scrollbar styling for webkit browsers */}
          <style>{`
            .overflow-y-auto::-webkit-scrollbar {
              width: 8px;
            }
            .overflow-y-auto::-webkit-scrollbar-track {
              background: rgba(34, 197, 94, 0.1);
              border-radius: 4px;
            }
            .overflow-y-auto::-webkit-scrollbar-thumb {
              background: rgba(34, 197, 94, 0.5);
              border-radius: 4px;
            }
            .overflow-y-auto::-webkit-scrollbar-thumb:hover {
              background: rgba(34, 197, 94, 0.7);
            }
          `}</style>
        </div>

        <button
          onClick={onReset}
          className="mt-8 px-10 py-4 bg-gradient-to-r from-green-600 to-green-500 text-black font-bold rounded-2xl shadow-[0_10px_40px_rgba(34,197,94,0.4)] hover:shadow-[0_15px_50px_rgba(34,197,94,0.6)] hover:from-green-500 hover:to-green-400 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400/50 self-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10">Back to Start</span>
        </button>
      </div>
    </div>
  );
};

export default ReadmeDisplay;