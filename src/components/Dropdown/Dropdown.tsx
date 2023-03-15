import type { currency, currencySymbol } from "../../types/currency";
import * as S from './Dropdown.styles';
import chevron from '/src/assets/chevronDown.svg';
import "flag-icons";

interface DropdownProps {
  currency: currency;
  reference: string;
  dispatch: React.Dispatch<any>;
}

const currenciesFlags: currencySymbol = {
  BRL: "fi fi-br fis",
  USD: "fi fi-us fis",
  EUR: "fi fi-eu fis",
  GBP: "fi fi-gb fis",
  CHF: "fi fi-ch fis",
};

const Dropdown = ({ currency, reference, dispatch }: DropdownProps) => {
  return (
    <S.Container>
      <S.Selected as='div'>
        <S.Flag className={currenciesFlags[currency]} />
        <S.Name>{currency}</S.Name>
        <img src={chevron} alt="Ícone para colapsar dropdown" />
      </S.Selected>
      <S.List>
        {
          Object.keys(currenciesFlags).map( c => (
            <S.Item key={c} onClick={() => dispatch({type: reference, payload: c})}>
              <S.Flag className={currenciesFlags[c]} />
              <S.Name>{c}</S.Name>
            </S.Item>
          )
        )}
      </S.List>
    </S.Container>
  );
};

export default Dropdown;