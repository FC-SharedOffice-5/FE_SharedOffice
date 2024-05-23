import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ElementType } from 'react';

type TProps = {
  header: ElementType;
  panel: ElementType;
};

const Accordion = ({ header: Header, panel: Panel }: TProps) => {
  return (
    <Disclosure>
      <DisclosureButton className="w-full py-[16px]">
        <Header />
      </DisclosureButton>
      <DisclosurePanel className="w-full pl-6">
        <Panel />
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Accordion;
