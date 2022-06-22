import './style.scss';

interface IButton {
    displayName: string;
    primary?: boolean;
    onClick: () => void;
}

const Button = ({ displayName, primary = false, onClick }: IButton) => {
  return <button type="button" className={`button ${primary ? 'primary' : ''}`} onClick={onClick}>{displayName}</button>;
};

export default Button;