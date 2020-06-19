import styled from 'styled-components';
import LogoIcon from '../LogoIcon';

export const StyledLogoIcon = styled(LogoIcon)`
  width: 3.5rem;
  height: 3.5rem;

  & .logo-left {
    animation: logo-left 2.3s infinite ease;
  }

  & .logo-bottom-left {
    animation: logo-bottom 2.3s infinite ease;
  }

  & .logo-bottom-right {
    animation: logo-bottom 2.3s infinite ease;
  }

  & .logo-right {
    animation: logo-right 2.3s infinite ease;
  }

  @keyframes logo-left {
    0% {
      transform: translateY(0);
    }

    15% {
      transform: translateY(-5px);
    }

    30% {
      transform: translateY(0);
    }

    45% {
      transform: translateY(-3px);
    }

    60% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(0);
    }
  }

  @keyframes logo-bottom {
    0% {
      transform: translateY(0);
    }

    10% {
      transform: translateY(0);
    }

    25% {
      transform: translateY(-5px);
    }

    40% {
      transform: translateY(0);
    }

    55% {
      transform: translateY(-3px);
    }

    70% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(0);
    }
  }

  @keyframes logo-right {
    0% {
      transform: translateY(0);
    }

    20% {
      transform: translateY(0);
    }

    35% {
      transform: translateY(-5px);
    }

    50% {
      transform: translateY(0);
    }

    65% {
      transform: translateY(-3px);
    }

    80% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(0);
    }
  }
`;
