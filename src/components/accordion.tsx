'use client';

import NavDownIcon from '@/assets/icons/nav-down-icon';
import NavUpIcon from '@/assets/icons/nav-up-icon';
import { cn } from '@/utils/cn';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ElementType } from 'react';

type AccordionProps = {
  header: ElementType;
  defaultOpen?: boolean;
  openIcon?: ElementType;
  closeIcon?: ElementType;
  panel: ElementType;
  buttonClassName?: string;
};

const Accordion = ({
  header: Header,
  defaultOpen = false,
  openIcon: OpenIcon,
  closeIcon: CloseIcon,
  panel: Panel,
  buttonClassName,
}: AccordionProps) => {
  return (
    <Disclosure defaultOpen={defaultOpen}>
      {({ open }) => (
        <>
          <DisclosureButton
            className={cn('flex w-full justify-between py-[16px]', buttonClassName)}
          >
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
