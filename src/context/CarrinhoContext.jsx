import { createContext, useReducer, useState } from 'react';

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = 'Carrinho';

const estadoInicial = [];

export const CarrinhoProvider = ({ children }) => {
   const [carrinho, diapatch] = useReducer(carrinhoReducer, estadoInicial);
   const [quantidade, setQuantidade] = useState(0);
   const [valorTotal, setValorTotal] = useState(0);

   return (
      <CarrinhoContext.Provider
         value={{
            carrinho,
            diapatch,
            quantidade,
            valorTotal,
         }}
      >
         {children}
      </CarrinhoContext.Provider>
   );
};
