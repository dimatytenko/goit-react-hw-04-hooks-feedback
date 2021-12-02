import s from './Container.module.scss';

function Container({ children }) {
  return <div className={s.Container}>{children}</div>;
}

export default Container;
