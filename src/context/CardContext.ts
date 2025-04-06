import { createContext } from "react";

interface CardContextProps {
    onShowSuccess: (open?: boolean) => void;
}

export const CardContext = createContext<CardContextProps>({
    onShowSuccess: () => {},
});
