import { useReducer, useEffect } from "react";
import { reducer, initialState } from "./Reducer";
import Dropdown from "../../components/Dropdown";
import HistoryChart from "../../components/HistoryChart";
import { currencySymbol } from "../../types/currency";
import converter from '/src/assets/converter.svg';
import * as S from "./Home.styles";

const currenciesSymbols: currencySymbol = {
  BRL: "R$",
  USD: "$",
  EUR: "€",
  GBP: "£",
  CHF: "CHF",
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const updateExchange = async () => {
      try {
        const response = await fetch(
          `https://economia.awesomeapi.com.br/last/${state.from}-${state.to}`
        );
        const data = await response.json();
        const exchangeRate = Number(data[`${state.from}${state.to}`].bid);
        dispatch({ type: "SET_EXCHANGE_RATE", payload: exchangeRate });
      } catch (error) {
        console.log(error);
      }
    };

    updateExchange();
  }, [state.from, state.to]);

  return (
    <S.Container>
      <header>
        <S.Title>Conversor de moedas</S.Title>
        <S.Wrapper>
          <S.MoneyWrapper data-symbol={currenciesSymbols[state.from]}>
            <S.InputMoney
              type="number"
              defaultValue={state.fromValue.toFixed(2)}
              onChange={(e) =>
                dispatch({
                  type: "SET_FROM_VALUE",
                  payload: Number(e.target.value),
                })
              }
            />
            <Dropdown
              reference="SET_FROM"
              dispatch={dispatch}
              currency={state.from}
            />
          </S.MoneyWrapper>
          <S.ImgConverter
            src={converter}
            alt="Conversor de moedas"
            onClick={() => dispatch({ type: "SWITCH_CURRENCIES" })}
          />
          <S.MoneyWrapper data-symbol={currenciesSymbols[state.to]}>
            <S.InputMoney
              type="number"
              value={state.toValue.toFixed(2)}
              readOnly
            />
            <Dropdown
              reference="SET_TO"
              dispatch={dispatch}
              currency={state.to}
            />
          </S.MoneyWrapper>
        </S.Wrapper>
      </header>
      <main>
        <S.Title>Taxa de câmbio</S.Title>
        <HistoryChart />
      </main>
    </S.Container>
  );
};

export default Home;
