import styled from 'styled-components';

const Button = ({ onClick, children, rgb }) => {
	const StyledButton = styled.button`
		border: solid 1px rgba(${rgb}, 0.5);
		border-radius: 5px;
		padding: 10px 20px;
		background-color: rgb(${rgb}, 0.4);
		color: white;
		&:hover {
			background-color: rgba(${rgb}, 0.8);
			cursor: pointer;
		}
	`;

	return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
