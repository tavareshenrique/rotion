import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import clsx from 'clsx';

import * as Collapsible from '@radix-ui/react-collapsible';
import { Code, CaretDoubleRight, TrashSimple } from 'phosphor-react';

import * as Breadcrumbs from './Breadcrumbs';

import { IDocument } from '@shared/types/ipc';

interface IHeaderProps {
  isSidebarOpen: boolean;
}

export function Header({ isSidebarOpen }: IHeaderProps) {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const isMacOS = process.platform === 'darwin';

  const { mutateAsync: deleteDocument, isLoading: isDeletingDocument } =
    useMutation(
      async () => {
        await window.api.deleteDocument({ id: id! });
      },
      {
        onSuccess: () => {
          queryClient.setQueryData<IDocument[]>(['documents'], (documents) => {
            return documents?.filter((document) => document.id !== id);
          });

          navigate('/');
        },
      },
    );

  return (
    <div
      id="header"
      className={clsx(
        'border-b h-14 border-rotion-600 py-[1.125rem] px-6 flex items-center gap-4 leading-tight transition-all duration-250 region-drag',
        {
          'pl-24': !isSidebarOpen && isMacOS,
          'w-screen ': !isSidebarOpen,
          'w-[calc(100vw-240px)] ': isSidebarOpen,
        },
      )}
    >
      <Collapsible.Trigger
        className={clsx(
          'h-5 w-5 text-rotion-200 hover:text-rotion-50 region-no-drag',
          {
            hidden: isSidebarOpen,
            block: !isSidebarOpen,
          },
        )}
      >
        <CaretDoubleRight className="w-4 h-4" />
      </Collapsible.Trigger>

      {id && (
        <>
          <Breadcrumbs.Root>
            <Breadcrumbs.Item>
              <Code weight="bold" className="w-4 h-4 text-pink-500" />
              Estrutura técnica
            </Breadcrumbs.Item>
            <Breadcrumbs.Separator />
            <Breadcrumbs.HiddenItems />
            <Breadcrumbs.Separator />
            <Breadcrumbs.Item>Back-end</Breadcrumbs.Item>
            <Breadcrumbs.Separator />
            <Breadcrumbs.Item isActive>Untitled</Breadcrumbs.Item>
          </Breadcrumbs.Root>

          <div className="inline-flex region-no-drag">
            <button
              disabled={isDeletingDocument}
              onClick={() => deleteDocument()}
              className="inline-flex items-center gap-1 text-sm text-rotion-100 hover:text-rotion-50 disabled:opacity-60"
            >
              <TrashSimple className="w-4 h-4" />
              Apagar
            </button>
          </div>
        </>
      )}
    </div>
  );
}
