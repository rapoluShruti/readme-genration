// import React, { useState, useCallback } from 'react';
// import { ProjectFile, AppState } from './types';
// import FileUploader from './components/FileUploader';
// import ReadmeDisplay from './components/ReadmeDisplay';
// import Loader from './components/Loader';
// import { generateReadme } from './services/geminiService';
// import { BotIcon, FileIcon, CoffeeIcon } from './components/icons';

// const App: React.FC = () => {
//   const [appState, setAppState] = useState<AppState>(AppState.IDLE);
//   const [files, setFiles] = useState<ProjectFile[]>([]);
//   const [readmeContent, setReadmeContent] = useState<string>('');
//   const [error, setError] = useState<string | null>(null);

//   const handleFilesLoaded = (loadedFiles: ProjectFile[]) => {
//     setFiles(loadedFiles);
//     setAppState(AppState.FILES_LOADED);
//   };

//   const handleGenerate = useCallback(async () => {
//     if (files.length === 0) {
//       setError("Please select files before generating a README.");
//       setAppState(AppState.ERROR);
//       return;
//     }
//     setAppState(AppState.GENERATING);
//     setError(null);
//     try {
//       const content = await generateReadme(files);
//       setReadmeContent(content);
//       setAppState(AppState.SUCCESS);
//     } catch (err: any) {
//       setError(err.message || 'An unknown error occurred.');
//       setAppState(AppState.ERROR);
//     }
//   }, [files]);

//   const handleReset = () => {
//     setFiles([]);
//     setReadmeContent('');
//     setError(null);
//     setAppState(AppState.IDLE);
//   };

//   const renderFileList = () => (
//     <div className="w-full max-w-2xl bg-surface p-6 rounded-2xl border border-border-color">
//       <h3 className="text-xl font-bold text-text-primary mb-4">Project Files Loaded</h3>
//       <div className="max-h-60 overflow-y-auto pr-2 space-y-2">
//         {files.map((file, index) => (
//           <div key={index} className="flex items-center bg-background/50 p-2 rounded-md">
//             <FileIcon className="h-5 w-5 text-text-secondary mr-3 flex-shrink-0" />
//             <span className="text-sm text-text-secondary truncate">{file.path}</span>
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={handleGenerate}
//         className="w-full mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary flex items-center justify-center"
//       >
//         <BotIcon className="h-5 w-5 mr-2" />
//         Generate README
//       </button>
//       <button
//         onClick={handleReset}
//         className="w-full mt-3 px-6 py-2 bg-secondary text-text-primary font-medium rounded-lg hover:bg-zinc-600 transition-colors"
//       >
//         Back
//       </button>
//     </div>
//   );

//   const renderContent = () => {
//     switch (appState) {
//       case AppState.IDLE:
//         return <FileUploader onFilesLoaded={handleFilesLoaded} setLoading={(loading) => setAppState(loading ? AppState.LOADING_FILES : AppState.IDLE)} />;
//       case AppState.LOADING_FILES:
//         return <Loader text="Reading files..." />;
//       case AppState.FILES_LOADED:
//         return renderFileList();
//       case AppState.GENERATING:
//         return <Loader text="AI is crafting your README..." />;
//       case AppState.SUCCESS:
//         return <ReadmeDisplay content={readmeContent} onReset={handleReset} />;
//       case AppState.ERROR:
//         return (
//           <div className="text-center p-8 bg-surface rounded-2xl border border-red-500/50">
//             <h2 className="text-2xl font-bold text-red-400">Generation Failed</h2>
//             <p className="text-text-secondary mt-2 mb-4">{error}</p>
//             <button
//               onClick={handleReset}
//               className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors"
//             >
//               Try Again
//             </button>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background text-text-primary flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
//       <header className="text-center mb-10">
//         <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
//           GitHub README Generator
//         </h1>
//         <p className="mt-3 text-lg text-text-secondary max-w-2xl mx-auto">
//           Let AI create a professional README for your project. Just select your project folder to get started.
//         </p>
//       </header>
//       <main className="w-full flex items-center justify-center">
//         {renderContent()}
//       </main>
//       <footer className="text-center mt-12 space-y-4">
//         <a
//           href="https://buymeacoffee.com/yaniv1"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center justify-center px-4 py-2 bg-bmac-yellow text-black font-bold rounded-lg shadow-md hover:bg-bmac-yellow-hover transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-bmac-yellow"
//         >
//           <CoffeeIcon className="h-5 w-5 mr-2" />
//           <span>Support me on Buy Me a Coffee</span>
//         </a>
//         <p className="text-sm text-border-color">Powered by Google Gemini & React</p>
//       </footer>
//     </div>
//   );
// };

// export default App;
import React, { useState, useCallback } from 'react';
import { ProjectFile, AppState } from './types';
import FileUploader from './components/FileUploader';
import ReadmeDisplay from './components/ReadmeDisplay';
import Loader from './components/Loader';
import { generateReadme } from './services/geminiService';
import { BotIcon, FileIcon, CoffeeIcon } from './components/icons';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.IDLE);
  const [files, setFiles] = useState<ProjectFile[]>([]);
  const [readmeContent, setReadmeContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleFilesLoaded = (loadedFiles: ProjectFile[]) => {
    setFiles(loadedFiles);
    setAppState(AppState.FILES_LOADED);
  };

  const handleGenerate = useCallback(async () => {
    if (files.length === 0) {
      setError("Please select files before generating a README.");
      setAppState(AppState.ERROR);
      return;
    }
    setAppState(AppState.GENERATING);
    setError(null);
    try {
      const content = await generateReadme(files);
      setReadmeContent(content);
      setAppState(AppState.SUCCESS);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred.');
      setAppState(AppState.ERROR);
    }
  }, [files]);

  const handleReset = () => {
    setFiles([]);
    setReadmeContent('');
    setError(null);
    setAppState(AppState.IDLE);
  };

  const renderFileList = () => (
    <div className="w-full max-w-2xl bg-black/40 backdrop-blur-xl p-10 rounded-3xl border border-green-500/30 shadow-[0_20px_70px_-10px_rgba(34,197,94,0.3)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/10 rounded-3xl"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-400/20 to-transparent rounded-full blur-2xl"></div>
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
          <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-500 rounded-full mr-4 animate-pulse"></div>
          <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
            Project Files Loaded
          </span>
        </h3>
        <div className="max-h-64 overflow-y-auto pr-3 space-y-3 scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-green-900/20">
          {files.map((file, index) => (
            <div key={index} className="flex items-center bg-black/60 hover:bg-black/80 p-5 rounded-2xl transition-all duration-300 border border-green-500/20 hover:border-green-400/40 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] group">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600/20 to-green-500/30 rounded-xl flex items-center justify-center mr-4 group-hover:from-green-500/30 group-hover:to-green-400/40 transition-all duration-300 border border-green-500/30">
                <FileIcon className="h-5 w-5 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
              </div>
              <span className="text-sm text-white truncate font-medium group-hover:text-green-100 transition-colors duration-300">{file.path}</span>
            </div>
          ))}
        </div>
        <button
          onClick={handleGenerate}
          className="w-full mt-10 px-10 py-5 bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-black font-bold rounded-2xl shadow-[0_10px_40px_rgba(34,197,94,0.4)] hover:shadow-[0_15px_50px_rgba(34,197,94,0.6)] hover:from-green-500 hover:via-green-400 hover:to-green-300 transform hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400/50 flex items-center justify-center group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <BotIcon className="h-6 w-6 mr-3 group-hover:animate-pulse relative z-10" />
          <span className="relative z-10">Generate README</span>
        </button>
        <button
          onClick={handleReset}
          className="w-full mt-5 px-10 py-4 bg-black/60 hover:bg-black/80 text-green-300 hover:text-green-200 font-semibold rounded-2xl transition-all duration-300 border border-green-500/30 hover:border-green-400/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"
        >
          ← Back to Upload
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (appState) {
      case AppState.IDLE:
        return <FileUploader onFilesLoaded={handleFilesLoaded} setLoading={(loading) => setAppState(loading ? AppState.LOADING_FILES : AppState.IDLE)} />;
      case AppState.LOADING_FILES:
        return <Loader text="Reading files..." />;
      case AppState.FILES_LOADED:
        return renderFileList();
      case AppState.GENERATING:
        return <Loader text="AI is crafting your README..." />;
      case AppState.SUCCESS:
        return <ReadmeDisplay content={readmeContent} onReset={handleReset} />;
      case AppState.ERROR:
        return (
          <div className="text-center p-12 bg-black/40 backdrop-blur-xl rounded-3xl border border-green-500/30 shadow-[0_20px_70px_-10px_rgba(34,197,94,0.3)] max-w-md relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-3xl"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-green-600/30 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/40">
                <span className="text-4xl">⚠️</span>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent mb-4">Generation Failed</h2>
              <p className="text-white mb-8 leading-relaxed">{error}</p>
              <button
                onClick={handleReset}
                className="px-10 py-4 bg-gradient-to-r from-green-600 to-green-500 text-black font-semibold rounded-2xl hover:from-green-500 hover:to-green-400 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_rgba(34,197,94,0.4)] hover:shadow-[0_15px_40px_rgba(34,197,94,0.6)]"
              >
                Try Again
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-black text-white flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-400/20 to-green-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-500/15 to-green-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 left-2/3 w-64 h-64 bg-gradient-to-r from-green-300/15 to-green-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-2/3 w-80 h-80 bg-gradient-to-l from-green-400/10 to-green-600/15 rounded-full blur-2xl"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-green-500 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-green-300 rounded-full animate-pulse opacity-30"></div>
      </div>

      <header className="text-center mb-20 relative z-10">
        <div className="inline-block p-1.5 bg-gradient-to-r from-green-400 to-green-600 rounded-3xl mb-8 shadow-[0_0_40px_rgba(34,197,94,0.3)]">
          <div className="bg-black/80 backdrop-blur-sm px-8 py-4 rounded-2xl border border-green-500/20">
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300 flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              ✨ AI-Powered Documentation
            </span>
          </div>
        </div>
        <h1 className="text-6xl sm:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-300 to-green-500 mb-8 drop-shadow-[0_0_30px_rgba(34,197,94,0.5)] leading-tight">
          GitHub
          <br />
          <span className="text-5xl sm:text-7xl bg-gradient-to-r from-green-300 via-green-400 to-green-500 bg-clip-text text-transparent">
            README
          </span>
          <br />
          <span className="text-4xl sm:text-6xl bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent">
            Generator
          </span>
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl text-white leading-relaxed mb-6">
            Transform your project into a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300 font-bold"> professional showcase</span>.
          </p>
          <p className="text-lg text-white/80 leading-relaxed">
            Simply upload your files and let our advanced AI craft the perfect README documentation for your project.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-green-400/30 to-green-600/20 rounded-full blur-xl opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-tr from-green-500/20 to-green-400/30 rounded-full blur-lg opacity-40 animate-bounce"></div>
      </header>

      <main className="w-full flex items-center justify-center relative z-10">
        {renderContent()}
      </main>

      <footer className="text-center mt-20 space-y-8 relative z-10">


        <div className="flex items-center justify-center space-x-6">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse"></div>
            <p className="text-sm font-semibold text-white">Powered by</p>
            <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="bg-black/60 backdrop-blur-sm px-8 py-4 rounded-2xl border border-green-500/30 inline-block shadow-[0_0_30px_rgba(34,197,94,0.2)]">
          <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300">
            Google Gemini AI • React • TypeScript
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;