import Header from './Header';
import Footer from './Footer';

import StyledWrapper, { StyledMain } from './styled';

const PageLayout: React.FC = ({ children }) => (
  <StyledWrapper>
    <Header />

    <StyledMain>{children}</StyledMain>

    <Footer />
  </StyledWrapper>
);

export default PageLayout;
