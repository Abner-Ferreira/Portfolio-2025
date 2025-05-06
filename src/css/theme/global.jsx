import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body{
    background-color: ${({ theme }) => theme.background};
    max-width: 100vw;
    overflow-x: hidden;
  }
  html{
    scroll-behavior: smooth;
    max-width: 100vw;
  }
  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.swiperColor};
  }
  .ReactFlagsSelect-module_selectOptions__3LNBJ{
    background: transparent;
  }
  .ReactFlagsSelect-module_selectOption__3pcgW{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  .ReactFlagsSelect-module_selectOption__3pcgW:hover{
    background: ${({ theme }) => theme.mainText};
  }
  .btn-flags{
    border: 0.5px solid ${({ theme }) => theme.mainText};
    color: ${({ theme }) => theme.mainText};
    padding: 0;
    margin: 0;
  }
  .btn-flags::after{
    border-top: 5px solid ${({ theme }) => theme.mainText};
    margin: 0 2px;
  }
  .btn-flags[aria-expanded=true]:after{
    border-bottom: 5px solid ${({ theme }) => theme.mainText};
    margin: 0 2px;
  }
`
