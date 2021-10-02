import styled from 'styled-components';

const StyledButton = styled.button`
	border: solid 1px rgba(${(props) => props.rgb}, 0.9);
	border-radius: 5px;
	padding: 10px 20px;
	background-color: rgb(${(props) => props.rgb}, 0.7);
	display: inline;
	color: white;
	&:hover {
		background-color: rgba(${(props) => props.rgb}, 0.9);
		cursor: pointer;
	}
`;

const Button = ({ className, onClick, children, rgb }) => {
	return (
		<StyledButton onClick={onClick} rgb={rgb} className={className}>
			{children}
		</StyledButton>
	);
};

export default Button;
