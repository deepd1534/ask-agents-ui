import React from 'react';
import { Save, Share2, Undo2, Redo2, Search, Settings } from 'lucide-react';
import { Button, Input } from '../ui/Common';

interface TopBarProps {
  projectName: string;
  onSave: () => void;
  onPublish: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ projectName, onSave, onPublish }) => {
  return (
    <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm z-20 sticky top-0">
      
      {/* Left: Project Info */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
           <h1 className="text-lg font-bold text-slate-800 leading-none">{projectName || 'Untitled Project'}</h1>
           <span className="text-xs text-slate-500 font-medium mt-1 flex items-center gap-1.5">
             <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
             Draft Mode
           </span>
        </div>
      </div>

      {/* Center: Search */}
      <div className="flex-1 max-w-md mx-6">
        <div className="relative group">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-colors" />
           <input 
             type="text" 
             placeholder="Search nodes..." 
             className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all placeholder:text-slate-400"
           />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        <div className="flex items-center border-r border-slate-200 pr-2 mr-2 gap-1">
          <Button variant="ghost" size="sm" className="px-2" title="Undo">
            <Undo2 className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="px-2" title="Redo">
            <Redo2 className="w-4 h-4" />
          </Button>
        </div>

        <Button 
          variant="secondary" 
          size="sm" 
          leftIcon={<Save className="w-4 h-4" />}
          onClick={onSave}
        >
          Save Draft
        </Button>
        <Button 
          variant="primary" 
          size="sm" 
          leftIcon={<Share2 className="w-4 h-4" />}
          onClick={onPublish}
          className="shadow-brand-600/20"
        >
          Publish
        </Button>
      </div>
    </div>
  );
};
