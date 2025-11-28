import React, { useState } from 'react';
import { Network, LayoutDashboard, MessageSquareText, Settings, LogOut, PanelLeftClose, PanelLeft, ChevronRight } from 'lucide-react';
import { GraphBuilderModule } from './components/modules/GraphBuilderModule';
import { ChatModule } from './components/modules/ChatModule';

type Module = 'GRAPH_BUILDER' | 'CHAT' | 'SETTINGS';

const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState<Module>('GRAPH_BUILDER');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  return (
    <div className="flex h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-brand-200 selection:text-brand-900 overflow-hidden">
      
      {/* Sidebar - Minimal Light Theme */}
      <aside 
        className={`bg-white border-r border-slate-200 flex flex-col transition-all duration-300 ease-in-out z-50 shrink-0
          ${isSidebarCollapsed ? 'w-20' : 'w-72'}
        `}
      >
        {/* Logo Area */}
        <div className="h-20 flex items-center px-6 mt-2">
           <div 
             className="flex items-center gap-3 cursor-pointer group w-full" 
             onClick={() => {
               if (isSidebarCollapsed) {
                 toggleSidebar();
               } else {
                 setActiveModule('GRAPH_BUILDER');
               }
             }}
           >
               <div className="relative w-10 h-10 shrink-0">
                  <div className="absolute inset-0 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-lg shadow-slate-200 transition-transform group-hover:scale-105">
                    {isSidebarCollapsed ? (
                      <>
                        {/* Default Logo */}
                        <Network className="w-5 h-5 absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
                        {/* Sidebar Toggle Icon on Hover (when collapsed) */}
                        <PanelLeft className="w-5 h-5 absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                      </>
                    ) : (
                      <Network className="w-5 h-5" />
                    )}
                  </div>
               </div>

               <div className={`flex flex-col overflow-hidden transition-all duration-300 ${isSidebarCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}>
                 <span className="font-bold text-lg tracking-tight text-slate-900 leading-none">Graph<span className="text-brand-600">Builder</span></span>
               </div>
               
                {/* Collapse Toggle integrated in header when open */}
                {!isSidebarCollapsed && (
                     <button 
                        onClick={(e) => { e.stopPropagation(); toggleSidebar(); }}
                        className="ml-auto text-slate-300 hover:text-slate-600 transition-colors p-1"
                    >
                        <PanelLeftClose className="w-5 h-5" />
                    </button>
                )}
           </div>
        </div>

        {/* Nav Items */}
        <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto custom-scrollbar">
            <SidebarItem 
              icon={<LayoutDashboard className="w-5 h-5" />} 
              label="Graph Builder" 
              isActive={activeModule === 'GRAPH_BUILDER'} 
              collapsed={isSidebarCollapsed}
              onClick={() => setActiveModule('GRAPH_BUILDER')}
            />
            <SidebarItem 
              icon={<MessageSquareText className="w-5 h-5" />} 
              label="AI Assistant" 
              isActive={activeModule === 'CHAT'} 
              collapsed={isSidebarCollapsed}
              onClick={() => setActiveModule('CHAT')}
            />
            
            <SidebarItem 
              icon={<Settings className="w-5 h-5" />} 
              label="Settings" 
              isActive={activeModule === 'SETTINGS'} 
              collapsed={isSidebarCollapsed}
              onClick={() => setActiveModule('SETTINGS')}
            />
        </div>

        {/* User / Footer */}
        <div className="p-4 border-t border-slate-100 mb-2">
            <div className={`flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group ${isSidebarCollapsed ? 'justify-center' : ''}`}>
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-brand-100 to-slate-200 flex items-center justify-center text-slate-600 font-bold text-xs ring-2 ring-white shadow-sm shrink-0">
                    JD
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${isSidebarCollapsed ? 'w-0 opacity-0 hidden' : 'w-auto opacity-100'}`}>
                    <div className="text-sm font-bold text-slate-900 truncate group-hover:text-brand-600 transition-colors">John Doe</div>
                    <div className="text-xs text-slate-500 truncate">Free Plan</div>
                </div>
                {!isSidebarCollapsed && (
                    <LogOut className="w-4 h-4 text-slate-300 group-hover:text-red-400 ml-auto transition-colors" />
                )}
            </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-[#f8fafc] relative">
         {activeModule === 'GRAPH_BUILDER' && <GraphBuilderModule />}
         {activeModule === 'CHAT' && <ChatModule />}
         {activeModule === 'SETTINGS' && (
             <div className="flex items-center justify-center h-full text-slate-400 flex-col gap-4 animate-fade-in">
                 <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100">
                    <Settings className="w-10 h-10 text-slate-300" />
                 </div>
                 <p className="font-medium text-slate-500">Settings module coming soon</p>
             </div>
         )}
      </main>
      
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ icon, label, isActive, collapsed, onClick }: { icon: React.ReactNode, label: string, isActive: boolean, collapsed: boolean, onClick: () => void }) => {
    return (
        <button 
            onClick={onClick}
            className={`
                group flex items-center w-full p-3 rounded-2xl transition-all duration-200 ease-out
                ${isActive 
                    ? 'bg-slate-100 text-slate-900 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }
                ${collapsed ? 'justify-center' : 'gap-3'}
            `}
            title={collapsed ? label : undefined}
        >
            <div className={`transition-transform duration-300 ${isActive ? 'text-slate-900 scale-105' : 'group-hover:text-slate-700'}`}>
                {icon}
            </div>
            
            {!collapsed && (
                <span className={`text-sm whitespace-nowrap transition-all duration-300 ${isActive ? 'font-bold' : 'font-medium'}`}>{label}</span>
            )}
            
            {/* Active Indicator (Chevron) - Matches the screenshot style */}
            {isActive && !collapsed && (
                <ChevronRight className="w-4 h-4 ml-auto text-slate-400" />
            )}
        </button>
    )
}

export default App;