import styled, { css } from "styled-components"

const Button = styled.div`
  background-color: ${({bgColor}) => bgColor ? `var(--theme-primary)` : `transparent`  };
  cursor: pointer;
  height: ${({height}) => height ? height: `100%`};
  width: ${({width})  => width ? width: `11%`};
  border-radius: 50px;
  display: grid;
  place-items: center;
  color: ${({bgColor}) => bgColor ? `white` : `var(--text-gray)` };
  font-weight: 600;
  max-height: 80px;
  ${({bgColor}) => !bgColor ? css`
    border: 2px solid var(--text-gray);
  `
  : null
  }
`

const ButtonRound = ({children, bgColor, width, height, callBackClick}) => {

  const handleClick = (e) => {
    if(!callBackClick) return
    callBackClick()
  }

  return (
    <Button bgColor={bgColor} width={width} height={height} onClick={handleClick} > {children} </Button>
  )
}

export default ButtonRound