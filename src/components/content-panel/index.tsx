import { useRef, useEffect } from 'react';
import './style.scss';

interface IProps {
  contentVisible: boolean;
}

const ContentPanel = ({ contentVisible }: IProps) => {
  const contentRef = useRef<any>();

  useEffect(() => {
    if (!!contentVisible) contentRef.current.scrollIntoView({ behavior: 'smooth' });

    return () => {};
  }, [contentVisible]);

  return (
    <div className={`content-panel ${contentVisible ? 'show' : 'hide'}`} ref={contentRef}>
      <h2>My world today</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Lobortis elementum nibh tellus molestie nunc non blandit. Nisl tincidunt eget nullam non nisi est.
        A lacus vestibulum sed arcu non odio euismod lacinia at. Risus in hendrerit gravida rutrum quisque. Lobortis
        elementum nibh tellus molestie.
      </p>
      <p>
        Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Id semper risus in hendrerit gravida rutrum quisque.
        Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Arcu cursus euismod quis viverra. Viverra
        vitae congue eu consequat ac felis donec et odio. Posuere ac ut consequat semper viverra nam. Nisi scelerisque
        eu ultrices vitae auctor eu. Egestas pretium aenean pharetra magna.
      </p>
    </div>
  );
};

export default ContentPanel;
