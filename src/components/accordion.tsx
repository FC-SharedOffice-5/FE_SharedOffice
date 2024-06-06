import NavDownIcon from '@/assets/icons/nav-down-icon';
import NavUpIcon from '@/assets/icons/nav-up-icon';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ElementType } from 'react';

type AccordionProps = {
  header: ElementType;
  openIcon?: ElementType;
  closeIcon?: ElementType;
  panel: ElementType;
};

const Accordion = ({
  header: Header,
  openIcon: OpenIcon,
  closeIcon: CloseIcon,
  panel: Panel,
}: AccordionProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <DisclosureButton className="flex w-full justify-between py-[16px]">
            <Header open={open} />
            {open ? (
              OpenIcon ? (
                <OpenIcon />
              ) : (
                <NavUpIcon />
              )
            ) : CloseIcon ? (
              <CloseIcon />
            ) : (
              <NavDownIcon />
            )}
          </DisclosureButton>
          <DisclosurePanel className="w-full">
            <Panel />
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Accordion;
