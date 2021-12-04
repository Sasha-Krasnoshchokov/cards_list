import { ArticlePage } from '../ArticlePage/ArticlePage';
import { Homepage } from '../Hamepage/Homepage';
import './Main.scss';

export const Main = () => {

  return (
    <div className="main">
      <Homepage />
      <ArticlePage />
    </div>
  );
};
