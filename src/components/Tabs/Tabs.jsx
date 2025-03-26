// import { tabs } from '../../App';
import { TabElement } from '../TabElement';

export const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <TabElement activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
