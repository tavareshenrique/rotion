import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { Editor, ToC } from '../components';

import { TOnContentUpdatedParams } from '../components/Editor';
import { IDocument } from '~/src/shared/types/ipc';

export function Document() {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();

  const { data, isFetching } = useQuery(['document', id], async () => {
    const response = await window.api.fetchDocument({ id: id! });

    return response.data;
  });

  const { mutateAsync: saveDocument } = useMutation(
    async ({ title, content }: TOnContentUpdatedParams) => {
      await window.api.saveDocument({
        id: id!,
        title,
        content,
      });
    },
    {
      onSuccess: (_, { title }) => {
        queryClient.setQueryData<IDocument[]>(['documents'], (document) => {
          return document?.map((doc) => {
            if (doc.id === id) {
              return {
                ...doc,
                title,
              };
            }

            return doc;
          });
        });
      },
    },
  );

  const inititalContent = useMemo(() => {
    if (data) {
      return `<h1>${data.title}</h1>${data.content ?? '<p></p>'}`;
    }

    return '';
  }, [data]);

  function handleEditorContentUpdated({
    title,
    content,
  }: TOnContentUpdatedParams) {
    saveDocument({ title, content });
  }

  return (
    <main className="flex flex-1 gap-8 px-10 py-12">
      <aside className="sticky top-0 hidden lg:block">
        <span className="text-xs font-semibold text-rotion-300">
          TABLE OF CONTENTS
        </span>

        <ToC.Root>
          <ToC.Link>Back-end</ToC.Link>
          <ToC.Section>
            <ToC.Link>Banco de dados</ToC.Link>
            <ToC.Link>Autenticação</ToC.Link>
          </ToC.Section>
        </ToC.Root>
      </aside>

      <section className="flex flex-col items-center flex-1">
        {!isFetching && data && (
          <Editor
            content={inititalContent}
            onContentUpdated={handleEditorContentUpdated}
          />
        )}
      </section>
    </main>
  );
}
