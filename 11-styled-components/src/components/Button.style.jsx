import styled from "styled-components"
import ButtonStyled from "./Button"

export const Button = styled.button`
	background-color: ${(prop) => prop.backgroundColor ? prop.backgroundColor : 'pink'};
	widht: 120px;
	height: ${({ theme }) => theme.size.xxl};

	&:hover {
		background-color: yellow;
	}
`

export const Button2 = styled(ButtonStyled)`
	background-color: ${({ theme }) => theme.colors.secondary};
	widht: 120px;
	height: 60px;
`