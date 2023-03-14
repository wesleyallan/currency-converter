import * as S from './Home.styles';
import type { currencySymbol } from '../../types/currency';

const currenciesSymbols: currencySymbol = {
  BRL: 'R$',
  USD: '$',
  EUR: '€',
  GBP: '£',
  CHE: 'CHF',
}

const Home = () => {
  return (
    <S.Container>
      <header>
        <S.Title>Conversor de moedas</S.Title>
        <S.Wrapper>
          <S.MoneyWrapper data-symbol={currenciesSymbols['BRL']}>
            <S.InputMoney type="number" value={5640} />
          </S.MoneyWrapper>
          <S.ImgConverter src="src/assets/converter.svg" alt="Conversor de moedas" />
          <S.MoneyWrapper data-symbol={currenciesSymbols['USD']}>
            <S.InputMoney type="number" value={1000} readOnly />
          </S.MoneyWrapper>
        </S.Wrapper>
      </header>
    </S.Container>
  )
}

export default Home;