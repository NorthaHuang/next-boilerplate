import S from './styled';
import Header from './Header';
import Footer from './Footer';

const PageLayout: React.FC = ({ children }) => (
  <S.Wrapper>
    <Header />
    <S.Main>{children}</S.Main>
    <Footer />
  </S.Wrapper>
);

export default PageLayout;
