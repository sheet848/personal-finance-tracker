import { create } from 'zustand';

export const usePaginationStore = create((set) => ({
  currentPage: 1,
  itemsPerPage: 5,
  totalItems: 0,

  setTotalItems: (count) => set({ totalItems: count }),
  setCurrentPage: (page) => set({ currentPage: page }),

  nextPage: () =>
    set((state) => {
      const maxPage = Math.ceil(state.totalItems / state.itemsPerPage);
      return { currentPage: Math.min(state.currentPage + 1, maxPage) };
    }),

  prevPage: () =>
    set((state) => ({
      currentPage: Math.max(state.currentPage - 1, 1),
    })),
}));
