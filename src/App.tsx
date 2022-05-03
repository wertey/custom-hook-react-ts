import { useInput } from "./hooks/useInput";
import {useTabs} from "./hooks/useTabs";
import {useHeadTitle} from "./hooks/useHeadTitle";

const tabContent = [
    {
        id: 1,
        title: 'Раздел 1',
        content: 'Здесь передается контент для раздела 1'
    },
    {
        id: 2,
        title: 'Раздел 2',
        content: 'Здесь передается контент для раздела 2'
    },
]

function App(): JSX.Element {
  const maxLen = (value: string): boolean => {
      return value.length <= 10;
  }
  const checkAt = (value: string) => !value.includes('@', 1);
  const headTitle = useHeadTitle('Загрузка...');

  const name = useInput('wertey', maxLen);
  const email = useInput('@', checkAt);
  const { currentItem, changeTab } = useTabs(0, tabContent);
  return (
    <div className={'App'}>
        <h1>Customs hooks</h1>
        {/*// or {...value} {...onChange}*/}
        <input type="text" placeholder={`Name`} value={name.value} onChange={name.onChange}/>
        <input type="text" placeholder={`Email`} value={email.value} onChange={email.onChange}/>


        <div>
            <h2>UseTabs</h2>
            <div>
                {tabContent.map((tab, index) => (
                    <button
                        key={tab.id}
                        onClick={() => changeTab(index)}
                    >{ tab.title }</button>
                ))}
                currentTab={currentItem.content}
            </div>
        </div>

        <div>
            <h2>UseHeadTitle</h2>
        </div>
    </div>
  );
}

export default App;