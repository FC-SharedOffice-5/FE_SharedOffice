import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import FreeBoard from './free-board';

const TabSection = ({ selectedOffice }: { selectedOffice: string }) => {
  return (
    <TabGroup className="flex flex-col">
      <TabList className="flex border-b-[1px] border-primary-100">
        {['자유게시판', '오피스 클럽', '소셜링', '이벤트혜택'].map((tab, index) => (
          <Tab
            key={index}
            className="label-medium flex-1 border-primary py-[14px] text-black-40 focus:outline-none data-[selected]:border-b-[2px] data-[selected]:text-black"
          >
            {tab}
          </Tab>
        ))}
      </TabList>
      <TabPanels className="p-4">
        <TabPanel>
          <FreeBoard selectedOffice={selectedOffice} />
        </TabPanel>
        <TabPanel>오피스 클럽 섹션입니다.</TabPanel>
        <TabPanel>소셜링 섹션입니다.</TabPanel>
        <TabPanel>이벤트혜택 섹션입니다.</TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export default TabSection;
