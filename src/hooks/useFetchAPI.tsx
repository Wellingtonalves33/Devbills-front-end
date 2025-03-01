import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
import { APIService } from '../services/api';
import type { Category } from '../services/api-types';
import type { CreateCategoryData } from '../validators/types';

interface FetchAPIProps {
  createCategory: (data: CreateCategoryData) => Promise<void>;
  fetchCategories: () => Promise<void>;
  categories: Category[];
}

const FetchAPIContext = createContext<FetchAPIProps>({} as FetchAPIProps);

type FetchAPIProviderProps = {
  children: ReactNode;
};
export function FetchAPIProvider({ children }: FetchAPIProviderProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  const createCategory = useCallback(async (data: CreateCategoryData) => {
    await APIService.createCategory(data);
  }, []);

  const fetchCategories = useCallback(async () => {
    const data = await APIService.getCategories();

    setCategories(data);
  }, []);

  return (
    <FetchAPIContext.Provider
      value={{ createCategory, fetchCategories, categories }}>
      {children}
    </FetchAPIContext.Provider>
  );
}

export function useFetchAPI() {
  return useContext(FetchAPIContext);
}
