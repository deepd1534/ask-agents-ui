import React from 'react';
import { Network, MessageSquareText, ArrowRight, Sparkles, Bot, Database } from 'lucide-react';
import { Button } from '../ui/Common';

interface LandingPageProps {
  onNavigate: (module: 'GRAPH_BUILDER' | 'CHAT') => void;
}

export const LandingPageModule: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex-1 h-full overflow-y-auto bg-[#f8fafc] animate-fade-in custom-scrollbar flex flex-col">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20 pb-20 px-6 shrink-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-50/50 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-brand-100 shadow-sm text-brand-700 text-xs font-bold uppercase tracking-wider mb-8 animate-fade-in-up">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Future of Data Interaction</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Ask <span className="text-brand-600">Agents</span>
            </h1>
            
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Unified platform to build semantic knowledge graphs and interact with your enterprise data using intelligent AI agents.
            </p>

            <div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Button 
                    size="lg" 
                    onClick={() => onNavigate('CHAT')}
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                    className="px-10 py-4 h-auto text-lg shadow-brand-600/30 hover:shadow-brand-600/40"
                >
                    Chat with Agents
                </Button>
                 <Button 
                    variant="secondary"
                    size="lg" 
                    onClick={() => onNavigate('GRAPH_BUILDER')}
                    className="px-10 py-4 h-auto text-lg bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                >
                    Build Graph
                </Button>
            </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto px-6 pb-24 w-full">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Graph Builder Card */}
            <div 
                onClick={() => onNavigate('GRAPH_BUILDER')}
                className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-900/5 transition-all duration-300 cursor-pointer overflow-hidden h-[300px] animate-fade-in-up"
                style={{ animationDelay: '0.4s' }}
            >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                    <Network className="w-64 h-64 text-brand-600" />
                </div>
                
                <div className="relative z-10 h-full flex flex-col items-start">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                        <Database className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Graph Builder</h3>
                    <p className="text-slate-500 text-base mb-6 max-w-sm">
                        Transform relational databases into semantic knowledge graphs. Define ontologies and visualize connections effortlessly.
                    </p>
                    
                    <span className="mt-auto inline-flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all">
                        Open Builder <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                </div>
            </div>

            {/* AI Assistant Card */}
            <div 
                onClick={() => onNavigate('CHAT')}
                className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-900/5 transition-all duration-300 cursor-pointer overflow-hidden h-[300px] animate-fade-in-up"
                style={{ animationDelay: '0.5s' }}
            >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                    <Bot className="w-64 h-64 text-brand-600" />
                </div>
                
                <div className="relative z-10 h-full flex flex-col items-start">
                    <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                        <MessageSquareText className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">AI Agents</h3>
                    <p className="text-slate-500 text-base mb-6 max-w-sm">
                        Interact with your data using specialized AI agents. Run analysis, generate reports, and get answers in real-time.
                    </p>
                    
                    <span className="mt-auto inline-flex items-center text-brand-600 font-bold group-hover:gap-2 transition-all">
                        Launch Chat <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                </div>
            </div>

         </div>
      </div>
    </div>
  );
};