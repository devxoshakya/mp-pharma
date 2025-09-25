import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface UIState {
  // Loading states
  isLoading: boolean;
  loadingText: string;
  
  // Navigation
  isMobileMenuOpen: boolean;
  activeSection: string;
  
  // Modals and overlays
  isModalOpen: boolean;
  modalContent: string | null;
  
  // Performance mode
  performanceMode: 'auto' | 'performance' | 'quality';
  isLowPerformance: boolean;
  
  // Notifications
  notifications: Array<{
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
    timestamp: number;
  }>;
  
  // Actions
  setLoading: (loading: boolean, text?: string) => void;
  setMobileMenu: (open: boolean) => void;
  toggleMobileMenu: () => void;
  setActiveSection: (section: string) => void;
  setModal: (open: boolean, content?: string) => void;
  setPerformanceMode: (mode: 'auto' | 'performance' | 'quality') => void;
  setLowPerformance: (isLow: boolean) => void;
  addNotification: (notification: Omit<UIState['notifications'][0], 'id' | 'timestamp'>) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

export const useUIStore = create<UIState>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial state
        isLoading: false,
        loadingText: 'Loading...',
        isMobileMenuOpen: false,
        activeSection: 'home',
        isModalOpen: false,
        modalContent: null,
        performanceMode: 'auto',
        isLowPerformance: false,
        notifications: [],
        
        // Actions
        setLoading: (loading, text = 'Loading...') =>
          set({ isLoading: loading, loadingText: text }, false, 'setLoading'),
          
        setMobileMenu: (open) =>
          set({ isMobileMenuOpen: open }, false, 'setMobileMenu'),
          
        toggleMobileMenu: () =>
          set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen }), false, 'toggleMobileMenu'),
          
        setActiveSection: (section) =>
          set({ activeSection: section }, false, 'setActiveSection'),
          
        setModal: (open, content?: string) =>
          set({ isModalOpen: open, modalContent: content || null }, false, 'setModal'),
          
        setPerformanceMode: (mode) =>
          set({ performanceMode: mode }, false, 'setPerformanceMode'),
          
        setLowPerformance: (isLow) =>
          set({ isLowPerformance: isLow }, false, 'setLowPerformance'),
          
        addNotification: (notification) => {
          const id = Math.random().toString(36).substr(2, 9);
          const timestamp = Date.now();
          set(
            (state) => ({
              notifications: [
                ...state.notifications,
                { ...notification, id, timestamp }
              ].slice(-5) // Keep only last 5 notifications
            }),
            false,
            'addNotification'
          );
        },
        
        removeNotification: (id) =>
          set(
            (state) => ({
              notifications: state.notifications.filter(n => n.id !== id)
            }),
            false,
            'removeNotification'
          ),
          
        clearNotifications: () =>
          set({ notifications: [] }, false, 'clearNotifications'),
      }),
      {
        name: 'mp-pharma-ui-store',
        partialize: (state) => ({
          performanceMode: state.performanceMode,
          activeSection: state.activeSection,
        }),
      }
    ),
    { name: 'UIStore' }
  )
);