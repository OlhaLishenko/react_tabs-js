import cn from 'classnames';
import { tabs } from '../../App';

export const TabElement = ({ activeTab, setActiveTab }) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          className={cn({
            'is-active': activeTab === tab,
          })}
          data-cy="Tab"
          key={tab.id}
        >
          <a href="#tab-1" data-cy="TabLink" onClick={() => setActiveTab(tab)}>
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
