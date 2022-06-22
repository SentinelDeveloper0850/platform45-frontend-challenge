import './style.scss';
import arrow from '../../assets/images/arrow.svg';
import face from '../../assets/images/face.svg';

interface IProps {
  showContent: boolean;
  toggleShowContent: () => void;
}

const LeftPanel = ({ showContent, toggleShowContent }: IProps) => (
  <div className='left-panel'>
    <img className='face' src={face} alt='face' />
    <h1>Front-end challenge!</h1>
    <p>This is the design that you will have to code up to impress us.</p>
    <div className={`arrow-button ${showContent ? 'left' : 'right'}`} onClick={toggleShowContent}>
      <img src={arrow} alt='arrow' width={30} height={30} />
    </div>
  </div>
);

export default LeftPanel;
