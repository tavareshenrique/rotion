import { EditorContent, useEditor } from '@tiptap/react';

import StarterKit from '@tiptap/starter-kit';
import Document from '@tiptap/extension-document';
import Highlight from '@tiptap/extension-highlight';
import Typography from '@tiptap/extension-typography';
import Placeholder from '@tiptap/extension-placeholder';

export type TOnContentUpdatedParams = {
  title: string;
  content: string;
};

interface IEditorProps {
  content: string;
  onContentUpdated: (params: TOnContentUpdatedParams) => void;
}

export function Editor({ content, onContentUpdated }: IEditorProps) {
  const editor = useEditor({
    extensions: [
      Document.extend({
        content: 'heading block*',
      }),
      StarterKit.configure({
        document: false,
      }),
      Highlight,
      Typography,
      Placeholder.configure({
        placeholder: 'Untitled',
        emptyEditorClass:
          'before:content-[attr(data-placeholder)] before:text-gray-500 before:h-0 before:float-left before:pointer-events-none',
      }),
    ],
    onUpdate: ({ editor }) => {
      const contentRegex = /(<h1>(?<tittle>.+)<\/h1>(?<content>.+)?)/;
      const parsedContent = editor.getHTML().match(contentRegex)?.groups;

      const title = parsedContent?.tittle ?? 'Untitle';
      const content = parsedContent?.content ?? '';

      onContentUpdated({
        title,
        content,
      });
    },
    content,
    autofocus: 'end',
    editorProps: {
      attributes: {
        class: 'focus:outline-none prose prose-invert prose-headings:mt-0',
      },
    },
  });

  return <EditorContent className="w-[65ch]" editor={editor} />;
}
